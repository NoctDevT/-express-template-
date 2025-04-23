import {envSchema, type EnvSchemaType} from "../models/config.env.model";
import { logger } from '../util/loggerUtils';

  if (process.env.PLATFORM !== 'docker') {
    require('dotenv').config();
  } 

  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    logger.error("Error with .env file:");
    parsed.error.issues.forEach((issue) => {
      logger.error(`→ ${issue.path.join('.')}: ${issue.message}`);
    });
    process.exit(1);
  }
  
  const env = parsed.data;

  const config = {
    PORT: env.PORT,
    NODE_ENV: env.NODE_ENV,
    DATABASE_URL: process.env.PLATFORM !== "docker" ?  env.DATABASE_URL : env.DATABASE_URL_DOCKER,
  };


  export default config;
