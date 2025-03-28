import { useParams, useLocation } from "react-router-dom";
import { useContext } from "react";
import { DeviceContext } from "../DeviceProvider/DeviceProvider";
import Icon from "../Icon/Icon";
import sprateSistem from "../../assets/Images/sprite-sistem.svg";
import veterinar from "../../assets/Images/588f8e49768020da958bb009d913c575.png";
import clsx from "clsx";
import style from "./VetDescription.module.css";

export default function VetDescription({ vetValue }) {
  const { id } = useParams();
  const { isDesktop } = useContext(DeviceContext);
  const location = useLocation();
  const path = location.pathname.includes(`/vet/${id}`);

  const { experience, surname, name, patronymic, rating, reviews_count } =
    vetValue;

  return (
    <>
      {location.pathname !== "/" && (
        <img
          src={
            // photo_url ||
            veterinar
          }
          alt=""
          className={clsx(style.imageVeterinarian, {
            [style.imageVeterinarianDesk]: path && isDesktop,
          })}
        />
      )}
      <div className={style.vetCardDescription}>
        <p
          className={clsx(style.name, {
            [style.nameVetPageMob]: path && !isDesktop,
            [style.nameVetPageDesk]: path && isDesktop,
          })}>
          {surname}
        </p>
        <p
          className={clsx(style.name, {
            [style.nameVetPageMob]: path && !isDesktop,
            [style.nameVetPageDesk]: path && isDesktop,
          })}>
          {name} {patronymic}
        </p>

        <p
          className={clsx(style.vetCardExperience, {
            [style.vetCardExperienceMob]: path && !isDesktop,
            [style.vetCardExperienceDesk]: path && isDesktop,
          })}>
          Стаж: <span className={style.vetCardData}>{experience} років</span>
        </p>

        <div className={style.vetCardReviews}>
          <Icon
            sprite={sprateSistem}
            id="icon-star_fill"
            width="20px"
            height="20px"
            className={style.iconStar}
          />
          <span
            className={clsx(style.vetCardData, {
              [style.vetCardDataBlue]: path,
            })}>
            {rating}
          </span>
          <span>({reviews_count} відгуки)</span>
        </div>
      </div>
    </>
  );
}
