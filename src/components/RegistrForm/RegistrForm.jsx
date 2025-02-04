import * as Yup from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import sprateSistem from "../../assets/Images/sprite-sistem.svg";
import Icon from "../Icon/Icon";
import GoogleAuthorization from "../GoogleAuthorization/GoogleAuthorization";
import css from "./RegistrForm.module.css";

// import { useDispatch } from 'react-redux';
// import { signUp } from '../../redux/auth/operations';
// import { useNavigate } from 'react-router-dom';

export default function RegistrForm({ onUserTypeChange }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [userType, setUserType] = useState("owner");

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleUserTypeChange = (type) => {
    setUserType(type);
    onUserTypeChange(type); // Оновлюємо стан у батьківському компоненті
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Невірний формат E-mail")
      .required("Введіть е-mail"),
    password: Yup.string()
      .min(8, "Пароль має містити не менше 8 символів - цифри і букви")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Пароль має містити мінімум одну літеру та одну цифру"
      )
      .required("Введіть пароль"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Паролі повинні співпадати")
      .required("Повтор пароля є обов'язковим"),
  });

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values) => {
    // // Добавление типа пользователя в данные
    // const userData = { ...values, userType };
    // dispatch(signUp(userData))
    //   .then(() => {
    //     navigate("/profile"); // Перенаправление на страницу профиля
    //   })
    //   .catch((error) => {
    //     console.error("Ошибка регистрации: ", error);
    //   });
  };

  const setPasswordVisibleToggler = () => {
    setPasswordVisible(!passwordVisible);
  };

  const setConfirmPasswordVisibleToggler = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className={css.registrFormContainer}>
      <h1 className={css.registrTitle}>
        Реєстрація в <span className={css.span}>PetHelsi</span>
      </h1>
      <div className={css.formContainer}>
        <div className={css.selectUserTypeButtonContainer}>
          <button
            className={`${css.switchUserTypeButton} ${
              userType === "owner" ? css.activeButton : ""
            }`}
            type="button"
            onClick={() => handleUserTypeChange("owner")}
          >
            Я - власник тварини
          </button>
          <button
            className={`${css.switchUserTypeButton} ${
              userType === "doctor" ? css.activeButton : ""
            }`}
            type="button"
            onClick={() => handleUserTypeChange("doctor")}
          >
            Я - ветеринар
          </button>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnBlur={true}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className={css.form}>
              <div className={css.registerFormFields}>
                <div className={css.registerFormFieldContainer}>
                  <label className={css.label} htmlFor="email">
                    E-mail
                  </label>
                  <Field
                    className={`${css.registerInput} ${
                      errors.email && touched.email ? css.inputError : ""
                    }`}
                    type="email"
                    name="email"
                    placeholder="Введіть E-mail"
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className={css.emailError}
                  />
                </div>
                <div className={css.registerFormFieldContainer}>
                  <label className={css.label} htmlFor="password">
                    Пароль
                  </label>
                  <div className={css.registerFormInputWrapper}>
                    <Field
                      className={`${css.registerInput} ${
                        errors.password && touched.password
                          ? css.inputError
                          : ""
                      }`}
                      type={passwordVisible ? "text" : "password"}
                      name="password"
                      placeholder="Введіть пароль"
                    />
                    <button
                      type="button"
                      className={css.toggleButton}
                      onClick={setPasswordVisibleToggler}
                    >
                      <Icon
                        sprite={sprateSistem}
                        id={`${
                          passwordVisible ? "icon-eye_open" : "icon-view_hide"
                        }`}
                        width="20px"
                        height="20px"
                        className={css.passwordVisibleIcon}
                      />
                    </button>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="span"
                    className={css.passwordError}
                  />
                </div>
                <div className={css.registerFormFieldContainer}>
                  <label className={css.label} htmlFor="confirmPassword">
                    Повторіть пароль
                  </label>
                  <div className={css.registerFormInputWrapper}>
                    <Field
                      className={`${css.registerInput} ${
                        errors.confirmPassword && touched.confirmPassword
                          ? css.inputError
                          : ""
                      }`}
                      type={confirmPasswordVisible ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Повторіть пароль"
                    />
                    <button
                      type="button"
                      className={css.toggleButton}
                      onClick={setConfirmPasswordVisibleToggler}
                    >
                      <Icon
                        sprite={sprateSistem}
                        id={`${
                          confirmPasswordVisible
                            ? "icon-eye_open"
                            : "icon-view_hide"
                        }`}
                        width="20px"
                        height="20px"
                        className={css.passwordVisibleIcon}
                      />
                    </button>
                  </div>
                  <ErrorMessage
                    name="confirmPassword"
                    component="span"
                    className={css.confirmPasswordError}
                  />
                </div>
              </div>
              <div className={css.registrButton}>
                <button
                  className={css.button}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Зареєструватися
                </button>
                <div className={css.privacyPolicy}>
                  <p>
                    Реєструючись, ви приймаєте умови{" "}
                    <Link to="/policy" className={css.link}>
                      політики конфіденційності
                    </Link>
                  </p>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <div className={css.googleLoginContainer}>
          <p className={css.text}>або увійти за допомогою</p>
          <GoogleAuthorization />
        </div>
      </div>
      <p className={css.enterNow}>
        Вже зареєстровані?{" "}
        <Link to="/login" className={css.link}>
          Увійти
        </Link>
      </p>
    </div>
  );
}
