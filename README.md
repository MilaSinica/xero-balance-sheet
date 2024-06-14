# Show Me The Money

The goal of the project is to build a simple one page application to display the Balance Sheet Report from [Xero](https://www.xero.com/au/).

## Table of Contents

1. [Setup](#setup)
2. [Backend](#backend)
3. [Docker](#docker)
4. [Frontend](#frontend)
5. [Contributing](#contributing)
6. [License](#license)


## Setup

To get started with this project, start by cloning repository:

<pre>
git clone https://github.com/MilaSinica/xero-balance-sheet.git
</pre>

## Backend

Running the Backend Locally

- Navigate to the backend directory:

<pre>
cd server
</pre>

- Install backend dependencies:

<pre>
npm install
</pre>

- Start the backend server:

<pre>
npm start
</pre>

The backend server should now be running on http://localhost:3001.

## Docker

- Pull the Docker image:

<pre>
docker pull jaypeng2015/show-me-the-money
</pre>

- Build the Docker image:

<pre>
docker build -t jaypeng2015/show-me-the-money
</pre>

- Run the Docker container:

<pre>
docker run -p 3000:3000 jaypeng2015/show-me-the-money
</pre>

The backend server should now be running inside a Docker container accessible at http://localhost:3000.

## Frontend

Running the Frontend Locally

- Navigate to the frontend directory:

<pre>
cd client
</pre>

- Install frontend dependencies:

<pre>
npm install
</pre>

- Start the frontend development server:

<pre>
npm start
</pre>

The frontend should now be running on http://localhost:3002.

## Contributing

Contributions are welcome! Feel free to submit pull requests.
