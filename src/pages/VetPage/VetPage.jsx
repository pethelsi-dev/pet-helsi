import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { createContext, useContext } from "react";
import { DeviceContext } from "../../components/DeviceProvider/DeviceProvider";
import sprateSistem from "../../assets/Images/sprite-sistem.svg";
import Icon from "../../components/Icon/Icon";
import VetDescription from "../../components/VetDescription/VetDescription";
import allVeterinarians from "../../../allVeterinarians.json";
import style from "./VetPage.module.css";

export const VetContext = createContext(null);

export default function VetPage() {
  const { id } = useParams();
  const vet = allVeterinarians.find(vet => vet.id === Number(id));
  const { isDesktop } = useContext(DeviceContext);

  if (!vet) {
    return <p>Ветеринар не знайден</p>;
  }

  const {
    experience,
    surname,
    name,
    patronymic,
    rating,
    reviews_count,
    description,
  } = vet;

  return (
    <VetContext.Provider value={vet}>
      <section className={style.vetPageConteiner}>
        <div>
          <div className={style.vetPageNav}>
            {!isDesktop && (
              <Icon
                sprite={sprateSistem}
                id={"arrow-left"}
                width="20px"
                height="20px"
                className={style.iconArrow}
              />
            )}{" "}
            {isDesktop && (
              <>
                <Link to={"/"}>Головна</Link>
                <Icon
                  sprite={sprateSistem}
                  id={"arrow-rigth"}
                  width="24px"
                  height="24px"
                  className={style.iconArrowDesk}
                />
              </>
            )}
            <p>Пошук ветеринара</p>
            <Icon
              sprite={sprateSistem}
              id={"arrow-rigth"}
              width="24px"
              height="24px"
              className={style.iconArrowDesk}
            />
            {isDesktop && (
              <p>
                {surname} {name} {patronymic}
              </p>
            )}
          </div>

          <div className={style.vetPageDeskr}>
            <VetDescription vetValue={vet} />
          </div>

          <div className={style.vetPageLinksWrapper}>
            <div className={style.vetPageLinks}>
              <NavLink
                to=""
                end
                className={({ isActive }) =>
                  isActive ? style.active : style.vetPageLink
                }>
                Профіль
              </NavLink>

              <NavLink
                to="work-experience"
                className={({ isActive }) =>
                  isActive ? style.active : style.vetPageLink
                }>
                Досвід роботи
              </NavLink>
              <NavLink
                to="education"
                className={({ isActive }) =>
                  isActive ? style.active : style.vetPageLink
                }>
                Освіта
              </NavLink>
            </div>
            <Outlet />
          </div>
        </div>
      </section>
    </VetContext.Provider>
  );
}
