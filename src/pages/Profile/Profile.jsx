import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Profile.css";

function Profile() {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {

    const savedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!savedUser || !token) {
      navigate("/login");
      return;
    }

    try {

      const loggedInUser = JSON.parse(savedUser);

      const response = await fetch(
        `http://localhost:8080/api/auth/user?email=${encodeURIComponent(
          loggedInUser.email
        )}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const text = await response.text();

      console.log("Profile response:", text);

      if (!response.ok) {
        throw new Error(text);
      }

      const data = JSON.parse(text);

      setUser(data);

    } catch (error) {

      console.error("Profile error:", error);

      alert("Unable to load profile");

    }
  };


  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };


  if (!user) {

    return (
      <div className="profile-page">

        <div className="profile-box">

          <h1>Loading...</h1>

        </div>

      </div>
    );
  }


  return (
    <div className="profile-page">

      <div className="profile-box">

        <h1>Who's watching?</h1>

        <div className="profile-card">

          <div className="profile-avatar">
            👤
          </div>

          <h2>{user.name}</h2>

          <p>{user.email}</p>

          <p>Netflix Member</p>

          <button
            onClick={() => navigate("/")}
          >
            Continue Watching
          </button>

          <button
            className="my-list-profile-btn"
            onClick={() => navigate("/my-list")}
          >
            My List
          </button>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Sign Out
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;