import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getMyList,
  removeFromMyList,
} from "../../services/myListService";

import { getMovieById } from "../../services/movieService";

import {
  trendingMovies,
  popularMovies,
  topRatedMovies,
  comedyMovies,
  romanticMovies,
  actionMovies,
} from "../../utils/movieData";

import "./MyList.css";

function MyList() {
  const navigate = useNavigate();

  const [myList, setMyList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMyList();
  }, []);

  const loadMyList = async () => {
    try {
      const storedUser = localStorage.getItem("user");

      if (!storedUser) {
        navigate("/login");
        return;
      }

      const user = JSON.parse(storedUser);

      // Get saved movies from MySQL
      const savedMovies = await getMyList(user.id);

      // All frontend movie data
      const frontendMovies = [
        ...trendingMovies,
        ...popularMovies,
        ...topRatedMovies,
        ...comedyMovies,
        ...romanticMovies,
        ...actionMovies,
      ];

      // Get complete movie information
      const movieDetails = await Promise.all(
        savedMovies.map(async (savedMovie) => {

          const backendMovie = await getMovieById(
            savedMovie.movieId
          );

          if (!backendMovie) {
            return null;
          }

          // Backend title
          const backendTitle = backendMovie.title
            .toLowerCase()
            .replace(/^the\s+/, "")
            .trim();

          // Find matching frontend movie
          const frontendMovie = frontendMovies.find(
            (item) => {

              const frontendTitle = item.title
                .toLowerCase()
                .replace(/^the\s+/, "")
                .trim();

              return frontendTitle === backendTitle;
            }
          );

          // Combine backend + frontend information
          return {
            ...backendMovie,

            // IMPORTANT: use React imported poster
            poster: frontendMovie
              ? frontendMovie.poster
              : null,

            // Use React video
            video: frontendMovie
              ? frontendMovie.video
              : null,

            // Use frontend information when available
            rating: frontendMovie
              ? frontendMovie.rating
              : backendMovie.rating,

            year: frontendMovie
              ? frontendMovie.year
              : backendMovie.year,

            genre: frontendMovie
              ? frontendMovie.genre
              : backendMovie.genre,

            description: frontendMovie
              ? frontendMovie.description
              : backendMovie.description,
          };
        })
      );

      setMyList(
        movieDetails.filter(
          (movie) => movie !== null
        )
      );

    } catch (error) {

      console.error(
        "Error loading My List:",
        error
      );

    } finally {

      setLoading(false);

    }
  };


  // Remove movie
  const removeMovie = async (movieId) => {

    try {

      const storedUser =
        localStorage.getItem("user");

      if (!storedUser) {
        navigate("/login");
        return;
      }

      const user = JSON.parse(storedUser);

      await removeFromMyList(
        user.id,
        movieId
      );

      // Remove from screen
      setMyList((previousList) =>
        previousList.filter(
          (movie) => movie.id !== movieId
        )
      );

    } catch (error) {

      console.error(
        "Error removing movie:",
        error
      );

      alert("Failed to remove movie");
    }
  };


  // Loading
  if (loading) {

    return (
      <div className="my-list-page">

        <h1>My List</h1>

        <div className="empty-list">

          <h2>Loading...</h2>

        </div>

      </div>
    );
  }


  return (
    <div className="my-list-page">

      <h1>My List</h1>

      {myList.length === 0 ? (

        <div className="empty-list">

          <h2>Your list is empty</h2>

          <p>
            Movies you add to My List
            will appear here.
          </p>

          <button
            onClick={() => navigate("/")}
          >
            Browse Movies
          </button>

        </div>

      ) : (

        <div className="my-list-grid">

          {myList.map((movie) => (

            <div
              className="my-list-card"
              key={movie.id}
            >

              {/* POSTER */}

              {movie.poster ? (

                <img
                  src={movie.poster}
                  alt={movie.title}
                  onClick={() =>
                    navigate(
                      `/movie/${movie.id}`
                    )
                  }
                />

              ) : (

                <div className="poster-error">
                  Poster unavailable
                </div>

              )}


              {/* TITLE */}

              <h3>
                {movie.title}
              </h3>


              {/* INFO */}

              <p>
                ⭐ {movie.rating} | {movie.year}
              </p>


              {/* REMOVE */}

              <button
                onClick={() =>
                  removeMovie(movie.id)
                }
              >
                − Remove
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default MyList;