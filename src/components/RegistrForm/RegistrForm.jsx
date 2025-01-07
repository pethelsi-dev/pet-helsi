import react, {useState} from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './RegistrForm.module.css';

export default function RegistrForm() {

    const [passwordVisible, setPasswordVisible] = useState(false);

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

    const handleGoogleSuccess = (response) => {
        console.log('Успішний вхід через Google:', response);
    };
    
    const handleGoogleFailure = (error) => {
        console.error('Помилка входу через Google:', error);
    };
    

    return (
        <div className={css.formContainer}>
            <h1 className={css.title}>Реєстрація в <span className={css.span}>PetHelsi</span></h1>
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
                            <Field className={css.input} type = 'password' name = 'password' placeholder = 'Введіть пароль'/>
                            <ErrorMessage name='password' component='span'/>
                        </div>
                        <div className={css.fieldContainer}>
                            <label className={css.label} htmlFor='confirmPassword'>Повторіть пароль</label>
                            <Field className={css.input} type = 'password' name = 'confirmPassword' placeholder = 'Повторіть пароль'/>
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
                <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={handleGoogleFailure}
                />
            </div>
            <p className={css.enterNow}>Вже зареєстровані? <Link to="/login" className={css.link}>Увійти</Link>.</p>
        </div>
    )
}