import { Link } from "react-router-dom";
import vector from "../../assets/Images/vector.png";
import vectorArrowHeart from "../../assets/Images/vector-arrow-heart.png";
import bunny from "../../assets/Images/bunny.gif"
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
          src={bunny}
          alt="bunny logo"
          className={style.discountRabbit}
        />
        <img src={vector} alt="" className={style.discountVector} />
      </div>
    </div>
  );
}
