import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required'],
  },
  applicationNumber: {
    type: String,
    unique: true,
    required: true,
  },
  personalDetails: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    passportNumber: {
      type: String,
      required: true,
    },
  },
  contactDetails: {
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      zipCode: String,
    },
  },
  educationDetails: {
    highSchool: {
      schoolName: String,
      board: String,
      year: String,
      percentage: String,
    },
    intermediate: {
      collegeName: String,
      board: String,
      year: String,
      percentage: String,
    },
  },
  academicDetails: {
    neetScore: {
      type: Number,
      required: true,
    },
    neetRank: {
      type: Number,
      required: true,
    },
    neetYear: {
      type: Number,
      required: true,
    },
  },
  preferredCourse: {
    type: String,
    required: true,
    enum: ['MBBS', 'MD', 'MS', 'Dentistry'],
  },
  preferredIntake: {
    type: String,
    required: true,
    enum: ['September', 'January', 'February'],
  },
  status: {
    type: String,
    enum: ['pending', 'under_review', 'documents_required', 'approved', 'rejected'],
    default: 'pending',
  },
  documents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Document',
  }],
  remarks: {
    type: String,
    default: '',
  },
  adminNotes: {
    type: String,
    default: '',
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
  reviewedAt: {
    type: Date,
  },
  approvedAt: {
    type: Date,
  },
}, {
  timestamps: true,
});

// Generate application number before saving
applicationSchema.pre('save', async function(next) {
  if (!this.applicationNumber) {
    const year = new Date().getFullYear();
    const count = await this.constructor.countDocuments();
    this.applicationNumber = `JASU-${year}-${String(count + 1).padStart(4, '0')}`;
  }
  next();
});

const Application = mongoose.model('Application', applicationSchema);

export default Application;
