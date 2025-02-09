import React, { useEffect } from "react";
export { useDispatch, useSelector } from "react-redux";
export {
  openModal,
  closeModal,
  setModalError,
  setCode,
} from "../../redux/auth/slice";
export {
  selectModalState,
  selectModalEmail,
  selectModalCode,
  selectModalError,
  selectIsModalOpen,
} from "../../redux/auth/selectors";
import Modal from "react-modal";
import css from "./CustomModalAuth.module.css";

Modal.setAppElement("#root");

export default function CustomModalAuth() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsModalOpen);
  const type = useSelector(selectModalType);
  const email = useSelector(selectModalEmail);
  const code = useSelector(selectModalCode);
  const error = useSelector(selectModalError);
  useEffect(() => {
    if (!isOpen) {
      setEmail(""); // Очищаем email при закрытии модалки
    }
  }, [isOpen]);

  const handleSubmit = async () => {
    if (type === "confirm-code") {
      if (code.length !== 4) {
        setError("Код має містити 4 цифри");
        return;
      }
      setError(null);
    }
  };
  // try {
  //   // Отправляем код на сервер для проверки
  //   const response = await verifyCodeAPI(email, code);

  //   if (response.success) {
  //     setError(null);
  //     onClose(); // Закрываем модалку или переключаемся на ввод нового пароля
  //   } else {
  //     setError("Невірний код підтвердження");
  //   }
  // } catch (error) {
  //   setError("Помилка перевірки коду");
  // }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modalWrapper}
      overlayClassName={css.overlay}
    >
      <button onClick={onClose} className={css.closeButton}>
        X
      </button>

      {/* попробовать вместо типа воспользоваться селекторами */}
      {type === "registration-success" && (
        <>
          <h1>Перевірте Вашу електронну адресу </h1>
          <p>
            Вам буде надіслано лист з підтвердженням реєстрації на вказаний
            E-mail: {email}
          </p>
          <button onClick={onClose}>Ok</button>
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
            onChange={(e) => setEmail(e.target.value)}
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
                  const newCode = [...code]; // Преобразуем в массив
                  newCode[i] = e.target.value;
                  setCode(newCode.join("")); // Обновляем стейт
                }}
              />
            ))}
          </div>
          {error && <p className={css.error}>Невірний код підтвердження</p>}
          <button className={css.resendButton}>Відправити код повторно</button>
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
          <button onClick={onClose}>Увійти до облікового запису</button>
        </>
      )}
    </Modal>
  );
}
// Написати логіку для відображення модалки в формах
// змінити тайп на селектор?
// css
// icons глаза і ->
