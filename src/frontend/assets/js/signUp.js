let name = document.querySelector('#nome')
let labelName = document.querySelector('#labelNome')
let validName = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let password = document.querySelector('#senha')
let labelPassword = document.querySelector('#labelSenha')
let validPassword = false

function sohLetra(nome){
  let regex = /^[a-zA-Z]+$/;
  return regex.test(nome);
}

name.addEventListener('keyup', ()=>{  
  if(name.value.length > 2 && sohLetra(name.value)){
    name.style.border = '1px solid green'
    labelName.innerHTML = ''
    validName = true
  } else{
    name.style.border = '1px solid red'
    labelName.setAttribute('style', 'color: red')
    labelName.innerHTML = '<p>*Insira no mínimo 3 caracteres e somente letras!*</p>'
    validName = false
  }
})

function validarEmail(email) {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

email.addEventListener('keyup', ()=>{  
  if(validarEmail(email.value)){
    email.style.border = '1px solid green'
    labelEmail.innerHTML = ''
    validEmail = true
  } else{
    email.style.border = '1px solid red'
    labelEmail.setAttribute('style', 'color: red')
    labelEmail.innerHTML = '<p>*Email inválido!*</p>'
    validEmail = false
  }
})


password.addEventListener('keyup', ()=>{  
  if(password.value.length > 5){
    password.style.border = '1px solid green'
    labelPassword.innerHTML = ''
    validPassword = true
  } else{
    password.style.border = '1px solid red'
    labelPassword.setAttribute('style', 'color: red')
    labelPassword.innerHTML = '<p>*Insira no mínimo 6 caracteres!*</p>'
    validPassword = false
  }
})


function cadastrar(event){
    event.preventDefault();
    if(validName && validEmail && validPassword){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        
        listaUser.push(
        {
        nomeCad: name.value,
        emailCad: email.value,
        senhaCad: password.value
        }
        )
        console.log('cheguei aq1');

        localStorage.setItem('listaUser', JSON.stringify(listaUser));
        console.log('cheguei aq2');
        window.location.href = '../html/signIn.html';
        
        console.log('cheguei aq3');
    } else{
        alert('Preencha os campos devidamente!');
    }
}

document.querySelector('#signup-form').addEventListener('submit', cadastrar);
