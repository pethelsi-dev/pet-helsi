import { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import spriteSistem from "../../assets/Images/sprite-sistem.svg";
import SvgIcon from "../Icon/Icon";
import GoogleAuthorization from "../GoogleAuthorization/GoogleAuthorization";
import css from "./LoginForm.module.css";
import CustomModalAuth from "../CustomModalAuth/CustomModalAuth";

export default function LoginForm({ onUserTypeChange }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userType, setUserType] = useState("owner");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [email, setEmail] = useState("");

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
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
    <div className={css.loginFormContainer}>
      <h1 className={css.loginFormTitle}>
        Вхід в <span className={css.loginFormTitleSpan}>PetHelsi</span>
      </h1>
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
          <Form>
            <div className={css.loginFormFields}>
              <div className={css.loginFieldContainer}>
                <label className={css.label} htmlFor="email">
                  E-mail
                </label>
                <Field
                  className={`${css.loginInput} ${
                    errors.email && touched.email ? css.inputError : ""
                  }`}
                  type="email"
                  name="email"
                  placeholder="Введіть E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={css.emailError}
                />
              </div>
              <div className={css.loginFieldContainer}>
                <label className={css.label} htmlFor="password">
                  Пароль
                </label>
                <div className={css.passwordInputWrapper}>
                  <Field
                    className={`${css.loginInput} ${
                      errors.password && touched.password ? css.inputError : ""
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
                      sprite={spriteSistem}
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
            </div>
            <div className={css.checkBoxContainer}>
              <div className={css.rememberMeContainer}>
                <Field type="checkbox" name="rememberMe" id="rememberMe" />
                <label htmlFor="rememberMe" className={css.rememberMeLabel}>
                  Запам'ятати мене
                </label>
              </div>
              <div className={css.forgotPassword}>
                <button type="button" onClick={() => openModal("forgot-password")}>
                  Забули пароль?
                </button>
                {/* <Link
                      to="/forgot-password"
                      className={css.forgotPasswordLink}
                    >
                      Забули пароль?
                    </Link> */}
              </div>
            </div>
            <div className={css.loginButtonContainer}>
              <button
                className={css.loginButton}
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
        <p className={css.enterWithGoogleText}>або увійти за допомогою</p>
        <GoogleAuthorization />
      </div>
      <p className={css.registerNow}>
        Немає аккаунта?{" "}
        <Link to="/register" className={css.link}>
          Зареєструйтесь
        </Link>
      </p>

      <CustomModalAuth isOpen={isModalOpen} onClose={closeModal} type={modalType} email={email}/>
    </div>
  );
}
