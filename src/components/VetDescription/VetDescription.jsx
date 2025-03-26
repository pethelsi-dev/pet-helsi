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

  const {
    experience,
    first_name,
    last_name,
    middle_name,
    rating,
    reviews_count,
  } = vetValue;

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
            [style.imageVeterinarianDesk]:
              location.pathname === `/vet/${id}` && isDesktop,
          })}
        />
      )}
      <div className={style.vetCardDescription}>
        <p
          className={clsx(style.name, {
            [style.nameVetPageMob]:
              location.pathname === `/vet/${id}` && !isDesktop,
            [style.nameVetPageDesk]:
              location.pathname === `/vet/${id}` && isDesktop,
          })}>
          {last_name}
        </p>
        <p
          className={clsx(style.name, {
            [style.nameVetPageMob]:
              location.pathname === `/vet/${id}` && !isDesktop,
            [style.nameVetPageDesk]:
              location.pathname === `/vet/${id}` && isDesktop,
          })}>
          {first_name} {middle_name}
        </p>

        <p
          className={clsx(style.vetCardExperience, {
            [style.vetCardExperienceMob]:
              location.pathname === `/vet/${id}` && !isDesktop,
            [style.vetCardExperienceDesk]:
              location.pathname === `/vet/${id}` && isDesktop,
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
              [style.vetCardDataBlue]: location.pathname === `/vet/${id}`,
            })}>
            {rating}
          </span>
          <span>({reviews_count} відгуки)</span>
        </div>
      </div>
    </>
  );
}
