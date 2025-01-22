import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import clsx from "clsx";
import style from "./Layout.module.css";

export default function Layout({ children }) {
  const location = useLocation();
  const isLoginOrRegisterPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div
      className={clsx(style.layoutContainer, {
        [style.noHeader]: isLoginOrRegisterPage,
      })}>
      {!isLoginOrRegisterPage && <Header />}
      {children}
    </div>
  );
}
