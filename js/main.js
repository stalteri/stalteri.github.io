function stikyHeader(){
	if($(window).scrollTop() > 200){
		$('.header').addClass('fixed');
	}else{
		$('.header').removeClass('fixed');
	}
}

$(document).ready(function() {
	
	$('.main-slider').slick({
		slidesToScroll: 1,
 		arrows:false,
 		dots: true,
 		autoplay: true,
 		autoplaySpeed:4000,
 		pauseOnHover:false,
 		pauseOnFocus:false,
 		customPaging : function(slider, i) {
	        var slide_title = $(slider.$slides[i]).find('.main-slider-item').data('slide-name');
	        var slide_dot = '<div class="slide_dot"><div class="indicator"></div><p><strong>0'+(i+1)+'</strong> '+slide_title+'</p></div>';
	        return slide_dot;
	    }
	});

	$('.little-slider').slick();

	$('.my-card-body').mCustomScrollbar({
		theme: "dark-3"
	});

	$('[data-fancybox="images"]').fancybox({
	  buttons : [ 
	    'slideShow',
	    'share',
	    'zoom',
	    'fullScreen',
	    'close'
	  ],
	  thumbs : {
	    autoStart : true
	  }
	});

	$('.toogle-mobile-menu').click(function(e) {
		e.preventDefault();
		$('header').toggleClass('menu-opened');
	});
		
});

$(window).on('load scroll', stikyHeader);