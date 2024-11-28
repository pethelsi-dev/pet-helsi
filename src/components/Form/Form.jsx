import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import spriteSistem from "../../assets/Images/sprite-sistem.svg";
import clsx from "clsx";
import style from "./Form.module.css";

export default function Form({
  customClassSelect,
  customClassInput,
  customClassButton,
  values,
  setValues,
  errors,
  setErrors,
}) {
  const { role, email } = values;

  function getData(ev) {
    const { name, value } = ev.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  }

  function validate() {
    const newErrors = {};
    if (!values.email) {
      newErrors.email = "Введіть ваш E-mail";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      newErrors.email = "Некоректний E-mail";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    if (validate()) {
      console.log("Форма успешно отправлена:", values);

      setValues({
        role: "owner",
        email: "",
      });

      setErrors({});
    }
  }

  return (
    <form onSubmit={handleSubmit} className={style.formLandingForm}>
      <div className={style.selectContainer}>
        <select
          name="role"
          value={role}
          onChange={getData}
          className={clsx(style.formLandingSelect, style[customClassSelect])}>
          <option value="owner">Я - власник тварини</option>
          <option value="doctor">Я - ветеринар</option>
        </select>
        <Icon
          sprite={spriteSistem}
          id={"icon-user"}
          width="24px"
          height="24px"
          className={style.icon}
        />
      </div>

      <div className={style.inputContainer}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={getData}
          placeholder="Ваш E-mail"
          className={clsx(style.formLandingInput, style[customClassInput])}
        />
        <Icon
          sprite={spriteSistem}
          id={"icon-message"}
          width="24px"
          height="24px"
          className={style.icon}
        />
        {errors.email && <span className={style.error}>{errors.email}</span>}
      </div>

      <button
        type="submit"
        className={clsx(style.button, style[customClassButton])}>
        Повідомити про запуск
      </button>
    </form>
  );
}

// PropTypes для валидації пропсів
Form.propTypes = {
  values: PropTypes.shape({
    role: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  setValues: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  setErrors: PropTypes.func.isRequired,
};
