
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { submitToAirtable } from '../lib/airtable';

const STORAGE_KEYS = {
    VISITOR_ID: 'tf_visitor_id',
    SESSION_ID: 'tf_session_id',
    LAST_VISIT: 'tf_last_visit'
};

export const useTrafficAnalysis = () => {
    const location = useLocation();

    useEffect(() => {
        // Initialize IDs
        let visitorId = localStorage.getItem(STORAGE_KEYS.VISITOR_ID);
        let isRepeatVisitor = !!visitorId;

        if (!visitorId) {
            visitorId = uuidv4();
            localStorage.setItem(STORAGE_KEYS.VISITOR_ID, visitorId);
        }

        // Session management (new session if inactive for 30 mins)
        let sessionId = sessionStorage.getItem(STORAGE_KEYS.SESSION_ID);
        const lastVisit = localStorage.getItem(STORAGE_KEYS.LAST_VISIT);
        const now = Date.now();

        if (!sessionId || (lastVisit && now - parseInt(lastVisit) > 30 * 60 * 1000)) {
            sessionId = uuidv4();
            sessionStorage.setItem(STORAGE_KEYS.SESSION_ID, sessionId);
        }
        localStorage.setItem(STORAGE_KEYS.LAST_VISIT, now.toString());

        // Device Type Detection
        const getDeviceType = () => {
            const ua = navigator.userAgent;
            if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return "Tablet";
            if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) return "Mobile";
            return "Desktop";
        };

        const logTraffic = async () => {
            let ipAddress = 'Unknown';
            try {
                const res = await fetch('https://api.ipify.org?format=json');
                const data = await res.json();
                ipAddress = data.ip;
            } catch (e) {
                console.debug('Failed to fetch IP', e);
            }

            const trafficData = {
                "Visitor ID": visitorId,
                "Page URL": window.location.href,
                "Page Path": location.pathname,
                "Page Title": document.title,
                "Referrer": document.referrer || "Direct",
                "IP Address": ipAddress,
                "Timestamp": new Date().toISOString(),
                "Session ID": sessionId,
                "Is Repeat Visitor": isRepeatVisitor ? "Yes" : "No",
                "User Agent": navigator.userAgent,
                "Screen": `${window.screen.width}x${window.screen.height}`,
                "Device Type": getDeviceType()
            };

            // Fire and Forget submission to avoid blocking UI
            submitToAirtable('Traffic Analysis', trafficData).catch(err => {
                // Silently fail for analytics to not disturb user exp
                console.debug("Traffic analytics error", err);
            });
        };

        logTraffic();
    }, [location.pathname]); // Run on every route change
};
