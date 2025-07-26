console.log("js carregado");
function Evento(){
        window.confirm('a alterar texto continuar mesmo asssin')
        let digito = (window.prompt("escreva o texto"))
        document.getElementById('h1').textContent = digito
        console.log("Texto alterado para: " + digito);
    }
