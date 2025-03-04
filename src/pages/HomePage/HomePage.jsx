import Hero from "../../components/Hero/Hero";
import HeroImage from "../../components/HeroImage/HeroImage";
import Features from "../../components/Features/Features";
import Discount from "../../components/Discount/Discount";
import VeterinariansList from "../../components/VeterinariansList/VeterinariansList";
import AppointmentProcess from "../../components/AppointmentProcess/AppointmentProcess";
import Faq from "../../components/Faq/Faq";
// import Footer from "../../components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroImage />
      <Features />
      <AppointmentProcess />
      <VeterinariansList />
      <Discount />
      <Faq />
      {/* <Footer /> */}
    </>
  );
}
