$(function () {
    const includes = $('[data-include]')
    $.each(includes, function () {
        $(this).load('includes/' + $(this).data('include') + '.html')
    })
})