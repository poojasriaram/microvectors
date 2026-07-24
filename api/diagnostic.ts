import type { VercelRequest, VercelResponse } from '@vercel/node';
import { submitToGoogleScript } from './_lib/google-sheets';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const {
        offering,
        category,
        page_url,
        timestamp,
        company_name,
        contact_name,
        email,
        phone,
        industry,
        company_size,
        revenue,
        website,
        geography,
        challenges,
        tools,
        expected_outcomes
    } = req.body;

    console.log(`[Diagnostic Submit] Received submission for company: ${company_name || 'unknown'}`);

    try {
        await submitToGoogleScript({
            table: 'Diagnostics',
            fields: {
                timestamp: timestamp || new Date().toISOString(),
                offering: offering || '',
                category: category || '',
                page_url: page_url || '',
                company_name: company_name || '',
                contact_name: contact_name || '',
                email: email || '',
                phone: phone || '',
                industry: industry || '',
                company_size: company_size || '',
                revenue: revenue || '',
                website: website || '',
                geography: geography || '',
                challenges: challenges || '',
                tools: tools || '',
                expected_outcomes: expected_outcomes || ''
            }
        });
        console.log('[Diagnostic Submit] Saved successfully.');

        return res.status(200).json({
            success: true
        });
    } catch (error: any) {
        console.error('Diagnostic Submission Error:', error);
        // Return 200/success anyway to prevent blocking the UI, as we also save to localStorage in the client
        return res.status(200).json({
            success: true,
            warning: 'Failed to write to sheets, but saved locally',
            details: error.message
        });
    }
}
