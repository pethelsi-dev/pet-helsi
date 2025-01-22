import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import sprateSistem from "../../assets/Images/sprite-sistem.svg";
import style from "./GuestMenu.module.css";

export default function GuestMenu({ closeModal }) {
  return (
    <>
      <div>
        <div className={style.modalMenuLogo}>
          <Icon
            sprite={sprateSistem}
            id={"icon-pet-helsi-logo"}
            width="112px"
            height="19px"
            className={style.iconLogo}
          />
          <button
            type="button"
            onClick={closeModal}
            className={style.buttonClose}>
            <Icon
              sprite={sprateSistem}
              id={"icon-close"}
              width="32px"
              height="32px"
              className={style.iconClose}
            />
          </button>
        </div>

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
                href="#veterinarians"
                onClick={closeModal}
                className={style.navListItem}>
                База лікарів
              </a>
            </li>
            <li>
              <a href="#faq" onClick={closeModal} className={style.navListItem}>
                FAQ
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={style.headerAuthLinks}>
        <Link className={style.linkAuth} to={"/login"} onClick={closeModal}>
          Увійти
        </Link>
        <Link className={style.linkAuth} to={"/register"} onClick={closeModal}>
          Зареєструватися
        </Link>
      </div>
    </>
  );
}
