import { Link } from "react-router-dom";
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

        <div className={style.footerNavWrapper}>
          <div className={style.footerServise}>
            <p className={style.footerServiseTitle}>Сервіс</p>
            <ul className={style.footerNavList}>
              <li>
                <a href="#" className={style.footerNavListLink}>
                  Переваги
                </a>
              </li>
              <li>
                <a href="#" className={style.footerNavListLink}>
                  Як записатися на консультацію?
                </a>
              </li>
              <li>
                <Link to="/veterinarians" className={style.footerNavListLink}>
                  База ветеринарів
                </Link>
              </li>
              <li>
                <a href="#" className={style.footerNavListLink}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className={style.footerForUser}>
            <p className={style.footerServiseTitle}>Користувачу</p>
            <ul className={style.footerNavList}>
              <li>
                <Link to="/policy" className={style.footerNavListLink}>
                  Політика конфіденційності
                </Link>
              </li>
              <li>
                <Link
                  to="/processing-regulation"
                  className={style.footerNavListLink}>
                  Положення про обробку даних
                </Link>
              </li>
              <li>
                <a href="#" className={style.footerNavListLink}>
                  Оплата та повернення
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={style.footerFormWrapper}>
          <h3 className={style.footerTitleForm}>
            Залиш свій e-mail та отримай знижку -10%
          </h3>
          <form className={style.footerForm}>
            <input
              type="email"
              name="email"
              placeholder="Введіть e-mail"
              required
              className={style.footerInputEmail}
            />
            <button type="submit" className={style.footerFormButton}>
              Отримати знижку
            </button>
          </form>
        </div>

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
