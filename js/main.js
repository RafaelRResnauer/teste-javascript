function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>"
}
function redirecionar(){
    window.open("https://www.google.com/")
    window.location.href="https://www.google.com/";
}
function msov(elemento){
    elemento.innerHTML="Obrigado por passar o mouse!";
}
function voltar(elemento){
    elemento.innerHTML="Passe o mouse aqui!";
}
function load(){
    alert("Página carregada")
}
function funcaoChange(elemento){
    console.log(elemento.value)
}