# bbl-backend-api-server

This project is a Node.js server written in TypeScript, using Express.js for routing. It features a secure authentication mechanism using OpenID Connect (OIDC) and integrates with a MySQL database for data persistence.

## Features

- **Node.js and TypeScript**: Server-side logic written in TypeScript, leveraging Node.js for the runtime environment.
- **Express.js**: Utilization of Express.js for API routing.
- **OpenID Connect Authentication**: Secured routes using OIDC with configurations for Auth0.
- **API Endpoints**: Two main API routes (`/users` and `/posts`) with capabilities for CRUD operations and filtering.
- **MySQL Integration**: Data persistence using MySQL.

## Authentication Configuration

The server uses the following OIDC configurations for authentication:

- **Discovery Endpoint**: `https://dev-yg.us.auth0.com/.well-known/openid-configuration`
- **Client ID**: `H9F6QG5SzTKMv0tbmgxLj9LjG1EKVllA`
- **Callback URL**: `http://localhost:3000/callback`
- **Logout URL**: `http://localhost:3000`
- **Response Type**: `id_token`
- **Response Mode**: `form_post`
- **Scope**: `openid profile email`

## Test User

- **Email**: candidate@test.com
- **Password**: @password1234

## API Routes

The server includes the following routes:

- `/users`: Perform operations related to user data.
- `/posts`: Handle actions on post data.

Each route supports the following operations:

- Get a resource
- List all resources
- Create a resource
- Update a resource
- Patch a resource
- Delete a resource
- Filter resources

## MySQL Setup

The server is configured to connect to a MySQL database with the following details:

- **Connection String**: `mysql://boon:abcd1234@127.0.0.1/platform`
- **Database Name**: `platform`
- **Tables**: `users`, `posts`
- **Username**: `boon`
- **Password**: `abcd1234`

Note: Ensure the MySQL server is installed and running on the same machine.

## Getting Started

To get the server running:

1. Clone the repository.
2. Install dependencies:
```
npm install
```
4. Start the server:
```
npm start
```

## Additional Notes

- The code for integrating with the MySQL server is commented within each router in the `index.ts` file.
- The server requires a MySQL instance running with the specified configuration.
