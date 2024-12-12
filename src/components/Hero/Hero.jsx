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
                "https://s3-alpha-sig.figma.com/img/692a/4ea9/7f0a0a94c9848a2de56708f52966d83d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fnUvo~dF7ztoZsy~iAUX1~H58Uw9C1wngmS13GIHxrL5-Wm0ebokDcHaktu-BNdOoZFYUl8qFP94LwBBihhTslZZo008SE4bE0e8xJP2CCzx-l06sbKSAzyG3W37uNIu~nOsjiZxj-~Cm-697Auw0QS3KFjyK6BGLXFq2Zbb61IIow6sfkpyWudOVkS0uPN0rQ9FIalr58jvOexHLsycPJ24xQghwPBxr0AKrm~43DSWsJjYj807EqU5Sg1k661wEsLYkMXSPjmLHPjSuD7OmWzSBWTbeUCsjRrPnteMQ-Ze4LSDzypqW7OLvx2lK-gqMwdz4V~ubiggWl-RV4gMmA__"
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
