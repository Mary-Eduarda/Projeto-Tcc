document.addEventListener('DOMContentLoaded', function() {
    // 1. Inicialize o EmailJS com sua Public Key.
    // Esta linha é crucial e deve estar presente antes de tentar enviar e-mails com EmailJS.
    emailjs.init("SHJNZUo6qEtauwODj"); 

    const enviarTcc = document.getElementById('enviarTcc');
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const titulo = document.getElementById('titulo');
    const textotcc = document.getElementById('textotcc');
    const mensagemDiv = document.getElementById('mensagem');


    enviarTcc.addEventListener('click', function() {
        // Verifica se os campos estão incompletos
        if (nome.value.trim() === '' || titulo.value.trim() === '' || textotcc.value.trim() === '') {
            alert('Campos incompletos! Para prosseguir, é necessário preencher todas as informações solicitadas.');
            // Opcional: exibe a mensagem na div e define a cor para vermelho
            // mensagemDiv.textContent = 'Campos incompletos! Por favor, preencha todas as informações.';
            // mensagemDiv.style.color = 'red';
        } else {
            // Se os campos estiverem preenchidos, prepara os parâmetros para o EmailJS
            const templateParams = {
                from_name: nome.value.trim(),
                to_name: 'Administrador', // Nome para quem o e-mail será enviado
                message_html: `
                    <h2>Novo TCC Recebido!</h2>
                    <p><strong>Nome do Aluno:</strong> ${nome.value.trim()}</p>
                    <p><strong>Título do TCC:</strong> ${titulo.value.trim()}</p>
                    <p><strong>Conteúdo do TCC:</strong></p>
                    <p>${textotcc.value.trim()}</p>
                `,
                admin_email: 'yyduds91@gmail.com' // e-mail do seu administrador
            };

            //2. Email do aluno    
            const email = document.getElementById('email');


                 // 3. Notificação TCC envio
                 emailjs.send('service_qxoulyt', 'template_uu7jj2m', templateParams)
                 .then(function(response) {
                    // Sucesso no envio
                    alert('TCC enviado com sucesso! O administrador será notificado.');
                    console.log('SUCCESS!', response.status, response.text);
                    mensagemDiv.textContent = 'TCC enviado com sucesso!';
                    mensagemDiv.style.color = 'green';

                    // Limpa os campos do formulário após o sucesso
                    nome.value = '';
                    titulo.value = '';
                    textotcc.value = '';

                }, function(error) {
                    // Erro no envio
                    alert('Ocorreu um erro ao enviar o TCC. Por favor, tente novamente.');
                    console.log('FAILED...', error); // ESTA MENSAGEM NO CONSOLE É CRUCIAL PARA DEBUGAR!
                    mensagemDiv.textContent = 'Erro ao enviar o TCC.';
                    mensagemDiv.style.color = 'red';
                });
        }
    });
});