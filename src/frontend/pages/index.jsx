import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '@/styles/Home.module.css'

import { useState } from 'react';

import NavBar from '@/src/components/navbar/navbar'
import Button from '@/src/components/button/button'
import Container from '@/src/components/container/container';
import CampoUsuario from '@/src/components/campoUsuario.jsx/campoUsuario';
import Search from '@/src/components/search/search';
import TrashIcon from '@/src/components/trashIcon/trashIcon';
import Input from '@/src/components/input/input';
import InputDesc from '@/src/components/InputDesc/inputDesc';
import ContentArea from '@/src/components/contentArea/contentArea';

export default function Home() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [keyword, setKeyword] = useState('');
    const [description, setDescription] = useState('');
    
  async function sendRequest (event) {
    event.preventDefault();
    console.log(title, author, keyword, description)
    const response = await fetch("http://127.0.0.1:5000/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, author, keyword, description})
    });

    if (response.ok) {
        //buscarDados();
    }
}


  return (
    <>

      <Container>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ flexGrow: 1 }}></div>
          <CampoUsuario name="Clique para fazer login"/>
        </div>
        
        <Search/>

        <NavBar/>


        <div className={`  ${styles['content']}`}> 

          {/*DOCUMENTS AREA*/}
          <div className={`  ${styles['documentArea']}`}>


            <div className={`d-flex  ${styles['documentContainer']}`}>

                <div className={`d-flex  ${styles['documentHeader']}`}>
                    Engenharia de Software: Uma Abordagem Profissional
                    <div className={styles.trashIcon}><TrashIcon/></div>                   
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
            </div>

            <div className={`d-flex  ${styles['documentContainer']}`}>

                <div className={`d-flex  ${styles['documentHeader']}`}>
                    Engenharia de Software: Uma Abordagem Profissional
                    <div className={styles.trashIcon}><TrashIcon/></div>                   
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
            </div>

            <div className={`d-flex  ${styles['documentContainer']}`}>

                <div className={`d-flex  ${styles['documentHeader']}`}>
                    Engenharia de Software: Uma Abordagem Profissional
                    <div className={styles.trashIcon}><TrashIcon/></div>                   
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
            </div>

            <div className={`d-flex  ${styles['documentContainer']}`}>

                <div className={`d-flex  ${styles['documentHeader']}`}>
                    Engenharia de Software: Uma Abordagem Profissional
                    <div className={styles.trashIcon}><TrashIcon/></div>                   
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
            </div>

            <div className={`d-flex  ${styles['documentContainer']}`}>

                <div className={`d-flex  ${styles['documentHeader']}`}>
                    Engenharia de Software: Uma Abordagem Profissional
                    <div className={styles.trashIcon}><TrashIcon/></div>                   
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
            </div>

            <div className={`d-flex  ${styles['documentContainer']}`}>

                <div className={`d-flex  ${styles['documentHeader']}`}>
                    Engenharia de Software: Uma Abordagem Profissional
                    <div className={styles.trashIcon}><TrashIcon/></div>                   
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
            </div><div className={`d-flex  ${styles['documentContainer']}`}>

                <div className={`d-flex  ${styles['documentHeader']}`}>
                    Engenharia de Software: Uma Abordagem Profissional
                    <div className={styles.trashIcon}><TrashIcon/></div>                   
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
            </div>

            <div className={`d-flex  ${styles['documentContainer']}`}>

                <div className={`d-flex  ${styles['documentHeader']}`}>
                    Engenharia de Software: Uma Abordagem Profissional
                    <div className={styles.trashIcon}><TrashIcon/></div>                   
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
            </div>
            
          </div>

          {/*CONTENT AREA*/}
          <div className={`  ${styles['contentArea']}`}>

            <div className={`  ${styles['contentContainer']}`}>
              <ContentArea/>
            </div>

          </div>

        </div>

        

      </Container>

    </>
  )
}
  