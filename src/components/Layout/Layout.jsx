import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { selectorIsOpenMenu } from "../../redux/appSlice/selectors";
import Header from "../../components/Header/Header";
import ModalMenu from "../../components/ModalMenu/ModalMenu";
import style from "./Layout.module.css";

export default function Layout({ children }) {
  const isOpenMenu = useSelector(selectorIsOpenMenu);

  return (
    <div className={style.layoutContainer}>
      <Header />
      {children}
      <Toaster position="top-right" />
      {isOpenMenu && <ModalMenu />}
    </div>
  );
}
