if(localStorage.getItem('token') == null){
  alert('Precisa estar logado para acessar esta página!');
  window.location.href= "./assets/html/signIn.html";
}

let userLogado = JSON.parse(localStorage.getItem('userLogado'));

let logado = document.querySelector('#logado');

logado.innerHTML = 'Olá ' + userLogado.nome + '!';

function sair(){
  localStorage.removeItem('token');
  localStorage.removeItem('userLogado');
  window.location.href= "./assets/html/signIn.html";
}

const keywordbtn = document.getElementById('keywordbtn');
keywordbtn.addEventListener('click', function() {
  window.location.href = './assets/html/keyWord.html';
});