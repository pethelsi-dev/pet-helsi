import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import HeroImage from "../../components/HeroImage/HeroImage";
import Features from "../../components/Features/Features";
import AppointmentProcess from "../../components/AppointmentProcess/AppointmentProcess";
import FormLanding from "../../components/FormLanding/FormLanding";
import Footer from "../../components/Footer/Footer";
import Benefits from "../../components/Benefits/Benefits";

export default function WelcomePage() {
  const [values, setValues] = useState({
    role: "owner",
    email: "",
  });
  const [errors, setErrors] = useState({});

  return (
    <>
      <Hero />
      <HeroImage />
      <Features />
      <AppointmentProcess />
      <Benefits />
      <FormLanding
        values={values}
        setValues={setValues}
        errors={errors}
        setErrors={setErrors}
      />
      <Footer />
    </>
  );
}
