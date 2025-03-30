import { useContext, useState } from "react";
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
  const [isVisibleAllDescr, setIsVisibleAllDescr] = useState(false);
  const vet = useContext(VetContext);

  return (
    <div>
      {isDesktop && <p className={style.aboutVetTitle}>Про мене</p>}

      <div className={style.aboutVetBioWrapper}>
        {!isDesktop ? (
          vet.description.length > 128 ? (
            <p className={style.aboutVetBio}>
              {isVisibleAllDescr
                ? vet.description
                : vet.description.slice(0, 128) + "..."}{" "}
              <button
                type="button"
                className={style.aboutVetReadMore}
                onClick={() => setIsVisibleAllDescr(prev => !prev)}>
                {isVisibleAllDescr ? "згорнути" : "читати більше"}
              </button>
            </p>
          ) : (
            <p className={style.aboutVetBio}>{vet.description}</p>
          )
        ) : vet.description.length > 160 ? (
          <p className={style.aboutVetBio}>
            {isVisibleAllDescr
              ? vet.description
              : vet.description.slice(0, 160) + "..."}{" "}
            <button
              type="button"
              className={style.aboutVetReadMore}
              onClick={() => setIsVisibleAllDescr(prev => !prev)}>
              {isVisibleAllDescr ? "згорнути" : "читати більше"}
            </button>
          </p>
        ) : (
          <p className={style.aboutVetBio}>{vet.description}</p>
        )}
      </div>

      <div className={style.aboutVetSpecializationGroup}>
        <p className={style.aboutVetSpecialization}>Тварини, з якими працюю:</p>
        <ul className={style.aboutVetSpecializationList}>
          {vet.petCategories.map((pet, index) => {
            const matchedOption = optionsAnimals.find(
              option => option.value === pet
            );
            return (
              <li key={index} className={style.aboutVetSpecializationItem}>
                {matchedOption && (
                  <Icon
                    sprite={animalsSprite}
                    id={matchedOption.icon}
                    width="20px"
                    height="20px"
                    className={style.icons}
                  />
                )}
                {pet}
              </li>
            );
          })}
        </ul>
      </div>

      <div className={style.aboutVetSpecializationGroup}>
        <p className={style.aboutVetSpecialization}>Які проблеми лікую:</p>
        <ul className={style.aboutVetSpecializationList}>
          {vet.petProblems.map((problem, index) => {
            const matchedOption = optionsProblems.find(
              option => option.value === problem
            );

            return (
              <li key={index} className={style.aboutVetSpecializationItem}>
                {matchedOption && (
                  <Icon
                    sprite={problemsSprite}
                    id={matchedOption.icon}
                    width="20px"
                    height="20px"
                    className={style.icons}
                  />
                )}
                {problem}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
