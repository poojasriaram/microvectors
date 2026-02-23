

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { submitToGoogleScript } from './_lib/google-sheets';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { table, fields } = req.body;

    if (!table || !fields) {
        return res.status(400).json({ error: 'Missing table or fields' });
    }

    try {
        await submitToGoogleScript({
            table,
            fields: {
                ...fields,
                submitted_at: new Date().toISOString()
            }
        });

        return res.status(200).json({ success: true });

    } catch (error: any) {
        console.error('Google Script Submission Error:', error);
        return res.status(500).json({ error: 'Failed to submit to Google Sheets via Script', details: error.message });
    }
}


