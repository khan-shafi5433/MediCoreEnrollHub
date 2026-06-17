export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },
  // User
  USER: {
    PROFILE: '/user/profile',
    UPDATE_PROFILE: '/user/profile',
    CHANGE_PASSWORD: '/user/change-password',
  },
  // Applications
  APPLICATIONS: {
    CREATE: '/applications',
    GET_ALL: '/applications',
    GET_BY_ID: '/applications/:id',
    UPDATE: '/applications/:id',
    DELETE: '/applications/:id',
    GET_MY_APPLICATIONS: '/applications/my',
  },
  // Documents
  DOCUMENTS: {
    UPLOAD: '/documents/upload',
    GET_ALL: '/documents',
    GET_BY_ID: '/documents/:id',
    DELETE: '/documents/:id',
  },
  // Admin
  ADMIN: {
    DASHBOARD: '/admin/dashboard',
    USERS: '/admin/users',
    APPLICATIONS: '/admin/applications',
    DOCUMENTS: '/admin/documents',
  },
}
