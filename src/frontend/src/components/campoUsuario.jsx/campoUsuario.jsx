import React from "react"
import styles from "./campoUsuario.module.css"
import Link from "next/link"


export default function CampoUsuario ({name}) {

    return(
        <>
            <div className="d-flex container justify-content-end m-4">

                <div className={`d-flex rounded-pill justify-content-around align-items-center ${styles['campo-usuario']}`}>
                    <div className="align-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-caret-down-fill ${styles['icon-user']}`} viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/> 
                        </svg>
                    </div> 
                        
                    <div className={`align-content-center ${styles['div-name']}`}>{name}</div>

                    <div>
                        <Link href={"signin"}>
                            <button className={`rounded-pill align-content-center ${styles['btn-campo-usu']}`}> Login </button>
                        </Link>
                    </div>
                        
                </div>
                 
            </div>
        </>
    )
}
