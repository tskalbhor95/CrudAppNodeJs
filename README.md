
# CRUD App with Node.js and TypeScript

## Description

This CRUD (Create, Read, Update, Delete) App is built using Node.js and TypeScript. It provides basic functionality to perform CRUD operations on a (sqlite3)database.

## Installation

To install the necessary dependencies, run:

```bash
npm install
```

## Usage

For development, you can run the following commands in sequence:

```bash
npm run clean
```

```bash
npm run build
```

```bash
npm run start
```

This will compile the TypeScript code and start the server.

## Scripts

- **start**: Starts the server.
- **build**: Compiles TypeScript code to JavaScript.
- **clean**: Removes the `dist` directory.
- **lint**: Lints TypeScript code using ESLint.
- **lint:fix**: Lints and fixes TypeScript code using ESLint.
- **test**: Placeholder for running tests.




## Docker

This project includes a Dockerfile for easy deployment. To build the Docker image,

run: ``docker build -t crudappnodejs``

This will create a Docker image named `crudappnodejs`.

To run the Docker container, 
use:
``docker run -p 8080:8080 crudappnodejs``

his will start a Docker container and map port 8080 inside the Docker container to port 8080 on your host machine.

Please note that you need to have Docker installed on your machine to use these commands.
Please replace `crudappnodejs` with the name of your Docker image.

## API Endpoints

This API provides the following endpoints:

### GET /posts

Get all posts.

#### Response

- `200`: Successful response. Returns an array of posts.
- `400`: Bad request. The request was invalid or cannot be served.

### POST /posts

Create a new post.

#### Request Body
#### Responses

- `201`: Post created. Returns the created post.
- `500`: Internal server error. An error occurred while processing the request.

### DELETE /posts/{id}

Delete a post.

#### Parameters

- `id`: ID of the post to delete.

#### Responses

- `200`: Post deleted.
- `500`: Internal server error. An error occurred while processing the request.

### PUT /posts/{id}

Update a post.

#### Parameters

- `id`: ID of the post to update.

#### Request Body

#### Responses

- `200`: Post updated. Returns the updated post.
- `500`: Internal server error. An error occurred while processing the request.
## Dependencies

- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **sqlite3**: SQLite3 bindings for Node.js.
- **@types/express**: TypeScript definitions for Express.
- **@types/sqlite3**: TypeScript definitions for SQLite3.

## Dev Dependencies

- **typescript**: TypeScript is a language for application-scale JavaScript.
- **eslint**: Find and fix problems in your JavaScript/TypeScript code.
- **@typescript-eslint/eslint-plugin**: ESLint plugin for TypeScript.
- **@typescript-eslint/parser**: Parser for TypeScript.
- **eslint-config-standard-with-typescript**: ESLint configuration for TypeScript.
- **eslint-plugin-import**: ESLint plugin for linting import/export syntax.
- **eslint-plugin-n**: ESLint plugin to enforce newline consistency.
- **eslint-plugin-promise**: ESLint plugin for linting Promise objects.

## Author

- **Tushar Kalbhor**

## License

This project is licensed under the ISC License.

---
