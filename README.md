# Google Sheets Reader PoC

Minimal Node.js and TypeScript proof of concept for reading a public Google Sheet range and printing normalized JSON to the console.

The script reads the configured worksheet range from a Google Sheet that is available to anyone with the link, treats the first row as headers, normalizes those headers into object keys, and prints the remaining rows as formatted JSON.

No database, frontend, or service account is included.

## Requirements

- Node.js 18 or newer
- A Google Sheet with link access enabled

## Install

```bash
npm install
```

## Configure Environment

Create a local `.env` file from the example:

```bash
cp .env.example .env
```

Update `.env` with your values:

```env
SHEET_ID=your_google_sheet_id
SHEET_RANGE=Sheet1!A:Z
```

`SHEET_ID` is the ID from the Google Sheet URL:

```text
https://docs.google.com/spreadsheets/d/<SHEET_ID>/edit
```

`SHEET_RANGE` can include the sheet name and range:

```text
Sheet1!A:Z
'My Sheet'!A:Z
```

## Share the Sheet

In Google Sheets, click **Share** and set general access to **Anyone with the link**.

Viewer access is enough.

## Run

```bash
npm start
```

or:

```bash
npm run read:sheet
```

The script prints the loaded rows as formatted JSON:

```json
[
  {
    "client_name": "Example Client",
    "market": "Brazil",
    "status": "Active",
    "loaded_at": "2026-06-05T20:00:00.000Z"
  }
]
```

## Check TypeScript

```bash
npm run check
```

## Notes

- Missing environment variables produce a clear error.
- Empty sheets or sheets with only headers are handled gracefully.
- Missing cells are represented as `null`.
- `.env`, dependencies, and local credential files are excluded from Git.
