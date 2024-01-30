# Use an official Node runtime as the base image
FROM node:14 AS builder

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the rest of the application to the working directory
COPY . .

# Copy the configuration files to the working directory
COPY ./config ./config

# Copy the swagger.yaml file to the working directory
COPY ./swagger.yaml ./swagger.yaml

# Build the TypeScript files
RUN npm run build

# Stage 2: Create the final image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy the compiled JavaScript files from the builder stage
COPY --from=builder /app/dist ./dist

# Copy the configuration files from the builder stage
COPY --from=builder /app/config ./config


# Copy the swagger.yaml file from the builder stage
COPY --from=builder /app/swagger.yaml ./swagger.yaml

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install only the production dependencies
RUN npm install --only=production

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run the app when the container launches
CMD ["node", "dist/src/server.js"]
