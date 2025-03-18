import { HiOutlineUserCircle } from "react-icons/hi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { DeviceContext } from "../DeviceProvider/DeviceProvider";
import { useSelector, useDispatch } from "react-redux";
import { selectorIsLoggedIn } from "../../redux/auth/selectors";
import { setIsOpenMenu, setShowNotification } from "../../redux/appSlice/slice";
import { selectorIsOpenMenu } from "../../redux/appSlice/selectors";
import sprateSistem from "../../assets/Images/sprite-sistem.svg";
import Icon from "../Icon/Icon";
import style from "./Header.module.css";
import clsx from "clsx";

export default function Header({ closeModal }) {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectorIsLoggedIn);
  const isOpenMenu = useSelector(selectorIsOpenMenu);
  const navigate = useNavigate();
  const location = useLocation();
  const { isDesktop } = useContext(DeviceContext);

  function openModal() {
    if (!isDesktop) {
      dispatch(setIsOpenMenu(true));
    }
  }

  const closeModalOrRedirect = () => {
    if (location.pathname.includes("/user-panel")) {
      navigate("/");
    } else {
      closeModal();
    }
  };

  return (
    <header className={style.headerContainer}>
      <Link to={"/"}>
        <Icon
          sprite={sprateSistem}
          id={"icon-pet-helsi-logo"}
          width="112px"
          height="19px"
          className={style.iconLogoHeader}
        />
      </Link>

      <nav className={style.headerNavContainer}>
        <ul className={style.navigationList}>
          <li>
            <a
              href="#features"
              onClick={closeModalOrRedirect}
              className={style.navListItem}>
              Про нас
            </a>
          </li>
          <li>
            <a
              href="#veterinarians"
              onClick={closeModalOrRedirect}
              className={style.navListItem}>
              Ветеринари
            </a>
          </li>
          <li>
            <a
              href="#faq"
              onClick={closeModalOrRedirect}
              className={style.navListItem}>
              FAQ
            </a>
          </li>
        </ul>
      </nav>

      <div className={style.headerUserWrapper}>
        {isAuthenticated ? (
          location.pathname.includes("/user-panel") && !isDesktop ? (
            <button
              type="button"
              onClick={closeModalOrRedirect}
              className={style.buttonClose}>
              <Icon
                sprite={sprateSistem}
                id={"icon-close"}
                width="32px"
                height="32px"
                className={style.iconClose}
              />
            </button>
          ) : (
            <>
              <button
                type="button"
                className={style.headerUserButton}
                onClick={() => dispatch(setShowNotification(true))}>
                <Icon
                  sprite={sprateSistem}
                  id={"icon-bell"}
                  width="32px"
                  height="32px"
                  className={style.headerIconBell}
                />
              </button>
              <Link
                to={"/user-panel"}
                type="button"
                className={style.headerUserPhotoButton}>
                <HiOutlineUserCircle className={style.headerUserPhotoIcon} />
              </Link>
            </>
          )
        ) : !isOpenMenu && !location.pathname.includes("/user-panel") ? (
          <button
            type="button"
            onClick={openModal}
            className={style.buttonMenu}>
            <Icon
              sprite={sprateSistem}
              id={"icon-burger-for-header-mobile"}
              width="32px"
              height="32px"
              className={style.iconBurger}
            />
          </button>
        ) : (
          <button
            type="button"
            onClick={closeModalOrRedirect}
            className={style.buttonClose}>
            <Icon
              sprite={sprateSistem}
              id={"icon-close"}
              width="32px"
              height="32px"
              className={style.iconClose}
            />
          </button>
        )}
      </div>

      {!isAuthenticated && isDesktop && (
        <div className={style.headerAuthLinks}>
          <Link
            className={clsx(style.linkAllVeterinarians, style.linkLogin)}
            to={"/login"}
            onClick={closeModal}>
            Увійти
            <Icon
              sprite={sprateSistem}
              id={"icon-login"}
              width="24px"
              height="24px"
              className={style.iconLogin}
            />
          </Link>
          <Link
            className={clsx(style.linkAllVeterinarians, style.linkRegister)}
            to={"/register"}
            onClick={closeModal}>
            Зареєструватися
          </Link>
        </div>
      )}
    </header>
  );
}
