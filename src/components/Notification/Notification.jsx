import style from "./Notification.module.css";

export default function Notification() {
  return (
    <div className={style.notificationContainer}>
      {/* {notifications.map((notification) => (
            <Notification key={notification.id} message={notification.message} />
          ))} */}
      <div className={style.notificationHeader}>
        <p className={style.notificationStatus}>Статус</p>
        <p className={style.notificationDate}> Date notification</p>
      </div>
      <p className={style.notificationStatusText}>
        Запис передано ветеренару, очікуйте підтвердження
      </p>
      <p className={style.notificationInfo}>
        Дата та час запису:
        <span className={style.notificationData}>20 Сер 2023 о 11.00</span>
      </p>
      <p className={style.notificationInfo}>
        Тварина:<span className={style.notificationData}>Тіфані</span>
      </p>
      <p className={style.notificationInfo}>
        Ветеринар:
        <span className={style.notificationData}>
          Шелудяк Олексій Вадимович
        </span>
      </p>
    </div>
  );
}
