import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Shawshank Redemption",
      image:
        "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
      Director: "Frank Darabont"
    },
    {
      id: 2,
      title: "Godzilla Minus One",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Godzilla_Minus_One_Poster.jpeg/220px-Godzilla_Minus_One_Poster.jpeg",
      Director: "Takashi Yamazaki"
    },
    {
      id: 3,
      title: "The Lord of the Rings: The Return of the King",
      image:
        "https://upload.wikimedia.org/wikipedia/en/4/48/Lord_Rings_Return_King.jpg",
      Director: "Peter Jackson"
    },
    {
      id: 4,
      title: "Saving Private Ryan",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Saving_Private_Ryan_poster.jpg/220px-Saving_Private_Ryan_poster.jpg",
      Director: "Steven Spielberg"
    },
    {
      id: 5,
      title: "Jaws",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Jaws_movie_poster.jpg/220px-Jaws_movie_poster.jpg",
      Director: "Steven Spielberg"
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
}