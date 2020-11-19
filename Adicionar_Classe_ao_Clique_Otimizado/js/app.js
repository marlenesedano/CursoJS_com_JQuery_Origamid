$('[data-group]').each(function () {
    var $allTarget = $(this).find('[data-target]'), // quando esta entre [] é que seleciona todas as tags, exemplo, todos os data-target
        $allClick = $(this).find('[data-click]'),
        activeClass = 'active';

    $allTarget.first().addClass(activeClass);
    $allClick.first().addClass(activeClass);

    //função de click
    $allClick.click(function (e) {
        e.preventDefault();

        var id = $(this).data('click'),
            $target = $('[data-target="' + id + '"]');

        $allClick.removeClass(activeClass);
        $allTarget.removeClass(activeClass);

        $target.addClass(activeClass);
        $(this).addClass(activeClass);



    })
});