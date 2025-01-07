import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { selectorIsLoggedIn } from "../redux/auth/selectors";
import Layout from "../components/Layout/Layout.jsx";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import PublicRoute from "../components/PublicRoute/PublicRoute";
import Loader from "./Loader/Loader.jsx";
import style from "./App.module.css";
import { GoogleOAuthProvider } from '@react-oauth/google';

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage/ProfilePage.jsx"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const PrivacyPolicy = lazy(() =>
  import("../pages/PrivacyPolicy/PrivacyPolicy.jsx")
);
const ProcessingRegulation = lazy(() =>
  import("../pages/ProcessingRegulation/ProcessingRegulation.jsx")
);
const VeterinarianListPage = lazy(() =>
  import("../pages/VeterinarianListPage/VeterinarianListPage.jsx")
);

export default function App() {
  const isAuthenticated = useSelector(selectorIsLoggedIn);

  return (
    <GoogleOAuthProvider>
      <div className={style.appContainer}>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route element={<PublicRoute isAuthenticated={isAuthenticated} />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/veterinarians" element={<VeterinarianListPage />} />
              <Route path="/policy" element={<PrivacyPolicy />} />
              <Route
                path="/processing-regulation"
                element={<ProcessingRegulation />}
              />
            </Route>

            <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </Suspense>
      </Layout>
    </div>
    </GoogleOAuthProvider>
    
  );
}
