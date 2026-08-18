import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleMovieClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div
      className="movie-card"
      onClick={handleMovieClick}
    >
      <img
        src={movie.poster}
        alt={movie.title}
      />

      <h3>{movie.title}</h3>

      <p>
        ⭐ {movie.rating} | {movie.year}
      </p>
    </div>
  );
}

export default MovieCard;