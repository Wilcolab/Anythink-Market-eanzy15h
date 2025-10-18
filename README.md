Node.js Server

This project contains a simple Node.js (Express) server that manages a task list. It provides two routes for adding and retrieving tasks and can be run locally or in Docker. The GET route can be accessed directly in a browser.

## Project Structure

- `node-server/src/index.js`: Express server implementation with two routes for managing tasks.
- `node-server/package.json`: Node.js project metadata, dependencies and npm scripts.
- `node-server/Dockerfile`: Docker image definition for the Node.js server.
- `docker-compose.yml`: Defines services and how to run them together (includes the Node.js service).

## Getting Started

Run with Docker (recommended):

- Build and start containers:

  ```shell
  docker compose up
  ```

- The Node.js server will be available at http://localhost:8001 (adjust port if your Docker config uses a different one).

Run locally with Node.js:

- From the repository root:

  ```shell
  cd node-server
  npm install
  npm start
  ```

- Open your browser to http://localhost:8001.

## API Routes

- `POST /tasks` — Add a task. Send JSON body like:
  ```json
  { "task": "Buy milk" }
  ```
  Returns the created task or the updated list depending on implementation.

- `GET /tasks` — Retrieve the task list. This route returns JSON and can be opened directly in a browser (e.g., http://localhost:8001/tasks).

Note: If your app binds to a different port, use that port in the browser URL. If running behind Docker, ensure ports are published in `docker-compose.yml` or the `docker run` command. Python Server

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
