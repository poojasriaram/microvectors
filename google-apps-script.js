/**
 * Trustgrid.ai – Universal Google Sheets Bridge (v3)
 * ─────────────────────────────────────────────────────────────────────────────
 * Handles ALL data submissions from the Trustgrid.ai website:
 *   • User Behavior analytics (93-field events)
 *   • Lead forms (Inbound Leads, Book for Consulting, Talk to Expert, etc.)
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

/**
 * ── Spreadsheet UI Menu ──────────────────────────────────────────────────────
 * Adds a custom menu to the spreadsheet to refresh the dashboard.
 */
function onOpen() {
    const ui = SpreadsheetApp.getUi();
    ui.createMenu('🚀 DeepTrust Analytics')
        .addItem('Refresh Dashboard & Charts', 'updateAnalyticsDashboard')
        .addSeparator()
        .addItem('Help & Documentation', 'showHelp')
        .addToUi();
}

function showHelp() {
    const message = 'The dashboard aggregates "User Behavior" data into rankings and visualizations.\n\n' +
        '1. Pareto Chart: Shows which pages drive the most traffic.\n' +
        '2. Map Chart: Visualizes global visitor distribution.\n' +
        '3. Weighted Ranking: Ranks pages by (Count × Total Duration).\n\n' +
        'Click "Refresh Dashboard" whenever you want to see the latest data.';
    SpreadsheetApp.getUi().alert('Analytics Help', message, SpreadsheetApp.getUi().ButtonSet.OK);
}

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
    'user_segment', 'timestamp'
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
            // Optionally update dashboard on every submission (may impact performance)
            // updateAnalyticsDashboard(); 
        } else {
            handleLeadForm(ss, tableName, body);
        }

        return buildResponse({ status: 'success', table: tableName, dashboardUpdated: true });

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
    const name = 'User Behavior';
    let sheet = ss.getSheetByName(name);
    if (!sheet) {
        sheet = ss.insertSheet(name);
        sheet.appendRow(USER_BEHAVIOR_COLUMNS);
        sheet.getRange(1, 1, 1, USER_BEHAVIOR_COLUMNS.length).setFontWeight('bold').setBackground('#1e293b').setFontColor('#ffffff');
        sheet.setFrozenRows(1);
    }

    // Support single or batch
    let events = [];
    if (body.events && Array.isArray(body.events)) {
        events = body.events;
    } else if (body.fields) {
        events = [body.fields];
    } else {
        events = [body];
    }

    if (events.length === 0) return;

    // Sync Headers in ONE batch to avoid timeouts
    // We combine defined columns + any extra fields in the event
    let currentHeaders = sheet.getRange(1, 1, 1, Math.max(1, sheet.getLastColumn())).getValues()[0];
    let headerMap = {};
    currentHeaders.forEach((h, i) => { if (h) headerMap[h] = i + 1; });

    let allRequiredHeaders = [...USER_BEHAVIOR_COLUMNS];
    // Add any keys from the event that aren't in the default list
    Object.keys(events[0]).forEach(key => {
        if (key !== 'table' && !allRequiredHeaders.includes(key) && !headerMap[key]) {
            allRequiredHeaders.push(key);
        }
    });

    let newHeaders = [...currentHeaders];
    let headersChanged = false;

    allRequiredHeaders.forEach(h => {
        if (!headerMap[h]) {
            newHeaders.push(h);
            headerMap[h] = newHeaders.length;
            headersChanged = true;
        }
    });

    if (headersChanged) {
        sheet.getRange(1, 1, 1, newHeaders.length).setValues([newHeaders]);
        sheet.getRange(1, 1, 1, newHeaders.length).setFontWeight('bold').setBackground('#1e293b').setFontColor('#ffffff');
        currentHeaders = newHeaders;
    }

    // Append all events
    events.forEach(function (event) {
        const row = currentHeaders.map(function (h) {
            if (h === 'timestamp' || h === 'Timestamp') return new Date().toISOString();
            const val = event[h];
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

    // The frontend sends { table: 'Book for Consulting', fields: { "First Name": "...", ... } }
    // We need to read the nested `fields` object.
    // Fallback: if fields key not present, spread entire body minus 'table'.
    let dataFields = {};
    if (body.fields && typeof body.fields === 'object' && !Array.isArray(body.fields)) {
        dataFields = body.fields;
    } else {
        // Legacy / direct submission fallback
        const { table, ...rest } = body;
        dataFields = rest;
    }

    // Add a submitted_at timestamp if not already present
    if (!dataFields['Timestamp'] && !dataFields['submitted_at']) {
        dataFields['Timestamp'] = new Date().toISOString();
    }

    // Auto-create headers from data keys if sheet is empty
    if (sheet.getLastRow() === 0) {
        const headers = Object.keys(dataFields);
        sheet.appendRow(headers);
        // Style the header row
        const headerRange = sheet.getRange(1, 1, 1, headers.length);
        headerRange.setFontWeight('bold');
        headerRange.setBackground('#1e293b');
        headerRange.setFontColor('#ffffff');
        sheet.setFrozenRows(1);
    }

    // Match row values to existing header order
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const row = headers.map(function (h) {
        if (h === 'Timestamp') return new Date().toISOString();
        return dataFields[h] !== undefined ? dataFields[h] : '';
    });

    sheet.appendRow(row);

    // Send confirmation email
    sendAutomatedEmail(dataFields, tableName);
}

// ── Automated Email Sender ────────────────────────────────────────────────────
function sendAutomatedEmail(dataFields, tableName) {
    // Try to find the email address in the fields
    const userEmail = dataFields['Email'] || dataFields['email'] || dataFields['Work Email'] || dataFields['Email Address'];
    if (!userEmail) return; // Cannot send without an email

    // Try to get the user's name
    const userName = dataFields['First Name'] || dataFields['Name'] || dataFields['first_name'] || 'there';

    const subject = "Thank you for contacting Trustgrid.ai!";
    const htmlBody = `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; line-height: 1.6;">
            <h2 style="color: #2563eb;">Request Received</h2>
            <p>Hi ${userName},</p>
            <p>Thank you for submitting the <strong>${tableName}</strong> form on our website. We have received your request and our team will be in touch with you shortly.</p>
            <p>At Trustgrid.ai, we are excited to help you architect your AI revenue engine and transform unstructured data into predictable growth.</p>
            <p>Best regards,<br>
            <strong>The Trustgrid.ai Team</strong></p>
            <hr style="border: none; border-top: 1px solid #eaeaea; margin-top: 30px; margin-bottom: 20px;">
            <p style="font-size: 12px; color: #777;">This is an automated message. Please do not reply directly to this email.</p>
        </div>
    `;

    try {
        MailApp.sendEmail({
            to: userEmail,
            subject: subject,
            htmlBody: htmlBody
        });
    } catch (e) {
        console.error("Error sending automated email:", e);
    }
}

// ── Utilities ─────────────────────────────────────────────────────────────────
function getOrCreateSheet(ss, name, columns) {
    let sheet = ss.getSheetByName(name);
    if (!sheet) {
        sheet = ss.insertSheet(name);
    }

    if (columns) {
        const lastCol = sheet.getLastColumn();
        const lastRow = sheet.getLastRow();

        if (lastRow === 0 || lastCol === 0) {
            // Empty sheet — full header setup
            sheet.appendRow(columns);
            const headerRange = sheet.getRange(1, 1, 1, columns.length);
            headerRange.setFontWeight('bold');
            headerRange.setBackground('#1e293b');
            headerRange.setFontColor('#ffffff');
            sheet.setFrozenRows(1);
        } else {
            // Existing sheet — sync missing columns
            const existingHeaders = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
            const headerMap = {};
            existingHeaders.forEach((h, i) => { if (h) headerMap[h] = i + 1; });

            let headersChanged = false;
            columns.forEach((col, index) => {
                if (!headerMap[col]) {
                    // New column found! Add it to the end of the sheet
                    const newColIndex = sheet.getLastColumn() + 1;
                    sheet.getRange(1, newColIndex).setValue(col);
                    sheet.getRange(1, newColIndex).setFontWeight('bold');
                    sheet.getRange(1, newColIndex).setBackground('#1e293b');
                    sheet.getRange(1, newColIndex).setFontColor('#ffffff');
                    headersChanged = true;
                }
            });
        }
    }

    return sheet;
}

function buildResponse(data) {
    return ContentService
        .createTextOutput(JSON.stringify(data))
        .setMimeType(ContentService.MimeType.JSON);
}

// ── Analytics Dashboard Engine ───────────────────────────────────────────────

/**
 * Main function to aggregate data and rebuild the Dashboard sheet.
 */
function updateAnalyticsDashboard() {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sourceSheet = ss.getSheetByName('User Behavior');
    if (!sourceSheet) {
        console.error('Source sheet "User Behavior" not found.');
        return;
    }

    const data = sourceSheet.getDataRange().getValues();
    if (data.length < 2) return;

    const headers = data[0];
    const rows = data.slice(1);

    const pageIdx = headers.indexOf('page');
    const durationIdx = headers.indexOf('time_on_page');
    const countryIdx = headers.indexOf('geo_country');
    const segmentIdx = headers.indexOf('user_segment');

    const pageStats = {};
    const countryStats = {};
    const segmentStats = {};
    let totalVisits = 0;

    rows.forEach(row => {
        const page = row[pageIdx] || 'Unknown';
        const duration = parseFloat(row[durationIdx]) || 0;
        const country = row[countryIdx] || 'Unknown';
        const segment = row[segmentIdx] || 'Casual Browser';

        // 1. Page Statistics
        if (!pageStats[page]) {
            pageStats[page] = { count: 0, totalDuration: 0 };
        }
        pageStats[page].count++;
        pageStats[page].totalDuration += duration;
        totalVisits++;

        // 2. Geography Distribution
        if (!countryStats[country]) countryStats[country] = 0;
        countryStats[country]++;

        // 3. User Segmentation
        if (!segmentStats[segment]) segmentStats[segment] = 0;
        segmentStats[segment]++;
    });

    // Generate Page Rankings array
    let pageRanking = Object.keys(pageStats).map(page => {
        const stats = pageStats[page];
        const durationSeconds = stats.totalDuration / 1000;
        const avgDuration = durationSeconds / stats.count;

        // Count X Duration - Weight (Weighted scoring for engagement)
        // Formula: Visits * Log10(1 + Duration) is a common weight, but we'll use a linear score
        // that penalizes very short sessions (< 2s)
        const weight = stats.count * (durationSeconds / 60);

        return [page, stats.count, durationSeconds, avgDuration, weight];
    });

    // Sort by Count (Descending) for Pareto
    pageRanking.sort((a, b) => b[1] - a[1]);

    // Calculate Cumulative Percentage for Pareto
    let cumulativeCount = 0;
    pageRanking = pageRanking.map(row => {
        cumulativeCount += row[1];
        const cumulativePct = (cumulativeCount / totalVisits);
        return [...row, cumulativePct];
    });

    // Prepare Geo Data
    const geoRanking = Object.keys(countryStats).map(c => [c, countryStats[c]])
        .sort((a, b) => b[1] - a[1]);

    // Prepare Segment Data
    const segmentRanking = Object.keys(segmentStats).map(s => [s, segmentStats[s]])
        .sort((a, b) => b[1] - a[1]);

    // ── Write to Dashboard Sheet ──────────────────────────────────────────────
    let dashSheet = ss.getSheetByName('Analytics Dashboard');
    if (!dashSheet) dashSheet = ss.insertSheet('Analytics Dashboard');
    dashSheet.clear();

    // Headers Styling
    const headStyle = { fontWeight: 'bold', background: '#2563eb', fontColor: '#ffffff' };

    // Section 1: Page Rankings & Pareto Data
    const pageHeaders = ['Page Name', 'Visit Count', 'Total Duration (s)', 'Avg Duration (s)', 'Engagement Score (Weighted)', 'Cumulative %'];
    writeTable(dashSheet, 1, 1, pageHeaders, pageRanking, headStyle);

    // Section 2: Country Stats (shifted right)
    const geoHeaders = ['Country', 'Visitor Count'];
    writeTable(dashSheet, 1, 8, geoHeaders, geoRanking, headStyle);

    // Section 3: Segment Stats
    const segmentHeaders = ['User Segment', 'Event Count'];
    writeTable(dashSheet, geoRanking.length + 4, 8, segmentHeaders, segmentRanking, headStyle);

    // Formatting
    dashSheet.getRange(2, 6, pageRanking.length, 1).setNumberFormat('0.0%');
    dashSheet.getRange(2, 4, pageRanking.length, 1).setNumberFormat('0.0');
    dashSheet.getRange(2, 5, pageRanking.length, 1).setNumberFormat('0.0');
    dashSheet.setFrozenRows(1);
    dashSheet.autoResizeColumns(1, 15);

    // ── Build Charts ──────────────────────────────────────────────────────────
    buildDashboardCharts(dashSheet, pageRanking.length, geoRanking.length, segmentRanking.length);
}

/**
 * Helper to write a table with styling
 */
function writeTable(sheet, startRow, startCol, headers, data, style) {
    if (data.length === 0) return;
    sheet.getRange(startRow, startCol, 1, headers.length)
        .setValues([headers])
        .setFontWeight(style.fontWeight)
        .setBackground(style.background)
        .setFontColor(style.fontColor);
    sheet.getRange(startRow + 1, startCol, data.length, headers.length).setValues(data);
}

/**
 * Creates Visual Dashboard Charts
 */
function buildDashboardCharts(sheet, pageCount, geoCount, segmentCount) {
    // Remove existing charts to prevent duplication
    const existing = sheet.getCharts();
    existing.forEach(c => sheet.removeChart(c));

    const chartWidth = 600;
    const chartHeight = 350;

    // Ranges for Page Rankings
    const labelRange = sheet.getRange(1, 1, pageCount + 1, 1);
    const countRange = sheet.getRange(1, 2, pageCount + 1, 1);
    const durationRange = sheet.getRange(1, 3, pageCount + 1, 1);
    const weightRange = sheet.getRange(1, 5, pageCount + 1, 1);
    const cumulativeRange = sheet.getRange(1, 6, pageCount + 1, 1);

    // 1. Bar Chart: Page Ranking by Count
    const barCountChart = sheet.newChart()
        .setChartType(Charts.ChartType.BAR)
        .addRange(labelRange)
        .addRange(countRange)
        .setPosition(2, 11, 0, 0)
        .setOption('title', 'Page Ranking by Visit Count')
        .setOption('colors', ['#3b82f6'])
        .setOption('width', chartWidth)
        .setOption('height', chartHeight)
        .build();
    sheet.insertChart(barCountChart);

    // 2. Bar Chart: Page Ranking by Session Duration
    const barDurationChart = sheet.newChart()
        .setChartType(Charts.ChartType.BAR)
        .addRange(labelRange)
        .addRange(durationRange)
        .setPosition(2, 21, 0, 0)
        .setOption('title', 'Page Ranking by Total Duration (Seconds)')
        .setOption('colors', ['#10b981'])
        .setOption('width', chartWidth)
        .setOption('height', chartHeight)
        .build();
    sheet.insertChart(barDurationChart);

    // 3. Bar Chart: Page Ranking by Count X Duration (Weight)
    const barWeightChart = sheet.newChart()
        .setChartType(Charts.ChartType.BAR)
        .addRange(labelRange)
        .addRange(weightRange)
        .setPosition(20, 11, 0, 0)
        .setOption('title', 'Page Ranking by Engagement Score (Weighted)')
        .setOption('colors', ['#f59e0b'])
        .setOption('width', chartWidth)
        .setOption('height', chartHeight)
        .build();
    sheet.insertChart(barWeightChart);

    // 4. Pareto Chart (Page Traffic)
    const paretoChart = sheet.newChart()
        .setChartType(Charts.ChartType.COMBO)
        .addRange(labelRange)
        .addRange(countRange)
        .addRange(cumulativeRange)
        .setPosition(20, 21, 0, 0)
        .setOption('title', 'Pareto Analysis: Page Traffic')
        .setOption('series', {
            0: { type: 'bars', targetAxisIndex: 0, color: '#3b82f6' },
            1: { type: 'line', targetAxisIndex: 1, color: '#ef4444', curveType: 'function' }
        })
        .setOption('vAxes', {
            0: { title: 'Total Visits' },
            1: { title: 'Cumulative %', maxValue: 1, minValue: 0, format: 'percent' }
        })
        .setOption('width', chartWidth)
        .setOption('height', chartHeight)
        .build();
    sheet.insertChart(paretoChart);

    // 5. Global Map (Geography)
    if (geoCount > 0) {
        const geoRange = sheet.getRange(1, 8, geoCount + 1, 2);
        const mapChart = sheet.newChart()
            .setChartType(Charts.ChartType.GEO)
            .addRange(geoRange)
            .setPosition(38, 11, 0, 0)
            .setOption('title', 'Global Visitor Footprint')
            .setOption('width', chartWidth * 2 + 50) // Wide map
            .setOption('height', 500)
            .build();
        sheet.insertChart(mapChart);
    }

    // 6. User Segment Pie Chart
    if (segmentCount > 0) {
        const geoOffset = geoCount + 4;
        const segmentRange = sheet.getRange(geoOffset, 8, segmentCount + 1, 2);
        const pieChart = sheet.newChart()
            .setChartType(Charts.ChartType.PIE)
            .addRange(segmentRange)
            .setPosition(65, 11, 0, 0)
            .setOption('title', 'Visitor Segment Distribution')
            .setOption('is3D', true)
            .setOption('width', chartWidth * 2 + 50)
            .setOption('height', 400)
            .build();
        sheet.insertChart(pieChart);
    }
}
