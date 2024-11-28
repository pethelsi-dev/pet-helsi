import decor from "../../assets/Images/vector.png";
import Form from "../../components/Form/Form";
import Icon from "../Icon/Icon";
import spriteSistem from "../../assets/Images/sprite-sistem.svg";
import style from "./Hero.module.css";

export default function Hero({
  isDesktop,
  values,
  setValues,
  errors,
  setErrors,
}) {
  return (
    <div className={style.heroWrapper}>
      <p className={style.notification}>Сервіс ще у розробці</p>
      <div className={style.heroContainer}>
        <div>
          <div className={style.heroBox}>
            <h1 className={style.heroTitle}>
              ВЕТЕРИНАРНА <span className={style.time}>24/7</span> ОНЛАЙН
              КОНСУЛЬТАЦІЯ
            </h1>
            <p className={style.heroText}>
              {isDesktop
                ? "Приєднуйтесь до команди ветеринарів або станьте одним із перших клієнтів нашого сервісу, заповнивши форму нижче"
                : "Новий рівень турботи про здоров'я вашого улюбленця. Де б ви не були, ми завжди поруч!"}
            </p>
          </div>

          <div className={style.heroForm}>
            <Form
              customClassSelect="wideFieldsSelect"
              customClassInput="wideFieldsInput"
              customClassButton="wideFieldsButton"
              values={values}
              setValues={setValues}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
        </div>
        <div className={style.imageContainer}>
          <img
            src={
              "https://s3-alpha-sig.figma.com/img/692a/4ea9/7f0a0a94c9848a2de56708f52966d83d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Uw3YK2b1Xroa0K3Qy~ngWTN~Bw~xjRh2Hh7L6wwnQFoWXOKB6DAX5SqlDo8RGCCJAX9asRnjBkBsOUy8ohKOIw0RFc9~kd3imD8qYJrKkAFuSluxSjvJYBBZkrqpQ-q4-Yyu7RjWqEVJXiVXsSjUFMLWPC0PNFtBZm-o09pJco9uYCPn-4~2pfFxBXGxmJsak1HE3GnxEh3SZRCH1UOvd7oqQMc6vc4AkYfBfORLdDrJ8JgDU5FaGATLM1QhUkqDO-IqlP3U5L2OOVs9MvHT1Kmg8LkiGPH5bxWr4AShebiS09o2USgULyq077EMVg3GZruAztDnYZBrZzZLE7QNfg__"
            }
            alt="Logo"
            className={style.heroDog}
          />
          <img src={decor} alt="" className={style.heroDecor} />
          <p className={style.heroDesktopNotification}>Сервіс ще у розробці</p>
          <Icon
            sprite={spriteSistem}
            id={"icon-Thoughtsx"}
            width="20px"
            height="32px"
            className={style.iconHeroDesktopNotification}
          />
        </div>
      </div>
    </div>
  );
}
