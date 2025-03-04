import { useState } from "react";
import sprateSistem from "../../assets/Images/sprite-sistem.svg";
import Icon from "../../components/Icon/Icon";
import style from "./FilterVets.module.css";

export default function FilterVets() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilterVet, setSelectedFilterVet] = useState("За рейтингом");

  const handleChange = event => {
    setSelectedFilterVet(event);
    setIsOpen(false);
  };

  return (
    <div className={style.filterVet}>
      {isOpen ? (
        <Icon
          sprite={sprateSistem}
          id={"icon-arrow_down"}
          width="24px"
          height="24px"
          className={style.iconArrowFilterVet}
        />
      ) : (
        <Icon
          sprite={sprateSistem}
          id={"icon-arrow_up"}
          width="24px"
          height="24px"
          className={style.iconArrowFilterVet}
        />
      )}

      <div
        onClick={() => setIsOpen(prevState => !prevState)}
        className={style.filterVetsValue}>
        <span>{selectedFilterVet}</span>
      </div>

      {isOpen && (
        <ul className={style.filterVetsOptionList}>
          <li
            className={style.filterVetsOption}
            onClick={() => handleChange("За стажем")}>
            За стажем
          </li>
          <li
            className={style.filterVetsOption}
            onClick={() => handleChange("За рейтингом")}>
            За рейтингом
          </li>
          <li
            className={style.filterVetsOption}
            onClick={() => handleChange("За більшою вартістю")}>
            За більшою вартістю
          </li>
          <li
            className={style.filterVetsOption}
            onClick={() => handleChange("За меншою вартістю")}>
            За меншою вартістю
          </li>
        </ul>
      )}
    </div>
  );
}
