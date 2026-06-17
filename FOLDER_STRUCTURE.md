# JASU Consultancy - Folder Structure Documentation

## Complete Folder Structure

```
JASU/
├── frontend/                          # React Frontend Application
│   ├── public/                        # Static Assets
│   ├── src/                          # Source Code
│   │   ├── assets/                   # Images, Fonts, Icons
│   │   ├── components/               # Reusable React Components
│   │   │   ├── ui/                  # shadcn/ui Components
│   │   │   ├── layout/              # Layout Components
│   │   │   └── common/              # Common UI Components
│   │   ├── pages/                   # Page Components
│   │   │   ├── auth/                # Authentication Pages
│   │   │   ├── dashboard/           # Dashboard Pages
│   │   │   ├── student/             # Student Pages
│   │   │   ├── admin/               # Admin Pages
│   │   │   └── public/              # Public Pages
│   │   ├── hooks/                   # Custom React Hooks
│   │   ├── context/                 # React Context Providers
│   │   ├── services/                # API Services
│   │   │   └── api/                 # API Client Configuration
│   │   ├── utils/                   # Utility Functions
│   │   ├── types/                   # TypeScript Types
│   │   ├── constants/               # Application Constants
│   │   ├── config/                  # Configuration Files
│   │   ├── App.jsx                  # Main App Component
│   │   ├── main.jsx                 # Entry Point
│   │   └── index.css                # Global Styles
│   ├── package.json                 # Frontend Dependencies
│   ├── vite.config.js               # Vite Configuration
│   ├── tailwind.config.js           # Tailwind Configuration
│   ├── postcss.config.js            # PostCSS Configuration
│   ├── .eslintrc.cjs                # ESLint Configuration
│   ├── .env.example                 # Environment Variables Template
│   └── .gitignore                   # Git Ignore Rules
│
├── backend/                          # Node.js Backend Application
│   ├── src/                         # Source Code
│   │   ├── config/                  # Configuration Files
│   │   │   ├── database.js         # MongoDB Connection
│   │   │   ├── cloudinary.js        # Cloudinary Configuration
│   │   │   └── email.js             # Email Service Configuration
│   │   ├── controllers/             # Route Controllers
│   │   ├── models/                  # Mongoose Models
│   │   ├── routes/                  # Express Routes
│   │   ├── middleware/              # Express Middleware
│   │   │   ├── auth.js              # Authentication Middleware
│   │   │   ├── errorHandler.js      # Error Handler
│   │   │   └── upload.js            # File Upload Middleware
│   │   ├── services/                # Business Logic Services
│   │   ├── utils/                   # Utility Functions
│   │   │   ├── generateToken.js     # JWT Token Generation
│   │   │   └── hashPassword.js      # Password Hashing
│   │   ├── validators/               # Request Validators
│   │   ├── constants/               # Application Constants
│   │   │   └── roles.js             # User Roles & Statuses
│   │   ├── types/                   # TypeScript Types
│   │   ├── socket/                  # Socket.io Configuration
│   │   │   └── index.js             # Socket Event Handlers
│   │   └── server.js                # Express Server Entry Point
│   ├── uploads/                     # Temporary File Uploads
│   ├── logs/                        # Application Logs
│   ├── tests/                       # Test Files
│   ├── package.json                 # Backend Dependencies
│   ├── .env.example                 # Environment Variables Template
│   └── .gitignore                   # Git Ignore Rules
│
├── README.md                         # Project Documentation
└── .gitignore                        # Root Git Ignore Rules
```

---

## Frontend Folder Explanations

### `frontend/` - Root Frontend Directory
The main directory for the React frontend application using Vite as the build tool.

### `frontend/public/` - Static Assets
Contains static files that are served directly without processing:
- `index.html` - HTML template
- `favicon.ico` - Website favicon
- Images, fonts, and other static assets

### `frontend/src/` - Source Code
All React source code resides here.

### `frontend/src/assets/` - Assets
Static assets imported into React components:
- Images (logos, banners, illustrations)
- Icons (SVG, PNG)
- Fonts
- Other media files

### `frontend/src/components/` - Reusable Components
All reusable React components organized by category:

#### `frontend/src/components/ui/` - shadcn/ui Components
Pre-built UI components from shadcn/ui library:
- Button, Card, Input, Select, Modal, Dialog, etc.
- These are customizable, accessible components
- Built on Radix UI primitives

#### `frontend/src/components/layout/` - Layout Components
Components that structure the page layout:
- `Header.jsx` - Navigation bar with logo and menu
- `Footer.jsx` - Footer with links and information
- `Sidebar.jsx` - Sidebar for dashboard navigation
- `Layout.jsx` - Main layout wrapper

#### `frontend/src/components/common/` - Common Components
Frequently used UI components:
- `Button.jsx` - Custom button component
- `Card.jsx` - Card container component
- `Badge.jsx` - Status badges
- `Loader.jsx` - Loading spinner
- `Alert.jsx` - Alert messages
- `Table.jsx` - Data table component

### `frontend/src/pages/` - Page Components
Route-level page components organized by feature:

#### `frontend/src/pages/auth/` - Authentication Pages
Pages for user authentication:
- `Login.jsx` - User login form
- `Register.jsx` - User registration form
- `ForgotPassword.jsx` - Password reset request
- `ResetPassword.jsx` - Password reset form

#### `frontend/src/pages/dashboard/` - Dashboard Pages
Main dashboard pages:
- `Dashboard.jsx` - Main dashboard overview
- `Profile.jsx` - User profile management
- `Settings.jsx` - User settings

#### `frontend/src/pages/student/` - Student Pages
Student-specific pages:
- `ApplicationForm.jsx` - MBBS application form
- `MyApplications.jsx` - List of student's applications
- `ApplicationDetails.jsx` - Detailed application view
- `Documents.jsx` - Document upload and management
- `Status.jsx` - Application status tracking

#### `frontend/src/pages/admin/` - Admin Pages
Admin-specific pages:
- `AdminDashboard.jsx` - Admin overview
- `Applications.jsx` - All applications management
- `Users.jsx` - User management
- `Documents.jsx` - Document verification
- `Analytics.jsx` - Analytics and reports

#### `frontend/src/pages/public/` - Public Pages
Publicly accessible pages:
- `Home.jsx` - Landing page
- `About.jsx` - About JASU Consultancy
- `Services.jsx` - Services offered
- `Contact.jsx` - Contact form and information
- `FAQ.jsx` - Frequently asked questions

### `frontend/src/hooks/` - Custom React Hooks
Reusable custom hooks for logic reuse:
- `useAuth.js` - Authentication state and functions
- `useApplications.js` - Application data fetching
- `useDocuments.js` - Document management
- `useSocket.js` - Socket.io connection
- `useForm.js` - Form handling
- `useNotification.js` - Notification management

### `frontend/src/context/` - Context Providers
React Context providers for global state:
- `AuthContext.jsx` - Authentication context
- `ThemeContext.jsx` - Theme (dark/light) context
- `NotificationContext.jsx` - Notification context
- `SocketContext.jsx` - Socket.io context

### `frontend/src/services/` - API Services
External API integrations and service layers:

#### `frontend/src/services/api/` - API Client
API configuration and client setup:
- `axios.js` - Axios instance with interceptors
- `auth.js` - Authentication API calls
- `applications.js` - Application API calls
- `documents.js` - Document API calls
- `admin.js` - Admin API calls

### `frontend/src/utils/` - Utility Functions
Helper functions and utilities:
- `cn.js` - Class name merger (clsx + tailwind-merge)
- `formatDate.js` - Date formatting
- `formatCurrency.js` - Currency formatting
- `validation.js` - Form validation helpers
- `fileUtils.js` - File handling utilities

### `frontend/src/types/` - TypeScript Types
TypeScript type definitions (if using TypeScript):
- `user.types.ts` - User-related types
- `application.types.ts` - Application types
- `document.types.ts` - Document types
- `api.types.ts` - API response types

### `frontend/src/constants/` - Application Constants
Constant values used throughout the app:
- `routes.js` - Route paths
- `apiEndpoints.js` - API endpoint URLs
- `status.js` - Application statuses
- `roles.js` - User roles

### `frontend/src/config/` - Configuration Files
Configuration settings:
- `api.js` - API base URL and endpoints
- `theme.js` - Theme configuration
- `socket.js` - Socket.io configuration

### `frontend/src/App.jsx` - Main App Component
Root component that wraps the application with providers and router.

### `frontend/src/main.jsx` - Entry Point
Application entry point that renders the App component.

### `frontend/src/index.css` - Global Styles
Global CSS with Tailwind directives and custom styles.

### `frontend/package.json` - Dependencies
Frontend npm dependencies and scripts.

### `frontend/vite.config.js` - Vite Configuration
Vite build tool configuration including:
- Plugins (React)
- Path aliases (@, @components, etc.)
- Server configuration
- Proxy settings

### `frontend/tailwind.config.js` - Tailwind Configuration
Tailwind CSS configuration including:
- Content paths
- Theme customization
- Color palette
- shadcn/ui design tokens

### `frontend/postcss.config.js` - PostCSS Configuration
PostCSS configuration for Tailwind CSS processing.

### `frontend/.eslintrc.cjs` - ESLint Configuration
ESLint rules for code quality and consistency.

### `frontend/.env.example` - Environment Variables Template
Template for environment variables (API URL, etc.).

### `frontend/.gitignore` - Git Ignore
Files to exclude from git (node_modules, dist, .env).

---

## Backend Folder Explanations

### `backend/` - Root Backend Directory
The main directory for the Node.js backend application using Express.

### `backend/src/` - Source Code
All backend source code resides here.

### `backend/src/config/` - Configuration Files
Configuration for external services and databases:

#### `backend/src/config/database.js` - MongoDB Configuration
MongoDB connection setup using Mongoose:
- Connection string
- Connection options
- Connection event handlers

#### `backend/src/config/cloudinary.js` - Cloudinary Configuration
Cloudinary cloud storage configuration:
- Cloud name, API key, API secret
- Upload settings
- Folder configuration

#### `backend/src/config/email.js` - Email Configuration
Nodemailer email service configuration:
- SMTP settings
- Email templates
- Send email function

### `backend/src/controllers/` - Controllers
Route controllers containing business logic:
- `authController.js` - Authentication logic
- `userController.js` - User management
- `applicationController.js` - Application logic
- `documentController.js` - Document handling
- `adminController.js` - Admin operations

### `backend/src/models/` - Mongoose Models
Database schemas using Mongoose:
- `User.js` - User schema
- `Application.js` - Application schema
- `Document.js` - Document schema
- `Notification.js` - Notification schema

### `backend/src/routes/` - Express Routes
Route definitions and endpoint mapping:
- `auth.js` - Authentication routes
- `user.js` - User routes
- `application.js` - Application routes
- `document.js` - Document routes
- `admin.js` - Admin routes

### `backend/src/middleware/` - Middleware
Express middleware functions:

#### `backend/src/middleware/auth.js` - Authentication Middleware
JWT authentication middleware:
- Token verification
- User authentication
- Role-based access control (adminAuth)

#### `backend/src/middleware/errorHandler.js` - Error Handler
Centralized error handling:
- Mongoose validation errors
- Duplicate key errors
- JWT errors
- Custom error responses

#### `backend/src/middleware/upload.js` - Upload Middleware
Multer file upload configuration:
- Cloudinary storage
- File type validation
- File size limits
- File filter

### `backend/src/services/` - Services
Business logic services:
- `emailService.js` - Email sending logic
- `notificationService.js` - Notification management
- `applicationService.js` - Application processing
- `documentService.js` - Document processing

### `backend/src/utils/` - Utility Functions
Helper functions:

#### `backend/src/utils/generateToken.js` - Token Generation
JWT token generation and verification functions.

#### `backend/src/utils/hashPassword.js` - Password Hashing
Password hashing and comparison using bcrypt.

### `backend/src/validators/` - Validators
Request validation schemas using express-validator:
- `authValidator.js` - Auth request validation
- `applicationValidator.js` - Application validation
- `documentValidator.js` - Document validation

### `backend/src/constants/` - Constants
Application constants:

#### `backend/src/constants/roles.js` - Roles & Statuses
User roles (admin, student, staff) and application statuses.

### `backend/src/types/` - TypeScript Types
TypeScript type definitions (if using TypeScript).

### `backend/src/socket/` - Socket.io Configuration
Real-time communication setup:

#### `backend/src/socket/index.js` - Socket Handlers
Socket.io event handlers:
- Connection/disconnection
- Room management
- Real-time notifications
- Application status updates
- Chat functionality

### `backend/src/server.js` - Server Entry Point
Express server setup:
- Express app initialization
- Middleware configuration
- Route registration
- Socket.io integration
- Error handling
- Server startup

### `backend/uploads/` - Temporary Uploads
Temporary storage for uploaded files before Cloudinary upload.

### `backend/logs/` - Application Logs
Application log files for debugging and monitoring.

### `backend/tests/` - Test Files
Unit and integration tests.

### `backend/package.json` - Dependencies
Backend npm dependencies and scripts.

### `backend/.env.example` - Environment Variables Template
Template for environment variables (MongoDB URI, JWT secret, etc.).

### `backend/.gitignore` - Git Ignore
Files to exclude from git (node_modules, uploads, logs, .env).

---

## Root Files

### `README.md` - Project Documentation
Main project documentation with:
- Project overview
- Tech stack
- Installation instructions
- API endpoints
- Deployment guide

### `.gitignore` - Root Git Ignore
Root-level git ignore rules for the entire project.

---

## Summary

This folder structure follows best practices for full-stack React/Node.js applications:

**Frontend:**
- Component-based architecture
- Separation of concerns (components, pages, hooks, services)
- Scalable organization by feature
- Ready for shadcn/ui integration

**Backend:**
- MVC pattern (Models, Views/Controllers, Routes)
- Middleware for cross-cutting concerns
- Service layer for business logic
- Configuration separation
- Ready for Socket.io real-time features

The architecture is designed to be:
- **Scalable** - Easy to add new features
- **Maintainable** - Clear separation of concerns
- **Testable** - Modular structure for testing
- **Production-ready** - Security, error handling, logging
