import styles from "./button.module.css"

export default function Button ({type, children}) {
  return (
    <>
      <div className={styles.container}>
        <button type={type} className={styles.button}>{children}</button>
      </div>
    </>
  )
}