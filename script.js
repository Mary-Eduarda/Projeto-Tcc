// colocar nome da pessoa no email, ex: "TCC DE PAULA, ENVIADO COM SUCESSO!" (automaticamente paara email do adm) cadstrada no banco de dados

function enviarTcc() {
    const inputEnviarTcc = document.getElementById("enviarTcc");
    let tcc = inputEnviarTcc.value.trim();
    const mensagemElemento = document.getElementById("mensgagem");
  
    // Verificando se o usuário adicionou algo
    if (tcc === "") {
      let mensagemErro = "Digite seu TCC para poder envia-lo!";
      mensagemElemento.textContent = mensagemErro;
      return;
    } else {
      mensagemElemento.textContent = "Seu TCC foi enviado com sucesso!";
    }
  }