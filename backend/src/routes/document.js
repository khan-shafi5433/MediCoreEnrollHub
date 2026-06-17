import express from 'express';
import upload from '../middleware/upload.js';
import {
  uploadDocument,
  getAllDocuments,
  getDocumentById,
  verifyDocument,
  deleteDocument,
} from '../controllers/documentController.js';
import { auth, adminAuth } from '../middleware/auth.js';

const router = express.Router();

// All routes require authentication
router.use(auth);

// Routes
router.post('/upload', upload.single('file'), uploadDocument);
router.get('/', getAllDocuments);
router.get('/:id', getDocumentById);
router.put('/:id/verify', adminAuth, verifyDocument);
router.delete('/:id', deleteDocument);

export default router;
