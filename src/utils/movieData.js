import interstellar from "../assets/images/interstellar.jpg";
import inception from "../assets/images/inception.jpg";
import batman from "../assets/images/batman.jpg";
import joker from "../assets/images/joker.jpg";
import dune from "../assets/images/dune.jpg";

import interstellarVideo from "../assets/videos/interstellar.mp4";
import inceptionVideo from "../assets/videos/inception.mp4";
import batmanVideo from "../assets/videos/batman.mp4";
import jokerVideo from "../assets/videos/joker.mp4";
import duneVideo from "../assets/videos/dune.mp4";

// =====================================================
// TRENDING NOW
// =====================================================

export const trendingMovies = [
  {
    id: 1,
    title: "Interstellar",
    poster: interstellar,
    video: interstellarVideo,
    trailerId: "4T4wxDnTYLg",
    rating: 8.7,
    year: 2014,
    genre: "Sci-Fi",
    description:
      "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
  },

  {
    id: 2,
    title: "Inception",
    poster: inception,
    video: inceptionVideo,
    trailerId: "YoHD_x4Zs5c",
    rating: 8.8,
    year: 2010,
    genre: "Sci-Fi",
    description:
      "A skilled thief who steals secrets through dreams is given a chance to erase his past.",
  },

  {
    id: 3,
    title: "The Batman",
    poster: batman,
    video: batmanVideo,
    trailerId: "mqqft2x_Aa4",
    rating: 9.0,
    year: 2022,
    genre: "Action",
    description:
      "Batman faces a dangerous criminal who creates chaos across Gotham City.",
  },

  {
    id: 4,
    title: "Joker",
    poster: joker,
    video: jokerVideo,
    trailerId: "zAGVQLHvwOY",
    rating: 8.4,
    year: 2019,
    genre: "Drama",
    description:
      "A troubled man struggles with society and slowly transforms into the Joker.",
  },

  {
    id: 5,
    title: "Dune",
    poster: dune,
    video: duneVideo,
    trailerId: "8g18jFHCLXk",
    rating: 8.0,
    year: 2021,
    genre: "Adventure",
    description:
      "A young man travels to a dangerous desert planet and discovers his destiny.",
  },
];

// =====================================================
// POPULAR ON NETFLIX
// =====================================================

export const popularMovies = [
  trendingMovies[2],
  trendingMovies[3],
  trendingMovies[0],
  trendingMovies[4],
  trendingMovies[1],
];

// =====================================================
// TOP RATED
// =====================================================

export const topRatedMovies = [
  trendingMovies[2],
  trendingMovies[1],
  trendingMovies[0],
  trendingMovies[3],
  trendingMovies[4],
];

// =====================================================
// COMEDY
// =====================================================

export const comedyMovies = [
  {
    ...trendingMovies[3],
    genre: "Comedy",
  },
  {
    ...trendingMovies[1],
    genre: "Comedy",
  },
  {
    ...trendingMovies[4],
    genre: "Comedy",
  },
  {
    ...trendingMovies[2],
    genre: "Comedy",
  },
  {
    ...trendingMovies[0],
    genre: "Comedy",
  },
];

// =====================================================
// ROMANTIC
// =====================================================

export const romanticMovies = [
  {
    ...trendingMovies[0],
    genre: "Romance",
  },
  {
    ...trendingMovies[1],
    genre: "Romance",
  },
  {
    ...trendingMovies[3],
    genre: "Romance",
  },
  {
    ...trendingMovies[4],
    genre: "Romance",
  },
  {
    ...trendingMovies[2],
    genre: "Romance",
  },
];

// =====================================================
// ACTION
// =====================================================

export const actionMovies = [
  {
    ...trendingMovies[2],
    genre: "Action",
  },
  {
    ...trendingMovies[4],
    genre: "Action",
  },
  {
    ...trendingMovies[3],
    genre: "Action",
  },
  {
    ...trendingMovies[1],
    genre: "Action",
  },
  {
    ...trendingMovies[0],
    genre: "Action",
  },
];

// =====================================================
// ALL MOVIES
// =====================================================

export const movies = [
  ...trendingMovies,
  ...popularMovies,
  ...topRatedMovies,
  ...comedyMovies,
  ...romanticMovies,
  ...actionMovies,
];