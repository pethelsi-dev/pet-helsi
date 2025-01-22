import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import sprateSistem from "../../assets/Images/sprite-sistem.svg";
import sprateAnimals from "../../assets/Images/sprite-animals.svg";
import girl from "../../assets/Images/faq-girl-dog-mob@1x.png";
import style from "./UserMenu.module.css";

export default function UserMenu({ closeModal }) {
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
          <button type="button" className={style.headerUserButton}>
            <Icon
              sprite={sprateSistem}
              id={"icon-bell"}
              width="32px"
              height="32px"
              className={style.headerIconBell}
            />
          </button>
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

        <div>
          {(
            <img src={girl} alt="" className={style.userModalPhotoButton}></img>
          ) || (
            <button type="button" className={style.userModalPhotoButton}>
              K
            </button>
          )}

          <p className={style.userModalName}>name surname</p>
          <p className={style.userModalEmail}>email@gmail.com</p>

          <ul className={style.userModalList}>
            <li className={style.userModalLink}>
              <div className={style.userModalLinkText}>
                <Icon
                  sprite={sprateSistem}
                  id={"icon-list"}
                  width="20px"
                  height="20px"
                  className={style.userModalLinkIcon}
                />
                <p className={style.userModalTextPath}>Історія’прийомів</p>
              </div>
              <Link className={style.userModalArrowLink}>
                <Icon
                  sprite={sprateSistem}
                  id={"icon-arrow-rigth"}
                  width="24px"
                  height="24px"
                  className={style.userModalArrow}
                />
              </Link>
            </li>
            <li className={style.userModalLink}>
              <div className={style.userModalLinkText}>
                <Icon
                  sprite={sprateSistem}
                  id={"icon-message_light"}
                  width="20px"
                  height="20px"
                  className={style.userModalLinkIcon}
                />
                <p className={style.userModalTextPath}>
                  Чати <span>2</span>
                </p>
              </div>
              <Link className={style.userModalArrowLink}>
                <Icon
                  sprite={sprateSistem}
                  id={"icon-arrow-rigth"}
                  width="24px"
                  height="24px"
                  className={style.userModalArrow}
                />
              </Link>
            </li>
            <li className={style.userModalLink}>
              <div className={style.userModalLinkText}>
                <Icon
                  sprite={sprateAnimals}
                  id={"icon-paw"}
                  width="20px"
                  height="20px"
                  className={style.userModalLinkIcon}
                />
                <p className={style.userModalTextPath}>Мої тварини</p>
              </div>
              <Link className={style.userModalArrowLink}>
                <Icon
                  sprite={sprateSistem}
                  id={"icon-arrow-rigth"}
                  width="24px"
                  height="24px"
                  className={style.userModalArrow}
                />
              </Link>
            </li>
            <li className={style.userModalLink}>
              <div className={style.userModalLinkText}>
                <Icon
                  sprite={sprateSistem}
                  id={"icon-group"}
                  width="20px"
                  height="20px"
                  className={style.userModalLinkIcon}
                />
                <p className={style.userModalTextPath}>Ветеринари</p>
              </div>
              <Link className={style.userModalArrowLink}>
                <Icon
                  sprite={sprateSistem}
                  id={"icon-arrow-rigth"}
                  width="24px"
                  height="24px"
                  className={style.userModalArrow}
                />
              </Link>
            </li>
            <li className={style.userModalLink}>
              <div className={style.userModalLinkText}>
                <Icon
                  sprite={sprateSistem}
                  id={"icon-user"}
                  width="20px"
                  height="20px"
                  className={style.userModalLinkIcon}
                />
                <p className={style.userModalTextPath}>Мій профіль</p>
              </div>
              <Link className={style.userModalArrowLink}>
                <Icon
                  sprite={sprateSistem}
                  id={"icon-arrow-rigth"}
                  width="24px"
                  height="24px"
                  className={style.userModalArrow}
                />
              </Link>
            </li>
            <li className={style.userModalLink}>
              <div className={style.userModalLinkText}>
                <Icon
                  sprite={sprateSistem}
                  id={"icon-settings"}
                  width="20px"
                  height="20px"
                  className={style.userModalLinkIcon}
                />
                <p className={style.userModalTextPath}>Налаштування</p>
              </div>
              <Link className={style.userModalArrowLink}>
                <Icon
                  sprite={sprateSistem}
                  id={"icon-arrow-rigth"}
                  width="24px"
                  height="24px"
                  className={style.userModalArrow}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={style.headerAuthLinks}>
        <Link className={style.linkLogOut} to={"/login"} onClick={closeModal}>
          <Icon
            sprite={sprateSistem}
            id={"icon-logOut-mob-menu"}
            width="20px"
            height="20px"
            className={style.iconLogOut}
          />
          <p className={style.exit}>Вийти</p>
        </Link>
      </div>
    </>
  );
}
