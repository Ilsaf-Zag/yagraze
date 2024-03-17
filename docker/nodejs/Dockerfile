FROM node:21

# Install dependencies
RUN apt-get update && apt-get install -y \
    vim \
    zip \
    unzip \
    curl


EXPOSE 5173

CMD ["sh", "-c", "npm install && npm run build"]
