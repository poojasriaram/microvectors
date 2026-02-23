/**
 * Trustgrid.ai – Universal Google Sheets Bridge (v3)
 * ─────────────────────────────────────────────────────────────────────────────
 * Handles ALL data submissions from the Trustgrid.ai website:
 *   • User Behavior analytics (93-field events)
 *   • Lead forms (Inbound Leads, Book Demo, Talk to Expert, etc.)
 *   • Traffic Analysis
 *
 * HOW TO DEPLOY:
 *  1. Paste this entire file into Google Apps Script (Extensions → Apps Script)
 *  2. Click Save (disk icon)
 *  3. Click Deploy → New Deployment
 *  4. Type: Web App | Execute as: Me | Who has access: Anyone
 *  5. Click Deploy → Authorize → Allow
 *  6. Copy the /exec URL → paste into Vercel env vars as VITE_GOOGLE_SCRIPT_URL and GOOGLE_SCRIPT_URL
 *  7. Redeploy your Vercel project
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ── Configuration ─────────────────────────────────────────────────────────────
const SPREADSHEET_ID = '1gs2UHZ8d5vtYzPm7N7U_36GgU9bJjcfZY_HmHDsJ3NU';

// Column order for User Behavior sheet (93 fields, strictly ordered)
const USER_BEHAVIOR_COLUMNS = [
    'ip_address', 'geo_country', 'geo_state', 'geo_city', 'geo_latitude', 'geo_longitude',
    'user_id', 'user_name', 'user_email', 'user_type', 'returning_user',
    'first_visit_timestamp', 'last_visit_timestamp', 'total_sessions', 'total_time_spent', 'avg_session_duration',
    'session_id', 'session_number', 'session_start_time', 'session_end_time',
    'total_session_duration', 'total_pages_visited', 'bounce',
    'traffic_source', 'referrer_url', 'campaign_name', 'utm_source', 'utm_medium',
    'utm_campaign', 'utm_term', 'utm_content',
    'page', 'page_url', 'previous_page', 'next_page', 'entry_page', 'exit_page',
    'page_title', 'time_on_page', 'scroll_percentage', 'max_scroll_depth',
    'interaction_count', 'inactivity_time',
    'event_id', 'event_name', 'event_category', 'event_action', 'event_label', 'section',
    'element_type', 'element_id', 'element_class', 'element_text',
    'click_position_x', 'click_position_y',
    'form_id', 'form_field_name', 'form_completion_status', 'form_abandonment',
    'goal_name', 'goal_completed', 'conversion_id', 'conversion_value', 'funnel_step',
    'device_type', 'device_brand', 'device_model', 'operating_system',
    'browser', 'browser_version', 'screen_width', 'screen_height',
    'viewport_width', 'viewport_height', 'language', 'timezone',
    'network_type', 'connection_speed', 'page_load_time', 'dom_load_time',
    'first_contentful_paint', 'largest_contentful_paint', 'time_to_interactive',
    'js_error_message', 'api_error_message', 'http_status_code',
    'cpu_cores', 'memory_size',
    'tab_visibility_status', 'back_button_used', 'copy_event', 'paste_event', 'rage_click_detected',
    'timestamp'
];

// ── Main Entry Point ──────────────────────────────────────────────────────────
function doPost(e) {
    try {
        // Parse body — handles both JSON string and form-encoded data
        let body = {};
        if (e.postData && e.postData.contents) {
            body = JSON.parse(e.postData.contents);
        }

        const tableName = body.table || 'Inbound Leads';
        const ss = SpreadsheetApp.openById(SPREADSHEET_ID);

        // ── Route to correct handler ────────────────────────────────────────────
        if (tableName === 'User Behavior') {
            handleUserBehavior(ss, body);
        } else {
            handleLeadForm(ss, tableName, body);
        }

        return buildResponse({ status: 'success', table: tableName });

    } catch (err) {
        console.error('doPost error:', err);
        return buildResponse({ status: 'error', message: err.toString() });
    }
}

// Also handle GET (for testing the script is live)
function doGet(e) {
    return buildResponse({ status: 'ok', message: 'Trustgrid Analytics Bridge is running.' });
}

// ── User Behavior Handler ─────────────────────────────────────────────────────
function handleUserBehavior(ss, body) {
    const sheet = getOrCreateSheet(ss, 'User Behavior', USER_BEHAVIOR_COLUMNS);

    // Support both single event (fields) and batch events (events array)
    let events = [];
    if (body.events && Array.isArray(body.events)) {
        events = body.events;
    } else if (body.fields) {
        events = [body.fields];
    } else {
        // Fallback: treat the whole body (minus 'table') as one event
        const { table, ...rest } = body;
        events = [rest];
    }

    events.forEach(function (event) {
        const row = USER_BEHAVIOR_COLUMNS.map(function (col) {
            if (col === 'timestamp') return new Date().toISOString();
            const val = event[col];
            if (val === null || val === undefined) return '';
            if (typeof val === 'boolean') return val.toString();
            return val;
        });
        sheet.appendRow(row);
    });
}

// ── Lead Form Handler ─────────────────────────────────────────────────────────
function handleLeadForm(ss, tableName, body) {
    const sheet = getOrCreateSheet(ss, tableName, null);
    const { table, ...fields } = body;

    // Auto-create headers from data keys if sheet is empty
    if (sheet.getLastRow() === 0) {
        const headers = Object.keys(fields).concat(['Timestamp']);
        sheet.appendRow(headers);
    }

    // Match to existing headers
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const row = headers.map(function (h) {
        if (h === 'Timestamp') return new Date().toISOString();
        return fields[h] !== undefined ? fields[h] : '';
    });

    sheet.appendRow(row);
}

// ── Utilities ─────────────────────────────────────────────────────────────────
function getOrCreateSheet(ss, name, columns) {
    let sheet = ss.getSheetByName(name);
    if (!sheet) {
        sheet = ss.insertSheet(name);
    }

    // Create headers if the sheet is empty and columns are provided
    if (columns && sheet.getLastRow() === 0) {
        sheet.appendRow(columns);
        // Style header row
        const headerRange = sheet.getRange(1, 1, 1, columns.length);
        headerRange.setFontWeight('bold');
        headerRange.setBackground('#1e293b');
        headerRange.setFontColor('#ffffff');
        sheet.setFrozenRows(1);
    }

    return sheet;
}

function buildResponse(data) {
    return ContentService
        .createTextOutput(JSON.stringify(data))
        .setMimeType(ContentService.MimeType.JSON);
}
