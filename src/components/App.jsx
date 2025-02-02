import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense, useContext } from "react";
import { DeviceContext } from "./DeviceProvider/DeviceProvider.jsx";
import { useSelector } from "react-redux";
import { selectorIsLoggedIn } from "../redux/auth/selectors";
// import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Layout from "../components/Layout/Layout.jsx";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import PublicRoute from "../components/PublicRoute/PublicRoute";
import NotificationsWrapper from "../components/NotificationsWrapper/NotificationsWrapper.jsx";
import Loader from "./Loader/Loader.jsx";
import style from "./App.module.css";
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const UserPanelPage = lazy(() =>
  import("../pages/UserPanelPage/UserPanelPage.jsx")
);
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
const ConsultationHistory = lazy(() =>
  import("../pages/ConsultationHistory/ConsultationHistory.jsx")
);
const ChatsPage = lazy(() => import("../pages/ChatsPage/ChatsPage.jsx"));
const OwnersAnimals = lazy(() =>
  import("../pages/OwnersAnimals/OwnersAnimals.jsx")
);
const OwnerProfile = lazy(() =>
  import("../pages/OwnerProfile/OwnerProfile.jsx")
);
// const VetProfile = lazy(() => import("../pages/VetProfile/VetProfile.jsx"));
const Settings = lazy(() => import("../pages/Settings/Settings.jsx"));

export default function App() {
  const isAuthenticated = useSelector(selectorIsLoggedIn);
  const { isDesktop } = useContext(DeviceContext);

  return (
    <div className={style.appContainer}>
      <GoogleOAuthProvider>
        {/* <Toaster position="top-right" /> */}
        <NotificationsWrapper />
        <Layout>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/policy" element={<PrivacyPolicy />} />
              <Route
                path="/processing-regulation"
                element={<ProcessingRegulation />}
              />

              <Route
                element={<PublicRoute isAuthenticated={isAuthenticated} />}>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/veterinarians"
                  element={<VeterinarianListPage />}
                />
              </Route>

              <Route
                element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
                <Route path="/user-panel" element={<UserPanelPage />}>
                  {isDesktop && (
                    <Route index element={<Navigate to="history" replace />} />
                  )}
                  <Route path="history" element={<ConsultationHistory />} />
                  <Route path="chats" element={<ChatsPage />} />
                  <Route path="my-animals" element={<OwnersAnimals />} />
                  <Route
                    path="veterinarians"
                    element={<VeterinarianListPage />}
                  />
                  <Route path="profile" element={<OwnerProfile />} />
                  <Route path="settings" element={<Settings />} />
                </Route>
              </Route>
            </Routes>
          </Suspense>
        </Layout>
      </GoogleOAuthProvider>
    </div>
  );
}
