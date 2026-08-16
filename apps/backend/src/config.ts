const DEFAULT_PORT = 4000

export const config = {
  port: Number(process.env.PORT) || DEFAULT_PORT,
  nodeEnv: process.env.NODE_ENV ?? 'development',
} as const
