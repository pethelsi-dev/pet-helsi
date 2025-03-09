import { Link, useLocation } from "react-router-dom";
// import { nanoid } from "nanoid";
import { useContext, useEffect, useState } from "react";
import { DeviceContext } from "../../components/DeviceProvider/DeviceProvider";
import VetCard from "../../components/VetCard/VetCard";
import Pagination from "../../components/Pagination/Pagination";
import VeterinarianSearchForm from "../../components/VeterinarianSearchForm/VeterinarianSearchForm";
import sprateSistem from "../../assets/Images/sprite-sistem.svg";
import Icon from "../../components/Icon/Icon";
import FilterVets from "../../components/FilterVets/FilterVets";
import allVeterinarians from "../../../allVeterinarians.json";
import clsx from "clsx";
import style from "./VeterinarianListPage.module.css";

export default function VeterinarianListPage() {
  const { isDesktop } = useContext(DeviceContext);
  const location = useLocation();
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    if (location.pathname === "/user-panel/veterinarians" && isDesktop) {
      setColumns(3);
    } else if (location.pathname === "/veterinarians" && isDesktop) {
      setColumns(4);
    }
  }, [location.pathname, isDesktop]);

  return (
    <section
      className={clsx(
        style.veterinarianListPageContainer,
        location.pathname === "/user-panel/veterinarians" &&
          style.forUserPanelPadding
      )}>
      <Link to="/" className={style.veterinarianListNav}>
        {!isDesktop && (
          <Icon
            sprite={sprateSistem}
            id={"arrow-left"}
            width="20px"
            height="20px"
            className={style.iconArrow}
          />
        )}
        Головна
        {isDesktop && (
          <>
            <Icon
              sprite={sprateSistem}
              id={"arrow-rigth"}
              width="24px"
              height="24px"
              className={style.iconArrowDesk}
            />
            <span>Ветеринари</span>
          </>
        )}
      </Link>

      <div className={style.veterinarianListSearchWrapper}>
        {isDesktop ? (
          <VeterinarianSearchForm />
        ) : (
          <button className={style.veterinarianListSearch}>
            Знайти ветеринара
          </button>
        )}
      </div>

      <div className={style.veterinarianListGroup}>
        <h3 className={style.veterinarianListTitle}>
          {isDesktop ? "Ветеренари" : "Всі ветеринари:"}
        </h3>

        {isDesktop ? (
          <div className={style.veterinarianListSortWrapper}>
            <p className={style.veterinarianListSortTitle}>Впорядкувати за:</p>
            <FilterVets />
          </div>
        ) : (
          <div className={style.veterinarianListFilterMob}>
            <FilterVets />
          </div>
        )}
      </div>

      <ul className={style.veterinarianPageList}>
        {allVeterinarians.map(elem => (
          <li
            key={elem.id}
            className={
              columns === 3
                ? style.veterinariansListitemUserPanel
                : style.veterinariansListitem
            }>
            <VetCard vetValue={elem} />
          </li>
        ))}
      </ul>

      {isDesktop && <Pagination />}
    </section>
  );
}
