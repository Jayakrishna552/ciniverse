const API_URL = "http://localhost:8080/api/movies";

// Get all movies
export const getMovies = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    return await response.json();

  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};


// Get one movie by ID
export const getMovieById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
      throw new Error("Movie not found");
    }

    return await response.json();

  } catch (error) {
    console.error("Error fetching movie:", error);
    return null;
  }
};