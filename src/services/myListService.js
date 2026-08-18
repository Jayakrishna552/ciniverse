const API_URL = "http://localhost:8080/api/my-list";


// Get user's My List
export const getMyList = async (userId) => {

  const token = localStorage.getItem("token");

  const response = await fetch(
    `${API_URL}/${userId}`,
    {
      method: "GET",

      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const text = await response.text();

  if (!response.ok) {
    throw new Error(
      text || "Failed to load My List"
    );
  }

  return JSON.parse(text);
};


// Add movie to My List
export const addToMyList = async (
  userId,
  movieId
) => {

  const token = localStorage.getItem("token");

  const response = await fetch(
    API_URL,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        userId: userId,
        movieId: movieId,
      }),
    }
  );

  const text = await response.text();

  if (!response.ok) {
    throw new Error(
      text || "Failed to add movie"
    );
  }

  return JSON.parse(text);
};


// Remove movie from My List
export const removeFromMyList = async (
  userId,
  movieId
) => {

  const token = localStorage.getItem("token");

  const response = await fetch(
    `${API_URL}/${userId}/${movieId}`,
    {
      method: "DELETE",

      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const text = await response.text();

  if (!response.ok) {
    throw new Error(
      text || "Failed to remove movie"
    );
  }

  return text;
};