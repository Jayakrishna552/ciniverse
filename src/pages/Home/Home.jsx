import Navbar from "../../components/Navbar/Navbar";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MovieRow from "../../components/MovieRow/MovieRow";

import {
  trendingMovies,
  popularMovies,
  topRatedMovies,
  comedyMovies,
  romanticMovies,
  actionMovies,
} from "../../utils/movieData";

function Home() {
  return (
    <>
      <Navbar />

      <HeroBanner />

      <MovieRow
        title="Trending Now"
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

      <MovieRow
        title="Comedy"
        movies={comedyMovies}
      />

      <MovieRow
        title="Romantic"
        movies={romanticMovies}
      />

      <MovieRow
        title="Action"
        movies={actionMovies}
      />
    </>
  );
}

export default Home;