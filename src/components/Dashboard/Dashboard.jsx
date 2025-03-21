import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import sprateSistem from "../../assets/Images/sprite-sistem.svg";
import sprateAnimals from "../../assets/Images/sprite-animals.svg";
import style from "./Dashboard.module.css";

export default function Dashboard({ closeModal }) {
  return (
    <div className={style.dashboardContainer}>
      <ul className={style.dashboardList}>
        <li className={style.dashboardListItem}>
          <Link to="history" className={style.dashboardLink}>
            <div className={style.dashboardLinkWrapper}>
              <Icon
                sprite={sprateSistem}
                id={"icon-list"}
                width="24px"
                height="24px"
                className={style.dashboardLinkIcon}
              />
              <p className={style.dashboardTextPath}>Історія прийомів</p>
            </div>
            <Icon
              sprite={sprateSistem}
              id={"icon-arrow-rigth"}
              width="24px"
              height="24px"
              className={style.iconArrow}
            />
          </Link>
        </li>
        <li className={style.dashboardListItem}>
          <Link to="chats" className={style.dashboardLink}>
            <div className={style.dashboardLinkWrapper}>
              <Icon
                sprite={sprateSistem}
                id={"icon-message_light"}
                width="24px"
                height="24px"
                className={style.dashboardLinkIcon}
              />
              <p className={style.dashboardTextPath}>
                Чати <span>2</span>
              </p>
            </div>
            <Icon
              sprite={sprateSistem}
              id={"icon-arrow-rigth"}
              width="24px"
              height="24px"
              className={style.iconArrow}
            />
          </Link>
        </li>
        <li className={style.dashboardListItem}>
          <Link to="my-animals" className={style.dashboardLink}>
            <div className={style.dashboardLinkWrapper}>
              <Icon
                sprite={sprateAnimals}
                id={"icon-paw"}
                width="24px"
                height="24px"
                className={style.dashboardLinkIcon}
              />
              <p className={style.dashboardTextPath}>Мої тварини</p>
            </div>
            <Icon
              sprite={sprateSistem}
              id={"icon-arrow-rigth"}
              width="24px"
              height="24px"
              className={style.iconArrow}
            />
          </Link>
        </li>
        <li className={style.dashboardListItem}>
          <Link to="veterinarians" className={style.dashboardLink}>
            <div className={style.dashboardLinkWrapper}>
              <Icon
                sprite={sprateSistem}
                id={"icon-group"}
                width="24px"
                height="24px"
                className={style.dashboardLinkIcon}
              />
              <p className={style.dashboardTextPath}>Ветеринари</p>
            </div>
            <Icon
              sprite={sprateSistem}
              id={"icon-arrow-rigth"}
              width="24px"
              height="24px"
              className={style.iconArrow}
            />
          </Link>
        </li>
        <li className={style.dashboardListItem}>
          <Link to="profile" className={style.dashboardLink}>
            <div className={style.dashboardLinkWrapper}>
              <Icon
                sprite={sprateSistem}
                id={"icon-user"}
                width="24px"
                height="24px"
                className={style.dashboardLinkIcon}
              />
              <p className={style.dashboardTextPath}>Мій профіль</p>
            </div>
            <Icon
              sprite={sprateSistem}
              id={"icon-arrow-rigth"}
              width="24px"
              height="24px"
              className={style.iconArrow}
            />
          </Link>
        </li>
        <li className={style.dashboardListItem}>
          <Link to="settings" className={style.dashboardLink}>
            <div className={style.dashboardLinkWrapper}>
              <Icon
                sprite={sprateSistem}
                id={"icon-settings"}
                width="24px"
                height="24px"
                className={style.dashboardLinkIcon}
              />
              <p className={style.dashboardTextPath}>Налаштування</p>
            </div>
            <Icon
              sprite={sprateSistem}
              id={"icon-arrow-rigth"}
              width="24px"
              height="24px"
              className={style.iconArrow}
            />
          </Link>
        </li>
      </ul>

      <Link className={style.linkLogOut} to={"/login"}>
        <Icon
          sprite={sprateSistem}
          id={"icon-logOut-mob-menu"}
          width="24px"
          height="24px"
          className={style.iconLogOut}
        />
        <p className={style.exit}>Вийти</p>
      </Link>
    </div>
  );
}
