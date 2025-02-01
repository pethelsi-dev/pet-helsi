import { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

export default function LoginPage() {

    const [background, setBackground] = useState("owner");
    const handleBackgroundChange = (type) => {
        setBackground(type);
    }
    return (
        <div className={`${css.loginPageContainer} ${
            background === "doctor" ? css.doctorBackground : css.ownerBackground}`}>
            <LoginForm onUserTypeChange ={handleBackgroundChange}/>
        </div>
    )
}