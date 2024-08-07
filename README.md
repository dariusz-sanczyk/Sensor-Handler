# Sensor Data Handler

This project is a NestJS application that handles input from temperature and humidity sensors using WebSockets. The data is validated and stored in a MongoDB database. Docker Compose is used for container orchestration.

## Features

- WebSocket server to receive sensor data.
- CRUD operations for sensor data using REST API.
- MongoDB integration using Mongoose.
- Containerized environment using Docker and Docker Compose.

## Prerequisites

- Docker
- Docker Compose
- Node.js (for local development)
- npm (for local development)

### Running the Application

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/sensor-app.git
   cd sensor-app
   ```

2. Build and run the containers:

   ```sh
   docker-compose up --build
   ```

3. The NestJS application will be available at `http://localhost:3000`.

## Running Tests

1. Install dependencies:

   ```sh
   npm install
   ```

2. Run unit tests:

   ```sh
   npm run test
   ```

3. Run end-to-end tests:
   ```sh
   npm run test:e2e
   ```
