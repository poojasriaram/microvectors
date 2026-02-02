import { v4 as uuidv4 } from 'uuid';
import { submitToAirtable } from './airtable';

const AIRTABLE_TABLE_NAME = 'Events'; // As per user request

// Analytics Types
export type EventCategory = 'Awareness' | 'Engagement' | 'CTA' | 'Lead' | 'Intent' | 'Exit' | 'Trust';

export interface AnalyticsEvent {
    eventName: string;
    category: EventCategory;
    trigger?: string;
    page?: string;
    section?: string;
    element?: string;
    metadata?: Record<string, any>;
}

// Session & User Management
const getStorageItem = (key: string, storage: Storage) => {
    try {
        return storage.getItem(key);
    } catch (e) {
        return null;
    }
};

const setStorageItem = (key: string, value: string, storage: Storage) => {
    try {
        storage.setItem(key, value);
    } catch (e) {
        // Ignore storage errors
    }
};

export const getSessionId = () => {
    let sessionId = getStorageItem('trustflow_session_id', sessionStorage);
    if (!sessionId) {
        sessionId = uuidv4();
        setStorageItem('trustflow_session_id', sessionId, sessionStorage);
    }
    return sessionId;
};

export const getUserId = () => {
    let userId = getStorageItem('trustflow_user_id', localStorage);
    if (!userId) {
        userId = uuidv4();
        setStorageItem('trustflow_user_id', userId, localStorage);
    }
    return userId;
};

// Main Tracking Function
export const trackEvent = async (event: AnalyticsEvent) => {
    const {
        eventName,
        page = window.location.pathname,
        section = '',
        element = '',
        metadata = {}
    } = event;

    // Construct Airtable Fields
    const fields = {
        "Event Name": eventName,
        "Page": page,
        "Section": section,
        "Element": element,
        "User ID": getUserId(),
        "Session ID": getSessionId(),
        "Referrer": document.referrer || '',
        "Device": /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop',
        "Timestamp": new Date().toISOString(),
        "Metadata": JSON.stringify(metadata)
    };

    try {
        await submitToAirtable(AIRTABLE_TABLE_NAME, fields);
    } catch (error) {
        console.error('Analytics: Failed to send event', error);
    }
};
