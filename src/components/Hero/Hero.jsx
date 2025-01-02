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
                "https://s3-alpha-sig.figma.com/img/692a/4ea9/7f0a0a94c9848a2de56708f52966d83d?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wdo1MsfnocTMVR-iuOODtvKCe0i2Rawo2-SH0T5feU0NKOBjFu2IQPfO2p07Drh9LXhbTeOkO6t~TA-M1Ed~Hq5S53aqSdJFzFppT8s8Fk3PtCYYYNnPj3NdLpy2lryGJaiGkmGPiWvVeHwexv7Ld0RmX9RzQB8sMOZQ2oe62DmN9IM5ikQw3zyNVyJFX-PbEQL5VP4Lg4Er-37PCTBH4K1jYjNFzqe1mjrE9n7TaKdsSYk-gKrDxinFcHcWBow9jm9xzU93oGyiXZ9u~smZlfCjH~y7zEp1rqFIFWIYKd1YM4Uffecbm8y~QH7PhmGIE62xzFbk3K3XpMECA~p0KQ__"
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
