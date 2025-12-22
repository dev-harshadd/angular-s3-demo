FROM nginx:alpine

# Copy ONLY Angular build output contents
COPY dist/angular-s3-demo/ /usr/share/nginx/html/

# Override default nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
