import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { selectorIsOpenMenu } from "../../redux/appSlice/selectors";
import Header from "../../components/Header/Header";
import ModalMenu from "../../components/ModalMenu/ModalMenu";
import { useLocation } from "react-router-dom"; // Імпорт хука для отримання маршруту
import style from "./Layout.module.css";

export default function Layout({ children }) {
  const location = useLocation(); // Отримуємо поточний маршрут
  const isOpenMenu = useSelector(selectorIsOpenMenu);

  // Перевіряємо, чи це сторінка логіну або реєстрації
  const isLoginOrRegisterPage = location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className={style.layoutContainer}>
      {/* Відображаємо Header тільки якщо не на сторінках login або register */}
      {!isLoginOrRegisterPage && <Header />}
      
      {/* Додаємо клас для коригування висоти, якщо хедер не відображається */}
      <div className={`${style.content} ${isLoginOrRegisterPage ? style.noHeader : ''}`}>
        
        {children}
      </div>
      
      <Toaster position="top-right" />
      {isOpenMenu && <ModalMenu />}
    </div>
  );
}
