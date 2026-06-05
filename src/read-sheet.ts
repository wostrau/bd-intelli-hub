import 'dotenv/config';
import { pathToFileURL } from 'node:url';

import { validateEnv } from './config/env.js';
import { readPublicSheet } from './sheets/public-sheet.js';
import { rowsToObjects } from './transform/rows-to-objects.js';

const main = async (): Promise<void> => {
  try {
    console.log('Starting Google Sheets read...');

    const { sheetId, sheetRange } = validateEnv();

    console.log('Reading public Google Sheet...');
    const rows = await readPublicSheet(sheetId, sheetRange);
    const records = rowsToObjects(rows);

    if (rows.length === 0) {
      console.log('No rows found in the configured range.');
    } else {
      console.log(`Loaded ${Math.max(rows.length - 1, 0)} data row(s).`);
    }

    console.log(JSON.stringify(records, null, 2));
    console.log('Google Sheets read finished successfully.');
  } catch (error) {
    console.error('Failed to read Google Sheet.');
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
};

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  void main();
}

export { validateEnv, readPublicSheet, rowsToObjects };
