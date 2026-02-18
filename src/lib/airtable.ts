
export const submitToAirtable = async (table: string, fields: Record<string, any>) => {
    const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
    const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;

    // DEBUG LOG: Remove in production
    console.log(`[Airtable] Submitting to table "${table}"`, fields);

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
        console.error("[Airtable] Configuration missing. Check VITE_AIRTABLE_API_KEY and VITE_AIRTABLE_BASE_ID.");
        throw new Error("Configuration missing");
    }

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
            console.error(`[Airtable] Submission failed: ${response.status}`, result);
            throw new Error(result.error || `Airtable Error: ${response.status}`);
        }

        console.log(`[Airtable] Success:`, result);
        return result;

    } catch (error) {
        console.error("[Airtable] Network/Script Error:", error);
        throw error;
    }
};
