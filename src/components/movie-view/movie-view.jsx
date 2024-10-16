import "./movie-view.scss";

export const MovieView = ({ movie, onBackClick }) => {
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
      <button
  onClick={onBackClick}
  className="back-button"
  style={{ cursor: "pointer" }}
>
  Back
</button>
    </div>
  );
};