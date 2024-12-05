import girlDogImageMob from "../../assets/Images/faq-girl-dog-mob@1x.png";
import girlDogImageDesktop from "../../assets/Images/girl-dog-desktop.jpg";
import style from "./HeroImage.module.css";

export default function HeroImage() {
  return (
    <div className={style.heroImageContainer}>
      {" "}
      <picture>
        <source media="(min-width: 1440px)" srcSet={girlDogImageDesktop} />
        <img
          src={girlDogImageMob}
          alt="girl with dog"
          className={style.image}
        />
      </picture>
    </div>
  );
}
