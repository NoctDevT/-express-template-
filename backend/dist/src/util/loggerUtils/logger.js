"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
exports.logger = winston_1.default.createLogger({
    level: 'http',
    format: winston_1.default.format.combine(winston_1.default.format.timestamp(), winston_1.default.format.errors({ stack: true }), winston_1.default.format.printf(({ level, message, timestamp, stack, ...meta }) => {
        const metaInfo = Object.keys(meta).length
            ? `\n meta: ${JSON.stringify(meta, null, 2)}`
            : '';
        return `[${timestamp}] ${level.toUpperCase()}: ${stack || message}${metaInfo}`;
    })),
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({ filename: 'logs/http.log', level: 'http' }),
        new winston_1.default.transports.File({ filename: 'logs/warn.log', level: 'warn' }),
        new winston_1.default.transports.File({ filename: 'logs/errors.log', level: 'error' }),
        new winston_1.default.transports.File({ filename: 'logs/combined.log' }),
    ],
});
