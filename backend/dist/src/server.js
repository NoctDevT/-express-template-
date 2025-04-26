"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loggerUtils_1 = require("./util/loggerUtils");
const morgan_1 = __importDefault(require("morgan"));
const server = (0, express_1.default)();
server.use(express_1.default.json());
//apache style logging
server.use((0, morgan_1.default)("combined", {
    stream: {
        write: (log) => loggerUtils_1.logger.http(log.trim())
    }
}));
exports.default = server;
