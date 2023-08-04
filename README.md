# Project Title-> Trending Media

# Table of Contents
- Introduction
- Installation
- Usage
- Features
- Dependencies
- Technologies Used
- Contributing
- License

# Introduction

The Trending Media project is a React.js application that allows users to explore trending movies, TV shows, and series. It provides a user-friendly interface to browse through popular entertainment content. The application is built using modern React.js best practices and follows a responsive design to ensure a seamless experience across various devices.

The project implements various features, including authentication with login, register, and logout functionalities. Users can sign up and log in to the application to access personalized content and enjoy additional features. Protected routes are implemented to restrict access to certain pages based on user authentication status, ensuring a secure browsing experience.

Moreover, the Trending Media app integrates with external APIs to fetch up-to-date trending media data, ensuring that users always have access to the latest and most popular content. The application's state management is handled efficiently using the Context API and React hooks like useState, useEffect, useRef, and useNavigate.

# Installation

- 01- Clone the repository using the following command:
     git clone https://github.com/marwan5050/Trending-Media.git

- 02- Navigate to the project directory:
    cd Trending-Media

- 03- Install the required dependencies using npm:
    npm install
  
- 04 Start the development server:
    npm start

- Ensure that you have Node.js and npm (Node Package Manager) installed on your system before proceeding with the installation.

# Usage

Once the Trending Media application is running locally or deployed, you can start exploring trending movies, TV shows, and series. The application offers the following functionalities:

# User Authentication

- Register: New users can create an account by providing their username, email, and password.
- Login: Existing users can log in using their registered email and password.
- Logout: Logged-in users can log out from the application to end their session.

# Trending Media Content

  - Home Page: After logging in, users are redirected to the home page, where they can find trending movies, TV shows, and series.
  - Media Details: Clicking on a media item will lead users to its detailed page, where they can view additional information about the media.

# Protected Routes

- Protected Pages: Certain pages, such as user profile or settings, are protected and require authentication to access. Unauthorized users will be redirected to the login page.

# Responsive Design

- The Trending Media application is designed to be responsive, adapting to various screen sizes and devices.
  
  Feel free to explore the application and interact with its different features.


# Features

- Authentication: Users can register, login, and logout to access the application.
- Authorization: Protected routes control access to certain components based on user authentication status.
- User Welcome: After login, the application greets the user with "Welcome, [username]" message.
- Routing: The application uses react-router-dom v6.1 for smooth navigation between different components.
- API Integration: The app fetches data from external APIs to display trending media content.
- Responsive Design: The user interface is designed to be responsive, ensuring a great user experience on various devices.
- State Management: The project utilizes Context API to manage state across components effectively.

# Dependencies

- 'react-router-dom' v6.1 : For handling routing in the application.
- 'joi' : Used for data validation in the authentication process.
- 'bootstrap5' : For styling and layout.
- 'fontawesome' : For displaying icons.
- 'axios': For making HTTP requests.

# Technologies Used

- React.js: The JavaScript library used to build the user interface.
- React Hooks (useState, useEffect, useRef, useNavigate): For handling component state and lifecycle events.
- Context API: For managing state across components.

# API Documentation

- The Trending Media application relies on external APIs to fetch trending media data. Detailed API documentation can be found at [Link to API Documentation](https://developer.themoviedb.org/docs). The documentation provides information on available endpoints, request parameters, and response formats.


# Contributing

Contributions to the Trending Media project are welcome and encouraged! To contribute, follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Commit your changes and push the branch to your fork.
- Submit a pull request to the main repository.

# License

- The Trending Media project is open-source and distributed under the MIT License.


# Contact Information

For any questions or inquiries, feel free to reach out to the project maintainer:

- Name: Marwan Abdullah
- Email: marwanabdalla471@yahoo.com  // marwanabdalla2015@gmail.com




