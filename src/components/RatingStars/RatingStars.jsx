import sistemSprite from "../../assets/Images/sprite-sistem.svg";
import Icon from "../Icon/Icon";
import style from "./RatingStars.module.css";

export default function RatingStars({ rating }) {
  const fullStars = Math.floor(rating);

  return (
    <ul className={style.vetReviewsStarsList}>
      {Array.from({ length: 5 }, (_, i) => (
        <li key={i}>
          <Icon
            sprite={sistemSprite}
            id={"icon-star_fill"}
            width="20px"
            height="20px"
            className={`${style.iconsRating} ${
              i < fullStars ? style.blueStar : ""
            }`}
          />
        </li>
      ))}
    </ul>
  );
}
