$(function(){
     // menu slide
    
    $('nav.mobile').click(function(){
        $(this).find('ul').slideToggle();
    })

    
    $('nav li, a').click(function(){
        // script para pegar o atributo e descer 

        var linkMenu = $(this).find('a')
        var href = linkMenu.attr('href')
        var descer = $(href).offset().top

        // animação pra suavizar

        $('html,body').animate({'scrollTop': descer})

    })
})
