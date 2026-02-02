
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
        const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(table)}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fields })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error(`[Airtable] Submission failed: ${response.status} ${response.statusText}`, errorData);
            throw new Error(errorData.error?.message || `Airtable Error: ${response.status}`);
        }

        const result = await response.json();
        console.log(`[Airtable] Success:`, result);
        return result;

    } catch (error) {
        console.error("[Airtable] Network/Script Error:", error);
        throw error;
    }
};
