import { useState } from "react"

export default function Testando () {
  const [nome,setNome] = useState('');
  const [idade,setIdade] = useState('');

  const funcao = (value) => {
  }

  const funcao2 = (value) => {
  }

  const funcao3 = (value) => {
    
  }

  return (
    <>
      <input type="password" placeholder="Digite aqui" required onChange={funcao}/>
      <input type="text" placeholder="Digite aqui" required onChange={funcao2}/>
      <input type="email" placeholder="Digite aqui" required onChange={funcao3}/>
    </>
  )
}