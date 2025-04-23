import Express from "express";
import { logger } from './util/loggerUtils';
import morgan from 'morgan';
import config from "./config/config";


const server = Express();
server.use(Express.json());
//apache style logging
server.use(morgan("combined"
    , {
    stream: {
        write: (log) => logger.http(log.trim())
    }
}
));



export default server; 