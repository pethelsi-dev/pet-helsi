import { useDispatch } from "react-redux";
import { setShowNotification } from "../../redux/appSlice/slice";
import Icon from "../Icon/Icon";
import sprateSistem from "../../assets/Images/sprite-sistem.svg";
import Notification from "../Notification/Notification";
import style from "./NotificationsWrapper.module.css";

export default function NotificationsWrapper() {
  const dispatch = useDispatch();

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
            onClick={() => dispatch(setShowNotification(false))}
            className={style.iconClose}
          />
        </button>
      </div>

      <Notification />
    </div>
  );
}
