import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { selectorIsOpenMenu } from "../../redux/appSlice/selectors.js";
import { DeviceContext } from "../DeviceProvider/DeviceProvider.jsx";
import ModalMenu from "../ModalMenu/ModalMenu";
import Header from "../Header/Header";
import clsx from "clsx";
import style from "./Layout.module.css";

export default function Layout({ children }) {
  const location = useLocation();
  const { isDesktop } = useContext(DeviceContext);
  const isOpenMenu = useSelector(selectorIsOpenMenu);

  const isLoginOrRegisterPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div
      className={clsx(style.layoutContainer, {
        [style.noHeader]: isLoginOrRegisterPage,
      })}>
      {isOpenMenu && !isDesktop && <ModalMenu />}
      {!isLoginOrRegisterPage && <Header />}
      {children}
    </div>
  );
}
