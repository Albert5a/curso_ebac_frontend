$(document).ready(function() {
    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
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
            mensagem: {
                required: true
            }
        }
    })
})