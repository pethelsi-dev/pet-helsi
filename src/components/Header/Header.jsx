import { Link } from "react-router-dom";
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

  function openModal() {
    dispatch(setIsOpenMenu(true));
  }

  return (
    !isOpenMenu && (
      <header className={style.headerContainer}>
        <div className={style.logoWrapper}>
          {isAuthenticated && (
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
          <Link to={"/"}>
            <Icon
              sprite={sprateSistem}
              id={"icon-pet-helsi-logo"}
              width="112px"
              height="19px"
              className={style.iconLogo}
            />{" "}
          </Link>
        </div>

        {isOpenMenu && <ModalMenu setIsOpen={setIsOpenMenu} />}

        <nav className={style.headerNavContainer}>
          <ul className={style.navigationList}>
            <li>
              <a href="#features" className={style.navListItem}>
                Про нас
              </a>
            </li>
            <li>
              <a href="#veterinarians" className={style.navListItem}>
                База лікарів
              </a>
            </li>
            <li>
              <a href="#faq" className={style.navListItem}>
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
                className={style.headerIconUser}
              />
            </button>

            <Link to={"/profile"} className={style.headerUserButton}>
              <Icon
                sprite={sprateSistem}
                id={"icon-user"}
                width="32px"
                height="32px"
                className={style.headerIconUser}
              />
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
              to={"/login"}>
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
              to={"/register"}>
              Зареєструватися
            </Link>
          </div>
        )}
      </header>
    )
  );
}
