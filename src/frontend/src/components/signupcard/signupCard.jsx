import NavbarLogin from "../navLogin/navbarLogin"
import Input from "../input/input"
import Button from "../button/button"
import Link from "next/link"
import styles from "./signupCard.module.css"
import stylesInput from "../input/input.module.css"
import Card from "../card/card"

import { useState } from 'react';

export default function SignUpCard({ type, onInputChanged }) {
    const [nameIsValid, setNameIsValid] = useState(false);
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [passwordIsValid, setPasswordIsValid] = useState(false);

  const validateInput = (event) => {
    event.preventDefault();
    console.log("Submetido");
    /* continuação */
  }

  const handleNameChanged = (value) => {
    const letters = /^[A-Za-z]+$/;
    if (value.length >= 3 && value.match(letters)) {
      // Permitir a entrada
      setNameIsValid(false);
    } else {
      // Impedir a entrada
      setNameIsValid(true);
    }
  }

  const handleEmailChanged = (value) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (value.match(emailRegex)) {
      // Permitir a entrada
      setEmailIsValid(false);
    } else {
      // Impedir a entrada
      setEmailIsValid(true);
    }
  }

  const handlePasswordChange = (value) => {
    if (value.length >= 6) {
      // Permitir a entrada
      setPasswordIsValid(false);
    } else {
      // Impedir a entrada
      setPasswordIsValid(true);
    }
  }

  return (
    <>
      <div className={styles.container}>

        <Card>

          <NavbarLogin />

          <form className={styles.form} onSubmit={validateInput}>

            {nameIsValid && <p className={styles.pError}>*Insira somente letras e pelo menos 3 caracteres!*</p>}
            <Input type="text" placeholder="Name" onChange={handleNameChanged} className={nameIsValid ? 'valid' : ''}/>

            {emailIsValid && <p className={styles.pError}>*Insira um e-mail válido!*</p>}
            <Input type="email" placeholder="E-mail" onChange={handleEmailChanged} className={emailIsValid ? 'valid' : ''}/>

            {passwordIsValid && <p className={styles.pError}>*A senha deve ter pelo menos 6 caracteres!*</p>}
            <Input type="password" placeholder="Password" onChange={handlePasswordChange} className={passwordIsValid ? 'valid' : ''}/>

            <Button type="submit"> {type} </Button>

          </form>

          <p className={styles.p1}> Already a member?
            <a className={styles.a1} href="signin">Sign in</a>
          </p>

        </Card>

      </div>
    </>
  )
}
