import { Link } from "react-router-dom";
import vector from "../../assets/Images/vector.png";
import vectorArrowHeart from "../../assets/Images/vector-arrow-heart.png";
import style from "./Discount.module.css";

export default function Discount() {
  return (
    <div className={style.discountComponent}>
      <div className={style.discountContainer}>
        <div className={style.discountContent}>
          <h3 className={style.discountTitle}>
            Реєструйся та отримуй знижку <br className={style.transfer} /> -10%
            на першу консультацію
          </h3>
          <Link className={style.linkRegister} to={"/register"}>
            Зареєструватися
          </Link>
          <img
            src={vectorArrowHeart}
            alt=""
            className={style.vectorArrowHeart}
          />
        </div>

        <img
          src={
            "https://s3-alpha-sig.figma.com/img/c909/991f/aaf8c451a7b29544e190b743894be50f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qzenqX55sZBHmSv1ZfYhFeKFqHmV09~WbNd~zj7m4LgUDWCKY-pYIqLHK0UUgZ9jThc8nklJOyGKamA2rm-BUizA3eYovhSYtUxpuddv7Y53VQ8~k53R21tZRPxJOcM0SkNQWSItLqbEwKB6dg2mb9u9hOLTemuZvu6QO-3gQe2foH5CaEc7~axxT0NWdHqCwba1xco9xED9~q~w8Ej4mYwDjqRe6aHPggfOpDoXjLy4SbPtpsO-V-rfNEyHknLWofuXJ~XHd~B29EEwj-Es0QvKxFc8AIRjzSx9cQI2CIZ98BYYqsA7jtuIF-1oJ-62swPbXE2ScjIuGHZKMWatWQ__"
          }
          alt=""
          className={style.discountRabbit}
        />
        <img src={vector} alt="" className={style.discountVector} />
      </div>
    </div>
  );
}
