# Step 1: Use the official Nginx image as the base image
FROM nginx:alpine

# Step 2: Copy the HTML and image files into the Nginx web directory
COPY index.html /usr/share/nginx/html/index.html
COPY images /usr/share/nginx/html/images

# Step 3: Expose port 80
EXPOSE 80

# Step 4: Start Nginx
CMD ["nginx", "-g", "daemon off;"]
