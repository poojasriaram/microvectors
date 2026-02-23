
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '../lib/analytics';


export const useTrafficAnalysis = () => {
    const location = useLocation();

    useEffect(() => {
        // Log page view through the main service
        analytics.setPreviousPage(sessionStorage.getItem('tg_last_page') || '');
        analytics.track('page_view', 'navigation', 'view', {
            title: document.title
        });

        // Update session storage for sequence tracking
        const pages = parseInt(sessionStorage.getItem('tg_pages_viewed') || '0') + 1;
        sessionStorage.setItem('tg_pages_viewed', pages.toString());
        sessionStorage.setItem('tg_last_page', location.pathname);

    }, [location.pathname]); // Run on every route change
};
