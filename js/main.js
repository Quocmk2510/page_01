jQuery('.nav_tab li').click(function(){
	$('.nav_tab li').removeClass('data_tab')
	$(this).addClass('data_tab')
	$('.tab-pane').removeClass('active show')
	$('#'+ $(this).attr('data-tab')).addClass('active show')
})
jQuery('.p-contents__slick').slick({
	slidesToShow:3,
	slideToScroll:1,
	speed:500,
	auto: true,
	arrows:true,
	/* autoplay: true, */
	prevArrow: $('.o-btn_prev'),
	nextArrow:$('.o-btn_next'),
	responsive: [
		{
			breakpoint: 991,
			settings:{
				slidesToShow:2,
			}
		},
		{
			breakpoint:768,
			settings:{
				slidesToShow:1
			}
		},
	]
})
// js question
$('.p-wrap_title').click(function(){
	if($(this).hasClass('active')){
		$('.p-wrap_title').removeClass('active')
		$('.l-question .p-wrap .p-column').slideUp()
	}else{
		$('.l-question .p-wrap .p-column').slideUp()
		$(this).siblings('.l-question .p-wrap .p-column').fadeIn()
		$('.l-question .list li').removeClass('active')
		$(this).addClass('active')
	}
})
// search header
var btn = $('.l-header-item_between #o-search__btn')
var input = $('.l-header-item_between #o-search__input')
btn.click(function(){
	$(this).toggleClass('bg');
	input.toggleClass('fadeIn');
})
// scroll top
$(window).scroll(function(){
	var header_top = $('.l-header-item_between').height()
	if($(window).scrollTop() > header_top){
		$('.l-header').addClass('fixed')
	}
	else{
		$('.l-header').removeClass('fixed')
	}
})
// mmenu
$('.c-menu').click(function(){
	$('.navMenu').mmenu({
		offCanvas:{
			position:'right',
		}
	})
	$('.navMenu').mmenu();
	var API = $('.navMenu').data('mmenu')
	API.open();
})
// back-to-top
$(window).scroll(function(){
	var pageUp = $('.page-up')
	if($(window).scrollTop() > 10){
		pageUp.show()
	}
	else{
		pageUp.hide()

	}
})
$('.page-up').click(function(){
	$('html,body').animate({scrollTop : 0},300)
})