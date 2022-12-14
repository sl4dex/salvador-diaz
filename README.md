# Portfolio Website
Hi!
Welcome to my portfolio web application, it is built using the MERN stack architecture (MongoDB, Express, React, Node) and bundled using Webpack.
This project showcases most of the fun things I learned in the Fullstack Open 2022 course, check it out!
\
&nbsp;
🌎 [salvadordiaz.rocks](https://salvadordiaz.rocks/)
\
&nbsp;
# Website contents

## /
Home page with two sections: 
1. A copy of my Curriculum, and 
2. Info about this project, extracted directly from the README.md using the Github API.
\
&nbsp;

## /forum
Blog CRUD where people can interact with blogs.
\
&nbsp;

## /memes
A random meme that I liked and saved in my mongoDB database.
\
&nbsp;

## /register /login

User authentication and authorization using JSON Web Tokens.
\
&nbsp;

# File structure
We separate our backend (server) and frontend (client) in two different folders, each one with its own node_modules.
\
&nbsp;

## backend
- **index.js** -> entry point of the backend.
- **routes** -> API endpoints.
- **models** -> MongoDB database schemas.
- **middleware** -> not really middleware but contains a jwt helper function.

## frontend
- **build** -> bundled frontend with webpack.
  - **index.html** -> empty html skeleton with a single div with an id of root.
  - **main.js** -> all React JSX bundled into a single vanilla javascript file. Is called by index.html.
- **src** -> React frontend.
  - **assets** -> styled components and images.
  - **components** -> React components.
  - **redux** -> Redux-toolkit slices and Redux store .
  - **services** -> axios requests to the backend API.
- **App.js** -> top React component that calls all other components as subcomponents.
- **index.js** -> puts App compoenent inside root div.
- **webpack.config.js** -> config for Webpack bundling.
\
&nbsp;

# DB Schema

<img width="500" alt="DBSchema" src="https://user-images.githubusercontent.com/22855312/207488949-c1d32f63-f699-4660-8750-ef34265a0500.png">

&nbsp;
\
&nbsp;

# Some of the Packages

- **webpack** Module bundler and minifier for the frontend.
- **eslint:** Code linter installed in frontend and backend separately.
- **mongoose:** Object Data Modeling (ODM) library for MongoDB and Node.js
- **dotenv:** Loads environment variables from a .env file into process.env
- **react-router-dom:** Allows client side routing: updates the URL from a link click without making a request from the server.
- **styled-components:** Allows to write CSS-in-JS code to style React components.
- **react-redux & redux toolkit** Allows global state, at the moment only used for the notidications.
- **react-markdown:** Renders markdown into a React component.
- **axios:** for making HTTP requests, I could use fetch but it's a matter of habit.
- **bcrypt:** string hashing library, I used it for password authentication.
- **jsonwebtoken:** Allows user authorization with tokens.
\
&nbsp;

# Notes
- Frontend was prototyped with [Figma](https://www.figma.com/file/SsXrI0iPo1bbsZCgQWHHqr/salvador-diaz.io?node-id=3%3A3&t=58m37SeeebSK8zcw-1).
- Website deployment with SSL was managed with [Render](https://render.com/).
- Domain name and DNS configured in [Name.com](https://www.name.com/).
\
&nbsp;
\
&nbsp;

Made with ❤ by me.