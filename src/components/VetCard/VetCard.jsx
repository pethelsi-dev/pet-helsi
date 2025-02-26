import Icon from "../Icon/Icon";
import sprateSistem from "../../assets/Images/sprite-sistem.svg";
import veterinar from "../../assets/Images/State=Default, Adaptive=Descktop.png";
import style from "./Vetcard.module.css";

export default function VetCard({ vetValue }) {
  console.log(vetValue);
  const {
    experience,
    first_name,
    last_name,
    middle_name,
    photo_url,
    rating,
    reviews_count,
  } = vetValue;

  return (
    <article>
      <img
        src={photo_url || veterinar}
        alt=""
        className={style.imageVeterinarian}
      />
      <div className={style.veterinariansDescrWrapper}>
        <p className={style.name}>{last_name}</p>
        <p className={style.name}>
          {first_name} {middle_name}
        </p>
        <p className={style.veterinariansExperience}>
          Стаж: {experience} років
        </p>
        <div className={style.reviewsWrapper}>
          <Icon
            sprite={sprateSistem}
            id="icon-star_fill"
            width="16px"
            height="16px"
            className={style.iconStar}
          />
          {rating}{" "}
          <span className={style.reviewsCount}>({reviews_count} відгуки)</span>
        </div>
      </div>
    </article>
  );
}
