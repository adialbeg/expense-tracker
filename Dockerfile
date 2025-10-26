# -------------------------------------------------
# Step 1 — Build the React app
# -------------------------------------------------
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the project
COPY . .

# Build the app for production
RUN npm run build

# -------------------------------------------------
# Step 2 — Serve the built app with a lightweight server
# -------------------------------------------------
FROM nginx:stable-alpine

# Copy React build files to Nginx HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
