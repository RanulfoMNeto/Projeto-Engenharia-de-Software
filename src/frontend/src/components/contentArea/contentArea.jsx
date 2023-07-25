import Button from "../button/button"
import styles from "./contentArea.module.css"

export default function ContentArea () {


  return (
    <>
    <div>

        <div className={`d-flex ${styles['documentHeaderAuthorType']}`}>
            <div className={`d-flex  ${styles['documentHeader']}`}>
                Engenharia de Software: Uma Abordagem Profissional
            </div>
            
            <div className={`d-flex  ${styles['author']}`}>
                Roger S. Pressman, Bruce Maxim
            </div>

            <div className={`rounded-pill d-flex justify-content-center ${styles['typeDocument']}`}>
                <div className={` ${styles['stringType']}`}>  
                    Livro
                </div>    
            </div>
        </div>

        <div className={` ${styles['documentDesc']}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit libero alias facilis inventore neque voluptas, aspernatur tenetur reprehenderit suscipit cupiditate atque numquam sapiente omnis sunt vero culpa iusto animi excepturi.
        </div>

        <div className={`d-flex ${styles['keyWordContainer']}`}>

            <div className={`rounded-pill bg-warning ${styles['documentKeyWord']}`}>
                <div className={` ${styles['stringKey']}`}>  
                    Engenharia de Software
                </div>
            </div>

            <div className={`rounded-pill bg-primary ${styles['documentKeyWord']}`}>
                <div className={` ${styles['stringKey']}`}>  
                    Desenvolvimento de Software
                </div>
            </div>

            <div className={`rounded-pill bg-primary  ${styles['documentKeyWord']}`}>
                <div className={` ${styles['stringKey']}`}>  
                    Teste de Software 
                </div>
            </div>

            <div className={`rounded-pill bg-danger  ${styles['documentKeyWord']}`}>
                <div className={` ${styles['stringKey']}`}>  
                    Metodologias
                </div>
            </div>     

            <div className={`rounded-pill bg-danger  ${styles['documentKeyWord']}`}>
                <div className={` ${styles['stringKey']}`}>  
                    Requisitos
                </div>
            </div>     
                
        </div>

        <Button>BAIXAR</Button>

    </div>
    </>
  )
}