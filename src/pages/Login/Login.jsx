import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import "./Login.css";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);


  // =====================================================
  // LOGIN
  // =====================================================

  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      setLoading(true);


      const response =
        await loginUser(
          email,
          password
        );


      console.log(
        "Login response:",
        response
      );


      // Get JWT

      const token =
        response.token ||
        response.accessToken;


      if (!token) {

        throw new Error(
          "JWT token was not received from server."
        );

      }


      // Save JWT

      localStorage.setItem(
        "token",
        token
      );


      // Save user

      if (response.user) {

        localStorage.setItem(
          "user",
          JSON.stringify(
            response.user
          )
        );

      }


      alert(
        "Login successful!"
      );


      // Home

      navigate("/");


    } catch (error) {

      console.error(
        "Login error:",
        error
      );


      alert(
        error.message ||
        "Invalid email or password"
      );


    } finally {

      setLoading(false);

    }

  };


  return (

    <div className="login-page">


      {/* HEADER */}

      <header className="login-header">

        <div
          className="login-logo"
          onClick={() => navigate("/")}
        >

          <span>CINI</span>
          <b>VERSE</b>

        </div>


        <div className="login-signup">

          <span>
            New to CineVerse?
          </span>


          <button
            onClick={() =>
              navigate("/signup")
            }
          >
            Sign Up
          </button>

        </div>

      </header>



      {/* LOGIN CONTAINER */}

      <div className="login-container">


        <div className="login-card">


          {/* LOGO */}

          <div className="login-card-logo">

            <span>CINI</span>
            <b>VERSE</b>

          </div>


          <h1>
            Welcome Back
          </h1>


          <p className="login-subtitle">

            Sign in to continue your
            streaming journey.

          </p>



          {/* FORM */}

          <form
            onSubmit={handleSubmit}
          >


            {/* EMAIL */}

            <div className="login-input">

              <span>
                ✉
              </span>


              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                required
              />

            </div>



            {/* PASSWORD */}

            <div className="login-input">

              <span>
                🔒
              </span>


              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                required
              />


              <button
                type="button"
                className="login-eye"
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



            {/* OPTIONS */}

            <div className="login-options">

              <label>

                <input
                  type="checkbox"
                />

                Remember me

              </label>


              <span>
                Forgot password?
              </span>

            </div>



            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >

              {loading
                ? "SIGNING IN..."
                : "SIGN IN"}


              {!loading && (

                <span>
                  →
                </span>

              )}

            </button>

          </form>



          {/* DIVIDER */}

          <div className="login-divider">

            <span></span>

            <p>
              OR
            </p>

            <span></span>

          </div>



          {/* SOCIAL */}

          <div className="login-social">

            <button>
              <span className="google">
                G
              </span>
            </button>


            <button>
              <span className="github">
                ●
              </span>
            </button>


            <button>
              <span className="facebook">
                f
              </span>
            </button>

          </div>



          {/* BOTTOM */}

          <p className="login-bottom">

            Don't have an account?

            <span
              onClick={() =>
                navigate("/signup")
              }
            >
              {" "}Create Account
            </span>

          </p>

        </div>

      </div>

    </div>

  );

};

export default Login;