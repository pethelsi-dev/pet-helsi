import { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import spriteSocialMedia from "../../assets/Images/sprite-social-media.svg";
import css from "./GoogleAuthorization.module.css";

export default function GoogleAuthorization() {
  // Локальний стан для заглушки посилання
  const [googleLink, setGoogleLink] = useState(null);

  // Ефект для симуляції завантаження посилання
  useEffect(() => {
    // Симуляція запиту на сервер
    setTimeout(() => {
      setGoogleLink("https://accounts.google.com/o/oauth2/auth");
    }, 1000); // Завантаження триває 1 секунду
  }, []);

  // Перевірка: якщо посилання ще не завантажено
  if (!googleLink) {
    return <div className={css.loadingMessage}>Завантаження...</div>;
  }

  return (
    <a href={googleLink} className={css.googleLink}>
      <Icon
        sprite={spriteSocialMedia}
        id={"icon-icon-logos_google-icon"}
        width="20px"
        height="20px"
        className={css.iconGoogle}
      />
      Google
    </a>
  );
}
