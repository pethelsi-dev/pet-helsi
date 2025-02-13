import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectorIsOpenMenu } from "../../redux/appSlice/selectors.js";
import { DeviceContext } from "../DeviceProvider/DeviceProvider.jsx";
import { Toaster } from "react-hot-toast";
import { setIsOpenMenu } from "../../redux/appSlice/slice";
import GuestMenu from "../GuestMenu/GuestMenu.jsx";
import Header from "../Header/Header";
import clsx from "clsx";
import style from "./Layout.module.css";

export default function Layout({ children }) {
  const dispatch = useDispatch();
  const { isDesktop } = useContext(DeviceContext);
  const isOpenMenu = useSelector(selectorIsOpenMenu);

  const closeModal = () => {
    dispatch(setIsOpenMenu(false));
  };

  return (
    <div className={clsx(style.layoutContainer)}>
      <Header closeModal={closeModal} />
      {isOpenMenu && !isDesktop && <GuestMenu closeModal={closeModal} />}
      <Toaster />
      <Outlet />
    </div>
  );
}
