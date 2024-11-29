import Header from "../../components/Header/Header";
import { Toaster } from "react-hot-toast";
import style from "./Layout.module.css";

export default function Layout({ children, modalIsOpen, setIsOpen }) {
  return (
    <div className={style.layoutContainer}>
      <Header modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      {children}
      <Toaster position="top-right" />
    </div>
  );
}
