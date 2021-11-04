$(function() {
    $(".menu-trigger").on("click", function() {
        $(".menu").toggleClass("move");
        if($(this).hasClass("move")) {
            $(".menu-trigger span").css('background-color', '#FFFFFF');
            $(this).removeClass("move");
            $(".totop i").css('display', 'block');
         } else {
            $(".menu-trigger span").css('background-color', '#333333');  
            $(this).addClass("move"); 
            $(".totop i").css('display', 'none');
            };

         $(".mv h2").css('z-index', '0');
        
         $(this).toggleClass("active");
         $(".menu").toggleClass("fixed");
        
         return false;

        
    });
   
$(window).on("scroll", function($) {
    if ($(this).scrollTop() > 300) {
       $('footer i').show();
    } else {
       $('footer i').hide();
    }
    });
    
   $('footer i').click(function () {
   $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
    });
});