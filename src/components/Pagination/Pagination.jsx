import sprateSistem from "../../assets/Images/sprite-sistem.svg";
import Icon from "../Icon/Icon";
import style from "./Pagination.module.css";

export default function Pagination() {
  return (
    <div className={style.paginationContainer}>
      <p className={style.paginationInfo}>Сторінка 1 з 5</p>
      <div className={style.paginationPagesGroup}>
        <button type="button" className={style.paginationButton}>
          <Icon
            sprite={sprateSistem}
            id={"arrow-left"}
            width="24px"
            height="24px"
            className={style.iconPagination}
          />
        </button>

        <button type="button" className={style.paginationPage}>
          1
        </button>
        <button type="button" className={style.paginationPage}>
          2
        </button>
        <button type="button" className={style.paginationPageOther}>
          ...
        </button>
        <button type="button" className={style.paginationPage}>
          5
        </button>
        <button type="button" className={style.paginationButton}>
          <Icon
            sprite={sprateSistem}
            id={"arrow-rigth"}
            width="24px"
            height="24px"
            className={style.iconPagination}
          />
        </button>
      </div>
    </div>
  );
}
