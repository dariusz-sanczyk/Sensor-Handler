# Sensor App

This project is a NestJS application that handles input from temperature and humidity sensors using WebSockets. The data is validated and stored in a MongoDB database. Docker Compose is used for container orchestration.

## Setup

### Prerequisites

- Docker
- Docker Compose

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
