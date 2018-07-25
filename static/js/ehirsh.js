
$( document ).ready(function(){
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    $(".dropdown-trigger").dropdown();

})

document.addEventListener("DOMContentLoaded", function(){

	$('.preloader-background').delay(700).fadeOut('slow');

	$('.preloader-wrapper')
		.delay(700)
		.fadeOut();

    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
});
