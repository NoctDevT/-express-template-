import express, { Request, Response, NextFunction } from 'express';


export function createTestServer() {
  const app = express();



  // app.use('/auth', route);
  return app;
}
