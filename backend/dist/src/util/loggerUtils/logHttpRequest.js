"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logHttpRequest = void 0;
const logger_1 = require("./logger");
const logHttpRequest = (req, message = 'HTTP request') => {
    logger_1.logger.http(message, {
        method: req.method,
        path: req.originalUrl,
        ip: req.ip,
        userAgent: req.headers['user-agent'],
    });
};
exports.logHttpRequest = logHttpRequest;
