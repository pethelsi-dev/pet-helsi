import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { DeviceContext } from "../../components/DeviceProvider/DeviceProvider.jsx";
import Dashboard from "../../components/Dashboard/Dashboard";
import ModalMenu from "../../components/ModalMenu/ModalMenu.jsx";
import style from "./UserPanelPage.module.css";

export default function UserPanelPage() {
  const { isDesktop } = useContext(DeviceContext);

  return (
    <section className={style.userPanelContainer}>
      {isDesktop ? (
        <>
          <Dashboard />
          <div className={style.mainContentDesktop}>
            <Outlet />
          </div>
        </>
      ) : (
        <div>
          <ModalMenu />{" "}
          <div className={style.mainContentMob}>
            <Outlet />
          </div>
        </div>
      )}
    </section>
  );
}
