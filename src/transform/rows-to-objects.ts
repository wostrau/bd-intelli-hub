import type { SheetRecord } from '../types/sheet.js';

export const normalizeHeader = (header: unknown): string => {
  const normalized = String(header ?? '')
    .trim()
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s_-]/g, '')
    .replace(/[\s-]+/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_+|_+$/g, '');

  return normalized || 'unnamed_column';
};

export const makeUniqueHeaders = (headers: string[]): string[] => {
  const seen = new Map<string, number>();

  return headers.map((header) => {
    const count = seen.get(header) ?? 0;
    seen.set(header, count + 1);

    return count === 0 ? header : `${header}_${count + 1}`;
  });
};

export const rowsToObjects = (rows: string[][]): SheetRecord[] => {
  if (rows.length === 0) {
    return [];
  }

  const [headerRow = [], ...dataRows] = rows;
  const headers = makeUniqueHeaders(headerRow.map(normalizeHeader));
  const loadedAt = new Date().toISOString();

  return dataRows.map((row) => {
    const record: Record<string, string | null> = {};

    headers.forEach((header, index) => {
      record[header] = row[index] ?? null;
    });

    return {
      ...record,
      loaded_at: loadedAt,
    };
  });
};
