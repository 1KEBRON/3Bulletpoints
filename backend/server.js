'use strict';
import express from 'express';
import cors from 'cors';
import bulletPoints from './api/bulletPoints.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/bulletPoints', bulletPoints);
app.use('*', (req, res) =>
  res.status(404).json({ error: 'sorry bro, This page does not exist' })
);

export default app;
