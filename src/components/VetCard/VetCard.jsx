import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import VetSchedule from "../VetSchedule/VetSchedule";
import Icon from "../Icon/Icon";
import sprateSistem from "../../assets/Images/sprite-sistem.svg";
import veterinar from "../../assets/Images/588f8e49768020da958bb009d913c575.png";
import style from "./Vetcard.module.css";

export default function VetCard({ vetValue, isVisible }) {
  const location = useLocation();
  const {
    experience,
    first_name,
    last_name,
    middle_name,
    photo_url,
    rating,
    reviews_count,
  } = vetValue;

  return (
    <article className={style.VetCardContainer}>
      {location.pathname !== "/" && (
        <img
          src={
            // photo_url ||
            veterinar
          }
          alt=""
          className={style.imageVeterinarian}
        />
      )}

      <div className={style.vetCardDescription}>
        <p className={style.name}>{last_name}</p>
        <p className={style.name}>
          {first_name} {middle_name}
        </p>
        <p className={style.vetCardExperience}>
          Стаж: <span className={style.vetCardData}>{experience} років</span>
        </p>
        <div className={style.vetCardReviews}>
          <Icon
            sprite={sprateSistem}
            id="icon-star_fill"
            width="20px"
            height="20px"
            className={style.iconStar}
          />
          <span className={style.vetCardData}>{rating}</span>
          <span>({reviews_count} відгуки)</span>
        </div>
      </div>

      <AnimatePresence>
        {(location.pathname !== "/" || isVisible) && (
          <motion.div
            key="vet-schedule"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}>
            <VetSchedule />
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
