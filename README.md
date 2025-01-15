# WTWR (What to Wear?): Back End

The WTWR (What to Wear?) back-end project is designed to provide a robust server infrastructure for the WTWR application. This project focuses on creating a server with a RESTful API that allows users to manage clothing items and user profiles. The server is built using Node.js and Express.js, with MongoDB as the database for storing data.

## Project Functionality

The back-end server provides the following functionalities:

### User Management

- User Authentication:

  - JWT-based authentication system
  - Secure password hashing using bcrypt
  - Protected routes requiring valid tokens

- User Operations:
  - Create new users with name, email, and avatar
  - Login with email/password
  - Update user profile information
  - Retrieve current user data

### Clothing Item Management

- Create new clothing items with:
  - Name
  - Weather suitability
  - Image URL
  - Owner association
- Retrieve all clothing items
- Delete clothing items (owner only)
- Like/unlike clothing items
- Filter items by weather type

### Security Features

- Request Rate Limiting
- CORS Protection
- Helmet Security Headers
- Input Validation using Celebrate
- Environment-specific JWT Secrets
- Secure Password Storage

### Error Handling

- Custom Error Classes:
  - BadRequestError (400)
  - UnauthorizedError (401)
  - ForbiddenError (403)
  - NotFoundError (404)
  - ConflictError (409)
- Centralized Error Handling
- Request Validation
- Detailed Error Messages (Development Only)

### Logging

- Request Logging using Winston
- Error Logging
- Development/Production Log Formats
- Structured Log Output

## Technologies and Techniques Used

- **Node.js & Express.js**: Server framework
- **MongoDB & Mongoose**: Database and ODM
- **Security**:
  - JWT (jsonwebtoken)
  - bcryptjs
  - helmet
  - express-rate-limit
  - celebrate/joi
- **Logging**:
  - winston
  - express-winston
- **Development Tools**:
  - ESLint (Airbnb style)
  - Prettier
  - nodemon
- **Testing & CI**: GitHub Actions

## API Endpoints

### Users

- POST /signup - Register new user
- POST /signin - User authentication
- GET /users/me - Get current user
- PATCH /users/me - Update user profile

### Clothing Items

- GET /items - Get all items
- POST /items - Create new item
- DELETE /items/:itemId - Delete item
- PUT /items/:itemId/likes - Like item
- DELETE /items/:itemId/likes - Unlike item

## Project Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Create environment files:
   - `.env.dev` for development
   - `.env.prod` for production
4. Set up MongoDB
5. Run the application

### Environment Variables

Required variables in `.env` files:

- `JWT_SECRET` - Secret key for JWT tokens
- `MONGODB_URI` - MongoDB connection string
- `PORT` - Server port number

### Running the Project

- Production: `npm run start`
- Development: `npm run dev`
- Linting: `npm run lint`
- Fix Linting: `npm run lint:fix`

### Domain Configuration

- Frontend: https://wtwrwtwr.twilightparadox.com
- Backend: https://api.wtwrwtwr.twilightparadox.com

## Development Practices

- ES6+ JavaScript features
- Modular code organization
- Comprehensive error handling
- Security best practices
- Code quality tools
- Detailed logging

## Additional Information

- MongoDB connection: `mongodb://127.0.0.1:27017/wtwr_db`
- Secure environment configuration
- Production-ready error handling
- CORS configuration for frontend integration
- Rate limiting for API protection

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## License

ISC License
