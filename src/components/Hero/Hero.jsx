import decor from "../../assets/Images/vector.png";
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
              src={
                "https://s3-alpha-sig.figma.com/img/692a/4ea9/7f0a0a94c9848a2de56708f52966d83d?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YQJhNKWpXw7oVx1LKXWArBAAGtLsp~I5VYR7bU2MvWSzUpPZpyMvxDL17S86TNzS3Al6-3H~S9RK5oCZlCRJnbNsP0HO7gkiD-zf49VYH07Cvl5mdIm0EecYOP39XR7jNOqK4HIFhitdtbsN2UFsyw4n9i6GwX2vA-OYO46vvAm6LdorcHcCQcS6sdNXVgPIDW38oq5Ge~BtjjF0z2R1ky6fn~IFjifZbOWkjbKUvhz4dZxQ1mCMaf4xQ6MrZWZzYI36uWpXOQp~IpW-4eMrQiODxUfEbRQ42HOeHfwpgQyjwM51QKa01xhDBF4kOjSlzhYE0dTUrwqO4Ii3rrXCaw__"
              }
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
