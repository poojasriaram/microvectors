
import type { VercelRequest, VercelResponse } from '@vercel/node';

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY || process.env.VITE_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID || process.env.VITE_AIRTABLE_BASE_ID;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { table, fields } = req.body;

    if (!table || !fields) {
        return res.status(400).json({ error: 'Missing table or fields' });
    }

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
        return res.status(500).json({ error: 'Airtable configuration missing on server' });
    }

    try {
        const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(table)}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fields, typecast: true })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error(`[Airtable Error] ${response.status}:`, data);
            return res.status(response.status).json({ error: data.error?.message || 'Airtable Error' });
        }

        return res.status(200).json({ success: true, data });

    } catch (error: any) {
        console.error('Submission Error:', error);
        return res.status(500).json({ error: 'Failed to submit to Airtable', details: error.message });
    }
}
