$(document).ready(function(){
	$('.news__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		prevArrow: '<div class="prev"><img src="img/prev-arrow.svg" alt=""></div>',
		nextArrow: '<div class="next"><img src="img/next-arrow.svg" alt=""></div>',
		variableWidth: true,
	})
	$('.around__slider').slick({
		slidesToShow: 4,
		slidesToScroll:4,
		prevArrow: '<div class="prev"><img src="img/prev-arrow.svg" alt=""></div>',
		nextArrow: '<div class="next"><img src="img/next-arrow.svg" alt=""></div>',
	})
})