# DeepTrust Analytics Airtable Schema

To implement the event-based tracking system, set up the following tables in your Airtable Base.

## 1. Table: `Users`
Tracks unique visitors (initially anonymous).

| Field Name | Type | Description |
| :--- | :--- | :--- |
| `user_id` | Single line text (Primary) | Unique identifier for the user (UUID) |
| `first_seen` | Date/Time | When the user first visited |
| `last_seen` | Date/Time | Last activity timestamp |
| `device` | Single line text | Device type (Mobile/Desktop/Tablet) |
| `browser` | Single line text | Browser name |
| `country` | Single line text | User country (derived from IP) |
| `is_authenticated` | Checkbox | Whether the user has logged in/submitted a form |
| `email` | Email | Associated email (if available) |

## 2. Table: `Sessions`
Tracks individual browsing sessions.

| Field Name | Type | Description |
| :--- | :--- | :--- |
| `session_id` | Single line text (Primary) | Unique identifier for the session |
| `user_id` | Link to `Users` | Reference to the user |
| `start_time` | Date/Time | Session start |
| `end_time` | Date/Time | Session end |
| `duration` | Number | Total duration in seconds |
| `page_count` | Number | Number of unique pages visited |
| `engagement_score`| Number | Computed engagement score (0-100) |
| `referrer` | Single line text | Where the user came from |

## 3. Table: `Events`
Stores granular interaction data.

| Field Name | Type | Description |
| :--- | :--- | :--- |
| `event_id` | Single line text (Primary) | Unique ID for the event |
| `event_name` | Single select | Name (e.g., `page_view`, `cta_click`, `scroll_75`) |
| `user_id` | Link to `Users` | Reference to the user |
| `session_id` | Link to `Sessions` | Reference to the session |
| `page_url` | Single line text | URL where event occurred |
| `timestamp` | Date/Time | Exact time of event |
| `metadata` | Long text | JSON string of extra data (target ID, button text, etc.) |
| `intelligence_signal`| Single line text | Derived signal (e.g., "High Intent", "Confusion") |

---

## 4. Derived Intelligence Signals (Computed)
To power DeepTrust’s intelligence layers, these signals are derived from the `Events` table:

- **High Intent User**: `scroll_count > 75%` AND `cta_click_count >= 1`.
- **Confusion Signal**: `time_on_page > 180s` AND `scroll_count < 25%`.
- **Drop-off Point**: Last `page_exit` event before conversion.
- **Rage Click**: Rapid clicks on non-interactive elements.
