import { Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import { DeviceContext } from "../../components/DeviceProvider/DeviceProvider.jsx";
import Dashboard from "../../components/Dashboard/Dashboard";
import DashboardMob from "../../components/DashboardMob/DashboardMob.jsx";
import style from "./UserPanelPage.module.css";

export default function UserPanelPage() {
  const { isDesktop } = useContext(DeviceContext);
  const location = useLocation();

  return (
    <section className={style.userPanelContainer}>
      {isDesktop ? (
        <>
          <Dashboard />
        </>
      ) : (
        location.pathname === "/user-panel" && <DashboardMob />
      )}
      <div className={style.mainContent}>
        <Outlet />
      </div>
    </section>
  );
}
