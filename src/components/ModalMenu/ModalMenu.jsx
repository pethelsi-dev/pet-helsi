import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectorIsOpenMenu } from "../../redux/appSlice/selectors";
import { setIsOpenMenu } from "../../redux/appSlice/slice";
import { selectorIsLoggedIn } from "../../redux/auth/selectors";
import Modal from "react-modal";
import Icon from "../Icon/Icon";
import sprateSistem from "../../assets/Images/sprite-sistem.svg";
import style from "./ModalMenu.module.css";

Modal.setAppElement("#root");

export default function ModalMenu() {
  const dispatch = useDispatch();
  const isOpenMenu = useSelector(selectorIsOpenMenu);
  const isAuthenticated = useSelector(selectorIsLoggedIn);

  function closeModal() {
    dispatch(setIsOpenMenu(false));
  }
  return (
    isOpenMenu && (
      <div className={style.modalMenuContainer}>
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
                <a
                  href="#faq"
                  onClick={closeModal}
                  className={style.navListItem}>
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          {!isAuthenticated && (
            <div className={style.headerAuthLinks}>
              <Link
                className={style.linkAuth}
                to={"/login"}
                onClick={closeModal}>
                Увійти
              </Link>
              <Link
                className={style.linkAuth}
                to={"/register"}
                onClick={closeModal}>
                Зареєструватися
              </Link>
            </div>
          )}
        </div>
      </div>
    )
  );
}
