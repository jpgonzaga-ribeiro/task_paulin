document.getElementById("FormularioContato").addEventListener("submit", (a) => {a.preventDefault()}); 

function verificalogin() {
    let usuario = document.getElementById("usuario");
    let senha = document.getElementById("senha");

    if (usuario.value === '') {
        alert("Usuário não informado");
    }else if(usuario.value !== 'login'){
        alert("usuario incorreto")
    }

    if (senha.value === '') {
        alert("Senha não informada");
    }else if(senha.value !== '123'){
        alert("senha incorreta");
    }

    if (usuario.value === 'login' && senha.value === '123') {
        alert("login feito");
        window.location.href = "../pages/cadastroContato.html";
    }
}