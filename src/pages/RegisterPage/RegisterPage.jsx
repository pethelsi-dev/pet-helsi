import RegistrForm from '../../components/RegistrForm/RegistrForm';
import css from './RegisterPage.module.css';

export default function RegisterPage() {
    return (
        <div className={css.container}>
            <div  className= {css.form}>
              <RegistrForm/>
            </div>
        </div>
    )
}