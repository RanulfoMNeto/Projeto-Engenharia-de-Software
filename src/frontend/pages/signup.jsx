import LoginCard from "@/src/components/logincard/logincard"
import { useState } from "react";
import styles from "@/styles/signup.module.css"

import Card from "@/src/components/card/card";
import Input from "@/src/components/input/input";
import NavbarLogin from "@/src/components/navLogin/navbarLogin";

export default function Signup () {
  const [nome,setNome] = useState('');
  const [email,setEmail] = useState('');
  const [senha,setSenha] = useState('');

  const [validEmail,setValidEmail] = useState('');

  const verificarEmail = (texto) => {
    if (texto.includes("@")) {
      console.log("Tem @")
      setValidEmail(true);
    }

    else {
      console.log("Nao tem @");
      setValidEmail(false);
    }

  }

  const pegarNome = (value) => {
    
  }

  const pegarEmail = (value) => {
    verificarEmail(value);
  }

  const pegarSenha = (value) => {

  }

  return (
    <>
      <div className={styles.container}>
        <Card>
          <NavbarLogin/>
          <Input type="text" placeholder="Name" onChange={pegarNome}/>
          {!validEmail && <p className={styles.errorMenssage}>Email inválido</p>}
          <Input type="email" placeholder="E-mail" onChange={pegarEmail}/>
          <Input type="password" placeholder="Password" onChange={pegarSenha}/>
        </Card>
      </div>
    </>
  )
}