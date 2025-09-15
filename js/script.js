
var $ = jQuery.noConflict();


// Page Loader
$(window).load(function () {
    
    "use strict";
	$('#loader').fadeOut();
});



    // jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    
    "use strict";
    
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 68
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});



// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
	offset: 70
	
});



// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    "use strict";
    $('.navbar-toggle:visible').click();
});
    
    
    
    
    /*----------------------------------------------------*/
    /*	Css3 Transition
    /*----------------------------------------------------*/

        $('*').each(function(){
            if($(this).attr('data-animation')) {
                var $animationName = $(this).attr('data-animation'),
                    $animationDelay = "delay-"+$(this).attr('data-animation-delay');
                $(this).appear (function() {
                    $(this).addClass('animated').addClass($animationName);
                    $(this).addClass('animated').addClass($animationDelay);
                });
            }
        });
    
    

    
    /*--------------------------------------------------*/
    /* Counter*/
    /*--------------------------------------------------*/ 
        

                $('.timer').countTo();

                $('.counter-item').appear(function() {
                    $('.timer').countTo();
                },{accY: -100});
            
        



////------- Testimonials Carousel
	
var testimonial = $("#testimonial-carousel");

testimonial.owlCarousel({
	navigation : true,
	pagination: true,
	slideSpeed : 2500,
	stopOnHover: true,
	autoPlay: 3000,
	singleItem: true,
	transitionStyle : "fade",
	navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
});

	

////------- Pricing Table

$(document).ready(function() {
 
  $(".pricing").owlCarousel({
        pagination: true,
        navigation : false,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 3000,
    	singleItem:false,
        itemsMobile : [550,1],
        itemsDesktopSmall : [991,2],
        items: 4,
		transitionStyle : "fade",
		navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });
 
});


////------- Latest News

$(document).ready(function() {
 
  $(".latest-news").owlCarousel({
        pagination: true,
        navigation : false,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 4000,
    	singleItem:false,
        itemsMobile : [550,1],
        itemsDesktopSmall : [991,2],
        items: 3,
		transitionStyle : "fade",
		navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });
 
});




// Team Carousel

$(document).ready(function() {
 
  $(".our-team").owlCarousel({
        pagination: true,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 3000,
        items: 4,
    	//singleItem:true,
        itemsMobile : [550,1],
        itemsDesktopSmall : [991,2],
		transitionStyle : "fade",
		navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });
 
});



////------- Partner/CLients

$(document).ready(function() {
 
  $(".clients").owlCarousel({
        pagination: false,
        navigation : true,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 3000,
    	singleItem:false,
        itemsMobile : [550,1],
        itemsDesktopSmall : [991,2],
        items: 5,
		transitionStyle : "fade",
		navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });
 
});




$ ( function () {

	$(".video").fitVids();
	
});





        // Tab------------------------------


$('#team a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})




/*---------------------------------------------------*/
    /* Progress Bar
    /*---------------------------------------------------*/
    $(document).ready(function($) {
	"use strict";
    
        $('.skill-shortcode').appear(function() {
            $('.progress').each(function(){ 
                $('.progress-bar').css('width',  function(){ return ($(this).attr('data-percentage')+'%')});
            });
        },{accY: -100});
        
        
    });
	
// popup examples
$( document ).on( "pageinit", function() {
    $( "#popupVideo iframe" )
        .attr( "width", 0 )
        .attr( "height", 0 );
		  
    $( "#popupVideo" ).on({
        popupbeforeposition: function() {
            var size = scale( 497, 298, 15, 1 ),
                w = size.width,
                h = size.height;

            $( "#popupVideo iframe" )
                .attr( "width", w )
                .attr( "height", h );
        },
        popupafterclose: function() {
            $( "#popupVideo iframe" )
                .attr( "width", 0 )
                .attr( "height", 0 );    
        }
    });
});

function scale( width, height, padding, border ) {
    var scrWidth = $( window ).width() - 30,
        scrHeight = $( window ).height() - 30,
        ifrPadding = 2 * padding,
        ifrBorder = 2 * border,
        ifrWidth = width + ifrPadding + ifrBorder,
        ifrHeight = height + ifrPadding + ifrBorder,
        h, w;

    if ( ifrWidth < scrWidth && ifrHeight < scrHeight ) {
        w = ifrWidth;
        h = ifrHeight;
    } else if ( ( ifrWidth / scrWidth ) > ( ifrHeight / scrHeight ) ) {
        w = scrWidth;
        h = ( scrWidth / ifrWidth ) * ifrHeight;
    } else {
        h = scrHeight;
        w = ( scrHeight / ifrHeight ) * ifrWidth;
    }

    return {
        'width': w - ( ifrPadding + ifrBorder ),
        'height': h - ( ifrPadding + ifrBorder )
    };
};