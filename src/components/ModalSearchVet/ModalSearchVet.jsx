import { useState } from "react";
import { useDispatch } from "react-redux";
import { setIsOpenForm } from "../../redux/appSlice/slice";
import VeterinarianSearchForm from "../VeterinarianSearchForm/VeterinarianSearchForm";
import sprateSistem from "../../assets/Images/sprite-sistem.svg";
import Icon from "../Icon/Icon";
import style from "./ModalSearchVet.module.css";

export default function ModalSearchVet() {
  const dispatch = useDispatch();
  const [isValueProblems, setIsValueProblems] = useState("");
  const [isValueAnimals, setIsValueAnimals] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const resetForm = () => {
    setIsValueAnimals(""), setIsValueProblems(""), setSelectedDate(new Date());
  };

  return (
    <div className={style.modalSearchVetContainer}>
      <div>
        <div
          className={style.modalSearchVetTitleWrapper}
          onClick={() => dispatch(setIsOpenForm(false))}>
          <span className={style.modalSearchVetTitle}>Знайти ветеринара</span>
          <Icon
            sprite={sprateSistem}
            id={"icon-close"}
            width="32px"
            height="32px"
            className={style.iconClose}
          />
        </div>

        <div>
          <VeterinarianSearchForm
            isValueAnimals={isValueAnimals}
            setIsValueAnimals={setIsValueAnimals}
            isValueProblems={isValueProblems}
            setIsValueProblems={setIsValueProblems}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
      </div>

      <div className={style.modalSearchVetButWrapper}>
        <button type="button" className={style.modalSearchVetButSearch}>
          Застосувати
        </button>
        <button
          type="button"
          className={style.modalSearchVetButReset}
          onClick={() => resetForm()}>
          Скинути все
        </button>
      </div>
    </div>
  );
}
