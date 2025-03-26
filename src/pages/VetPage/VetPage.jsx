import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { DeviceContext } from "../../components/DeviceProvider/DeviceProvider";
import sprateSistem from "../../assets/Images/sprite-sistem.svg";
import Icon from "../../components/Icon/Icon";
import VetDescription from "../../components/VetDescription/VetDescription";
import allVeterinarians from "../../../allVeterinarians.json";
import style from "./VetPage.module.css";

export default function VetPage() {
  const { id } = useParams();
  const vet = allVeterinarians.find(vet => vet.id === Number(id));
  const { isDesktop } = useContext(DeviceContext);

  if (!vet) {
    return <p>Ветеринар не знайден</p>;
  }
  console.log(vet);
  const {
    experience,
    first_name,
    last_name,
    middle_name,
    rating,
    reviews_count,
  } = vet;

  return (
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
              {last_name} {first_name} {middle_name}
            </p>
          )}
        </div>

        <div className={style.vetPageDeskr}>
          <VetDescription vetValue={vet} />
        </div>
      </div>
    </section>
  );
}
