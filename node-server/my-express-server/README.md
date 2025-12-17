# My Express Server

This is a simple Express server project that listens on port 8001. It is set up to use `nodemon` for automatic code reloading during development.

## Project Structure

```
my-express-server
├── src
│   └── server.js        # Entry point of the application
├── Dockerfile           # Dockerfile to build the application image
├── package.json         # npm configuration file
├── .gitignore           # Files and directories to be ignored by Git
└── README.md            # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd my-express-server
   ```

2. **Install dependencies**:
   This project uses `yarn` for package management. Make sure you have `yarn` installed, then run:
   ```bash
   yarn install
   ```

3. **Run the server**:
   To start the server with automatic reloading, use:
   ```bash
   yarn start
   ```

   The server will be running on `http://localhost:8001`.

## Docker

To build and run the application using Docker, follow these steps:

1. **Build the Docker image**:
   ```bash
   docker build -t my-express-server .
   ```

2. **Run the Docker container**:
   ```bash
   docker run -p 8001:8001 my-express-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine.

## License

This project is licensed under the MIT License.