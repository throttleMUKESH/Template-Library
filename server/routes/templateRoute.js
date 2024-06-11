import express from 'express';
import { createTemplate } from '../controllers/templateController.js';

const router = express.Router();

router.post('/submit', createTemplate);

export default router;
