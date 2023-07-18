import LoginCard from "@/src/components/logincard/logincard"
import SigninCard from "@/src/components/signincard/signinCard";
import styles from "@/styles/signin.module.css"
import { useState } from "react"

export default function Signin () {
  const [email,setEmail] = useState('');
  const [senha,setSenha] = useState('');

  const handleInputChanged = (value) => {
    setSenha(value);
    console.log(value);
  }

  return (
    <>
      <div className={styles.container}>
        <SigninCard type="SIGN IN" onInputChanged={handleInputChanged}/>
      </div>     
    </>
  )
}