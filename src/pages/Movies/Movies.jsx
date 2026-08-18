import Navbar from "../../components/Navbar/Navbar";
import MovieRow from "../../components/MovieRow/MovieRow";

import {
  trendingMovies,
  popularMovies,
  topRatedMovies,
  comedyMovies,
  romanticMovies,
  actionMovies,
} from "../../utils/movieData";

import "./Movies.css";

function Movies() {
  return (
    <div className="category-page">

      <Navbar />

      <div className="category-content">

        <h1>Movies</h1>

        <MovieRow
          title="Trending Movies"
          movies={trendingMovies}
        />

        <MovieRow
          title="Popular Movies"
          movies={popularMovies}
        />

        <MovieRow
          title="Top Rated Movies"
          movies={topRatedMovies}
        />

        <MovieRow
          title="Comedy Movies"
          movies={comedyMovies}
        />

        <MovieRow
          title="Romantic Movies"
          movies={romanticMovies}
        />

        <MovieRow
          title="Action Movies"
          movies={actionMovies}
        />

      </div>

    </div>
  );
}

export default Movies;