import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DeviceContext } from "../DeviceProvider/DeviceProvider";
import { useSelector, useDispatch } from "react-redux";
import { selectorIsLoggedIn } from "../../redux/auth/selectors";
import { setIsOpenMenu } from "../../redux/appSlice/slice";
import { selectorIsOpenMenu } from "../../redux/appSlice/selectors";
import sprateSistem from "../../assets/Images/sprite-sistem.svg";
import ModalMenu from "../ModalMenu/ModalMenu";
import Icon from "../Icon/Icon";
import style from "./Header.module.css";
import clsx from "clsx";

export default function Header() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectorIsLoggedIn);
  const isOpenMenu = useSelector(selectorIsOpenMenu);
  const navigate = useNavigate();
  const location = useLocation();
  const { isDesktop } = useContext(DeviceContext);

  useEffect(() => {
    if (!isDesktop && !isOpenMenu && location.pathname === "/user-panel") {
      dispatch(setIsOpenMenu(true));
    }
  }, [location]);

  function openModal() {
    if (!isDesktop) {
      dispatch(setIsOpenMenu(true));
    } else {
      navigate("/user-panel");
    }
  }

  const closeModal = () => {
    dispatch(setIsOpenMenu(false));
  };

  const switchToMain = () => {
    navigate("/");
  };

  return (
    !isOpenMenu && (
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

        {isOpenMenu && <ModalMenu setIsOpen={setIsOpenMenu} />}

        <nav className={style.headerNavContainer}>
          <ul className={style.navigationList}>
            <li>
              <a
                href="#features"
                onClick={switchToMain}
                className={style.navListItem}>
                Про нас
              </a>
            </li>
            <li>
              <a
                href="#veterinarians"
                onClick={switchToMain}
                className={style.navListItem}>
                База лікарів
              </a>
            </li>
            <li>
              <a
                href="#faq"
                onClick={switchToMain}
                className={style.navListItem}>
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        {isAuthenticated && (
          <div className={style.headerUserWrapper}>
            <button type="button" className={style.headerUserButton}>
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
              className={style.headerUserPhotoButton}
              onClick={openModal}>
              K
            </Link>
          </div>
        )}

        {!isAuthenticated && !isOpenMenu && (
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
        )}

        {!isAuthenticated && (
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
    )
  );
}
