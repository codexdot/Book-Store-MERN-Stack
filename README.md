# Book Store MERN Stack Application

This is a full-stack MERN (MongoDB, Express, React, Node.js) application for managing a book store. The application allows users to create, read, update, and delete books.

## Prerequisites

- Node.js
- Docker
- Docker Compose

## Getting Started

### Backend

1. Navigate to the `backend` directory:

    ```sh
    cd backend
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the [backend](http://_vscodecontentref_/1) directory and add the following environment variables:

    ```env
    PORT=5555
    MONGO_URL=mongodb://localhost:27017/books-collection
    ```

4. Start the backend server:

    ```sh
    npm start
    ```

### Frontend

1. Navigate to the [frontend](http://_vscodecontentref_/2) directory:

    ```sh
    cd frontend
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Start the frontend development server:

    ```sh
    npm run dev
    ```

### Docker

.1 Build and start the services using Docker Compose:

    ```sh
    docker-compose up --build
    ```

2. Access the frontend application at `http://localhost:5173` and the backend API at `http://localhost:5555`.

## API Endpoints

### Books

- `POST /books`: Create a new book
- `GET /books`: Get all books
- `GET /books/:id`: Get a book by ID
- `PUT /books/:id`: Update a book by ID
- `DELETE /books/:id`: Delete a book by ID

## Frontend Pages

- `/`: Home page displaying the list of books
- `/books/create`: Create a new book
- `/books/details/:id`: View book details
- `/books/edit/:id`: Edit a book
- `/books/delete/:id`: Delete a book

## Authors

- Yashraj Singh Solanki
- MamadTaheri68

## License

This project is licensed under the ISC License.