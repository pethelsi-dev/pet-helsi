import { useNavigate } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Icon from "../Icon/Icon";
import sprateSistem from "../../assets/Images/sprite-sistem.svg";
import girl from "../../assets/Images/faq-girl-dog-mob@1x.png";
import style from "./UserMenu.module.css";

export default function UserMenu({ closeModal }) {
  const navigate = useNavigate();

  const switchToMain = () => {
    closeModal();
    navigate("/");
  };

  return (
    <div>
      <div className={style.modalMenuLogo}>
        <Icon
          sprite={sprateSistem}
          id={"icon-pet-helsi-logo"}
          width="112px"
          height="19px"
          className={style.iconLogo}
          onClick={closeModal}
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
          onClick={switchToMain}
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
            Д
          </button>
        )}

        <p className={style.userModalName}>name surname</p>
        <p className={style.userModalEmail}>email@gmail.com</p>

        <Dashboard closeModal={closeModal} />
      </div>
    </div>
  );
}
