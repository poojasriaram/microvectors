
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

export async function submitToGoogleScript(payload: any) {
    if (!GOOGLE_SCRIPT_URL) {
        throw new Error('GOOGLE_SCRIPT_URL configuration missing');
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.status === 'error') {
        throw new Error(result.message || 'Error from Google Script');
    }

    return result;
}
