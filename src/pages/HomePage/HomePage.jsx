import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectorIsLoggedIn } from "../../redux/auth/selectors";
import Layout from "../../components/Layout/Layout";
import WelcomePage from "../WelcomePage/WelcomePage";

export default function HomePage() {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.innerWidth >= 1440
  );
  const [modalIsOpen, setIsOpen] = useState(false);
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
      <Layout modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      {!isLoggedIn && <WelcomePage isDesktop={isDesktop} />}
    </>
  );
}
