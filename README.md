
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
npm run dev
```
This will clean the dist repo, compile the TypeScript code and start the server.

## Scripts

- **start**: Starts the server.
- **build**: Compiles TypeScript code to JavaScript.
- **clean**: Removes the `dist` directory.
- **dev**: Cleans & compiles TypeScript code and starts the server.
- **lint**: Lints TypeScript code using ESLint.
- **lint:fix**: Lints and fixes TypeScript code using ESLint.
- **test**: Runs test cases.




## Docker

This project includes a Dockerfile for easy deployment. To build the Docker image,

run: ``docker build -t crudappnodejs .``

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
- `500`: Internal server error. An error occurred while processing the request.

### POST /posts

Create a new post.

#### Request Body
#### Responses

- `201`: Post created..
- `500`: Internal server error. An error occurred while processing the request.

### GET /posts/{id}

get a post by id.

#### Parameters

- `id`: ID of the post.
#### Response

- `200`: Successful response with post.
- `404`: Error - post not found.
- `500`: Internal server error. An error occurred while processing the request.


### DELETE /posts/{id}

Delete a post.

#### Parameters

- `id`: ID of the post to delete.

#### Responses

- `204`: Post deleted.
- `500`: Internal server error. An error occurred while processing the request.

### PUT /posts/{id}

Update a post.

#### Parameters

- `id`: ID of the post to update.

#### Request Body

#### Responses

- `200`: Post updated.
- `500`: Internal server error. An error occurred while processing the request.
## Dependencies

- **@types/sqlite3**: Provides TypeScript type definitions for SQLite3.
- **config**: Simplifies the creation of configuration files and loading of configuration data.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.js.
- **express**: Web application framework for Node.js, simplifying the creation of APIs and web servers.
- **http-status-codes**: Library providing a convenient way to access HTTP status codes.
- **js-yaml**: YAML parser and serializer for JavaScript.
- **sqlite3**: SQLite3 bindings for Node.js, allowing interaction with SQLite databases.
- **supertest**: Library for testing HTTP servers in Node.js.
- **swagger-jsdoc**: Tool to generate Swagger/OpenAPI documentation from JSDoc comments.
- **swagger-ui-express**: Middleware to serve Swagger UI for Express.js, facilitating API documentation.
- **ts-node**: TypeScript execution environment and REPL for Node.js.
- **tsx**: TypeScript tooling for JSX syntax.
## Dev Dependencies

- **@types/chai**: Provides TypeScript type definitions for Chai assertion library.
- **@types/chai-http**: Provides TypeScript type definitions for Chai HTTP plugin.
- **@types/config**: TypeScript type definitions for the config package.
- **@types/cors**: TypeScript type definitions for Cross-Origin Resource Sharing (CORS) middleware.
- **@types/express**: TypeScript type definitions for Express.js.
- **@types/js-yaml**: TypeScript type definitions for js-yaml YAML parser and serializer.
- **@types/mocha**: TypeScript type definitions for Mocha testing framework.
- **@types/node**: TypeScript type definitions for Node.js.
- **@types/sinon**: TypeScript type definitions for Sinon.js mocking framework.
- **@types/supertest**: TypeScript type definitions for Supertest HTTP testing library.
- **@types/swagger-ui-express**: TypeScript type definitions for Swagger UI Express middleware.
- **@typescript-eslint/eslint-plugin**: ESLint plugin for TypeScript.
- **@typescript-eslint/parser**: Parser for TypeScript ESLint.
- **chai**: BDD / TDD assertion library for Node.js and the browser.
- **chai-http**: HTTP integration testing with Chai assertions.
- **eslint**: A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- **eslint-config-standard-with-typescript**: ESLint shareable config for JavaScript and TypeScript.
- **eslint-plugin-import**: ESLint plugin with rules that help validate proper imports.
- **eslint-plugin-n**: ESLint plugin to enforce usage of Node.js-style imports/exports in modules.
- **eslint-plugin-promise**: ESLint plugin to enforce best practices for JavaScript promises.
- **husky**: Git hooks made easy.
- **lint-staged**: Run linters on git staged files.
- **mocha**: Simple, flexible, fun JavaScript test framework for Node.js & The Browser.
- **nyc**: Command-line client for Istanbul, the code coverage tool.
- **sinon**: Test spies, stubs, and mocks for JavaScript.
- **typescript**: TypeScript is a superset of JavaScript that compiles to clean JavaScript output.

## Author

- **Tushar Kalbhor**

## License

This project is licensed under the ISC License.

---
