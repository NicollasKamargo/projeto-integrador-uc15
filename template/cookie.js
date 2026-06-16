//  function salvar(){

//           let texto = document.getElementById("campo").ariaValueMax;


//           localStorage.setItem("meuTexto", texto);





//  }


//  function mostrar(){
//     let textoGuardado = localStorage.getItem("meuTexto");


//     document.getElementById("resultado").innerText=textoGuardado;
//  }





//function para criar o coookie
if (!localStorage.getItem("cookiesAceitos")) {
  
  // document representa a página da web
  // getElementById("cookiePopup") procura um elemento da página com o ID "cookiePopup"
  // style.display = "block" faz esse elemento aparecer na tela
  // Ou seja, mostramos o aviso de cookies para o usuário
  document.getElementById("cookiePopup").style.display = "block";
}

// Aqui começa uma função chamada aceitarCookies
// Funções são conjuntos de ações que podemos executar quando quisermos
// Essa função será chamada quando o usuário clicar no botão "Aceitar"
function aceitarCookies() {

  // setItem guarda uma informação no localStorage
  // Estamos dizendo: "O usuário aceitou os cookies"
  // Guardamos isso com o nome "cookiesAceitos" e o valor "sim"
  localStorage.setItem("cookiesAceitos", "sim");

  // Agora vamos esconder o aviso de cookies
  // Pegamos o mesmo elemento com ID "cookiePopup"
  // E mudamos o estilo para "none", que significa "não mostrar"
  document.getElementById("cookiePopup").style.display = "none";
}