document.addEventListener('DOMContentLoaded', function() {
    // Inicialize o EmailJS com sua Public Key ANTES de qualquer chamada send
    emailjs.init("SHJNZUo6qEtauwODj"); // <-- Adicione esta linha com sua Public Key!

    const enviarTcc = document.getElementById('enviarTcc');
    const nome = document.getElementById('nome');
    const titulo = document.getElementById('titulo');
    const textotcc = document.getElementById('textotcc');
    const mensagemDiv = document.getElementById('mensagem');

    enviarTcc.addEventListener('click', function() {
        if (nome.value.trim() === '' || titulo.value.trim() === '' || textotcc.value.trim() === '') {
            alert('Campos incompletos! Para prosseguir, é necessário preencher todas as informações solicitadas.');
        } else {
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

            // Substitua os IDs pelos valores CORRETOS das suas imagens
            emailjs.send('service_qxoulyt', 'template_uu7jj2m', templateParams) // <-- IDs CORRETOS AQUI!
                .then(function(response) {
                    alert('TCC enviado com sucesso! O administrador será notificado.');
                    console.log('SUCCESS!', response.status, response.text);
                    mensagemDiv.textContent = 'TCC enviado com sucesso!';
                    mensagemDiv.style.color = 'green';
                    nome.value = '';
                    titulo.value = '';
                    textotcc.value = '';
                },
                function(error) {
                    alert('Ocorreu um erro ao enviar o TCC. Por favor, tente novamente.');
                    console.log('FAILED...', error);
                    mensagemDiv.textContent = 'Erro ao enviar o TCC.';
                    mensagemDiv.style.color = 'red';
                });
        }
    });
});