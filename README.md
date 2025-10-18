Node.js Server

This project contains an Express-based Node.js server. It provides two routes for managing a simple task list (add a task and retrieve tasks).

## Project Structure

The project has the following files and directories:

- `node-server/src/index.js`: Implementation of the Express server with two routes: one to add a task to an in-memory list and one to retrieve the list.
- `node-server/package.json`: Node dependencies and scripts (start, dev, test, etc.).
- `node-server/Dockerfile`: Dockerfile used to build a Docker image for the Node.js server (installs dependencies and runs the server).
- `docker-compose.yml`: Defines and runs the multi-container application, including the Node.js service.

## Getting Started

To run the Node.js server using Docker:

- Build and start the Docker containers:

  ```shell
  docker compose up
  ```

  This command will build the Docker image for the Node.js server and start the containers defined in `docker-compose.yml`.

- For local development without Docker:

  ```shell
  cd node-server
  npm install
  npm start
  ```

- The Node.js server listens on port 3000 by default (adjustable via environment variables or `docker-compose.yml`).

## API Routes

The Node.js server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details (JSON).
- `GET /tasks`: Retrieves the task list (JSON).

Replace or extend these notes if your implementation uses a different framework, ports, or file layout. Python Server

This project contains a FastAPI server implemented in Python. It provides two routes for managing a task list.

## Project Structure

The project has the following files and directories:

- `python-server/src/main.py`: This file contains the implementation of the FastAPI server with two routes. It handles adding a task to a list and retrieving the list.

- `python-server/src/__init__.py`: This file is an empty file that marks the `src` directory as a Python package.

- `python-server/requirements.txt`: This file lists the dependencies required for the FastAPI server and other dependencies.

- `python-server/Dockerfile`: This file is used to build a Docker image for the FastAPI server. It specifies the base image, copies the source code into the image, installs the dependencies, and sets the command to run the server.

- `docker-compose.yml`: This file is used to define and run multi-container Docker applications. It specifies the services to run, their configurations, and any dependencies between them.

## Getting Started

To run the FastAPI server using Docker, follow these steps:

- Build and start the Docker containers by running the following command:

  ```shell
  docker compose up
  ```

  This command will build the Docker image for the FastAPI server and start the containers defined in the `docker-compose.yml` file.

- The FastAPI server should now be running. You can access at port `8000`.

## API Routes

The FastAPI server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.

- `GET /tasks`: Retrieves the task list.
