import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectorIsLoggedIn } from "../../redux/auth/selectors";
import Hero from "../../components/Hero/Hero";
import HeroImage from "../../components/HeroImage/HeroImage";
import Features from "../../components/Features/Features";
import Discount from "../../components/Discount/Discount";
import VeterinariansList from "../../components/VeterinariansList/VeterinariansList";
import AppointmentProcess from "../../components/AppointmentProcess/AppointmentProcess";
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.innerWidth >= 1440
  );
  const isLoggedIn = useSelector(selectorIsLoggedIn);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1440);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Hero />
      <HeroImage />
      <Features />
      <AppointmentProcess />
      <VeterinariansList isDesktop={isDesktop} />
      <Discount />
      <Faq />
      <Footer />
    </>
  );
}
