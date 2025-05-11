# REST API Documentation

## Overview

This is a REST API built using **Node.js** and **Express**. It provides endpoints for dynamically generating and managing resources as declared in YAML files. The API is designed to be modular, scalable, and easy to integrate with other applications.

---

## Features

- CRUD operations for managing resources
- Dynamic model generation for Sequelize
- Dynamic route generation for Sequelize models
- Middleware for request parsing and logging
  <!-- - JSON-based error handling. -->
  <!-- - Authentication. -->

---

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **Database**: Ensure you have a Sequelize-compatible database configured

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:madeline-dexter/service-api.git
   cd service-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     DB_HOST=<your-database-host>
     DB_USER=<your-database-username>
     DB_PASSWORD=<your-database-password>
     DB_NAME=<your-database-name>
     DB_DIALECT=<mysql|postgres|sqlite|...>
     PORT=3000
     ```

<!-- 4. Run database migrations (if applicable):
   ```bash
   npx sequelize-cli db:migrate
   ``` -->

---

## Usage

### Starting the Server

To start the server in development mode:

```bash
npm run dev
```

To start the server in production mode:

```bash
npm start
```

The server will run on the port specified in the `.env` file (default: `3000`).

---

## API Endpoints

### Base URL

```
http://localhost:<PORT>/api
```

### Endpoints

#### `<resource>` (e.g. user, product)

- **POST** `/api/<resource>` - Create a new `<resource>`.
- **GET** `/api/<resource>` - Get all `<resource>` records.
- **GET** `/api/<resource>/:id` - Get a specific `<resource>` by ID.
- **PUT** `/api/<resource>/:id` - Update an existing `<resource>` by ID.
- **DELETE** `/api/<resource>/:id` - Delete a `<resource>` by ID.

---

## Error Handling

The API returns errors in the following JSON format:

```json
{
  "error": {
    "message": "Error message here"
  }
}
```

- **404 Not Found**: Returned when a resource is not found.
- **400 Bad Request**: Returned for invalid input.
- **409 Conflict**: Returned for resource state conflicts.
- **503 Service Unavailable**: Returned for server errors.
- **500 Internal Server Error**: Returned for unexpected server errors.

---

<!-- ## Authentication
(Include this section if your API requires authentication.)

- **Authentication Method**: (e.g., API Key, JWT, OAuth2)
- **How to Authenticate**:
  - Include an example of how to authenticate requests.

---
 -->

## Development

### Code Structure

```
/src
├── /config         # App configuration
├── /middleware     # Custom middleware
├── /models         # Sequelize models
├── /routes         # Route definitions
├── /utils          # Utility functions
├── app.js          # Express app
├── index.js        # App entrypoint
├── orm.js          # Sequelize initialization
```

### Scripts

- **Start the server**:
  ```bash
  npm start
  ```
- **Run in development mode**:
  ```bash
  npm run dev
  ```
- **Run tests**:
  ```bash
  npm test
  ```

---

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/<your-feature-name>
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/<your-feature-name>
   ```
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For questions or support, please contact:

- **Name**: `Madeline Dexter`
- **Email**: `madeline.dexter@icloud.com`
- **GitHub**: [Your GitHub Profile](https://github.com/madeline-dexter)
