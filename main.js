$(document).ready(function () {
    $('#cep').mask('00000-000');

    $('#btn-buscar-cep').click(function () {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);

        botao.find('i').addClass('d-none');
        botao.find('span').removeClass('d-none');

        $.ajax(endpoint).done(function (resposta) {
            if (resposta.erro) {
                alert('CEP não encontrado.');
                return;
            }

            const logradouro = resposta.logradouro || '';
            const bairro = resposta.bairro || '';
            const cidade = resposta.localidade || '';
            const estado = resposta.uf || '';

            const endereco = `${logradouro}, ${bairro} - ${cidade} / ${estado}`;
            $('#endereco').val(endereco);
        })
        .catch(function () {
            alert('Erro ao buscar o CEP. Verifique a conexão ou o CEP digitado.');
        })
        .finally(function () {
            botao.find('i').removeClass('d-none');
            botao.find('span').addClass('d-none');
        });
    });

    $('#formulario-cadastro').submit(function (event) {
        event.preventDefault();

        let valido = true;

        if ($('#nome').val().trim().length === 0) {
            $('#erro-nome').removeClass('d-none');
            valido = false;
        } else {
            $('#erro-nome').addClass('d-none');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test($('#email').val())) {
            $('#erro-email').removeClass('d-none');
            valido = false;
        } else {
            $('#erro-email').addClass('d-none');
        }

        if ($('#senha').val().length < 6) {
            $('#erro-senha').removeClass('d-none');
            valido = false;
        } else {
            $('#erro-senha').addClass('d-none');
        }

        if ($('#cep').val().length !== 9) {
            $('#erro-cep').removeClass('d-none');
            valido = false;
        } else {
            $('#erro-cep').addClass('d-none');
        }

        if ($('#numero').val().trim().length === 0) {
            $('#erro-numero').removeClass('d-none');
            valido = false;
        } else {
            $('#erro-numero').addClass('d-none');
        }

        if (valido) {
            alert('Cadastro realizado com sucesso!');
        }
    });
});
