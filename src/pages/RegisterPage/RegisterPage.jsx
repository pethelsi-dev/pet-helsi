import { useState } from "react";
import RegistrForm from "../../components/RegistrForm/RegistrForm";
import css from "./RegisterPage.module.css";

export default function RegisterPage() {
  const [background, setBackground] = useState("owner");
  const handleBackgroundChange = (type) => {
    setBackground(type);
  };
  return (
    <div
      className={`${css.registerPageContainer} ${
        background === "doctor" ? css.doctorBackground : css.ownerBackground
      }`}>
      <div className={css.form}>
        <RegistrForm onUserTypeChange={handleBackgroundChange} />
      </div>
    </div>
  );
}
