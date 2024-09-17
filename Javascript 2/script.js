
document.getElementById("FormularioContato").addEventListener("submit", (a) => {a.preventDefault()}); 
function verificatudi() {
    
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let mensagem = document.getElementById("mensagem");

    
    let nomeErro = document.getElementById("nomenp");
    let emailErro = document.getElementById("emailnp");
    let mensagemErro = document.getElementById("mensagemnp");

    let camposPreenchidos = true; 

    // Valida o nome
    if (nome.value === '') {
        nomeErro.style.visibility = "visible";
        nomeErro.textContent = "Nome não informado";
        nome.style.border = "1px solid red";
        camposPreenchidos = false;
    } else {
        nomeErro.style.visibility = "hidden"; 
        nome.style.border = "1px solid #ccc"; 
    }

    // Valida email
    if (email.value === '') {
        emailErro.style.visibility = "visible";
        emailErro.textContent = "Email não informado";
        email.style.border = "1px solid red";
        camposPreenchidos = false;
    } else {
        emailErro.style.visibility = "hidden";
        email.style.border = "1px solid #ccc";
    }

    // Valida mensagem
    if (mensagem.value === '') {
        mensagemErro.style.visibility = "visible";
        mensagemErro.textContent = "Mensagem não informada";
        mensagem.style.border = "1px solid red";
        camposPreenchidos = false;
    } else {
        mensagemErro.style.visibility = "hidden";
        mensagem.style.border = "1px solid #ccc";
    }

    if (camposPreenchidos) {
        alert("Mensagem enviada com sucesso!");
        document.getElementById("FormularioContato").reset(); 
        return true; 
    }

    return false; 
}
