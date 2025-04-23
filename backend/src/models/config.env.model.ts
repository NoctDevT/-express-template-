import { z } from "zod";

export const envSchema = z.object({
    PORT: z.coerce.number().default(3000),
    NODE_ENV: z.string().default('development'),
    DATABASE_URL: z.string().min(1, 'DATABASE_URL is required').url({
      message: 'DATABASE_URL must be a valid URL',
    }),
    DATABASE_URL_DOCKER: z.string().min(1, 'DATABASE_URL is required').url({
      message: 'DATABASE_URL must be a valid URL',
    }),
  });

export type EnvSchemaType = z.infer<typeof envSchema>
  