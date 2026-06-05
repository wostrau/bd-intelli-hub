import { parseCsv } from '../utils/csv.js';

export type ParsedSheetRange = {
  sheetName?: string;
  range: string;
};

export const parseSheetRange = (sheetRange: string): ParsedSheetRange => {
  const match = sheetRange.match(/^(?:'([^']+)'|([^!]+))!(.+)$/);

  if (!match) {
    return { range: sheetRange };
  }

  return {
    sheetName: match[1] ?? match[2],
    range: match[3],
  };
};

export const buildPublicCsvUrl = (sheetId: string, sheetRange: string): URL => {
  const { sheetName, range } = parseSheetRange(sheetRange);
  const url = new URL(`https://docs.google.com/spreadsheets/d/${encodeURIComponent(sheetId)}/gviz/tq`);

  url.searchParams.set('tqx', 'out:csv');
  url.searchParams.set('range', range);

  if (sheetName) {
    url.searchParams.set('sheet', sheetName);
  }

  return url;
};

export const readPublicSheet = async (sheetId: string, sheetRange: string): Promise<string[][]> => {
  const url = buildPublicCsvUrl(sheetId, sheetRange);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Google Sheet request failed with ${response.status} ${response.statusText}. Check that the sheet is public and SHEET_ID/SHEET_RANGE are correct.`,
    );
  }

  return parseCsv(await response.text());
};
