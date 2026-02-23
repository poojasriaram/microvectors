

export const submitToSheet = async (table: string, fields: Record<string, any>) => {
    const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

    console.log(`[Google Sheets] Submitting to sheet "${table}"`, fields);

    if (!GOOGLE_SCRIPT_URL) {
        console.error("GOOGLE_SCRIPT_URL is missing in .env");
        throw new Error("Configuration Error: Script URL not found.");
    }

    try {
        // We use a simple fetch to the Google Script URL directly
        await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Google Script requires no-cors for simple browser POSTs
            headers: {
                'Content-Type': 'text/plain', // Use text/plain to avoid CORS preflight issues
            },
            body: JSON.stringify({ table, fields })
        });

        // Note: With 'no-cors', we can't check response.ok, 
        // but the data will be sent successfully to the script.
        console.log(`[Google Sheets] Data sent to script`);
        return { success: true };

    } catch (error: any) {
        console.error("[Google Sheets] Network Error:", error);
        throw new Error("Failed to send data. Please check your connection.");
    }
};



