# Light Bootstrap Dashboard React - Customized

This project is based on the Light Bootstrap Dashboard React template, which I have customized to create a modern dashboard application with authentication and custom components.

## Template Source
Original template: [Light Bootstrap Dashboard React](https://www.creative-tim.com/product/light-bootstrap-dashboard-react)

## Customizations Made

### Authentication System
- JWT-based authentication with login/logout functionality
- Protected routes that require authentication
- Cookie-based session management for security

### Custom Components
- **UserProfile Component**: Custom caller information card with status indicators
- **Form Component**: Profile editing form with MUI TextField integration
- **Login Component**: Clean login interface with error handling

### Menu & Navigation
- Customized sidebar navigation
- Modified route structure for better user experience
- Added protected route wrapper for secure access

### Styling Enhancements
- Custom CSS classes for brown-themed components
- Responsive design improvements
- Custom card layouts and input styling

## Features
- User authentication (login/signup)
- Protected dashboard routes
- Profile management
- Responsive design
- Modern UI components

## Tech Stack
- React 18
- React Router v5
- Bootstrap 4
- Material-UI components
- JWT authentication
- Node.js/Express backend
- MongoDB database

## Installation

### Frontend
```bash
cd light-bootstrap-dashboard-react
npm install --legacy-peer-deps
npm start
```

### Backend
```bash
cd backend
npm install
npm start
```

## Environment Variables
Create a `.env` file in the backend directory with:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

## License
This project maintains the original MIT license from the Light Bootstrap Dashboard React template.