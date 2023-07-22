import Link from "next/link"
import styles from "./navbar.module.css"
import { Children } from "react"

export default function NavBar () {
  return (
    <>
      <nav className={styles.nav}>

        <Link href="index" className={styles.a}> HOME</Link>
        <Link href="keyword" className={styles.a}> PALAVRA-CHAVE</Link>
        <Link href="" className={styles.a}> MINHA BIBLIOTECA</Link>

      </nav>
    </>
  )
}