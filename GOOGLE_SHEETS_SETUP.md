
# Google Sheets Setup (The Simple Way)

Follow these steps to connect your website forms and analytics to Google Sheets without needing complex Google Cloud keys.

## 1. Prepare your Spreadsheet
1.  Open your [Google Sheet](https://docs.google.com/spreadsheets/d/1gs2UHZ8d5vtYzPm7N7U_36GgU9bJjcfZY_HmHDsJ3NU/edit).
2.  Create the following tab names at the bottom:
    *   `Inbound Leads`
    *   `Talk to Expert`
    *   `Partners`
    *   `Book Demo`
    *   `Job Applications`
    *   `User Behavior`
    *   `Traffic Analysis`

## 2. Add the Script
1.  In your Google Sheet, go to **Extensions > Apps Script**.
2.  Delete any code there and paste the "Universal Bridge" code provided in the chat.
3.  Click the Disk icon to **Save**.

## 3. Deploy as a Web App
1.  Click the blue **Deploy** button > **New deployment**.
2.  Select Type: **Web App**.
3.  Execute as: **Me** (your email).
4.  Who has access: **Anyone**.
5.  Click **Deploy**.
6.  **Authorize Access**:
    *   Click "Review Permissions".
    *   Click your email.
    *   Click **Advanced** > **Go to [Project Name] (unsafe)**.
    *   Click **Allow**.
7.  Copy the **Web App URL** (ends in `/exec`).

## 4. Configure Environment Variables
Add this one line to your `.env` file and to **Vercel Settings > Environment Variables**:

```bash
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/XXXXX_YOUR_ID_XXXXX/exec
```

Redeploy your site, and everything will now save directly to your sheets!
