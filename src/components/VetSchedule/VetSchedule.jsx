import style from "./VetSchedule.module.css";

export default function VetSchedule() {
  return (
    <div className={style.vetScheduleContainer}>
      <button type="button" className={style.vetScheduleTime}>
        Сьогодні o 18:00 <span>300 UAH</span>
      </button>
      <button type="button" className={style.vetScheduleMoreAboutFreeTime}>
        Більше вільних годин
      </button>
    </div>
  );
}
