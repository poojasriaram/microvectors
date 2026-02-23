

export const submitToSheet = async (table: string, fields: Record<string, any>) => {
    // DEBUG LOG: Remove in production
    console.log(`[Google Sheets] Submitting to sheet "${table}"`, fields);

    try {
        const response = await fetch(`/api/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ table, fields })
        });

        const result = await response.json();

        if (!response.ok) {
            console.error(`[Google Sheets] Submission failed: ${response.status}`, result);
            throw new Error(result.error || `Google Sheets Error: ${response.status}`);
        }

        console.log(`[Google Sheets] Success:`, result);
        return result;

    } catch (error) {
        console.error("[Google Sheets] Network/Script Error:", error);
        throw error;
    }
};

