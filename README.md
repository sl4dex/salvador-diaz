# Portfolio Website
Hi!
Welcome to my portfolio web application, it is built using the MERN stack architecture (MongoDB, Express, React, Node) and bundled using Webpack.
This project showcases most of the fun things I learned in the Fullstack Open 2022 course, which you can see here.
\
&nbsp;

# Website contents

## /
Home page with two sections: 
1. A copy of my Curriculum, and 
2. Info about this project, extracted directly from the README.md using the Github API
\
&nbsp;

## /memes
A random meme that I liked and saved in my mongoDB database
\
&nbsp;

## /forum
Blog CRUD where people can interact with blogs.
\
&nbsp;

# File structure
We separate our backend (server) and frontend (client) in two different folders, each one with its own node_modules.
\
&nbsp;

## backend
index.js -> entry point of the backend
- routes -> API endpoints
- models -> MongoDB database schema
-

## frontend
- build -> bundled frontend with webpack
- src -> React frontend
  - assets -> styled components and images
  - components
- webpack.config.js
\
&nbsp;

# DB Schema
in progress...
\
&nbsp;
\
&nbsp;

# Packages / Dependencies

- **ESLint:** Code linter installed in frontend and backend separately
- **dotenv:** Loads environment variables from a .env file into process.env
- **react-router-dom:** Allows client side routing: updates the URL from a link click without making a request from the server.
- **styled-components:** Allows to write CSS-in-JS code to style React components
- **react-markdown:** Renders markdown into a React component
- **axios:** for making HTTP requests, I could use fetch but it's a matter of habit

# Notes
- Frontend was prototyped with Figma
- DB schema was prototyped with
\
&nbsp;
\
&nbsp;

Made with ❤ by me