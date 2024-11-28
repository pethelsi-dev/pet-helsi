import fishMob1x from "../../assets/Images/fish-mob1x.png";
import fishMob2x from "../../assets/Images/fish-mob2x.png";
import fishDesktop1x from "../../assets/Images/fish-desktop1x.png";
import fishDesktop2x from "../../assets/Images/fish-desktop2x.png";
import spriteSistem from "../../assets/Images/sprite-sistem.svg";
import Icon from "../Icon/Icon";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footerWrapper}>
      <div className={style.footerContainer}>
        <div className={style.footerLogo}>
          <Icon
            sprite={spriteSistem}
            id="icon-pet-helsi-logo"
            width="112px"
            height="32px"
            className={style.icon}
          />
          <p className={style.textForLogo}>З турботою про ваших улюбленців</p>
        </div>

        <ul className={style.footerNavList}>
          <li>
            <a href="#aboutUs" className={style.footerNavListLink}>
              Про нас
            </a>
          </li>
          <li>
            <a href="#features" className={style.footerNavListLink}>
              Власникам тварин
            </a>
          </li>
          <li>
            <a href="#benefits" className={style.footerNavListLink}>
              Ветеринарам
            </a>
          </li>
        </ul>

        <div className={style.footerImgWrapper}>
          <picture className={style.footerFish}>
            <source
              media="(min-width: 1440px)"
              srcSet={`${fishDesktop1x} 1x, ${fishDesktop2x} 2x`}
            />
            <source
              media="(min-width: 320px)"
              srcSet={`${fishMob1x} 1x, ${fishMob2x} 2x`}
            />
            <img src={fishMob1x} alt="fish" className={style.imgFish} />
          </picture>
        </div>
      </div>
    </footer>
  );
}
