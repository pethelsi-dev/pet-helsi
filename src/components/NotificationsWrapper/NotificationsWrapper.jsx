import Icon from "../Icon/Icon";
import sprateSistem from "../../assets/Images/sprite-sistem.svg";
import Notification from "../Notification/Notification";
import style from "./NotificationsWrapper.module.css";

export default function NotificationsWrapper() {
  return (
    <div className={style.notificationWrapperСontainer}>
      <div className={style.notificationWrapperTopBox}>
        <p className={style.notificationWrapperTitle}>Сповіщення</p>
        <button type="button" className={style.buttonClose}>
          <Icon
            sprite={sprateSistem}
            id={"icon-close"}
            width="24px"
            height="24px"
            className={style.iconClose}
          />
        </button>
      </div>

      <div>
        <Notification />
      </div>
    </div>
  );
}
