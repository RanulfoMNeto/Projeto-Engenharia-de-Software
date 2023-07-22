import Link from "next/link"
import styles from "./navbarLogin.module.css"
import { Children } from "react"

export default function NavbarLogin () {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="signin" className={styles.a}> SIGNIN</Link>
        <Link href="signup" className={styles.a}> SIGNUP</Link>
      </nav>
    </>
  )
}