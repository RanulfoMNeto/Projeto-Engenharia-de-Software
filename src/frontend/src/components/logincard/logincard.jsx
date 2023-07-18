import styles from "./logincard.module.css"
import NavbarLogin from "../navLogin/navbarLogin"
import Button from "../button/button"
import Input from "../input/input"
import Link from "next/link"

export default function LoginCard ({type,onInputChanged}) {
  const validateInput = (event) => {
    event.preventDefault();
    /* continuação */
  }

  const handleInputChanged = (value) => {
    onInputChanged(value)
  }

  if (type == "SIGNIN") {
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
          
          <div class={styles.remember}>      
              <input type="checkbox" id="my-check"/>
              <label htmlFor="my-check"> Remember me </label>  
          </div>
  
          <Button type="submit"> {type} </Button>
  
        </div>
      </>
    )
  }

  else {
    return (
      <>
        <div className={styles.container}>
  
          <NavbarLogin/>
  
          <form onSubmit={validateInput}>
            <Input type="text" placeholder="Name" onChange={handleInputChanged}/>
            <Input type="email" placeholder="E-mail" onChange={handleInputChanged}/>
            <Input type="password" placeholder="Password" onChange={handleInputChanged}/>
          </form>

          <div>
              <a href=""> Forgot password?</a>
          </div>
  
          <Button type="submit"> {type} </Button>
  
        </div>
      </>
    )
  }
}