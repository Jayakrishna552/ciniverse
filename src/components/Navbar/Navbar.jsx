import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <nav className="navbar">

      {/* ================= LOGO ================= */}
      <Link to="/" className="navbar-logo">
        <span>CINI</span>
        <b>VERSE</b>
      </Link>

      {/* ================= NAVIGATION ================= */}
      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/tv-shows">
          TV Shows
        </Link>

        <Link to="/movies">
          Movies
        </Link>

        <Link to="/new-popular">
          New & Popular
        </Link>

        <Link to="/my-list">
          My List
        </Link>

        <Link to="/profile">
          Profile
        </Link>

      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="navbar-right">

        {/* SEARCH */}
        <form
          className="search-box"
          onSubmit={handleSearch}
        >

          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            type="submit"
            className="search-button"
            aria-label="Search"
          >
            <span>⌕</span>
          </button>

        </form>

        {/* ================= AUTH BUTTONS ================= */}
        <div className="auth-buttons">

          <Link
            to="/login"
            className="nav-login-btn"
          >
            Sign In
          </Link>

          <Link
            to="/signup"
            className="nav-signup-btn"
          >
            Sign Up
          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;