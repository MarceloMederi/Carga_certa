document.getElementById('enviarOrcamento').addEventListener('click', function() {
    const botao = this;
    
    // Captura os dados do formulário
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const telefone = document.getElementById('telefone');
    const descricao = document.getElementById('descricao');
    const origem = document.getElementById('origem');
    const destino = document.getElementById('destino');

    // Limpa mensagens de erro antes da validação
    document.getElementById('nomeError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('telefoneError').innerText = '';
    document.getElementById('descricaoError').innerText = '';
    document.getElementById('origemError').innerText = '';
    document.getElementById('destinoError').innerText = '';

    // Limpa classes de erro e sucesso antes da validação
    nome.classList.remove('input-error', 'input-valid');
    email.classList.remove('input-error', 'input-valid');
    telefone.classList.remove('input-error', 'input-valid');
    descricao.classList.remove('input-error', 'input-valid');
    origem.classList.remove('input-error', 'input-valid');
    destino.classList.remove('input-error', 'input-valid');

    // Verifica se os campos estão preenchidos
    if (!nome.value.trim()) {
        document.getElementById('nomeError').innerText = "Por favor, preencha o campo Nome.";
        nome.classList.add('input-error');
        return;
    } else {
        nome.classList.add('input-valid');
    }

    if (!email.value.trim()) {
        document.getElementById('emailError').innerText = "O campo de email não pode ficar vazio. Por favor, preencha.";
        email.classList.add('input-error');
        return;
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            document.getElementById('emailError').innerText = "Por favor, insira um e-mail válido.";
            email.classList.add('input-error');
            return;
        } else {
            email.classList.add('input-valid');
        }
    }

    if (!telefone.value.trim()) {
        document.getElementById('telefoneError').innerText = "É necessário informar um telefone para contato.";
        telefone.classList.add('input-error');
        return;
    } else if (telefone.value.trim().length < 11) {
        document.getElementById('telefoneError').innerText = "O telefone deve conter no mínimo 11 dígitos.";
        telefone.classList.add('input-error');
        return;
    } else {
        telefone.classList.add('input-valid');
    }

    if (!descricao.value.trim()) {
        document.getElementById('descricaoError').innerText = "Por favor, preencha a descrição do transporte.";
        descricao.classList.add('input-error');
        return;
    } else if (descricao.value.trim().length < 10) {
        document.getElementById('descricaoError').innerText = "A descrição deve conter no mínimo 10 letras.";
        descricao.classList.add('input-error');
        return;
    } else {
        descricao.classList.add('input-valid');
    }

    if (origem.value === "") {
        document.getElementById('origemError').innerText = "Por favor, selecione uma cidade de origem.";
        origem.classList.add('input-error');
        return;
    } else {
        origem.classList.add('input-valid');
    }

    if (destino.value === "") {
        document.getElementById('destinoError').innerText = "Por favor, selecione uma cidade de destino.";
        destino.classList.add('input-error');
        return;
    } else {
        destino.classList.add('input-valid');
    }

    // Adiciona a classe de carregamento ao botão
    botao.classList.add('btn-loading');
    botao.innerHTML = 'Enviando...';

    // Formata a mensagem para o WhatsApp
    const origemTexto = origem.options[origem.selectedIndex].text;
    const destinoTexto = destino.options[destino.selectedIndex].text;
    const mensagem = `*Solicitação de Orçamento Carga Certa*\n\n*Nome*: ${nome.value}\n*Email*: ${email.value}\n*Telefone*: ${telefone.value}\n*Descrição*: ${descricao.value}\n*Origem*: ${origemTexto}\n*Destino*: ${destinoTexto}`;
    
    // Substitua pelo seu número de WhatsApp
    const numeroWhatsApp = '5534984096698';
    
    // Cria o link para o WhatsApp
    const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;

    // Exibe a mensagem de confirmação
    document.getElementById('mensagemConfirmacao').classList.remove('d-none');

    // Redireciona para o WhatsApp após um pequeno atraso
    setTimeout(() => {
        window.open(linkWhatsApp, '_blank');

        // Restaura o botão após o redirecionamento
        botao.classList.remove('btn-loading');
        botao.innerHTML = 'Solicitar Orçamento';
    }, 2000);
});