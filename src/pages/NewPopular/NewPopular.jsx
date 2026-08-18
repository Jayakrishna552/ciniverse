import Navbar from "../../components/Navbar/Navbar";
import MovieRow from "../../components/MovieRow/MovieRow";

import {
  trendingMovies,
  popularMovies,
  topRatedMovies,
} from "../../utils/movieData";

import "./NewPopular.css";

function NewPopular() {
  return (
    <div className="category-page">

      <Navbar />

      <div className="category-content">

        <h1>New & Popular</h1>

        <MovieRow
          title="New Releases"
          movies={trendingMovies}
        />

        <MovieRow
          title="Popular on Netflix"
          movies={popularMovies}
        />

        <MovieRow
          title="Top Rated"
          movies={topRatedMovies}
        />

      </div>

    </div>
  );
}

export default NewPopular;