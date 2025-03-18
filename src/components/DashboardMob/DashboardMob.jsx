import { HiOutlineUserCircle } from "react-icons/hi";
import Dashboard from "../Dashboard/Dashboard";
import Modal from "react-modal";
import style from "./DashboardMob.module.css";

Modal.setAppElement("#root");

export default function DashboardMob() {
  return (
    <div className={style.userMenuContainer}>
      {(
        <div className={style.dashboardMobIcon}>
          <HiOutlineUserCircle className={style.userModalPhotoIcon} />
        </div>
      ) || (
        // <img src={} alt="" className={style.userModalPhotoButton}></img>
        <button type="button" className={style.userModalPhotoButton}>
          Д
        </button>
      )}

      {/* {<p className={style.userModalName}>name surname</p>} */}
      <p className={style.userModalEmail}>email@gmail.com</p>

      <Dashboard />
    </div>
  );
}
