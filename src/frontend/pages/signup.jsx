import LoginCard from "@/src/components/logincard/logincard"
import { useState } from "react";
import styles from "@/styles/signup.module.css"

import Card from "@/src/components/card/card";
import Input from "@/src/components/input/input";
import NavbarLogin from "@/src/components/navLogin/navbarLogin";
import SignUpCard from "@/src/components/signupcard/signupCard";

export default function Signup () {

  const handleInputChanged = (value) => {
    setSenha(value);
    console.log(value);
  }

  return (
    <>
      <div className={styles.container}>
        <SignUpCard type="SIGN UP" onInputChanged={handleInputChanged}/>
      </div>
    </>
  )
}