/**
 * submitToSheet — Universal form submission helper for MicroVectors.
 *
 * Strategy:
 *   1. Always tries the Google Apps Script URL directly (works in dev + prod)
 *   2. Falls back to /api/submit for Vercel server-side handling if needed
 *
 * Usage:
 *   await submitToSheet('Inbound Leads', { "Email": "...", "Name": "..." });
 */
export const submitToSheet = async (table: string, fields: Record<string, any>) => {
    console.log(`[Sheets] Submitting to "${table}"`, fields);

    const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

    // ── Primary: Direct Google Apps Script (works in dev & prod) ────────────
    if (GOOGLE_SCRIPT_URL) {
        try {
            // We use no-cors because Apps Script doesn't return CORS headers,
            // but the data IS written to the sheet. The response is opaque.
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify({ table, fields })
            });
            console.log(`[Sheets] ✅ Sent to Apps Script: "${table}"`);
            return { success: true };
        } catch (scriptError: any) {
            console.warn('[Sheets] Apps Script unreachable, trying API fallback...', scriptError);
        }
    } else {
        console.warn('[Sheets] VITE_GOOGLE_SCRIPT_URL is not set in .env');
    }

    // ── Fallback: Vercel /api/submit (production server-side) ───────────────
    try {
        const apiUrl = import.meta.env.PROD ? '/api/submit' : 'http://localhost:3000/api/submit';
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ table, fields })
        });
        if (response.ok) {
            console.log(`[Sheets] ✅ API submission successful.`);
            return await response.json();
        }
        throw new Error(`API returned ${response.status}`);
    } catch (apiError: any) {
        console.error('[Sheets] ❌ All submission methods failed:', apiError);
        throw new Error('Failed to send data. Please check your connection and try again.');
    }
};
