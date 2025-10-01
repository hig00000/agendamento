 const nome = document.getElementById('nome');
        const data_evento = document.getElementById('data_evento');
        const servico = document.getElementById('servico');
        const mensagem = document.getElementById('mensagem');
        const telefone = '5511960421437'; // Número de telefone para o qual a mensagem será enviada

        // Função para impedir que o usuário digite números no campo de nome
        nome.addEventListener('input', function () {
            this.value = this.value.replace(/\d/g, '');
        });

        function enviarFormulario(event) {
            // Impede o envio padrão do formulário
            event.preventDefault();

            // Pega o elemento da mensagem de erro
            const mensagemErro = document.getElementById('mensagem-erro');
            
            const campos = [nome, data_evento, servico];

            // Reseta os estilos de erro
            mensagemErro.style.display = 'none';
            campos.forEach(campo => {
                campo.classList.remove('campo-erro');
            });

            // Validação
            let formularioValido = true;
            
            if (nome.value.trim() === '') {
                formularioValido = false;
                nome.classList.add('campo-erro');
            }
            if (data_evento.value === '') {
                formularioValido = false;
                data_evento.classList.add('campo-erro');
            }
            if (servico.value === '') {
                formularioValido = false;
                servico.classList.add('campo-erro');
            }
            if (mensagem.value.trim() === '') {
                formularioValido = false;
                mensagem.classList.add('campo-erro');
            }

            // --- AÇÃO FINAL ---
            if (!formularioValido) {
                // Se o formulário NÃO for válido, mostra a mensagem de erro
                mensagemErro.textContent = 'Por favor, preencha todos os campos obrigatórios.';
                mensagemErro.style.display = 'block';
            } else {
                // Se o formulário for válido, executa o SEU CÓDIGO de envio para o WhatsApp
                const nome_Valor = nome.value;
                const data_evento_valor = data_evento.value;
                const servico_Valor = servico.value;
                const mensagem_Valor = mensagem.value;

                const texto = `Olá, meu nome é ${nome_Valor}, quero marcar uma visita no dia ${data_evento_valor}, vou querer o serviço de ${servico_Valor}. alguns detalhes: ${mensagem_Valor}`;
                const textoformatado = encodeURIComponent(texto);
                const url = `https://wa.me/${telefone}?text=${textoformatado}`;

                window.open(url, '_blank').focus();

                // Opcional: Limpa o formulário após abrir a janela do WhatsApp
                document.querySelector('form').reset();
            }
        }