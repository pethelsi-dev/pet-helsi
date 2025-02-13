import { Toaster, toast } from "react-hot-toast";
import Icon from "../Icon/Icon";
import sprateSistem from "../../assets/Images/sprite-sistem.svg";
import Notification from "../Notification/Notification";
import style from "./NotificationsWrapper.module.css";

export default function NotificationsWrapper({tostItemID, tostItem}) {
  return (
    <div className={`${style.notificationWrapperСontainer} ${tostItem ? style.show : style.hide}`}>
      <div className={style.notificationWrapperTopBox}>
        <p className={style.notificationWrapperTitle}>Сповіщення</p>
        <button type="button" className={style.buttonClose}>
          <Icon
            sprite={sprateSistem}
            id={"icon-close"}
            width="24px"
            height="24px"
            onClick={() => toast.dismiss(tostItemID)}
            className={style.iconClose}
          />
        </button>
      </div>

        <Notification />
    </div>
  );
}
