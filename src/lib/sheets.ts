

/**
 * Submit form data to the backend.
 * 
 * On Vercel (production): Submits via /api/submit which handles
 *   → Google Sheets save
 * 
 * On local dev (fallback): Submits directly to Google Script URL.
 */
export const submitToSheet = async (table: string, fields: Record<string, any>) => {

    console.log(`[Sheets] Submitting to "${table}"`, fields);

    // Try the Vercel API route first (handles sheets)
    try {
        const isLocalDev = !import.meta.env.PROD && window.location.hostname === 'localhost';
        const apiUrl = import.meta.env.PROD
            ? '/api/submit'
            : (import.meta.env.VITE_API_URL || (isLocalDev ? 'http://localhost:3000/api/submit' : '/api/submit'));

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ table, fields })
        });

        if (response.ok) {
            const result = await response.json();
            console.log(`[Sheets] API submission successful.`);
            return result;
        }

        console.warn(`[Sheets] API returned ${response.status}. Falling back to direct script...`);
    } catch (apiError) {
        console.warn('[Sheets] Local API unreachable. Falling back to direct Google Script...', apiError);
    }

    // Fallback: Direct submission to Google Script
    const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

    if (!GOOGLE_SCRIPT_URL) {
        console.error("GOOGLE_SCRIPT_URL is missing in .env");
        throw new Error("Configuration Error: Script URL not found.");
    }

    try {
        await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify({ table, fields })
        });

        console.log(`[Sheets] Direct script fallback sent`);
        return { success: true };

    } catch (error: any) {
        console.error("[Sheets] All submission methods failed:", error);
        throw new Error("Failed to send data. Please check your connection.");
    }
};
