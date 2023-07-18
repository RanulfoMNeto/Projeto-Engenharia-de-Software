import styles from "./card.module.css"

export default function Card ({children}) {
  return (
    <>
      <div className={styles.container}>
        {children}
      </div>
    </>
  )
}