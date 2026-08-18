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
    <BrowserRouter basename="/ciniverse">
      <Routes>

        {/* =========================
            PUBLIC ROUTES
        ========================= */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/search"
          element={<Search />}
        />

        <Route
          path="/movie/:id"
          element={<MovieDetails />}
        />

        <Route
          path="/tv-shows"
          element={<TVShows />}
        />

        <Route
          path="/movies"
          element={<Movies />}
        />

        <Route
          path="/new-popular"
          element={<NewPopular />}
        />

        {/* =========================
            PROTECTED ROUTES
        ========================= */}

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

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