import Navbar from "../../components/Navbar/Navbar";
import MovieRow from "../../components/MovieRow/MovieRow";

import {
  trendingMovies,
  popularMovies,
  comedyMovies,
  romanticMovies,
} from "../../utils/movieData";

import "./TVShows.css";

function TVShows() {
  return (
    <div className="category-page">

      <Navbar />

      <div className="category-content">

        <h1>TV Shows</h1>

        <MovieRow
          title="Popular TV Shows"
          movies={popularMovies}
        />

        <MovieRow
          title="Trending Shows"
          movies={trendingMovies}
        />

        <MovieRow
          title="Comedy Shows"
          movies={comedyMovies}
        />

        <MovieRow
          title="Romantic Shows"
          movies={romanticMovies}
        />

      </div>

    </div>
  );
}

export default TVShows;