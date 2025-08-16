# Express Backend Starter Template

A robust, production-ready Express.js backend template with authentication, user management, and essential utilities to kickstart any web or mobile application.

## Features

- **Complete Authentication System**
  - User registration and login
  - Secure password handling with bcrypt
  - JWT-based authentication with access and refresh tokens
  - Cookie-based token storage
  - Password reset functionality

- **User Management**
  - User profile updates
  - Password changes
  - Account management

- **Security Best Practices**
  - Request validation
  - Proper error handling
  - JWT token rotation
  - Protected routes

- **Developer Experience**
  - Clean architecture with MVC pattern
  - Utility classes for consistent responses
  - Async/await error handling
  - Middleware-based request processing
  - Centralized configuration

## Tech Stack

- **Node.js & Express**: Fast, unopinionated web framework
- **MongoDB & Mongoose**: Flexible document database with elegant ODM
- **JWT**: Secure, stateless authentication
- **Bcrypt**: Industry-standard password hashing
- **Cookie-Parser**: Cookie handling middleware
- **CORS**: Cross-Origin Resource Sharing support
- **Dotenv**: Environment variable management

## Project Structure

```
backend_initial_setup/
├── src/
│   ├── controllers/       # Request handlers
│   ├── middlewares/       # Express middlewares
│   ├── models/            # Mongoose data models
│   ├── routes/            # API route definitions
│   ├── utils/             # Utility classes and functions
│   ├── app.js             # Express app setup
│   ├── constants.js       # Application constants
│   └── index.js           # Application entry point
├── .env.example           # Example environment variables
├── package.json           # Project dependencies
└── README.md              # Project documentation
```

## Getting Started

1. Clone this repository
   ```bash
   git clone https://github.com/yourusername/backend_initial_setup.git
   cd backend_initial_setup
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env
   # Edit the .env file with your configuration
   ```

4. Start development server
   ```bash
   npm run dev
   ```

5. For production
   ```bash
   npm start
   ```

## Environment Variables

Create a `.env` file in the root directory based on the `.env.example` template:

- `PORT`: Server port (default: 4000)
- `MONGODB_URI`: MongoDB connection string
- `CORS_ORIGIN`: Allowed origin for CORS
- `ACCESS_TOKEN_SECRET`: Secret for JWT access tokens
- `ACCESS_TOKEN_EXPIRY`: Expiry time for access tokens (e.g., "1d" for 1 day)
- `REFRESH_TOKEN_SECRET`: Secret for JWT refresh tokens
- `REFRESH_TOKEN_EXPIRY`: Expiry time for refresh tokens (e.g., "10d" for 10 days)
- `NODE_ENV`: Environment (development, production, test)

## API Endpoints

### Authentication
- `POST /api/v1/users/register` - Register a new user
- `POST /api/v1/users/login` - Login with email/roll_no and password
- `POST /api/v1/users/logout` - Logout (requires authentication)
- `POST /api/v1/users/refresh-token` - Refresh access token

### User Management
- `GET /api/v1/users/current-user` - Get current user details
- `PATCH /api/v1/users/update-account` - Update user profile
- `POST /api/v1/users/change-password` - Change password

## User Model

The user model includes the following fields:
- `roll_no`: Unique roll number
- `name`: User's full name
- `email_id`: User's email address (unique)
- `password`: Securely hashed password (not returned in queries)
- `refreshToken`: JWT refresh token (not returned in queries)

## Authentication Flow

1. **Registration**: User submits registration details
2. **Login**: User provides credentials and receives access & refresh tokens
3. **Protected Routes**: Access token used in Authorization header or cookies
4. **Token Refresh**: Refresh token used to obtain new access token when expired
5. **Logout**: Clears tokens from both cookies and the database

## Error Handling

The API uses a consistent error response format:
```json
{
  "statusCode": 400,
  "message": "Error message",
  "success": false,
  "errors": []
}
```

## Extending the Template

This template is designed to be extended for various use cases:

- Add new models in the `models` directory
- Create new controllers in the `controllers` directory
- Define new routes in the `routes` directory
- Implement custom middleware in the `middlewares` directory

## License

MIT License - feel free to use and modify this template for your projects.

## Author

Kartik Garg

## Contact & Connect

Feel free to reach out if you have any questions, suggestions, or just want to connect!

- **LinkedIn**: [Kartik Garg](https://www.linkedin.com/in/kartik-garg-499026290/)
- **GitHub**: [kartik-grg](https://github.com/kartik-grg)

I'm always open to discussing tech, projects, and opportunities for collaboration!
