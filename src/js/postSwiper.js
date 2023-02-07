import $ from 'jquery';
import 'slick-carousel'
$(document).ready(function(){

	let cur_width = $(window).width();
	$(window).resize(function(){
		if($(window).width() <= 630 && cur_width > 630){
			location.reload();
		}
		else if($(window).width() > 630 && cur_width <= 630){
			location.reload();
		}
	});

});
$('.post-content').slick({
	dots: false,
	arrows: false,
	slidesToShow: 2,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1800,
			settings: "unslick"
		},
		{
			breakpoint: 640,
			settings: "slick"

		}

	]
})








