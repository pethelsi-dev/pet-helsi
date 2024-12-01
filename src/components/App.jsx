import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { selectorIsLoggedIn } from "../redux/auth/selectors";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import PublicRoute from "../components/PublicRoute/PublicRoute";
import Loader from "./Loader/Loader.jsx";
import style from "./App.module.css";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
// const ProfilePage = lazy(() => import("../pages/ProfilePage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));

export default function App() {
  const isAuthenticated = useSelector(selectorIsLoggedIn);

  return (
    <div className={style.appContainer}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<PublicRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            {/* <Route path="/profile" element={<ProfilePage />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
