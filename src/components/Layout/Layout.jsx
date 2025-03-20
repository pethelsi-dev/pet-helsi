import { Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectorIsOpenMenu,
  selectorIsShowNotification,
  selectorIsOpenForm,
} from "../../redux/appSlice/selectors.js";
import { DeviceContext } from "../DeviceProvider/DeviceProvider.jsx";
import { setIsOpenMenu } from "../../redux/appSlice/slice";
import ModalSearchVet from "../ModalSearchVet/ModalSearchVet.jsx";
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
  const isOpenForm = useSelector(selectorIsOpenForm);
  const location = useLocation();

  const closeModal = () => {
    dispatch(setIsOpenMenu(false));
  };

  return (
    <div className={clsx(style.layoutContainer)}>
      {!isOpenForm && <Header closeModal={closeModal} />}
      {isOpenMenu && !isDesktop && <GuestMenu closeModal={closeModal} />}
      {isShowNotification && <NotificationsWrapper />}
      {isOpenForm && <ModalSearchVet />}
      <div className={style.layoutMainContent}>
        <Outlet />
      </div>
      {!location.pathname.includes("/user-panel") && <Footer />}
    </div>
  );
}
