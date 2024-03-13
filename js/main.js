$(document).ready(function () {


    $('#cep').mask('00.000-000', {
        placeholder: '00.000-000'
    });
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });
    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true,
            },
            endereco: {
                required: true,
            },
            cep: {
                required: true,
            }
        }
    })
})