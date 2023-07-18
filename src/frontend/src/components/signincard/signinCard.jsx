import NavbarLogin from "../navLogin/navbarLogin"
import Input from "../input/input"
import Button from "../button/button"
import Link from "next/link"
import styles from "./signinCard.module.css"

export default function SigninCard ({type,onInputChanged}) {
  let validName = false;
  const validateInput = (event) => {
    event.preventDefault();
    console.log("Submetido");
    /* continuação */
  }

  const handleInputChanged = (value) => {
    validName = !validName;
    onInputChanged(value)
  }

  const handlePasswordChange = (value) => {
    
  }

  return (
    <>
      <div className={styles.container}>

        <NavbarLogin/>

        <form className={styles.form} onSubmit={validateInput}>
          <Input type="email" placeholder="E-mail" onChange={handleInputChanged}/>
          <Input type="password" placeholder="Password" onChange={handleInputChanged}/>
        </form>

        <div className={styles.forgot}>
          <Link href="forgot"> Forgot password ?</Link>
        </div>

        {
          validName && <p className={styles.teste}>Validado</p>
        }
        
        <div class={styles.remember}>      
            <input type="checkbox" id="my-check"/>
            <label htmlFor="my-check"> Remember me </label>  
        </div>

        <Button type="submit"> {type} </Button>

      </div>
    </>
  )
}