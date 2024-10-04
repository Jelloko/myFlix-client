export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <div>
        <img src={movie.ImagePath} />
        </div>
      <div>
        <span>id: </span>
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
        <span>{movie.Name}</span>
      </div>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};