import { DeviceContext } from "../DeviceProvider/DeviceProvider";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import VetCard from "../VetCard/VetCard";
import veterinar from "../../assets/Images/588f8e49768020da958bb009d913c575.png";
import allVeterinarians from "../../../allVeterinarians.json";
import Icon from "../Icon/Icon";
import sprateSistem from "../../assets/Images/sprite-sistem.svg";
import "swiper/css";
import "swiper/css/pagination";
import style from "./VeterinariansList.module.css";

export default function VeterinariansList() {
  const { isDesktop } = useContext(DeviceContext);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [visibleIndex, setVisibleIndex] = useState(null);
  const swiperRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [isDesktop]);

  const handleSwiperInit = swiper => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handleSlideChange = swiper => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div id="veterinarians" className={style.veterinariansContainer}>
      <div className={style.veterinariansTextWrapper}>
        <h3 className={style.veterinariansTitle}>
          Ветеринари, доступні у найближчий час
        </h3>
        <p className={style.veterinariansText}>
          Кожен із ветеринарів — експерт у своїй справі.
          <br />
          Тільки найкращі фахівці для вашого улюбленця.
        </p>
        <Link className={style.linkAllVeterinarians} to={"/veterinarians"}>
          Переглянути усіх ветеринарів{" "}
          <Icon
            sprite={sprateSistem}
            id={"icon-arrow_right_light"}
            width="24px"
            height="24px"
            className={style.iconArrowleft}
          />
        </Link>
      </div>

      <div>
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={isDesktop ? 24 : 13}
          slidesPerView={isDesktop ? 2.3 : 1.3}
          scrollbar={{ hide: true }}
          onSwiper={swiper => {
            swiperRef.current = swiper;
            handleSwiperInit(swiper);
          }}
          onResize={swiper => swiper.update()}
          onSlideChange={handleSlideChange}
          className={style.veterinariansList}>
          {allVeterinarians.map((elem, index) => (
            <SwiperSlide
              key={elem.id || index}
              className={style.veterinariansListitem}
              onMouseEnter={() => setVisibleIndex(index)}
              onMouseLeave={() => setVisibleIndex(null)}>
              <img
                src={veterinar}
                alt=""
                className={style.veterinariansListItemPhoto}
              />
              <div className={style.veterinariansListVetInfo}>
                <VetCard
                  vetValue={elem}
                  isVisible={
                    location.pathname !== "/" || visibleIndex === index
                  }
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={style.buttonsNav}>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`${style.buttonSlide} ${
              isBeginning ? style.disabled : ""
            }`}
            disabled={isBeginning}>
            <Icon
              sprite={sprateSistem}
              id={"icon-back_arrow"}
              width="24px"
              height="24px"
              className={style.iconArrow}
            />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={`${style.buttonSlide} ${isEnd ? style.disabled : ""}`}
            disabled={isEnd}>
            <Icon
              sprite={sprateSistem}
              id={"icon-arrow_right_light"}
              width="24px"
              height="24px"
              className={style.iconArrow}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
