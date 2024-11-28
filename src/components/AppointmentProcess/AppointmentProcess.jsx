import consultationImg1x from "../../assets/Images/online-consultation@1x.png";
import consultationImg2x from "../../assets/Images/online-consultation@2x.png";
import vector from "../../assets/Images/vector.png";
import style from "./AppointmentProcess.module.css";

export default function AppointmentProcess({ isDesktop }) {
  return (
    <div id="appointment" className={style.appointmentContainer}>
      <div className={style.appointmentPicture}>
        <picture className={style.appointmentPicture}>
          <source
            media="(min-width: 1440px)"
            srcSet={`${consultationImg1x} 1x, ${consultationImg2x} 2x`}
          />
          <img
            src="../../assets/Images//online-consultation@1x.png"
            alt="Appointment"
            className={style.appointmentImg}
          />
        </picture>
      </div>
      <div className={style.appointmentListWrapper}>
        <h2 className={style.appointmentTitle}>
          Як проходитиме онлайн-консультація
        </h2>
        <ul className={style.appointmentList}>
          <li className={style.appointmentListItem}>
            <p className={style.number}>1</p>
            <div>
              <h3 className={style.title}>Заповнення форми</h3>
              <p className={style.text}>
                {isDesktop
                  ? "Після того, як ви внесете дані про тварину та оберете дату та час прийому, система автоматично підбере доступних ветеринарів"
                  : "Оберіть: вид тварини, що її турбує та зручну дату прийому. Система автоматично підбере доступних ветеринарів"}
              </p>
            </div>
          </li>
          <li className={style.appointmentListItem}>
            <p className={style.number}>2</p>
            <div>
              <h3 className={style.title}>Оберіть ветеринара</h3>
              <p className={style.text}>
                {isDesktop
                  ? "Серед запропонованих системою ветеринарів, ви зможете обрати того, який найбільше відповідає вашим вимогам"
                  : "Визначте ветеринара, який ідеально вам підходить серед запропонованих системою"}
              </p>
            </div>
          </li>
          <li className={style.appointmentListItem}>
            <p className={style.number}>3</p>
            <div>
              <h3 className={style.title}>Сплатіть консультацію</h3>
              <p className={style.textLast}>
                Наша платформа підтримує різні платіжні системи. Здійсніть
                оплату та проконсультуйтеся з ветеринаром
              </p>
            </div>
          </li>
        </ul>
        <img
          src="https://s3-alpha-sig.figma.com/img/4122/54ed/be484b61795d7bf3cad2cdc8d23e5593?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qV~bi-EDBEfzz1foNgJbOnPOIYu0JSLRohzeI9CLFFne3rInNRyQwEohfH7goL652uZiES1Hw~yMb4ZK0jZEgWt9gysoeOfhT4We4NM0E4BjMrMvU1RrnnjTG5TiDl5RzTRT47DbeleihjtRf082yNXQXPzkL-Ly3AO1KKVjbcv5joL-b53F9k617KHwW4ap1r-NMDoeEh0l1t9gWUtrJ2-bV5eaF~4ab-Z0LXCvKB~w5QEAHYybIT4KysSngLc8hAZh3bKrFlONRydMf2rfAAJQsUcq7RxzQALaIqLuUEhpC9ycu~1kvY4TlxGX1gHG5xeLLHFnDa-8Mmr0wNj65Q__"
          alt="Cat GIF"
          className={style.appointmentCat}
        />
        <img
          src={vector}
          alt=""
          style={{ width: "236px", height: "144" }}
          className={style.appointmentVector}
        />
      </div>
    </div>
  );
}
