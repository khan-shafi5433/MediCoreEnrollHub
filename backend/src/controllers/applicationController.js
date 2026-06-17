import Application from '../models/Application.js';
import Document from '../models/Document.js';

// Create new application
export const createApplication = async (req, res, next) => {
  try {
    const applicationData = {
      ...req.body,
      userId: req.user.userId,
    };

    const application = await Application.create(applicationData);

    res.status(201).json({
      success: true,
      message: 'Application created successfully',
      data: { application },
    });
  } catch (error) {
    next(error);
  }
};

// Get all applications (admin only)
export const getAllApplications = async (req, res, next) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;

    const query = {};
    if (status) {
      query.status = status;
    }

    const applications = await Application.find(query)
      .populate('userId', 'firstName lastName email phone')
      .populate('documents')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Application.countDocuments(query);

    res.status(200).json({
      success: true,
      data: {
        applications,
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

// Get user's applications
export const getMyApplications = async (req, res, next) => {
  try {
    const applications = await Application.find({ userId: req.user.userId })
      .populate('documents')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: { applications },
    });
  } catch (error) {
    next(error);
  }
};

// Get application by ID
export const getApplicationById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const application = await Application.findById(id)
      .populate('userId', 'firstName lastName email phone address')
      .populate('documents');

    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found',
      });
    }

    // Check if user owns the application or is admin
    if (application.userId._id.toString() !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Access denied',
      });
    }

    res.status(200).json({
      success: true,
      data: { application },
    });
  } catch (error) {
    next(error);
  }
};

// Update application
export const updateApplication = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const application = await Application.findById(id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found',
      });
    }

    // Check if user owns the application or is admin
    if (application.userId.toString() !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Access denied',
      });
    }

    // Only allow updates if status is pending
    if (application.status !== 'pending' && req.user.role !== 'admin') {
      return res.status(400).json({
        success: false,
        message: 'Cannot update application after submission',
      });
    }

    const updatedApplication = await Application.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    ).populate('documents');

    res.status(200).json({
      success: true,
      message: 'Application updated successfully',
      data: { application: updatedApplication },
    });
  } catch (error) {
    next(error);
  }
};

// Update application status (admin only)
export const updateApplicationStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, remarks, adminNotes } = req.body;

    const application = await Application.findByIdAndUpdate(
      id,
      {
        status,
        remarks,
        adminNotes,
        reviewedAt: Date.now(),
        approvedAt: status === 'approved' ? Date.now() : undefined,
      },
      { new: true, runValidators: true }
    ).populate('userId');

    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Application status updated successfully',
      data: { application },
    });
  } catch (error) {
    next(error);
  }
};

// Delete application
export const deleteApplication = async (req, res, next) => {
  try {
    const { id } = req.params;

    const application = await Application.findById(id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found',
      });
    }

    // Check if user owns the application or is admin
    if (application.userId.toString() !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Access denied',
      });
    }

    // Only allow deletion if status is pending
    if (application.status !== 'pending' && req.user.role !== 'admin') {
      return res.status(400).json({
        success: false,
        message: 'Cannot delete application after review',
      });
    }

    await Application.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: 'Application deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
