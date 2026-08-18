import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getMovieById } from "../../services/movieService";

import {
  trendingMovies,
  popularMovies,
  topRatedMovies,
  comedyMovies,
  romanticMovies,
  actionMovies,
} from "../../utils/movieData";

import {
  getMyList,
  addToMyList,
  removeFromMyList,
} from "../../services/myListService";

import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [isInMyList, setIsInMyList] = useState(false);

  useEffect(() => {
    loadMovie();
  }, [id]);

  const loadMovie = async () => {
    try {
      const backendMovie = await getMovieById(id);

      if (!backendMovie) {
        return;
      }

      const frontendMovies = [
        ...trendingMovies,
        ...popularMovies,
        ...topRatedMovies,
        ...comedyMovies,
        ...romanticMovies,
        ...actionMovies,
      ];

      const backendTitle = backendMovie.title
        .toLowerCase()
        .replace(/^the\s+/, "")
        .trim();

      const frontendMovie = frontendMovies.find((item) => {
        const frontendTitle = item.title
          .toLowerCase()
          .replace(/^the\s+/, "")
          .trim();

        return frontendTitle === backendTitle;
      });

      const finalMovie = {
        ...backendMovie,

        poster: frontendMovie
          ? frontendMovie.poster
          : null,

        video: frontendMovie
          ? frontendMovie.video
          : null,

        trailerId: frontendMovie
          ? frontendMovie.trailerId
          : null,
      };

      setMovie(finalMovie);

      const storedUser = localStorage.getItem("user");

      if (!storedUser) {
        setIsInMyList(false);
        return;
      }

      const user = JSON.parse(storedUser);

      const myList = await getMyList(user.id);

      const alreadyAdded = myList.some(
        (item) => item.movieId === backendMovie.id
      );

      setIsInMyList(alreadyAdded);

    } catch (error) {
      console.error("Error loading movie:", error);
    }
  };

  // Add / Remove My List
  const handleMyList = async () => {
    try {
      const storedUser = localStorage.getItem("user");

      if (!storedUser) {
        alert("Please login first");
        navigate("/login");
        return;
      }

      const user = JSON.parse(storedUser);

      if (isInMyList) {
        await removeFromMyList(
          user.id,
          movie.id
        );

        setIsInMyList(false);

        alert("Removed from My List");

      } else {
        await addToMyList(
          user.id,
          movie.id
        );

        setIsInMyList(true);

        alert("Added to My List");
      }

    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  // Play video
  const handlePlay = () => {
    const video =
      document.getElementById("movie-video");

    if (video) {
      video.scrollIntoView({
        behavior: "smooth",
      });

      video.play();
    }
  };

  // Loading
  if (!movie) {
    return (
      <div className="movie-details">
        <div className="details-content">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="movie-details">

      {/* Poster */}
      <div className="details-poster">

        {movie.poster && (
          <img
            src={movie.poster}
            alt={movie.title}
          />
        )}

      </div>

      {/* Movie Information */}
      <div className="details-content">

        <h1>{movie.title}</h1>

        <div className="details-info">

          <span>
            ⭐ {movie.rating}
          </span>

          <span>
            {movie.year}
          </span>

          <span>
            {movie.genre}
          </span>

        </div>

        <p>
          {movie.description}
        </p>

        {/* Buttons */}
        <div className="details-buttons">

          <button
            className="play-btn"
            onClick={handlePlay}
          >
            ▶ Play
          </button>

          <button
            className="list-btn"
            onClick={handleMyList}
          >
            {isInMyList
              ? "✓ Added to My List"
              : "+ My List"}
          </button>

          <button
            className="back-btn"
            onClick={() => navigate("/")}
          >
            ← Back
          </button>

        </div>

      </div>

      {/* Trailer */}
      <div className="video-section">

        <h2>Watch Trailer</h2>

        {movie.trailerId ? (

          <iframe
            id="movie-video"
            className="movie-video"
            src={`https://www.youtube.com/embed/${movie.trailerId}`}
            title={`${movie.title} Trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

        ) : movie.video ? (

          <video
            id="movie-video"
            className="movie-video"
            controls
          >

            <source
              src={movie.video}
              type="video/mp4"
            />

            Your browser does not support the video tag.

          </video>

        ) : (

          <p>Video not available.</p>

        )}

      </div>

    </div>
  );
}

export default MovieDetails;