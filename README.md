# WTWR (What to Wear?): Back End

The WTWR (What to Wear?) back-end project is designed to provide a robust server infrastructure for the WTWR application. This project focuses on creating a server with a RESTful API that allows users to manage clothing items and user profiles. The server is built using Node.js and Express.js, with MongoDB as the database for storing data.

## Project Functionality

The back-end server provides the following functionalities:

- **User Management**:

  - Create new users with a name and avatar.
  - Retrieve a list of all users.
  - Retrieve a specific user by their ID.

- **Clothing Item Management**:

  - Create new clothing items with details such as name, weather suitability, and image URL.
  - Retrieve a list of all clothing items.
  - Delete a clothing item by its ID.
  - Like and unlike clothing items.

- **Error Handling**:
  - Handles various error scenarios with appropriate HTTP status codes and messages.
  - Validates request data to ensure data integrity.

## Technologies and Techniques Used

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building the server-side application.
- **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **MongoDB**: A NoSQL database used to store user and clothing item data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js, used to manage data relationships and schema validation.
- **Validator**: A library used to validate and sanitize strings, ensuring that URLs and other data are correctly formatted.
- **ESLint and Prettier**: Tools used for maintaining code quality and formatting, ensuring a consistent codebase.
- **GitHub Actions**: Used for continuous integration and testing, ensuring that the codebase remains stable and functional.

## Running the Project

To run the project, use the following commands:

- `npm run start` — Launches the server on localhost:3001.
- `npm run dev` — Launches the server with hot reload enabled for development.

### Domain

- Frontend: https://wtwrwtwr.twilightparadox.com
- Backend: https://api.wtwrwtwr.twilightparadox.com

## Additional Information

- The server connects to a MongoDB instance running at `mongodb://127.0.0.1:27017/wtwr_db`.
- The project uses ES6 syntax where possible, leveraging modern JavaScript features for cleaner and more efficient code.
- Error handling is implemented to ensure that the server responds with meaningful messages and status codes in case of failures.
