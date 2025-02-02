import { Link } from "react-router-dom";
import Icon from "../../components/Icon/Icon";
import sprateSistem from "../../assets/Images/sprite-sistem.svg";
import style from "./ConsultationHistory.module.css";

export default function ConsultationHistory() {
  return (
    <section className={style.consultationHistoryContainer}>
      <div className={style.consultationHistoryBox}>
        <Icon
          sprite={sprateSistem}
          id={"icon-Folder_del_light"}
          width="128px"
          height="128px"
          className={style.folder}
        />
        <h3 className={style.consultationHistoryTitle}>
          В історії прийомів ще немає записів
        </h3>
        <p className={style.consultationHistoryText}>
          Тут буде відображатись уся інформація стосовно ваших онлайн
          консультацій
        </p>
        <Link to="/veterinarians" className={style.linkVeterinarians}>
          До бази лікарів
        </Link>
      </div>
    </section>
  );
}
