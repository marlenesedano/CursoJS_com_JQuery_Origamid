$('textarea').on('keyup paste', function () {
    setTimeout(function () {
        var valorTextarea = $('textarea').val().length,
            palavras = $('textarea').val().split(' ').length;
        $('.caracteres').text(valorTextarea);
        $('.palavras').text(palavras);
        console.log(palavras);
    })

});