# MediCoreEnroll 
(earlier it was named as JASU Consultancy but due to copyright issues the repo name has been changed to MediCoreEnroll Consultancy)
MBBS Consultancy Platform for Jalal-Abad State University, Kyrgyzstan

## Project Overview

MediCoreEnroll Consultancy is a full-stack web application designed to streamline the MBBS admission process for Jalal-Abad State University in Kyrgyzstan. The platform provides a comprehensive solution for students to apply, track their applications, upload documents, and communicate with the consultancy team.

## Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **shadcn/ui** - Reusable UI components
- **Socket.io Client** - Real-time communication
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database (via MongoDB Atlas)
- **Mongoose** - ODM for MongoDB
- **Socket.io** - Real-time bidirectional communication
- **JWT** - Authentication tokens
- **bcrypt** - Password hashing
- **Cloudinary** - Cloud image/file storage
- **Nodemailer** - Email service

## Project Structure

```
JASU/
├── frontend/                 # React frontend application
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── assets/          # Images, fonts, icons
│   │   ├── components/      # Reusable React components
│   │   │   ├── ui/         # shadcn/ui components
│   │   │   ├── layout/     # Layout components (Header, Footer, Sidebar)
│   │   │   └── common/     # Common components (Button, Card, Modal)
│   │   ├── pages/          # Page components
│   │   │   ├── auth/      # Authentication pages (Login, Register, Forgot Password)
│   │   │   ├── dashboard/ # Dashboard pages
│   │   │   ├── student/   # Student-specific pages
│   │   │   ├── admin/     # Admin-specific pages
│   │   │   └── public/    # Public pages (Home, About, Contact)
│   │   ├── hooks/          # Custom React hooks
│   │   ├── context/        # React context providers
│   │   ├── services/       # API services and external integrations
│   │   │   └── api/       # API client configuration
│   │   ├── utils/          # Utility functions
│   │   ├── types/          # TypeScript type definitions
│   │   ├── constants/      # Application constants
│   │   ├── config/         # Configuration files
│   │   ├── App.jsx         # Main App component
│   │   ├── main.jsx        # Application entry point
│   │   └── index.css       # Global styles
│   ├── package.json        # Frontend dependencies
│   ├── vite.config.js      # Vite configuration
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   └── .env.example        # Environment variables template
│
├── backend/                  # Node.js backend application
│   ├── src/
│   │   ├── config/         # Configuration files
│   │   │   ├── database.js # MongoDB connection
│   │   │   ├── cloudinary.js # Cloudinary configuration
│   │   │   └── email.js   # Email service configuration
│   │   ├── controllers/    # Route controllers (business logic)
│   │   ├── models/         # Mongoose models (database schemas)
│   │   ├── routes/         # Express route definitions
│   │   ├── middleware/     # Express middleware
│   │   │   ├── auth.js    # Authentication middleware
│   │   │   ├── errorHandler.js # Error handling
│   │   │   └── upload.js  # File upload middleware
│   │   ├── services/       # Business logic services
│   │   ├── utils/          # Utility functions
│   │   │   ├── generateToken.js # JWT token generation
│   │   │   └── hashPassword.js # Password hashing
│   │   ├── validators/     # Request validation schemas
│   │   ├── constants/      # Application constants
│   │   │   └── roles.js   # User roles and statuses
│   │   ├── types/          # TypeScript type definitions
│   │   ├── socket/         # Socket.io configuration
│   │   │   └── index.js   # Socket event handlers
│   │   └── server.js       # Express server entry point
│   ├── uploads/            # Temporary file uploads
│   ├── logs/               # Application logs
│   ├── tests/              # Test files
│   ├── package.json        # Backend dependencies
│   └── .env.example        # Environment variables template
│
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account
- Cloudinary account
- Email service (Gmail or SMTP)

### Installation

1. Clone the repository
2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

4. Set up environment variables:
   - Copy `.env.example` to `.env` in both frontend and backend
   - Fill in the required configuration values

5. Start the development servers:
   ```bash
   # Terminal 1 - Backend
   cd backend
   npm run dev

   # Terminal 2 - Frontend
   cd frontend
   npm run dev
   ```

## Features

### Student Portal
- User registration and authentication
- Application form submission
- Document upload and management
- Application status tracking
- Real-time notifications

### Admin Dashboard
- User management
- Application review and approval
- Document verification
- Analytics and reporting
- Communication tools

### Real-time Features
- Live application status updates
- Instant notifications
- Chat support (optional)

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password

### Applications
- `POST /api/applications` - Create application
- `GET /api/applications` - Get all applications (admin)
- `GET /api/applications/my` - Get user's applications
- `PUT /api/applications/:id` - Update application
- `DELETE /api/applications/:id` - Delete application

### Documents
- `POST /api/documents/upload` - Upload document
- `GET /api/documents` - Get all documents
- `DELETE /api/documents/:id` - Delete document

## Security Features

- JWT-based authentication
- Password hashing with bcrypt
- CORS configuration
- Helmet for security headers
- Rate limiting
- Input validation
- File upload restrictions

## Deployment

### Frontend Deployment
- Vercel, Netlify, or any static hosting service

### Backend Deployment
- Heroku, Railway, Render, or any Node.js hosting service
- MongoDB Atlas for database
- Cloudinary for file storage

## Contributing

This project is currently in development. Feature implementation will proceed after architecture setup is complete.

## License

ISC
