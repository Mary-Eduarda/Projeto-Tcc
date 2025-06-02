//(automaticamente para email do adm)

function enviarTcc() {
    const inputEnviarTcc = document.getElementById("enviarTcc");
    let tcc = inputEnviarTcc.value.trim(); // Obtendo o valor do input e removendo espaços em branco
    const mensagemElemento = document.getElementById("mensgagem");
  
    // Verificando se o usuário adicionou algo
    if (tcc === "") {
      alert("Digite em todos os campos, para que seu TCC seja enviado!");
      return false;}
       else {
      alert("Seu TCC foi enviado com sucesso!");
    }
  }