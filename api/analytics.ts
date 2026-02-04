
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Note: Use server-only environment variables (without VITE_ prefix) locally and in Vercel settings.
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY || process.env.VITE_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID || process.env.VITE_AIRTABLE_BASE_ID;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { events } = req.body;

    if (!events || !Array.isArray(events)) {
        return res.status(400).json({ error: 'Invalid events payload' });
    }

    try {
        // In a real implementation, we would:
        // 1. Validate the session and user (upsert into Users/Sessions tables)
        // 2. Prepare records for Airtable
        // 3. Post to Airtable

        // For brevity and compliance with Airtable's 10-records-per-call limit, 
        // we'll prepare the events for the 'Events' table.

        const records = events.map((event: any) => ({
            fields: {
                "event_name": event.event_name,
                "user_id": event.user_id, // Pass as string (typecast handles linking)
                "session_id": event.session_id, // Pass as string (typecast handles linking)
                "page_url": event.page_url,
                "timestamp": event.timestamp,
                "metadata": JSON.stringify(event.metadata),
                "device": event.device,
                "browser": event.browser
            }
        }));

        // Airtable allows max 10 records per request
        const chunks = [];
        for (let i = 0; i < records.length; i += 10) {
            chunks.push(records.slice(i, i + 10));
        }

        const responses = await Promise.all(chunks.map(chunk =>
            fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Events`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    records: chunk,
                    typecast: true // This allows Airtable to automatically handle linked records
                })
            })
        ));

        const results = await Promise.all(responses.map(r => r.json()));

        return res.status(200).json({ success: true, results });

    } catch (error: any) {
        console.error('Airtable Ingestion Error:', error);
        return res.status(500).json({ error: 'Failed to ingest events', details: error.message });
    }
}
