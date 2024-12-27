import decor from "../../assets/Images/vector.png";
import dog from "../../assets/Images/dog.gif"
import VeterinarianSearchForm from "../VeterinarianSearchForm/VeterinarianSearchForm";
import style from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={style.heroWrapper}>
      <div className={style.heroContainer}>
        <div className={style.heroMainContent}>
          <div className={style.heroBox}>
            <h1 className={style.heroTitle}>
              ВЕТЕРИНАРНА <span className={style.time}>24/7</span> ОНЛАЙН
              КОНСУЛЬТАЦІЯ
            </h1>
            <p className={style.heroText}>
              Новий рівень турботи про здоров&apos;я вашого улюбленця. Де б ви
              не були, ми завжди поруч!{" "}
            </p>
          </div>

          <div className={style.imageContainer}>
            <img
              src={dog}
              alt="Logo"
              className={style.heroDog}
            />
            <img src={decor} alt="" className={style.heroDecor} />
          </div>
        </div>
        <VeterinarianSearchForm />
      </div>
    </div>
  );
}
