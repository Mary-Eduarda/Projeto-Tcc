document.addEventListener('DOMContentLoaded', function() {
    const enviarTcc = document.getElementById('enviarTcc');
    const nome = document.getElementById('nome');
    const titulo = document.getElementById('titulo');
    const textotcc = document.getElementById('textotcc');
    const mensagemDiv = document.getElementById('mensagem');

    enviarTcc.addEventListener('click', function() {
        if (nome.value.trim() === '' || titulo.value.trim() === '' || textotcc.value.trim() === '') {
            alert('Campos incompletos! Para prosseguir, é necessário preencher todas as informações solicitadas.');
            // exibir a mensagem na div
            mensagemDiv.textContent = 'Campos incompletos! Por favor, preencha todas as informações.';
            mensagemDiv.style.color = 'red';
        } else {
            
            // mostrar uma mensagem de sucesso
            alert('TCC enviado com sucesso!');
             mensagemDiv.textContent = 'TCC enviado com sucesso!';
             mensagemDiv.style.color = 'green';
        }
    });
});