import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import HeroImage from "../../components/HeroImage/HeroImage";
import AboutUs from "../../components/AboutUs/AboutUs";
import Features from "../../components/Features/Features";
import WorkingWithProblems from "../../components/WorkingWithProblems/WorkingWithProblems";
import AppointmentProcess from "../../components/AppointmentProcess/AppointmentProcess";
import FormLanding from "../../components/FormLanding/FormLanding";
import Footer from "../../components/Footer/Footer";
import Benefits from "../../components/Benefits/Benefits";

export default function WelcomePage(isDesktop) {
  const [values, setValues] = useState({
    role: "owner",
    email: "",
  });
  const [errors, setErrors] = useState({});

  return (
    <>
      <Hero />
      <HeroImage />
      <AboutUs />
      <Features isDesktop={isDesktop} />
      <WorkingWithProblems />
      <FormLanding
        values={values}
        setValues={setValues}
        errors={errors}
        setErrors={setErrors}
      />
      <AppointmentProcess isDesktop={isDesktop} />
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
