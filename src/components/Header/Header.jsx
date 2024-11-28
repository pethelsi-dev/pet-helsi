import style from "./Header.module.css";
import Icon from "../Icon/Icon";
import ModalMenu from "../ModalMenu/ModalMenu";
import sprateSistem from "../../assets/Images/sprite-sistem.svg";

export default function Header({ modalIsOpen, setIsOpen }) {
  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className={style.headerContainer}>
      <Icon
        sprite={sprateSistem}
        id={"icon-pet-helsi-logo"}
        width="112px"
        height="32px"
        className={style.icon}
      />
      {modalIsOpen && <ModalMenu setIsOpen={setIsOpen} />}
      <div>
        <nav>
          <ul className={style.navigationList}>
            <li>
              <a href="#aboutUs" className={style.navListItem}>
                Про нас
              </a>
            </li>
            <li>
              <a href="#features" className={style.navListItem}>
                Власникам тварин
              </a>
            </li>
            <li>
              <a href="#benefits" className={style.navListItem}>
                Ветеринарам
              </a>
            </li>
            <li>
              <a href="#appointment" className={style.navListItem}>
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        {!modalIsOpen && (
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
      </div>
    </div>
  );
}
