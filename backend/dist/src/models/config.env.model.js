"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envSchema = void 0;
const zod_1 = require("zod");
exports.envSchema = zod_1.z.object({
    PORT: zod_1.z.coerce.number().default(3000),
    NODE_ENV: zod_1.z.string().default('development'),
    DATABASE_URL: zod_1.z.string().min(1, 'DATABASE_URL is required').url({
        message: 'DATABASE_URL must be a valid URL',
    }),
    DATABASE_URL_DOCKER: zod_1.z.string().min(1, 'DATABASE_URL is required').url({
        message: 'DATABASE_URL must be a valid URL',
    }),
});
