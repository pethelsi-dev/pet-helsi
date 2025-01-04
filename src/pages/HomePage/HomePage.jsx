import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsOpenMenu } from "../../redux/appSlice/slice";
import Hero from "../../components/Hero/Hero";
import HeroImage from "../../components/HeroImage/HeroImage";
import Features from "../../components/Features/Features";
import Discount from "../../components/Discount/Discount";
import VeterinariansList from "../../components/VeterinariansList/VeterinariansList";
import AppointmentProcess from "../../components/AppointmentProcess/AppointmentProcess";
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {
  const dispatch = useDispatch();
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.innerWidth >= 1440
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1440);
      if (window.innerWidth >= 1440) {
        dispatch(setIsOpenMenu(false));
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

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
