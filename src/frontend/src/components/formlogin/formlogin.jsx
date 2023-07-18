import styles from "./formlogin.module.css"

export default function FormLogin ({type,onChange}) {
  const handleInputChance = (event) => {
    const value = event.target.value;
    console.log("value:",value)
    onChange(value)
  }

  if (type == "signin") {
    return (
      <>
        <div className={styles.container}>
          <form>
            <div className={styles.labelFloat}>
              <input type="text" placeholder="Email" required onChange={handleInputChance}/>
            </div>
      
            <div className={styles.labelFloat}>
              <input type="password" id="senha" placeholder="Password" required/>
            </div>
              
            <div class="divForgot">
              <a class="aForgot" href=""> Forgot password?</a>
            </div>
              
            <div class="label-check">      
              <input type="checkbox" class="input-check" id="my-check"/>
              <label for="my-check" class="label1"> Remenber me </label>  
            </div>
          </form>
        </div>
      </>
    )
  }

  else {
    return (
      <>
        <div>
          Else
        </div>
      </>
    )
  }
}