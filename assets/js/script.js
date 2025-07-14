document.getElementById('enviarOrcamento').addEventListener('click', function() {
    // Captura os dados do formulário
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const telefone = document.getElementById('telefone');
    const descricao = document.getElementById('descricao');
    const origem = document.getElementById('origem');
    const destino = document.getElementById('destino');
    
    // Limpa classes de erro e sucesso antes da validação
    nome.classList.remove('input-error', 'input-valid');
    email.classList.remove('input-error', 'input-valid');
    telefone.classList.remove('input-error', 'input-valid');
    descricao.classList.remove('input-error', 'input-valid');
    origem.classList.remove('input-error', 'input-valid');
    destino.classList.remove('input-error', 'input-valid');

    // Verifica se os campos estão preenchidos
    if (!nome.value.trim()) {
        nome.classList.add('input-error');
        alert("Por favor, preencha o campo Nome.");
        return;
    } else {
        nome.classList.add('input-valid');
    }

    if (!email.value.trim()) {
        email.classList.add('input-error');
        alert("Por favor, preencha o campo Email.");
        return;
    } else {
        email.classList.add('input-valid');
    }

    if (!telefone.value.trim()) {
        telefone.classList.add('input-error');
        alert("Por favor, preencha o campo Telefone.");
        return;
    } else {
        telefone.classList.add('input-valid');
    }

    if (!descricao.value.trim()) {
        descricao.classList.add('input-error');
        alert("Por favor, preencha o campo Descrição.");
        return;
    } else {
        descricao.classList.add('input-valid');
    }

    if (origem.value === "") {
        origem.classList.add('input-error');
        alert("Por favor, selecione uma cidade de origem.");
        return;
    } else {
        origem.classList.add('input-valid');
    }

    if (destino.value === "") {
        destino.classList.add('input-error');
        alert("Por favor, selecione uma cidade de destino.");
        return;
    } else {
        destino.classList.add('input-valid');
    }

    // Validação de e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        email.classList.add('input-error');
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Validação de telefone (apenas números)
    const telefonePattern = /^[0-9]+$/;
    if (!telefonePattern.test(telefone.value.trim())) {
        telefone.classList.add('input-error');
        alert("Por favor, insira apenas números no campo telefone.");
        return;
    }

    // Formata a mensagem para o WhatsApp
    const origemTexto = origem.options[origem.selectedIndex].text;
    const destinoTexto = destino.options[destino.selectedIndex].text;
    const mensagem = `*Solicitação de Orçamento Carga Certa*\n\n*Nome*: ${nome.value}\n*Email*: ${email.value}\n*Telefone*: ${telefone.value}\n*Descrição*: ${descricao.value}\n*Origem*: ${origemTexto}\n*Destino*: ${destinoTexto}`;
    
    // Substitua pelo seu número de WhatsApp
    const numeroWhatsApp = '5534984096698';
    
    // Cria o link para o WhatsApp
    const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;

    // Redireciona para o WhatsApp
    window.open(linkWhatsApp, '_blank');
});