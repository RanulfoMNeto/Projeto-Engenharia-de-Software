import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '@/styles/Home.module.css'

import { useState, useEffect } from 'react';

import Confirmacao from '@/src/components/confirmacao/confirmacao';
import NavBar from '@/src/components/navbar/navbar'
import Button from '@/src/components/button/button'
import Container from '@/src/components/container/container';
import CampoUsuario from '@/src/components/campoUsuario.jsx/campoUsuario';
import Search from '@/src/components/search/search';
import ContentArea from '@/src/components/contentArea/contentArea';

export default function Home() {
  const [ind,setInd] = useState(-1);
  const [exibirConfirmacao,setExibirConfirmacao] = useState(false);
  const [titles, setTitles] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [descriptions, setDescriptions] = useState([]);

  /* ------------- MÉTODO HTTP GET ------------- */
  async function buscarDados() {
    const response = await fetch(`http://127.0.0.1:5000/`);
    if (response.ok) {
      const dados = await response.json();
        
      let respTitles = [];
      let respKeywords = [];
      let respAuthors = [];
      let respDescription = []

      for (let i=0; i<dados.length; i++) {
        respTitles.push(dados[i].title);
        respKeywords.push(dados[i].keyword);
        respAuthors.push(dados[i].author);
        respDescription.push(dados[i].description);
      }

      console.log("resp:", dados[0].keyword);

      setTitles(respTitles);
      setKeywords(respKeywords);
      setAuthors(respAuthors);
      setDescriptions(respDescription);
    } 
    
    else {
      console.log("Erro ao buscar dados:", response.status, response.statusText);
    }
  }

  /* ------------- MÉTODO HTTP DELETE ------------- */
  async function deletarLivro (title) {
    const response = await fetch("http://127.0.0.1:5000/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
      })
    });

    if (response.ok) {
      return true;
    } 
    
    else {
      console.log("Erro ao remover item:", response.status, response.statusText);
      return false;
    }
  }
  useEffect(() => {
    buscarDados();
  }, []);

  /* ------------- FUNÇÕES AUXILIARES MÉTODO DELETE ------------- */
  function excluir(i) {
    setInd(i);
    setExibirConfirmacao(true);
  }

  async function confirmacaoExclusao(palavra) {
    if (await deletarLivro(palavra)) {
      await buscarDados();
    }
    setExibirConfirmacao(false);
  }


  function cancelarExclusao() {
    setExibirConfirmacao(false);
  }
    
  function getTextColor(backgroundColor) {
    console.log("Mudando cor");
    let r = parseInt(backgroundColor[0].substr(1, 2), 16);
    let g = parseInt(backgroundColor[0].substr(3, 2), 16);
    let b = parseInt(backgroundColor[0].substr(5, 2), 16);

    let luminosidade = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    if (luminosidade > 0.5) {
        return "#000000"; // preto
    } 
    
    else {
        return "#FFFFFF"; // branco
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
            {titles.map((title, index) => (
              <div className={`d-flex ${styles['documentContainer']}`} key={index}>
                <div className={`d-flex ${styles['documentHeader']}`}>
                  {title}
                  <div className={styles.trashIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className={`bi bi-trash3 ${styles['documentTrashIcon']}`} onClick={(e) => {e.stopPropagation(); excluir(index);}} viewBox="0 0 16 16">
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                    </svg>
                  </div>
                </div>
  
                <div className={`d-flex ${styles['keyWordContainer']}`}>
                  {keywords[index].map((keyword, keywordIndex) => (
                    <div className={`rounded-pill  ${styles['documentKeyWord']}`} style= {{backgroundColor: keyword[1]}} key={keywordIndex}>
                      <div className={styles['stringKey']} style = {{color: getTextColor(keyword[1])}}>
                      {keyword[0]}
                    </div>
                </div>
                ))}
                </div>
                <div className={`d-flex ${styles['documentDescription']}`}>
                  {descriptions[index]}
                </div>
              </div>
            ))}
          </div>
          {/*CONTENT AREA*/}
          <div className={`  ${styles['contentArea']}`}>

            <div className={`  ${styles['contentContainer']}`}>
              <ContentArea/>
            </div>

          </div>
          
          {exibirConfirmacao && (
              <Confirmacao onConfirm={() => confirmacaoExclusao(titles[ind])} onCancel={() => cancelarExclusao()} />
          )}
        </div>

        

      </Container>

    </>
  )
}
  