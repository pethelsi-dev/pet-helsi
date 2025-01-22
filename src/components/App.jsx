import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { selectorIsLoggedIn } from "../redux/auth/selectors";
import { selectorIsOpenMenu } from "../redux/appSlice/selectors.js";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Layout from "../components/Layout/Layout.jsx";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import PublicRoute from "../components/PublicRoute/PublicRoute";
import Loader from "./Loader/Loader.jsx";
import style from "./App.module.css";
import ModalMenu from "../components/ModalMenu/ModalMenu.jsx";
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
  const isOpenMenu = useSelector(selectorIsOpenMenu);

  return (
    <div className={style.appContainer}>
      <GoogleOAuthProvider>
        {isOpenMenu && <ModalMenu />}
        <Toaster position="top-right" />
        <Layout>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                element={<PublicRoute isAuthenticated={isAuthenticated} />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                  path="/veterinarians"
                  element={<VeterinarianListPage />}
                />
                <Route path="/policy" element={<PrivacyPolicy />} />
                <Route
                  path="/processing-regulation"
                  element={<ProcessingRegulation />}
                />
              </Route>

              <Route
                element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
            </Routes>
          </Suspense>
        </Layout>
      </GoogleOAuthProvider>
    </div>
  );
}
