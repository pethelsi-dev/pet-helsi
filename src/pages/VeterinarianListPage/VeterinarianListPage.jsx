import { Link, useNavigate, useLocation } from "react-router-dom";
import VetCard from "../../components/VetCard/VetCard";
import VeterinarianSearchForm from "../../components/VeterinarianSearchForm/VeterinarianSearchForm";
import sprateSistem from "../../assets/Images/sprite-sistem.svg";
import Icon from "../../components/Icon/Icon";
import style from "./VeterinarianListPage.module.css";

export default function VeterinarianListPage() {
  return (
    <section>
      <Link to="/">
        Головна
        <Icon
          sprite={sprateSistem}
          id={"icon-burger-for-header-mobile"}
          width="32px"
          height="32px"
          className={style.iconBurger}
        />
      </Link>
      <div>
        <VeterinarianSearchForm />
      </div>
      <div>
        <h3>Ветеренари</h3>
        <p>Впорядкувати за:За рейтингом</p>
      </div>
      {/* <VetCard /> */}
    </section>
  );
}
