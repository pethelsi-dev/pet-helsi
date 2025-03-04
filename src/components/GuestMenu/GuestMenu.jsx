import { Link } from "react-router-dom";
import style from "./GuestMenu.module.css";

export default function GuestMenu({ closeModal }) {
  return (
    <div className={style.guestMenuContainer}>
      <nav className={style.headerNavigationWrapper}>
        <ul className={style.navigationList}>
          <li>
            <a
              href="#features"
              onClick={closeModal}
              className={style.navListItem}>
              Про нас
            </a>
          </li>

          <li>
            <a
              href="#appointment"
              onClick={closeModal}
              className={style.navListItem}>
              Власникам тварин
            </a>
          </li>

          <li>
            <a href="#" onClick={closeModal} className={style.navListItem}>
              Ветеринарам
            </a>
          </li>

          <li>
            <a href="#faq" onClick={closeModal} className={style.navListItem}>
              FAQ
            </a>
          </li>
        </ul>
      </nav>

      <div className={style.headerAuthLinks}>
        <Link className={style.linkAuth} to={"/login"} onClick={closeModal}>
          Увійти
        </Link>
        <Link className={style.linkAuth} to={"/register"} onClick={closeModal}>
          Зареєструватися
        </Link>
      </div>
    </div>
  );
}
