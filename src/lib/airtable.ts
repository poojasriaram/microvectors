
export const submitToAirtable = async (table: string, fields: Record<string, any>) => {
    const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
    const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
        console.error("Airtable configuration missing");
        throw new Error("Configuration missing");
    }

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
        console.error("Airtable submission failed:", response.status, errorData);
        throw new Error(errorData.error?.message || "Submission failed");
    }

    return await response.json();
};
