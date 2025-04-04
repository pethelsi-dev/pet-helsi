import { useContext } from "react";
import { VetContext } from "../../pages/VetPage/VetPage";
import style from "./WorkPlace.module.css";

export default function WorkPlace() {
  const vet = useContext(VetContext);

  return (
    <div className={style.workPlaceContainer}>
      <p className={style.workPlaceTitle}>Поточне місце роботи</p>
      <p className={style.workPlaceName}>{vet?.work_places?.organization}</p>
      <p className={style.workPlaceCity}>
        {vet?.work_places?.organizationCity}
      </p>
    </div>
  );
}
