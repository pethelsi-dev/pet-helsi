import { useContext, useState } from "react";
import { DeviceContext } from "../DeviceProvider/DeviceProvider";
import RatingStars from "../RatingStars/RatingStars";
import style from "./VetReviews.module.css";

export default function VetReviews({ vet }) {
  const { isDesktop } = useContext(DeviceContext);
  const [isVisibleReview, setVisibleReviews] = useState({});
  const incomingRating = 4.6;

  const toggleReview = index => {
    setVisibleReviews(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className={style.vetReviewsContainer}>
      <h3 className={style.vetReviewsTitle}>Відгуки</h3>

      {!isDesktop && (
        <div className={style.vetReviewsAllRatingWrapper}>
          <span className={style.numberRating}>{incomingRating}</span>
          <RatingStars rating={incomingRating} />
          <span className={style.vetReviewsQuantity}>123 відгуки </span>
        </div>
      )}

      <ul>
        {vet?.reviews?.length > 0 ? (
          vet?.reviews?.map((review, index) => {
            const isVisible = isVisibleReview[index] || false;

            return (
              <li key={index} className={style.vetReviewsListItem}>
                <div className={style.vetReviewsListItemInfoDesk}>
                  <div className={style.vetReviewsListItemInfo}>
                    <div className={style.vetReviewsListItemPhoto}>
                      {review.fullName.slice(0, 1)}
                    </div>
                    <div>
                      <p className={style.vetReviewsFullName}>
                        {review.fullName}
                      </p>
                      <p className={style.vetReviewsDateReviews}>
                        {review.dateReviews}
                      </p>
                    </div>
                  </div>

                  <div className={style.starsBox}>
                    <RatingStars rating={review.rating} />
                  </div>
                </div>

                {!isDesktop ? (
                  review.сomment.length > 128 ? (
                    <p className={style.vetReviewsComment}>
                      {isVisible
                        ? review.сomment
                        : review.сomment.slice(0, 128) + "..."}{" "}
                      <button
                        type="button"
                        className={style.aboutVetReadMore}
                        onClick={() => toggleReview(index)}>
                        {isVisible ? "згорнути" : "читати більше"}
                      </button>
                    </p>
                  ) : (
                    <p className={style.vetReviewsComment}>{review.сomment}</p>
                  )
                ) : review.сomment.length > 160 ? (
                  <p className={style.vetReviewsComment}>
                    {isVisible
                      ? review.сomment
                      : review.сomment.slice(0, 160) + "..."}{" "}
                    <button
                      type="button"
                      className={style.aboutVetReadMore}
                      onClick={() => toggleReview(index)}>
                      {isVisible ? "згорнути" : "читати більше"}
                    </button>
                  </p>
                ) : (
                  <p className={style.vetReviewsComment}>{review.сomment}</p>
                )}
              </li>
            );
          })
        ) : (
          <p className={style.vetReviewsComment}>
            Цей фахівець поки що не має відгуків.
          </p>
        )}
      </ul>

      {vet?.reviews?.length >= 2 && (
        <button type="button" className={style.vetReviewsShowAll}>
          Показати усі відгуки
        </button>
      )}
    </div>
  );
}
