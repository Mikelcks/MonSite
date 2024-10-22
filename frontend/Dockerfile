# Use an official Node.js runtime as a parent image
FROM node:18-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the app for production
RUN npm run build

# Stage 2: Use NGINX to serve the build
FROM nginx:alpine

# Copy the build folder to NGINX's web directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
