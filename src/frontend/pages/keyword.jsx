import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "@/styles/keyword.module.css"

import Container from '@/src/components/container/container';
import Input from '@/src/components/input/input';
import NavBar from "@/src/components/navbar/navbar";
import Card from '@/src/components/card/card';
import CampoUsuario from '@/src/components/campoUsuario.jsx/campoUsuario';
import Search from '@/src/components/search/search';
import Button from '@/src/components/button/button';
import { useEffect, useState } from 'react';
import Confirmacao from '@/src/components/confirmacao/confirmacao';


export default function Keyword() {
    /* ------------- VARIÁVEIS ------------- */
    const [keyword, setKeyword] = useState('');
    const [color, setColor] = useState('#000000');
    const [array,setArray] = useState([]);
    const [arrayCor,setArrayCor] = useState([]);
    const [exibirConfirmacao, setExibirConfirmacao] = useState(false);
    const [indice,setIndice] = useState(0);

    /* ------------- MÉTODO HTTP GET ------------- */
    async function buscarDados(substring = "") {
        const response = await fetch(`http://127.0.0.1:5000/keyword?substring=${encodeURIComponent(substring)}`);
        if (response.ok) {
            const dados = await response.json();
            
            setArray(dados.keywords);
            setArrayCor(dados.colors);
            
        } 
        
        else {
            console.log("Erro ao buscar dados:", response.status, response.statusText);
            setArray([]);
            setArrayCor([]);
        }
    }

    /* ------------- MÉTODO HTTP POST ------------- */
    async function enviarRequisicao(event) {
        event.preventDefault();

        if (keyword.length === 0) {
            return;
        }

        const response = await fetch("http://127.0.0.1:5000/keyword", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                keyword,
                color
            })
        });

        if (response.ok) {
            buscarDados();
        }
    }

    /* ------------- MÉTODO HTTP DELETE ------------- */
    async function deletarKeyword (palavra) {
        const response = await fetch("http://127.0.0.1:5000/keyword", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                keyword: palavra,
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

    /* ------------- FUNÇÕES AUXILIARES MÉTODO DELETE ------------- */
    function excluir(i) {
        setIndice(i);
        setExibirConfirmacao(true);
    }

    async function confirmacaoExclusao(palavra) {
        if (await deletarKeyword(palavra)) {
            await buscarDados();
        }
        setExibirConfirmacao(false);
    }
    
    
    function cancelarExclusao() {
        setExibirConfirmacao(false);
    }

    /* ------------- CARREGANDO DADOS DO SERVIDOR ------------- */
    useEffect(() => {
        buscarDados();
    }, []);

    /* ------------- DEFININDO A COR DO TEXTO DAS PALAVRAS-CHAVES ------------- */
    function getTextColor(backgroundColor) {
        let r = parseInt(backgroundColor.substr(1, 2), 16);
        let g = parseInt(backgroundColor.substr(3, 2), 16);
        let b = parseInt(backgroundColor.substr(5, 2), 16);
    
        let luminosidade = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
        if (luminosidade > 0.5) {
            return "#000000"; // preto
        } 
        
        else {
            return "#FFFFFF"; // branco
        }
    }

    /* ------------- FAZENDO BUSCA POR SUBSTRING ------------- */
    function search(value) {
        buscarDados(value);
    }

    return (
        <>
        <Container>
            {/* <!-- CAMPO DE USUÁRIO --> */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ flexGrow: 1 }}></div>
                <CampoUsuario name="Francisco" />
            </div>
            {/* <!-- CAMPO DE BUSCA INPUT --> */}
            <Search onChange={search}/>

            <NavBar/>

            {/* <!-- CARD PRINCIPAL --> */}
            <div className={styles.container1}>  
                <Card className="d-flex">
                    
                    {/* <!-- FORM: PALAVRA-CHAVE INPUT, COR INPUT E BOTÃO CADASTRAR --> */}
                    <form className='container-fluid d-flex' onSubmit={enviarRequisicao}>
                        <div>
                            
                            {/* <!-- CONTAINER PALAVRA-CHAVE INPUT + COR INPUT --> */}
                            <div className={`align-items-baseline ${styles['div-kc']}`}>  

                                <div className={styles.labelFloat}>
                                    <input className={styles.keyInput} type="text" placeholder="Palavra-Chave" onChange={event => setKeyword(event.target.value)}/>
                                </div>
                                
                                <div className={` d-flex justify-content-center align-items-center ${styles['box-color']}`}>
                                    <label htmlFor="color-changer" className={styles.p1}>Cor</label>
                                    <input id="color-changer" className={styles.colorChange} type="color" onChange={event => setColor(event.target.value)}/>
                                </div>                            
                                    
                            </div>

                            {/* <!-- CONTEUDOS DAS PALAVRAS-CHAVE --> */}
                            <div className={`d-flex ${styles['conteudos']}`}>
                                {[...Array(array.length)].map((_, i) => (
                                    <div key={i} className={`rounded-pill d-flex ${styles['div-cada-campo']}`} style={{ backgroundColor: arrayCor[i]}}> 

                                        <div className={`border-0 bg-transparent ${styles['campo-key']}`} style ={{color: getTextColor(arrayCor[i])}}>  
                                            {array[i]}
                                        </div>
     
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-trash3 ${styles['icon-campos']}`} viewBox="0 0 16 16" onClick={() => excluir(i)} style ={{color: getTextColor(arrayCor[i])}}>
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>

                                        </svg>

                                    </div>
                                ))}
 
                                {exibirConfirmacao && (
                                    <Confirmacao onConfirm={() => confirmacaoExclusao(array[indice])} onCancel={() => cancelarExclusao()} />
                                )}  

                            </div>

                            {/* <!-- BOTÃO CADASTRAR --> */}
                            <div className={`mt-auto ${styles['div-btnCad']}`}>
                                <Button type="submit">CADASTRAR</Button>
                            </div>
                        </div>
                    </form>
                    
                </Card>
                
            </div>  
        </Container>
        </>
    )
}