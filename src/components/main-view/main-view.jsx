import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

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
        console.log(data);
      });
    }, [token]);
        const moviesFromApi = data.map((movie) => {
          return {
            _id: movie._id,
            Title: movie.Title,
            Description: movie.Description,
            ImagePath: movie.ImagePath,
            Director: movie.Director_Name?.[0],
          };
        });

        setMovies(moviesFromApi);

        if (!user) {
          return (
            <>
              <LoginView onLoggedIn={(user, token) => {
                setUser(user);
                setToken(token);
              }} />
              or
              <SignupView />
            </>
          );
        }

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  <button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie._id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
