const API_URL = "http://localhost:8080/api/auth";


// =====================================================
// REGISTER USER
// =====================================================

export const signupUser = async (userData) => {
  const response = await fetch(`${API_URL}/signup`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      name: userData.name,
      email: userData.email,
      password: userData.password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Registration failed"
    );
  }

  return data;
};


// =====================================================
// LOGIN USER
// =====================================================

export const loginUser = async (email, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Login failed"
    );
  }

  return data;
};


// =====================================================
// GET CURRENT USER
// =====================================================

export const getCurrentUser = async () => {

  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("No token found");
  }

  const response = await fetch(
    `${API_URL}/user`,
    {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Unable to fetch user"
    );
  }

  return data;
};


// =====================================================
// LOGOUT
// =====================================================

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};