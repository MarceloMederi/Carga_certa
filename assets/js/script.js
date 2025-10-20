document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------
    // 1. Lógica de Validação e Simulação de Envio (Modo Demo/Marketing)
    // ----------------------------------------------

    document.getElementById('enviarOrcamento').addEventListener('click', function() {
        const botao = this;
        
        // Captura os dados do formulário
        const nome = document.getElementById('nome');
        const email = document.getElementById('email');
        const telefone = document.getElementById('telefone');
        const descricao = document.getElementById('descricao');
        const origem = document.getElementById('origem');
        const destino = document.getElementById('destino');
        const mensagemDemo = document.getElementById('mensagemConfirmacao');


        // Limpa mensagens de erro e classes antes da validação
        document.getElementById('nomeError').innerText = '';
        document.getElementById('emailError').innerText = '';
        document.getElementById('telefoneError').innerText = '';
        document.getElementById('descricaoError').innerText = '';
        document.getElementById('origemError').innerText = '';
        document.getElementById('destinoError').innerText = '';

        nome.classList.remove('input-error', 'input-valid');
        email.classList.remove('input-error', 'input-valid');
        telefone.classList.remove('input-error', 'input-valid');
        descricao.classList.remove('input-error', 'input-valid');
        origem.classList.remove('input-error', 'input-valid');
        destino.classList.remove('input-error', 'input-valid');

        // Volta a mensagem de confirmação para o estado inicial e a esconde
        mensagemDemo.classList.add('d-none');
        mensagemDemo.classList.remove('alert-info');
        mensagemDemo.classList.add('alert-success');
        mensagemDemo.innerHTML = 'Solicitação enviada com sucesso! Você será redirecionado para o WhatsApp.';


        let isFormValid = true;

        // VALIDAÇÕES
        if (!nome.value.trim()) {
            document.getElementById('nomeError').innerText = "Por favor, preencha o campo Nome.";
            nome.classList.add('input-error');
            isFormValid = false;
        } else {
            nome.classList.add('input-valid');
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            document.getElementById('emailError').innerText = "O campo de email não pode ficar vazio.";
            email.classList.add('input-error');
            isFormValid = false;
        } else if (!emailPattern.test(email.value.trim())) {
             document.getElementById('emailError').innerText = "Por favor, insira um e-mail válido.";
            email.classList.add('input-error');
            isFormValid = false;
        } else {
            email.classList.add('input-valid');
        }

        if (!telefone.value.trim()) {
            document.getElementById('telefoneError').innerText = "É necessário informar um telefone para contato.";
            telefone.classList.add('input-error');
            isFormValid = false;
        } else if (telefone.value.trim().length < 11) {
            document.getElementById('telefoneError').innerText = "O telefone deve conter no mínimo 11 dígitos.";
            telefone.classList.add('input-error');
            isFormValid = false;
        } else {
            telefone.classList.add('input-valid');
        }

        if (!descricao.value.trim()) {
            document.getElementById('descricaoError').innerText = "Por favor, preencha a descrição do transporte.";
            descricao.classList.add('input-error');
            isFormValid = false;
        } else if (descricao.value.trim().length < 10) {
            document.getElementById('descricaoError').innerText = "A descrição deve conter no mínimo 10 letras.";
            descricao.classList.add('input-error');
            isFormValid = false;
        } else {
            descricao.classList.add('input-valid');
        }

        if (origem.value === "") {
            document.getElementById('origemError').innerText = "Por favor, selecione uma cidade de origem.";
            origem.classList.add('input-error');
            isFormValid = false;
        } else {
            origem.classList.add('input-valid');
        }
        
        if (destino.value === "") {
            document.getElementById('destinoError').innerText = "Por favor, selecione uma cidade de destino.";
            destino.classList.add('input-error');
            isFormValid = false;
        } else {
            destino.classList.add('input-valid');
        }
        
        // Se a validação falhar, interrompe o processo.
        if (!isFormValid) {
            return;
        }
        // Fim das validações


        // --- SIMULAÇÃO DE ENVIO E MENSAGEM DE MARKETING ---
        
        // 1. Desativa e Simula Carregamento
        botao.classList.add('btn-loading');
        botao.innerHTML = '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span> Processando demonstração...';

        // 2. Exibe a mensagem de confirmação alterada para modo DEMO
        setTimeout(() => {
            mensagemDemo.classList.remove('d-none', 'alert-success');
            mensagemDemo.classList.add('alert-info'); // Estilo de informação
            mensagemDemo.innerHTML = '✅ **Demonstração de Contato Realizada!** <br>Se o projeto estivesse ativo, o cliente seria redirecionado para o WhatsApp ou e-mail com todos os dados preenchidos. Este site é um modelo.';
        }, 500); // Exibe a mensagem após 0.5s para não parecer instantâneo

        // 3. Restaura o botão e limpa o formulário após 2 segundos de "loading" + 8 segundos de mensagem
        setTimeout(() => {
            
            // Restaura o botão
            botao.classList.remove('btn-loading');
            botao.innerHTML = 'Solicitar Orçamento <i class="fab fa-whatsapp ml-2"></i>';
            
            // Esconde a mensagem de confirmação e limpa o formulário
            setTimeout(() => {
                 mensagemDemo.classList.add('d-none');
                 
                 // Volta para o estado inicial para futuras demonstrações
                 mensagemDemo.classList.remove('alert-info');
                 mensagemDemo.classList.add('alert-success'); 
                 mensagemDemo.innerHTML = 'Solicitação enviada com sucesso! Você será redirecionado para o WhatsApp.'; 

                 document.getElementById('orcamentoForm').reset(); // Limpa o formulário
                 
                 // Remove as classes de validação de sucesso
                 nome.classList.remove('input-valid');
                 email.classList.remove('input-valid');
                 telefone.classList.remove('input-valid');
                 descricao.classList.remove('input-valid');
                 origem.classList.remove('input-valid');
                 destino.classList.remove('input-valid');

            }, 8000); // Exibe a mensagem de demo por 8 segundos

        }, 2000); // Simula o processamento (loading) por 2 segundos
    });
    
    // ----------------------------------------------
    // 2. Animação no Scroll (Intersection Observer)
    // ----------------------------------------------

    const animateElements = document.querySelectorAll('.animate-scale, .list-item');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe que dispara a animação CSS
                entry.target.classList.add('is-visible');
                // Para de observar depois de animar
                observer.unobserve(entry.target); 
            }
        });
    }, {
        // Opções do Observer
        rootMargin: '0px',
        threshold: 0.2 // A animação dispara quando 20% do elemento estiver visível
    });

    // Observa todos os elementos com a classe .animate-scale e .list-item
    animateElements.forEach(element => {
        observer.observe(element);
    });

});