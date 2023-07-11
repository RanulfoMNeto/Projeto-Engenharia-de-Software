function entrar(event){
  event.preventDefault();
  let email = document.querySelector('#email');
  
  let password = document.querySelector('#senha');
  
  let msgError = document.querySelector('#msgError');
  
  let listaUser = [];
  
  let userValid = {
    nome: null,
    email: null,
    senha: null
  }
  
  listaUser = JSON.parse(localStorage.getItem('listaUser'));
  
  listaUser?.forEach((item) => {
    if(email.value == item.emailCad && password.value == item.senhaCad){   
      userValid = {
        nome: item.nomeCad,
        email: item.emailCad,
        senha: item.senhaCad
      }
      
    }
  })
  
  if(email.value == userValid.email && password.value == userValid.senha){
    window.location.href = '../../index.html';
    
    let mathRandom = Math.random().toString(16).substr(2);
    let token = mathRandom + mathRandom;
    
    localStorage.setItem('token', token);
    localStorage.setItem('userLogado', JSON.stringify(userValid));
    
  } else {
    email.style.border = '1px solid red';
    password.style.border = '1px solid red';
    msgError.setAttribute('style', 'display: block');
    msgError.innerHTML = 'Usuário ou senha incorretos!';
  }
    
}

document.querySelector('#signin-form').addEventListener('submit', entrar);
