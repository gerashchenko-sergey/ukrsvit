


jQuery(document).ready(function () {


jQuery(".main").onepage_scroll({
	   sectionContainer: ".section-page",  
	   easing: "ease",                                                 
	   animationTime: 1000,             
	   pagination: false,                
	   updateURL: false,               
	   beforeMove: function(index) {},  
	   afterMove: function(index) {},  
	   loop: false,                     
	   keyboard: true,                  
	   responsiveFallback: false,        
	                                    
	                                    
	   direction: "vertical"             
});

    AOS.init();

    

/*slider*/
 jQuery('.slick-slider').slick({
		  dots: true,
		  arrows: false,
		  infinite: true,
		  autoplay:true,
		  autoplaySpeed:300,
		  speed: 4000,
		  slidesToShow: 1,
		  adaptiveHeight: true
});



/*Menu */
(function($){
  $(function() {
    $('.menu-icon').on('click', function() {
      $(this).closest('.menu')
        .toggleClass('menu-state-open');   
    });

     $('.menu-icon').on('click', function() {
      $(this).closest('.main')
        .toggleClass('state-open');   
    });

    
    $('.menu-links-item').on('click', function() {
      $(this).closest('.menu')
        .removeClass('menu-state-open');
    });

  });
})(jQuery);

/*tabs*/
(function($) {
$(function() {
 
  $('.tabs-capt').on('click', ':not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.tabs-wrap').find('.tabs-cont').removeClass('active').eq($(this).index()).addClass('active');
  });
 
});
})(jQuery);

});

/*затемнялка


var eventOnFollvw = {
    init: function() {
        this.list = jQuery('.anchor_sc');
        this.scrollFlag = false;

        this.attachEvent();
    },
    updateState: function() {
        this.animateListPosition = this.list.offset().top;
        this.winHeight = this.browserHeight();
        this.scrollTop = jQuery(document).scrollTop();
    },
    attachEvent: function() {
        var self = this;

        this.scrollHandler = function() {
            self.updateState();

            if (self.scrollTop + self.winHeight >= self.animateListPosition && !self.scrollFlag) {

            jQuery('.section-slider').addClass('active');
            }
        };

        jQuery(window).on('load resize orientationchange scroll', this.scrollHandler);
    },
    browserHeight: function() {
        return window.innerHeight || document.documentElement.clientHeight;
    }


};
*/



jQuery(document).ready(function () {


$('.section-slider').delay(10).animate({'opacity':'1'},4000);

});














