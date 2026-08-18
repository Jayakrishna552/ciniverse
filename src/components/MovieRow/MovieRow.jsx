import { useRef } from "react";
import "./MovieRow.css";
import MovieCard from "../MovieCard/MovieCard";

function MovieRow({ title, movies }) {
  const rowRef = useRef(null);

  const scrollLeft = () => {
    rowRef.current.scrollBy({
      left: -700,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({
      left: 700,
      behavior: "smooth",
    });
  };

  return (
    <section className="movie-row">

      <h2>{title}</h2>

      <div className="movie-container">

        <button
          className="scroll-btn left-btn"
          onClick={scrollLeft}
        >
          ‹
        </button>

        <div
          className="movie-list"
          ref={rowRef}
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>

        <button
          className="scroll-btn right-btn"
          onClick={scrollRight}
        >
          ›
        </button>

      </div>

    </section>
  );
}

export default MovieRow;