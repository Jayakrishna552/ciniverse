import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { getMovies } from "../../services/movieService";

import {
  trendingMovies,
  popularMovies,
  topRatedMovies,
  comedyMovies,
  romanticMovies,
  actionMovies,
} from "../../utils/movieData";

import "./Search.css";

function Search() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const query = searchParams.get("query") || "";


  useEffect(() => {
    loadMovies();
  }, []);


  const loadMovies = async () => {

    try {

      setLoading(true);

      // Get movies from Spring Boot
      const data = await getMovies();

      // All frontend movies
      const frontendMovies = [
        ...trendingMovies,
        ...popularMovies,
        ...topRatedMovies,
        ...comedyMovies,
        ...romanticMovies,
        ...actionMovies,
      ];


      // Combine backend movie data
      // with frontend poster/video
      const moviesWithPosters = data.map(
        (backendMovie) => {

          const backendTitle =
            backendMovie.title
              .toLowerCase()
              .replace(/^the\s+/, "")
              .trim();


          const frontendMovie =
            frontendMovies.find((movie) => {

              const frontendTitle =
                movie.title
                  .toLowerCase()
                  .replace(/^the\s+/, "")
                  .trim();

              return frontendTitle === backendTitle;
            });


          return {

            ...backendMovie,

            // Use frontend poster
            poster: frontendMovie
              ? frontendMovie.poster
              : null,

            // Use frontend video
            video: frontendMovie
              ? frontendMovie.video
              : backendMovie.video,
          };
        }
      );


      setMovies(moviesWithPosters);

    } catch (error) {

      console.error(
        "Error loading movies:",
        error
      );

    } finally {

      setLoading(false);
    }
  };


  // Search filtering
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title
        .toLowerCase()
        .includes(query.toLowerCase())
  );


  return (

    <div className="search-page">

      <h1>
        Search results for: "{query}"
      </h1>


      {/* Loading */}

      {loading ? (

        <div className="search-loading">

          <h2>Loading movies...</h2>

        </div>

      ) : filteredMovies.length === 0 ? (

        <div className="no-results">

          <h2>No movies found</h2>

          <p>
            Try searching for another movie.
          </p>

        </div>

      ) : (

        <div className="search-results">

          {filteredMovies.map((movie) => (

            <div
              className="search-card"
              key={movie.id}
              onClick={() =>
                navigate(
                  `/movie/${movie.id}`
                )
              }
            >

              {/* Poster */}

              {movie.poster ? (

                <img
                  src={movie.poster}
                  alt={movie.title}
                />

              ) : (

                <div className="poster-error">
                  Poster unavailable
                </div>

              )}


              {/* Movie information */}

              <h3>
                {movie.title}
              </h3>

              <p>
                ⭐ {movie.rating} | {movie.year}
              </p>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Search;