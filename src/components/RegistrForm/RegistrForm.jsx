import react, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './RegistrForm.module.css';

export default function RegistrForm() {

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

    return (
        <div className={css.formContainer}>
            <h1 className={css.title}>Реєстрація в <span className={css.span}>PetHelsi</span></h1>
            <div className={css.buttonContainer}>
                <button className={css.switchButton} type='button' onClick={() => setUserType('owner')}>Я - власник тварини</button>
                <button className={css.switchButton} type='button' onClick={() => setUserType('doctor')}>Я - ветеринар</button>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                    {({isSubmitting}) =>(
                        <Form>
                        <div className={css.fieldContainer}>
                            <label htmlFor='email'>E-mail</label>
                            <Field type = 'email' name = 'email' placeholder = 'Введіть E-mail'/>
                            <ErrorMessage name='email' component='span'/>
                        </div>
                        <div className={css.fieldContainer}>
                            <label htmlFor='password'>Пароль</label>
                            <Field type = 'password' name = 'password' placeholder = 'Введіть пароль'/>
                            <ErrorMessage name='password' component='span'/>
                        </div>
                        <div className={css.fieldContainer}>
                            <label htmlFor='confirmPassword'>Повторіть пароль</label>
                            <Field type = 'password' name = 'confirmPassword' placeholder = 'Повторіть пароль'/>
                            <ErrorMessage name='confirmPassword' component='span'/>
                        </div>
                        <button type='submit' disabled= {isSubmitting}>Зареєструватися</button>
                    </Form>

                    )}
                    
            </Formik>
        </div>
    )
}