import express from 'express';
import { body } from 'express-validator';
import {
  createApplication,
  getAllApplications,
  getMyApplications,
  getApplicationById,
  updateApplication,
  updateApplicationStatus,
  deleteApplication,
} from '../controllers/applicationController.js';
import { auth, adminAuth } from '../middleware/auth.js';

const router = express.Router();

// All routes require authentication
router.use(auth);

// Routes
router.post('/', createApplication);
router.get('/my', getMyApplications);
router.get('/', adminAuth, getAllApplications);
router.get('/:id', getApplicationById);
router.put('/:id', updateApplication);
router.put('/:id/status', adminAuth, updateApplicationStatus);
router.delete('/:id', deleteApplication);

export default router;
