

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { submitToGoogleScript } from './_lib/google-sheets';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { events } = req.body;

    if (!events || !Array.isArray(events)) {
        return res.status(400).json({ error: 'Invalid events payload' });
    }

    try {
        await submitToGoogleScript({
            table: 'User Behavior',
            events: events
        });

        return res.status(200).json({ success: true, count: events.length });

    } catch (error: any) {
        console.error('Google Script Analytics Error:', error);
        return res.status(500).json({ error: 'Failed to ingest events to Google Sheets via Script', details: error.message });
    }
}


