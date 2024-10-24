***

## MyFlix Movie Client App

***

***Overview***
MyFlix is a movie database application where users can browse through a collection of movies, view details about each movie, sign up, log in, and manage their personal profiles. Users can add or remove movies from their list of favorites, and the app provides a search function to filter through the available movie titles. The app is built using React, Redux for state management, and Bootstrap for styling.

***Features***
User authentication (Login, Signup)
Browse and search through a movie list
View information about a selected movie
Add or remove movies from your favorites
Manage your user profile

***Tech Stack***
Frontend: React.js, React Router
State Management: Redux, Redux Toolkit
Styling: Bootstrap, SCSS
Backend: MyFlix API
Routing: React Router DOM

***Site Images***

**Home Page**

![App Screenshot](./Images/main-view.png")

**Profile Page**

![App Screenshot](./Images/profile-view.png") 

Link to App: https://myflixfm.netlify.app/

***Folder Structure Breakdown***
components/: Contains all reusable UI components.
main-view/: The main view of the app, routing between different views like the movie list and profile view.
login-view/, signup-view/: Handles user authentication.
movies-list/, movies-filter/: Displays and filters movies.
profile-view/: Allows users to manage their profiles and favorite movies.
redux/: Manages global state using Redux.
reducers/movies.js: Handles the movies and filter states.
store.js: Configures and exports the Redux store.

***If You Wish To Contribute***

Please feel free to contribute! just fork this repository and make a pull request.

***License***

This project is licensed under the MIT License.
