import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  useEffect(() => {
    if (!token) return;
    
    fetch("https://my-flix-cf-fd6a3633859c.herokuapp.com/movies",{
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.map((movie) => {
          return {
            _id: movie._id,
            Title: movie.Title,
            Description: movie.Description,
            ImagePath: movie.ImagePath,
            Director: movie.Director
          };
        });
        setMovies(moviesFromApi);
      })
      .catch((error) => console.error('Error fetching movies:', error));
    }, [token]);
     
      
        if (!user) {
          return (
            <Row className="justify-content-md-center">
            <Col md={5}>
            <u>Login Here</u>
              <LoginView onLoggedIn={(user, token) => {
                setUser(user);
                setToken(token);
              }} />
              <u>Signup Here</u>
              <SignupView />
            </Col>
            </Row>
          );
        }

  if (selectedMovie) {
    return (
      <Row className="justify-content-md-center">
      <Col md={8} style={{ border: "2px solid black" }}>
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
      </Col>
      </Row>
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <Row className="justify-content-md-center">
      {movies.map((movie) => (
         <Col className = 'md5' key={movie._id} md={3}>
         <MovieCard
           movie={movie}
           onMovieClick={(newSelectedMovie) => {
             setSelectedMovie(newSelectedMovie);
           }}
         />
         </Col>
      ))}
      <button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>
    </Row>
  );
};