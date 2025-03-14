import { Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectorIsOpenMenu,
  selectorIsShowNotification,
} from "../../redux/appSlice/selectors.js";
import { DeviceContext } from "../DeviceProvider/DeviceProvider.jsx";
import { setIsOpenMenu } from "../../redux/appSlice/slice";
import NotificationsWrapper from "../NotificationsWrapper/NotificationsWrapper.jsx";
import GuestMenu from "../GuestMenu/GuestMenu.jsx";
import Header from "../Header/Header";
import Footer from "../Footer/Footer.jsx";
import clsx from "clsx";
import style from "./Layout.module.css";

export default function Layout({ children }) {
  const dispatch = useDispatch();
  const { isDesktop } = useContext(DeviceContext);
  const isOpenMenu = useSelector(selectorIsOpenMenu);
  const isShowNotification = useSelector(selectorIsShowNotification);
  const location = useLocation();

  const closeModal = () => {
    dispatch(setIsOpenMenu(false));
  };

  return (
    <div className={clsx(style.layoutContainer)}>
      <Header closeModal={closeModal} />
      {isOpenMenu && !isDesktop && <GuestMenu closeModal={closeModal} />}
      {isShowNotification && <NotificationsWrapper />}
      <div className={style.layoutMainContent}>
        <Outlet />
      </div>
      {!location.pathname.includes("/user-panel") && <Footer />}
    </div>
  );
}
