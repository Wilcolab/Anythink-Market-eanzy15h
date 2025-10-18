# Express Server Project

This project is a simple Express server that listens on port 8001. It is set up to automatically restart on code changes using `nodemon`. 

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- Yarn (optional, but recommended)
- Docker (for containerization)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd express-server
   ```

2. Install dependencies:
   ```
   yarn install
   ```

### Running the Server

To start the server with automatic restarts, use the following command:
```
yarn start
```

The server will be running at `http://localhost:8001`.

### Docker

To build and run the server using Docker, use the following commands:

1. Build the Docker image:
   ```
   docker build -t express-server .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 express-server
   ```

### License

This project is licensed under the MIT License.