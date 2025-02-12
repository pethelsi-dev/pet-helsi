import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openModal,
  closeModal,
  setModalError,
  setCode,
  setModalEmail,
} from "../../redux/auth/slice";
import {
  selectModalState,
  selectModalType,
  selectModalEmail,
  selectModalCode,
  selectModalError,
  selectIsModalOpen,
} from "../../redux/auth/selectors";
import Modal from "react-modal";
import css from "./CustomModalAuth.module.css";

// Modal.setAppElement("#root");

export default function CustomModalAuth() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsModalOpen);
  const type = useSelector(selectModalType);
  const email = useSelector(selectModalEmail);
  const code = useSelector(selectModalCode);
  const error = useSelector(selectModalError);

  console.log("Modal state:", isOpen, type);

  useEffect(() => {
    if (!isOpen) {
      dispatch(setCode(""));
      dispatch(setModalError(null));
    }
  }, [isOpen, dispatch]);

  const handleSubmit = async () => {
    if (type === "confirm-code") {
      if (code.length !== 4) {
        dispatch(setModalError("Код має містити 4 цифри"));
        return;
      }
      dispatch(setModalError(null));
      // Добавить логику для отправки кода
    }

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={() => dispatch(closeModal())}
        // className={css.modalWrapper}
        // overlayClassName={css.overlay}
      >
        <button
          onClick={() => dispatch(closeModal())}
          className={css.closeButton}
        >
          X
        </button>

        {type === "registration-success" && (
          <>
            <h1>Перевірте Вашу електронну адресу </h1>
            <p>
              Вам буде надіслано лист з підтвердженням реєстрації на вказаний
              E-mail: {email}
            </p>
            <button onClick={() => dispatch(closeModal())}>Ok</button>
          </>
        )}

        {type === "forgot-password" && (
          <>
            <h1>Забули пароль?</h1>
            <p> Введіть E-mail для отримання коду підтвердження</p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                dispatch(setModalError(null)); // Убираем ошибку
                dispatch(setModalEmail(e.target.value)); // Обновляем email
              }}
            />
            <button onClick={handleSubmit}>Отримати код</button>
          </>
        )}

        {type === "confirm-code" && (
          <>
            <h1>Введіть код підтвердження</h1>
            <p>Код надіслано на вказаний E-mail: {email}</p>
            <div className={css.codeInputContainer}>
              {[...Array(4)].map((_, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength="1"
                  className={css.codeInput}
                  value={code[i] || ""}
                  onChange={(e) => {
                    const newCode = [...code]; // Преобразуем строку в массив
                    newCode[i] = e.target.value;
                    dispatch(setCode(newCode.join(""))); // Диспатчим обновлённый код
                  }}
                />
              ))}
            </div>

            {error && <p className={css.error}>Невірний код підтвердження</p>}
            <button className={css.resendButton}>
              Відправити код повторно
            </button>
            <button onClick={handleSubmit}>Підтвердити</button>
            <button className={css.changeEmailButton}>
              Змінити вказаний емейл
            </button>
          </>
        )}

        {/* додати іконки для полів паролю */}
        {type === "reset-password" && (
          <>
            <h1>Створіть новий пароль</h1>
            <label htmlFor="new-password">Пароль</label>
            <input
              type="password"
              id="new-password"
              placeholder="Введіть пароль"
            />
            <label htmlFor="confirm-password">Повторіть пароль</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Повторіть пароль"
            />
            <button onClick={handleSubmit}>Готово</button>
          </>
        )}

        {type === "password-reset-success" && (
          <>
            <h1>Ваш пароль змінено!</h1>
            <p>
              Завжди зберігайте свій пароль у безпеці та не поширюйте його
              стороннім особам
            </p>
            <button onClick={() => dispatch(closeModal())}>
              Увійти до облікового запису
            </button>
          </>
        )}
      </Modal>
    );
  };
}
// Написати логіку для відображення модалки в формах
// змінити тайп на селектор?
// css
// icons глаза і ->
