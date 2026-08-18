import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../services/authService";
import "./Signup.css";

const Signup = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);


  // =====================================================
  // HANDLE INPUT
  // =====================================================

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  // =====================================================
  // REGISTER
  // =====================================================

  const handleSubmit = async (e) => {

    e.preventDefault();


    // Password check

    if (
      formData.password !==
      formData.confirmPassword
    ) {

      alert("Passwords do not match!");

      return;
    }


    try {

      setLoading(true);


      const response =
        await signupUser(formData);


      console.log(
        "Registration response:",
        response
      );


      alert(
        response.message ||
        "Registration successful!"
      );


      // Go to login

      navigate("/login");


    } catch (error) {

      console.error(
        "Registration error:",
        error
      );


      alert(
        error.message ||
        "Registration failed!"
      );


    } finally {

      setLoading(false);

    }

  };


  return (

    <div className="register-page">


      {/* =================================================
          HEADER
      ================================================= */}

      <header className="register-header">

        <div
          className="logo"
          onClick={() => navigate("/")}
        >

          <span>CINI</span>
          <b>VERSE</b>

        </div>


        <div className="header-login">

          <span>
            Already have an account?
          </span>


          <button
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>

        </div>

      </header>



      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="cinema-background">


        {/* PARTICLES */}

        <div className="particle p1"></div>
        <div className="particle p2"></div>
        <div className="particle p3"></div>
        <div className="particle p4"></div>
        <div className="particle p5"></div>
        <div className="particle p6"></div>
        <div className="particle p7"></div>
        <div className="particle p8"></div>


        {/* POSTER 1 */}

        <div className="movie-poster poster-one">

          <div className="poster-image poster-interstellar">
          </div>

          <span>
            INTERSTELLAR
          </span>

        </div>


        {/* POSTER 2 */}

        <div className="movie-poster poster-two">

          <div className="poster-image poster-joker">
          </div>

          <span>
            JOKER
          </span>

        </div>


        {/* POSTER 3 */}

        <div className="movie-poster poster-three">

          <div className="poster-image poster-batman">
          </div>

          <span>
            BATMAN
          </span>

        </div>


        {/* FILM REEL */}

        <div className="reel-area">

          <div className="film-reel">

            <div className="reel-center"></div>

            <div className="reel-hole hole-one"></div>
            <div className="reel-hole hole-two"></div>
            <div className="reel-hole hole-three"></div>
            <div className="reel-hole hole-four"></div>
            <div className="reel-hole hole-five"></div>
            <div className="reel-hole hole-six"></div>

          </div>


          <div className="film-strip">

            <div className="film-frame"></div>
            <div className="film-frame"></div>
            <div className="film-frame"></div>
            <div className="film-frame"></div>
            <div className="film-frame"></div>

          </div>

        </div>

      </div>



      {/* =================================================
          LEFT INTRO
      ================================================= */}

      <section className="register-intro">

        <p className="small-title">
          YOUR UNIVERSE OF
        </p>


        <h1>

          STORIES

          <br />

          <span>
            AWAIT
          </span>

        </h1>


        <p className="intro-text">

          Movies

          <span>•</span>

          Series

          <span>•</span>

          Originals

        </p>


        <p className="intro-description">

          Create your account and enter a universe
          filled with unlimited entertainment.

        </p>

      </section>



      {/* =================================================
          REGISTER CARD
      ================================================= */}

      <section className="register-card">


        <div className="card-logo">

          <span>CINI</span>

          <b>VERSE</b>

        </div>


        <h2>
          Join CineVerse
        </h2>


        <p className="card-subtitle">

          Create your account and start your
          streaming journey today.

        </p>



        {/* FORM */}

        <form onSubmit={handleSubmit}>


          {/* NAME */}

          <div className="input-box">

            <span className="input-icon">
              👤
            </span>


            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>



          {/* EMAIL */}

          <div className="input-box">

            <span className="input-icon">
              ✉
            </span>


            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>



          {/* PASSWORD */}

          <div className="input-box">

            <span className="input-icon">
              🔒
            </span>


            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />


            <button
              type="button"
              className="eye-btn"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
            >

              {showPassword
                ? "🙈"
                : "👁"}

            </button>

          </div>



          {/* CONFIRM PASSWORD */}

          <div className="input-box">

            <span className="input-icon">
              🔒
            </span>


            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              name="confirmPassword"
              placeholder="Confirm Password"
              value={
                formData.confirmPassword
              }
              onChange={handleChange}
              required
            />


            <button
              type="button"
              className="eye-btn"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
            >

              {showConfirmPassword
                ? "🙈"
                : "👁"}

            </button>

          </div>



          {/* CREATE ACCOUNT */}

          <button
            type="submit"
            className="create-account"
            disabled={loading}
          >

            <span>

              {loading
                ? "CREATING..."
                : "CREATE ACCOUNT"}

            </span>


            {!loading && (

              <span className="arrow">
                →
              </span>

            )}

          </button>

        </form>



        {/* DIVIDER */}

        <div className="divider">

          <span></span>

          <p>
            OR
          </p>

          <span></span>

        </div>



        {/* SOCIAL */}

        <div className="social-login">

          <button type="button">
            <span className="google">
              G
            </span>
          </button>


          <button type="button">
            <span className="github">
              ●
            </span>
          </button>


          <button type="button">
            <span className="facebook">
              f
            </span>
          </button>

        </div>



        {/* SIGN IN */}

        <p className="signin-text">

          Already have an account?

          <span
            onClick={() =>
              navigate("/login")
            }
          >
            {" "}Sign In
          </span>

        </p>

      </section>



      {/* SECURITY */}

      <div className="security-text">

        🔒 Your data is safe with us

      </div>

    </div>

  );

};

export default Signup;