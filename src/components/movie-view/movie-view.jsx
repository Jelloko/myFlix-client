import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./movie-view.scss";

export const MovieView = ({ movie }) => {
  const { movie_id } = useParams();

  const movie = movie.find((b) => b.id === movie_id);


  return (
    <div>
      <div>
        <img w-100 src={movie.ImagePath} />
        </div>
      <div>
        <span>_id: </span>
        <span>{movie._id}</span>
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.Title}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.Description}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.Director.Name}</span>
      </div>
      <Link to={`/`}>
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};