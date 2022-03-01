'use strict';

import app from './server.js';
import mongodb from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 7000;

MongoClient.connect(process.env.BULLETPOINTS_DB_URI, {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
})
  .catch(err => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(async client => {
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  });
