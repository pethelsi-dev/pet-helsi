import React, { useState } from 'react';
import {useSelector} from 'react-redux'
// import {selectorIsDoctor, selectorIsOwner} from '../../redux/auth/selectors'

import style from "./Registration.module.css";
import RegistrFormDoctor from "../../components/RegistrFormDoctor/RegistrFormDoctor";
import RegistrFormOwner from "../../components/RegistrFormOwner/RegistrFormOwner";



export default function Registration() {
// const registrDoctor = useSelector(selectorIsDoctor);
// const registrOwner = useSelector(selectorIsOwner);
const [registrFormOwner, setRegistrFormOwner] = useState(true);
const [registrDoctor, setRegistrDoctor] = useState(false);

  return (
    <div className={style.registrContainer}>

      {/* <RegistrFormOwner />
      <RegistrFormDoctor /> */}
    </div>
  );
}
