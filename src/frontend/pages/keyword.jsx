import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "@/styles/keyword.module.css"

import Input from '@/src/components/input/input';
import NavBar from "@/src/components/navbar/navbar";
import Card from '@/src/components/card/card';
import CampoUsuario from '@/src/components/campoUsuario.jsx/campoUsuario';
import Search from '@/src/components/search/search';
import Button from '@/src/components/button/button';


export default function Keyword() {

    return (
        <>

            {/* <!-- CAMPO DE USUÁRIO --> */}
            <CampoUsuario/>

            {/* <!-- CAMPO DE BUSCA INPUT --> */}
            <Search/>

            <NavBar/>

            {/* <!-- CARD PRINCIPAL --> */}
            
            <div className={styles.container1}>    
                <Card className="d-flex">
                    
                    {/* <!-- FORM: PALAVRA-CHAVE INPUT, COR INPUT E BOTÃO CADASTRAR --> */}
                    <form className='container-fluid d-flex'>
                        <div>
                            
                            {/* <!-- CONTAINER PALAVRA-CHAVE INPUT + COR INPUT --> */}
                            <div className={`align-items-baseline ${styles['div-kc']}`}>  

                                <div className={styles.labelFloat}>
                                    <input className={styles.keyInput} type="text" placeholder="Palavra-Chave"/>
                                </div>
                                
                                <div className={` d-flex justify-content-center align-items-center ${styles['box-cor']}`}>
                                    <label for="color-changer" className={styles.p1}>Cor</label>
                                    <input id="color-changer" className={styles.colorChange} type="color"/>
                                </div>                            
                                    
                            </div>
        

                            {/* <!-- CONTEUDOS DAS PALAVRAS-CHAVE --> */}
                            <div className={`d-flex ${styles['conteudos']}`}>
                                <div className={`rounded-pill d-flex ${styles['div-cada-campo']}`}> 

                                    <div className={`border-0 bg-transparent ${styles['campo-key']}`}>  
                                        Engenharia de Software
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-trash3 ${styles['icon-campos']}`} viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                    </svg>

                                </div>
                                
                                <div className={`rounded-pill d-flex ${styles['div-cada-campo']}`}> 
                                    <div className={`border-0 bg-transparent ${styles['campo-key']}`}>  
                                        LFA
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-trash3 ${styles['icon-campos']}`} viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                    </svg>
                                </div>

                                <div className={`rounded-pill d-flex ${styles['div-cada-campo']}`}> 
                                    <div className={`border-0 bg-transparent ${styles['campo-key']}`}>  
                                        PPOO
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-trash3 ${styles['icon-campos']}`} viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                    </svg>
                                </div>

                                <div className={`rounded-pill d-flex ${styles['div-cada-campo']}`}> 
                                    <div className={`border-0 bg-transparent ${styles['campo-key']}`}>  
                                        GRAFOS
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-trash3 ${styles['icon-campos']}`} viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                    </svg>
                                </div>
                                    

                            </div>

                            {/* <!-- BOTÃO CADASTRAR --> */}
                            <div className={`mt-auto ${styles['div-btnCad']}`}>
                                <Button type="submit">CADASTRAR</Button>
                            </div>
                        </div>
                        
                    </form>
                    
                </Card>
                
            </div>  
    </>
    )
}