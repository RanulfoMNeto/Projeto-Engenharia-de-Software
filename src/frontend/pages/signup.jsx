import { useState } from "react";
import styles from "@/styles/signup.module.css"
import SignUpCard from "@/src/components/signupcard/signupCard";

export default function Signup () {

  const handleSubmit = async (name,email,password) => {
    console.log("Enviando dados",name,email,password)
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, name })
      });
      const data = await response.json();
      // handle response
    } catch (error) {
      // handle error
    }
  }

  return (
    <>
      <div className={styles.container}>
        <SignUpCard type="SIGN UP" onInputChanged={handleSubmit}/>
      </div>
    </>
  )
}
