"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_env_model_1 = require("../models/config.env.model");
const loggerUtils_1 = require("../util/loggerUtils");
if (process.env.PLATFORM !== 'docker') {
    require('dotenv').config();
}
const parsed = config_env_model_1.envSchema.safeParse(process.env);
if (!parsed.success) {
    loggerUtils_1.logger.error("Error with .env file:");
    parsed.error.issues.forEach((issue) => {
        loggerUtils_1.logger.error(`→ ${issue.path.join('.')}: ${issue.message}`);
    });
    process.exit(1);
}
const env = parsed.data;
const config = {
    PORT: env.PORT,
    NODE_ENV: env.NODE_ENV,
    DATABASE_URL: process.env.PLATFORM !== "docker" ? env.DATABASE_URL : env.DATABASE_URL_DOCKER,
};
exports.default = config;
