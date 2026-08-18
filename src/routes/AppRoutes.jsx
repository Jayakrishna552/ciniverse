import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Profile from "../pages/Profile/Profile";
import Search from "../pages/Search/Search";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import MyList from "../pages/MyList/MyList";
import NotFound from "../pages/NotFound/NotFound";

import TVShows from "../pages/TVShows/TVShows";
import Movies from "../pages/Movies/Movies";
import NewPopular from "../pages/NewPopular/NewPopular";

import ProtectedRoute from "./ProtectedRoute";


function AppRoutes() {

  return (
    <BrowserRouter>

      <Routes>

        {/* =========================
            PUBLIC ROUTES
        ========================= */}

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Signup */}
        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* Search */}
        <Route
          path="/search"
          element={<Search />}
        />

        {/* Movie Details */}
        <Route
          path="/movie/:id"
          element={<MovieDetails />}
        />

        {/* TV Shows */}
        <Route
          path="/tv-shows"
          element={<TVShows />}
        />

        {/* Movies */}
        <Route
          path="/movies"
          element={<Movies />}
        />

        {/* New & Popular */}
        <Route
          path="/new-popular"
          element={<NewPopular />}
        />


        {/* =========================
            PROTECTED ROUTES
        ========================= */}

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* My List */}
        <Route
          path="/my-list"
          element={
            <ProtectedRoute>
              <MyList />
            </ProtectedRoute>
          }
        />


        {/* =========================
            NOT FOUND
        ========================= */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;