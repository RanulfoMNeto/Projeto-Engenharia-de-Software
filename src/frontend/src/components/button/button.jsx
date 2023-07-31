import styles from "./button.module.css"

export default function Button ({type, onClick, children}) {
  const clicked = () => {
    if (onClick) {
      onClick();
    }
  }
  return (
    <>
      <div className={styles.container}>
        <button type={type} className={styles.button} onClick={clicked}>{children}</button>
      </div>
    </>
  )
}