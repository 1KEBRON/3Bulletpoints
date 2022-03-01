import express, { Router } from 'express';
// import bulletPointsCtr from './bulletPoints.controller.js';

const router = express.Router();

//MAIN ENDPOINTS
router.route('/').get((req, res) => res.send('Hello world '));
// router.route('/id/:id').get(bulletPointsCtr.apiGetBulletPointsById);
//  ENDPOINTS 4 CRUD OPPERATION

export default router;
