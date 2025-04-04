import { useContext, useState } from "react";
import { VetContext } from "../../pages/VetPage/VetPage";
import diplom from "../../assets/Images/Variant_Files.jpg";
import style from "./EducationVet.module.css";

export default function EducationVet() {
  const vet = useContext(VetContext);
  const [isOpenCertificate, setIsOpenCertificate] = useState(false);

  return (
    <div>
      <div className={style.educationVetEdu}>
        <p className={style.educationVetEduTitle}>Загальна освіта</p>
        <p className={style.educationVetEduName}>
          {vet?.education?.eduInstitution}
        </p>
        <p className={style.educationVetEduDate}>
          {vet?.education?.startDateStudy} - {vet.education.finishDateStudy}
        </p>

        <ul className={style.educationVetDiplomsList}>
          {vet?.education?.diplomaUrl.map((elem, index) => (
            <li key={index}>
              <img
                src={diplom}
                className={style.educationVetEduImg}
                alt="diplom"
              />
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className={style.educationVetEduTitle}>Додаткова освіта</p>
        <ul>
          {vet?.additionalEducation?.map((elem, index) => (
            <li key={index}>
              <p className={style.educationVetEduName}>{elem.learningCenter}</p>
              <p className={style.educationVetEduDate}>
                {elem.startDateLearning} - {elem.finishDateLearning}
              </p>
            </li>
          ))}
        </ul>

        {isOpenCertificate ? (
          <ul className={style.educationVetCertificatesList}>
            {vet?.additionalEducation?.map((elem, index) => (
              <li key={index}>
                <img
                  src={
                    diplom
                    //  {elem.certificateUrl}
                  }
                  className={style.educationVetEduImg}
                  alt="diplom"
                />
              </li>
            ))}
          </ul>
        ) : (
          <button
            type="button"
            className={style.educationVetButton}
            onClick={() => setIsOpenCertificate(true)}>
            Показати дипломи
          </button>
        )}
      </div>
    </div>
  );
}
