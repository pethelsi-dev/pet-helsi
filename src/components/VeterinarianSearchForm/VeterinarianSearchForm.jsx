import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { registerLocale } from "react-datepicker";
import { useContext } from "react";
import { DeviceContext } from "../DeviceProvider/DeviceProvider";
import { selectorIsOpenForm } from "../../redux/appSlice/selectors";
import DatePicker from "react-datepicker";
import uk from "date-fns/locale/uk";
import "react-datepicker/dist/react-datepicker.css";
import Icon from "../Icon/Icon";
import animalsSprite from "../../assets/Images/sprite-animals.svg";
import problemsSprite from "../../assets/Images/sprite-problems.svg";
import sistemSprite from "../../assets/Images/sprite-sistem.svg";
import clsx from "clsx";
import style from "./VeterinarianSearchForm.module.css";

registerLocale("uk", uk);

const optionsAnimals = [
  { value: "Собака", label: "Собака", icon: "icon-dog" },
  { value: "Кіт", label: "Кіт", icon: "icon-cat" },
  { value: "Гризун", label: "Гризун", icon: "icon-rabbit" },
  { value: "Птах", label: "Птах", icon: "icon-bird" },
  { value: "Плазун", label: "Плазун", icon: "icon-turtle" },
  { value: "Інше", label: "Інше", icon: "icon-other" },
];

const optionsProblems = [
  {
    value: "Харчовий розлад",
    label: "Харчовий розлад",
    icon: "icon-eating-disorder",
  },
  {
    value: "Шкірні/вушні інфекції",
    label: "Шкірні/вушні інфекції",
    icon: "icon-skin-infection",
  },
  {
    value: "Проблеми з очима",
    label: "Проблеми з очима",
    icon: "icon-eye-problems",
  },
  {
    value: "Проблеми із травленням",
    label: "Проблеми із травленням",
    icon: "icon-digestive-problems",
  },
  { value: "Блохи/кліщи", label: "Блохи/кліщи", icon: "icon-insects" },
  {
    value: "Травмування частин тіла",
    label: "Травмування частин тіла",
    icon: "icon-bones",
  },
  {
    value: "Догляд та утримання",
    label: "Догляд та утримання",
    icon: "icon-care",
  },
  {
    value: "Алергічна реакція",
    label: "Алергічна реакція",
    icon: "icon-allergy",
  },
  { value: "Інше", label: "Інше", icon: "icon-allproblems" },
];

export default function VeterinarianSearchForm() {
  const [isValueAnimals, setIsValueAnimals] = useState(null);
  const [isValueProblems, setIsValueProblems] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const [isOpenAnimals, setIsOpenAnimals] = useState(false);
  const [isOpenProblems, setIsOpenProblems] = useState(false);
  const isOpenForm = useSelector(selectorIsOpenForm);
  const { isDesktop } = useContext(DeviceContext);
  const location = useLocation();

  const toggleSelectAnimals = () => setIsOpenAnimals(!isOpenAnimals);
  const toggleSelectProblems = () => setIsOpenProblems(!isOpenProblems);

  const handleOptionClickAnimals = option => {
    setIsValueAnimals(option.value);
    setIsOpenAnimals(false);
  };

  const handleOptionClickProblems = option => {
    setIsValueProblems(option.value);
    setIsOpenProblems(false);
  };
  const handleSubmit = () => {
    const values = {
      animal: isValueAnimals,
      problem: isValueProblems,
      date: selectedDate,
    };
    console.log(values);
  };

  return (
    <div className={style.formContainer}>
      <div className={style.customSelect}>
        <div
          className={clsx(style.selectedOption, {
            [style.selectedOptionUserPanelMob]:
              location.pathname === "/user-panel/veterinarians" && !isDesktop,
            [style.selectedOptionUserPanel]:
              location.pathname === "/user-panel/veterinarians" && isDesktop,
            [style.selectedOptionVeterinars]:
              location.pathname === "/veterinarians" && isDesktop,
          })}
          onClick={toggleSelectAnimals}>
          <Icon
            sprite={animalsSprite}
            id={
              isValueAnimals
                ? optionsAnimals.find(option => option.value === isValueAnimals)
                    .icon
                : "icon-paw"
            }
            width="24px"
            height="24px"
            className={style.icon}
          />
          {isValueAnimals
            ? optionsAnimals.find(option => option.value === isValueAnimals)
                .label
            : "Тварина"}
          <Icon
            sprite={sistemSprite}
            id={isOpenAnimals ? "icon-arrow_down" : "icon-arrow_up"}
            width="24px"
            height="24px"
            className={style.iconArrow}
          />
        </div>

        {isOpenAnimals && (
          <div className={style.options}>
            {optionsAnimals.map(option => (
              <div
                key={option.value}
                className={style.option}
                onClick={() => handleOptionClickAnimals(option)}>
                <Icon
                  sprite={animalsSprite}
                  id={option.icon}
                  width="24px"
                  height="24px"
                  className={style.icon}
                />
                {option.label}
                <Icon
                  sprite={sistemSprite}
                  id={"icon-check-option"}
                  width="24px"
                  height="24px"
                  className={style.iconCheckOption}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={style.customSelect}>
        <div
          className={clsx(style.selectedOptionProblems, {
            [style.selectedOptionUserPanelMob]:
              location.pathname === "/user-panel/veterinarians" && !isDesktop,
            [style.selectedOptionVeterinars]:
              location.pathname === "/veterinarians" && isDesktop,
          })}
          onClick={toggleSelectProblems}>
          <Icon
            sprite={problemsSprite}
            id={
              isValueProblems
                ? optionsProblems.find(
                    option => option.value === isValueProblems
                  ).icon
                : "icon-allproblems"
            }
            width="24px"
            height="24px"
            className={style.icon}
          />
          {isValueProblems
            ? optionsProblems.find(option => option.value === isValueProblems)
                .label
            : "Що турбує тварину?"}{" "}
          <Icon
            sprite={sistemSprite}
            id={isOpenProblems ? "icon-arrow_down" : "icon-arrow_up"}
            width="24px"
            height="24px"
            className={style.iconArrow}
          />
        </div>
        {isOpenProblems && (
          <div className={style.options}>
            {optionsProblems.map(option => (
              <div
                key={option.value}
                className={style.option}
                onClick={() => handleOptionClickProblems(option)}>
                <Icon
                  sprite={problemsSprite}
                  id={option.icon}
                  width="24px"
                  height="24px"
                  className={style.icon}
                />
                {option.label}
                <Icon
                  sprite={sistemSprite}
                  id={"icon-check-option"}
                  width="24px"
                  height="24px"
                  className={style.iconCheckOption}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        className={clsx(style.datePickerContainer, {
          [style.selectedOptionUserPanelMob]:
            location.pathname === "/user-panel/veterinarians" && !isDesktop,
        })}>
        <Icon
          sprite={sistemSprite}
          id={"icon-calendar"}
          width="24px"
          height="24px"
          className={style.icon}
        />

        <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          dateFormat="E, d MMMM"
          className={style.optionDate}
          placeholderText="Виберіть дату"
          locale="uk"
          minDate={new Date()}
        />
      </div>

      {!isOpenForm && (
        <button
          type="submit"
          onClick={handleSubmit}
          className={style.buttonSearch}>
          Знайти ветеринара
        </button>
      )}
    </div>
  );
}
