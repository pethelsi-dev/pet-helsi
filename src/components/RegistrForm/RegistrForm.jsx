import react, {useState,} from 'react';
import SvgIcon from '../Icon/Icon'
import sprite from '../../assets/Images/sprite-sistem.svg'
import { Link, NavLink} from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import GoogleAuthorization from '../GoogleAuthorization/GoogleAuthorization'
import css from './RegistrForm.module.css';

export default function RegistrForm() {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [userType, setUserType] = useState('owner');

    const validationSchema = Yup.object({});

    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
    };

    const handleSubmit = (values) => {
        console.log('Submitted values:', { ...values, userType });
        // Виклик API для реєстрації
      };

    const setPasswordVisibleToggler = () => {
        setPasswordVisible(!passwordVisible);
      };

    const setConfirmPasswordVisibleToggler = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
      };
  

    return (
        <div className={css.container}>
            <h1 className={css.title}>Реєстрація в <span className={css.span}>PetHelsi</span></h1>
          <div className={css.formContainer}>
            <div className={css.buttonContainer}>
                <button className={`${css.switchButton} ${userType === 'owner' ? css.activeButton : ''}`} type='button' onClick={() => setUserType('owner')}>Я - власник тварини</button>
                <button className={`${css.switchButton} ${userType === 'doctor' ? css.activeButton : ''}`} type='button' onClick={() => setUserType('doctor')}>Я - ветеринар</button>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                    {({isSubmitting}) =>(
                        <Form className={css.form}>
                        <div className={css.fieldContainer}>
                            <label className={css.label} htmlFor='email'>E-mail</label>
                            <Field className={css.input} type = 'email' name = 'email' placeholder = 'Введіть E-mail'/>
                            <ErrorMessage name='email' component='span'/>
                        </div>
                        <div className={css.fieldContainer}>
                            <label className={css.label} htmlFor='password'>Пароль</label>
                            <Field className={css.input} type={passwordVisible ? 'text' : 'password'} name = 'password' placeholder = 'Введіть пароль'/>
                            <button
                                    type="button"
                                    className={css.toggleButton}
                                    onClick={setPasswordVisibleToggler}
                                >
                                    <SvgIcon 
                                       sprite={sprite} 
                                       iconName={`${passwordVisible ? "icon-eye_open" : "icon-view_hide"}`} 
                                       width="20px" 
                                       height="20px" 
                                       className={css.icon}
                                     />
                            </button>
                            <ErrorMessage name='password' component='span'/>
                        </div>
                        <div className={css.fieldContainer}>
                            <label className={css.label} htmlFor='confirmPassword'>Повторіть пароль</label>
                            <Field className={css.input} type={confirmPasswordVisible ? 'text' : 'password'} name = 'confirmPassword' placeholder = 'Повторіть пароль'/>
                            <button
                                    type="button"
                                    className={css.toggleButton}
                                    onClick={setConfirmPasswordVisibleToggler}
                                >
                                    <SvgIcon 
                                       sprite={sprite} 
                                       iconName={`${confirmPasswordVisible ? "icon-eye_open" : "icon-view_hide"}`} 
                                       width="20px" 
                                       height="20px" 
                                       className={css.icon}
                                     />
                            </button>
                            <ErrorMessage name='confirmPassword' component='span'/>
                        </div>
                        <button className={css.button} type='submit' disabled= {isSubmitting}>Зареєструватися</button>
                        <div className={css.privacyPolicy}>
                            <p>
                                Реєструючись, ви приймаєте умови{' '}
                                <Link to="/policy" className={css.link}>
                                    політики конфіденційності
                                </Link>.
                            </p>
                        </div>
                    </Form>
                    )}    
            </Formik>
            <p className={css.text}>або увійти за допомогою</p>
            <div className={css.googleLoginContainer}>
                {/* <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={handleGoogleFailure}
                /> */}
            <GoogleAuthorization/>
            </div>
            <p className={css.enterNow}>Вже зареєстровані? <Link to="/login" className={css.link}>Увійти</Link></p> 
          </div>
        </div>
    )
}