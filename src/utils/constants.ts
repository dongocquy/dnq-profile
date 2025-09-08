// Application constants
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'DNQ Profile';
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// Pagination defaults
export const DEFAULT_PAGE_SIZE = 10;
export const MAX_PAGE_SIZE = 100;

// API endpoints
export const API_ENDPOINTS = {
  USERS: '/users',
  AUTH: '/auth',
  PROFILE: '/profile',
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  USER_TOKEN: 'user_token',
  USER_DATA: 'user_data',
  THEME: 'theme',
} as const;

// Validation rules
export const VALIDATION_RULES = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD_MIN_LENGTH: 8,
  NAME_MIN_LENGTH: 2,
} as const;
