# Airtable Setup Instructions

To connect the "Book a Demo" form to your Airtable, follow these steps:

## 1. Create a `.env` file
Duplicate the `.env.example` file in the root of your project and rename it to `.env`.
Inside, fill in your credentials:

```bash
VITE_AIRTABLE_API_KEY=your_personal_access_token_here
VITE_AIRTABLE_BASE_ID=your_base_id_here
VITE_AIRTABLE_TABLE_NAME=Inbound Leads
```

## 2. Get your Airtable Credentials
1.  **API Key (Personal Access Token):** Go to [Airtable Developer Hub](https://airtable.com/create/tokens) and create a new token with scope `data.records:write` and access to your Base.
2.  **Base ID:** Go to your Airtable Base, look at the URL. It starts with `app...`. Copy that ID (e.g., `app123456789`).
3.  **Table Name:** Ensure your table is named "Inbound Leads" (or update the `.env` variable).

## 3. Configure your Airtable Columns
Create a table with the exact following text column names (Case Sensitive):

*   `First Name` (Single line text)
*   `Last Name` (Single line text)
*   `Email` (Email)
*   `Phone` (Phone number or Single line text)
*   `Company` (Single line text)
*   `Annual Revenue` (Single select or text)
*   `Interest` (Single select or text)
*   `Message` (Long text)
*   `Status` (Single select: 'New', 'Contacted', etc. - Default to 'New')
*   `Source` (Single select or text)

Once these are set up, the form will automatically send new submissions directly to your Airtable.
