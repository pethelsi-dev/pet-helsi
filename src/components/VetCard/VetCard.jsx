import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { DeviceContext } from "../DeviceProvider/DeviceProvider";
import VetDescription from "../VetDescription/VetDescription";
import VetSchedule from "../VetSchedule/VetSchedule";
import style from "./Vetcard.module.css";

export default function VetCard({ vetValue, isVisible }) {
  const location = useLocation();
  const { isDesktop } = useContext(DeviceContext);
  const {
    id,
    experience,
    name,
    surname,
    patronymic,
    photo_url,
    rating,
    reviews_count,
  } = vetValue;

  return (
    <Link to={`/vet/${id}`}>
      <article
        className={style.VetCardContainer}
        style={
          location.pathname.includes("/user-panel/veterinarians") && isDesktop
            ? { width: "288px" }
            : {}
        }>
        <VetDescription vetValue={vetValue} />

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
    </Link>
  );
}
