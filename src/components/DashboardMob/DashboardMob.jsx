import Dashboard from "../Dashboard/Dashboard";
import girl from "../../assets/Images/faq-girl-dog-mob@1x.png";
import Modal from "react-modal";
import style from "./DashboardMob.module.css";

Modal.setAppElement("#root");

export default function DashboardMob() {
  return (
    <div className={style.userMenuContainer}>
      {<img src={girl} alt="" className={style.userModalPhotoButton}></img> || (
        <button type="button" className={style.userModalPhotoButton}>
          Д
        </button>
      )}

      <p className={style.userModalName}>name surname</p>
      <p className={style.userModalEmail}>email@gmail.com</p>

      <Dashboard />
    </div>
  );
}
