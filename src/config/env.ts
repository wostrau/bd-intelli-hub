const REQUIRED_ENV_VARS = ['SHEET_ID', 'SHEET_RANGE'] as const;

type RequiredEnvVar = (typeof REQUIRED_ENV_VARS)[number];

export type EnvConfig = {
  sheetId: string;
  sheetRange: string;
};

export const validateEnv = (env: NodeJS.ProcessEnv = process.env): EnvConfig => {
  const missing = REQUIRED_ENV_VARS.filter((name: RequiredEnvVar) => !env[name]?.trim());

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variable(s): ${missing.join(', ')}. Create a .env file from .env.example.`,
    );
  }

  return {
    sheetId: env.SHEET_ID as string,
    sheetRange: env.SHEET_RANGE as string,
  };
};
