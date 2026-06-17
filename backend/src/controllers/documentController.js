import Document from '../models/Document.js';
import Application from '../models/Application.js';
import cloudinary from '../config/cloudinary.js';

// Upload document
export const uploadDocument = async (req, res, next) => {
  try {
    const { documentType, description, applicationId } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded',
      });
    }

    // Create document record
    const document = await Document.create({
      userId: req.user.userId,
      applicationId: applicationId || null,
      documentType,
      fileName: file.originalname,
      fileUrl: file.path,
      cloudinaryPublicId: file.filename,
      fileSize: file.size,
      mimeType: file.mimetype,
      description,
    });

    // If applicationId is provided, add document to application
    if (applicationId) {
      await Application.findByIdAndUpdate(
        applicationId,
        { $push: { documents: document._id } }
      );
    }

    res.status(201).json({
      success: true,
      message: 'Document uploaded successfully',
      data: { document },
    });
  } catch (error) {
    next(error);
  }
};

// Get all documents
export const getAllDocuments = async (req, res, next) => {
  try {
    const { documentType, status, page = 1, limit = 10 } = req.query;

    const query = {};
    if (documentType) query.documentType = documentType;
    if (status) query.status = status;

    // If not admin, only show user's documents
    if (req.user.role !== 'admin') {
      query.userId = req.user.userId;
    }

    const documents = await Document.find(query)
      .populate('userId', 'firstName lastName email')
      .populate('applicationId', 'applicationNumber status')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Document.countDocuments(query);

    res.status(200).json({
      success: true,
      data: {
        documents,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total,
          pages: Math.ceil(total / limit),
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get document by ID
export const getDocumentById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const document = await Document.findById(id)
      .populate('userId', 'firstName lastName email')
      .populate('applicationId');

    if (!document) {
      return res.status(404).json({
        success: false,
        message: 'Document not found',
      });
    }

    // Check if user owns the document or is admin
    if (document.userId._id.toString() !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Access denied',
      });
    }

    res.status(200).json({
      success: true,
      data: { document },
    });
  } catch (error) {
    next(error);
  }
};

// Verify document (admin only)
export const verifyDocument = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, rejectionReason } = req.body;

    const document = await Document.findByIdAndUpdate(
      id,
      {
        status,
        rejectionReason,
        isVerified: status === 'approved',
        verifiedBy: req.user.userId,
        verifiedAt: Date.now(),
      },
      { new: true, runValidators: true }
    ).populate('userId');

    if (!document) {
      return res.status(404).json({
        success: false,
        message: 'Document not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Document verified successfully',
      data: { document },
    });
  } catch (error) {
    next(error);
  }
};

// Delete document
export const deleteDocument = async (req, res, next) => {
  try {
    const { id } = req.params;

    const document = await Document.findById(id);

    if (!document) {
      return res.status(404).json({
        success: false,
        message: 'Document not found',
      });
    }

    // Check if user owns the document or is admin
    if (document.userId.toString() !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Access denied',
      });
    }

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(document.cloudinaryPublicId);

    // Remove from application if linked
    if (document.applicationId) {
      await Application.findByIdAndUpdate(
        document.applicationId,
        { $pull: { documents: document._id } }
      );
    }

    // Delete document record
    await Document.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: 'Document deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
