//(automaticamente para email do adm)

function enviarTcc() {


    //CRIANDO AVISO DE DADOS INCOMPLETOS parte 1 (criando alerta)
    
    const enviarTcc = document.getElementById('enviarTcc'); //pega o documento inteiro, pra que, analisando o botão de enviar para que todos os campos tenham sido preenchidos
 
    //Adicionando um "ouvinte de evento" ao formulário, quando o botão for clicado
    formTCC.addEventListener = 'submit', function(event) {
  event.preventDefault(); //previne de recarregar a página ao enviar o formulário
  }  

   //CRIANDO AVISO DE DADOS INCOMPLETOS parte 2 (definindo locais)
    const nometextarea = document.getElementById('nometextarea'); //analisando o nome
    const titulotextarea = document.getElementById('titulotextarea'); //analisando o título
    const textotcc = document.getElementById('textotcc'); //analisando o texto do TCC

     //CRIANDO AVISO DE DADOS INCOMPLETOS parte 1 (verificando se os locais estão vazios)

       if (nometextarea.value === '' || titulotextarea.value === '' || textotcc.value === '') {
        // Se estuver incompleto, exibe este alerta do navegador
        alert('Campos incompletos! Para prosseguir, é necessário preencher todas as informações solicitadas.');
    } else {
        event.target.submit(); 

  }
}