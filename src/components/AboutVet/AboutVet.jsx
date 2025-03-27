import { useContext } from "react";
import { DeviceContext } from "../DeviceProvider/DeviceProvider";
import { VetContext } from "../../pages/VetPage/VetPage";
import { optionsAnimals } from "../VeterinarianSearchForm/VeterinarianSearchForm";
import { optionsProblems } from "../VeterinarianSearchForm/VeterinarianSearchForm";
import Icon from "../Icon/Icon";
import animalsSprite from "../../assets/Images/sprite-animals.svg";
import problemsSprite from "../../assets/Images/sprite-problems.svg";
import style from "./AboutVet.module.css";

export default function AboutVet() {
  const { isDesktop } = useContext(DeviceContext);
  const vet = useContext(VetContext);

  return (
    <div>
      {isDesktop && <p className={style.aboutVetTitle}>Про мене</p>}

      <div className={style.aboutVetBioWrapper}>
        {!isDesktop ? (
          vet.description.length > 128 ? (
            <p className={style.aboutVetBio}>
              {vet.description.slice(0, 128) + "..."}{" "}
              <button type="button" className={style.aboutVetReadMore}>
                читати більше
              </button>
            </p>
          ) : (
            <p className={style.aboutVetBio}>{vet.description}</p>
          )
        ) : vet.description.length > 160 ? (
          <p className={style.aboutVetBio}>
            {vet.description.slice(0, 160) + "..."}{" "}
            <button type="button" className={style.aboutVetReadMore}>
              читати більше
            </button>
          </p>
        ) : (
          <p className={style.aboutVetBio}>{vet.description}</p>
        )}
      </div>

      <div className={style.aboutVetSpecializationGroup}>
        <p className={style.aboutVetSpecialization}>Тварини, з якими працюю:</p>
        <ul className={style.aboutVetSpecializationList}>
          {optionsAnimals.map((elem, index) => (
            <li key={index} className={style.aboutVetSpecializationItem}>
              <Icon
                sprite={animalsSprite}
                id={elem.icon}
                width="20px"
                height="20px"
                className={style.icons}
              />
              {elem.value}
            </li>
          ))}
        </ul>
      </div>

      <div className={style.aboutVetSpecializationGroup}>
        <p className={style.aboutVetSpecialization}>Які проблеми лікую:</p>
        <ul className={style.aboutVetSpecializationList}>
          {optionsProblems.map((elem, index) => (
            <li key={index} className={style.aboutVetSpecializationItem}>
              <Icon
                sprite={problemsSprite}
                id={elem.icon}
                width="20px"
                height="20px"
                className={style.icons}
              />
              {elem.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
