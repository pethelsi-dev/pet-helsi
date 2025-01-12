import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { selectorIsOpenMenu } from "../../redux/appSlice/selectors";
import Header from "../../components/Header/Header";
import ModalMenu from "../../components/ModalMenu/ModalMenu";
import { useLocation } from "react-router-dom"; 
import style from "./Layout.module.css";

export default function Layout({ children }) {
  const location = useLocation(); 
  const isOpenMenu = useSelector(selectorIsOpenMenu);

  const isLoginOrRegisterPage = location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className={style.layoutContainer}>
    
      {!isLoginOrRegisterPage && <Header />}
      
      <div className={`${style.content} ${isLoginOrRegisterPage ? style.noHeader : ''}`}>
        
        {children}
      </div>
      
      <Toaster position="top-right" />
      {isOpenMenu && <ModalMenu />}
    </div>
  );
}
