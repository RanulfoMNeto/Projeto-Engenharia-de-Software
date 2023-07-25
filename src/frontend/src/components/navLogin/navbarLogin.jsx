import Link from "next/link"
import styles from "./navbarLogin.module.css"
import { Children } from "react"

export default function NavbarLogin () {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="signin" className={styles.a}>SIGN IN</Link>
        <Link href="signup" className={styles.a}>SIGN UP</Link>
      </nav>
    </>
  )
}