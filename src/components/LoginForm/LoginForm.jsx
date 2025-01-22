import { useState } from "react";
import SvgIcon from "../Icon/Icon";
import sprite from "../../assets/Images/sprite-sistem.svg";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import GoogleAuthorization from "../GoogleAuthorization/GoogleAuthorization";
import css from "./LoginForm.module.css";

export default function LoginForm({ onUserTypeChange }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userType, setUserType] = useState("owner");

  const handleUserTypeChange = (type) => {
    setUserType(type);
    onUserTypeChange(type);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Невірний формат E-mail")
      .required("Введіть е-mail"),
    password: Yup.string().required("Введіть пароль"),
  });

  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const handleSubmit = (values) => {
    console.log("Submitted values:", { ...values, userType }); // Додаємо тип користувача
    // Виклик API для логіну
  };

  const setPasswordVisibleToggler = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Вхід в <span className={css.span}>PetHelsi</span>
      </h1>
      <div className={css.formContainer}>
        <div className={css.buttonContainer}>
          <button
            className={`${css.switchButton} ${
              userType === "owner" ? css.activeButton : ""
            }`}
            type="button"
            onClick={() => handleUserTypeChange("owner")}
          >
            Я - власник тварини
          </button>
          <button
            className={`${css.switchButton} ${
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
              <div className={css.fields}>
                <div className={css.fieldContainer}>
                  <label className={css.label} htmlFor="email">
                    E-mail
                  </label>
                  <Field
                    className={`${css.input} ${
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
                <div className={css.fieldContainer}>
                  <label className={css.label} htmlFor="password">
                    Пароль
                  </label>
                  <div className={css.inputWrapper}>
                    <Field
                      className={`${css.input} ${
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
                      <SvgIcon
                        sprite={sprite}
                        iconName={`${
                          passwordVisible ? "icon-eye_open" : "icon-view_hide"
                        }`}
                        width="20px"
                        height="20px"
                        className={css.icon}
                      />
                    </button>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="span"
                    className={css.passwordError}
                  />
                </div>
                <div className={css.checkBoxContainer}>
                  <div className={css.rememberMeContainer}>
                    <Field type="checkbox" name="rememberMe" id="rememberMe" />
                    <label htmlFor="rememberMe" className={css.rememberMeLabel}>
                      Запам'ятати мене
                    </label>
                  </div>
                  <div className={css.forgotPassword}>
                    <Link
                      to="/forgot-password"
                      className={css.forgotPasswordLink}
                    >
                      Забули пароль?
                    </Link>
                  </div>
                </div>
              </div>
              <div className={css.loginButtonContainer}>
                <button
                  className={css.button}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Увійти
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className={css.googleLoginContainer}>
          <p className={css.text}>або увійти за допомогою</p>
          <GoogleAuthorization />
        </div>
      </div>
      <p className={css.registerNow}>
        Немає аккаунта?{" "}
        <Link to="/register" className={css.link}>
          Зареєструйтесь
        </Link>
      </p>
    </div>
  );
}
