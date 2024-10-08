/*
Template: Lawfic - Attorney and Lawyer HTML Template
Author: peacefulqode.com
Version: 1.0
Design and Developed by: PeacefulQode

*/

/*================================================
[  Table of contents  ]
==================================================

==> Page Loader
==> Search Button
==> Accordion
==> Sidebar Toggle
==> Sticky Header
==> Slick Slider
==> Owl Carousel
==> Progressbar
==> Back To Top
==> Isotope
==> Counter
==> WOW
==> Magnific Popup
==> Background Image Hover
==> Map
==> Circle Progressbar


==================================================
[ End table content ]
================================================*/


(function (jQuery) {
    "use strict";
    jQuery(window).on('load', function (e) {


        /*==================================================
        [ Page Loader ]
        ==================================================*/
        jQuery("#pq-loading").fadeOut();
        jQuery("#pq-loading").delay(0).fadeOut("slow");

        var Scrollbar = window.Scrollbar;

        /*==================================================
        [ Search Button ]
        ==================================================*/
        jQuery('#pq-seacrh-btn').on('click', function () {
            jQuery('.pq-search-form').slideToggle();
            jQuery('.pq-search-form').toggleClass('pq-form-show');
            if (jQuery('.pq-search-form').hasClass("pq-form-show")) {
                jQuery(this).html('<i class="ti-close"></i>');
            } else {
                jQuery(this).html('<i class="ti-search"></i>');
            }
        });

        /*==================================================
        [ Accordion ]
        ==================================================*/
        jQuery('.pq-accordion-block .pq-accordion-box .pq-accordion-details').hide();
        jQuery('.pq-accordion-block .pq-accordion-box:first').addClass('pq-active').children().slideDown('slow');
        jQuery('.pq-accordion-block .pq-accordion-box').on("click", function () {
          if (jQuery(this).children('div.pq-accordion-details').is(':hidden')) {
            jQuery('.pq-accordion-block .pq-accordion-box').removeClass('pq-active').children('div.pq-accordion-details').slideUp('slow');
            jQuery(this).toggleClass('pq-active').children('div.pq-accordion-details').slideDown('slow');
          }
        });

        /*==================================================
        [ Sidebar Toggle ]
        ==================================================*/
        jQuery("#pq-toggle-btn").on('click', function () {
            jQuery('#pq-sidebar-menu-contain').toggleClass("active");
        });
        jQuery('.pq-toggle-btn').click(function () {
            jQuery('body').addClass('pq-siderbar-open');
        });
        jQuery('.pq-close').click(function () {
            jQuery('body').removeClass('pq-siderbar-open');
        });

        /*==================================================
        [ Sticky Header ]
        ==================================================*/
        var view_width = jQuery(window).width();
        if (!jQuery('header').hasClass('pq-header-default') && view_width >= 1023)
        {
            var height = jQuery('header').height();
            // jQuery('.pq-breadcrumb').css('padding-top', height * 1);
        }
        if (jQuery('header').hasClass('pq-header-default'))
        {
            jQuery(window).scroll(function() {
                var scrollTop = jQuery(window).scrollTop();
                if (scrollTop > 300) {
                    jQuery('.pq-bottom-header').addClass('pq-header-sticky animated fadeInDown animate__faster');
                } else {
                    jQuery('.pq-bottom-header').removeClass('pq-header-sticky animated fadeInDown animate__faster');
                }
            });
        }
        if (jQuery('header').hasClass('pq-has-sticky')) {
            jQuery(window).scroll(function() {
                var scrollTop = jQuery(window).scrollTop();
                if (scrollTop > 300) {
                    jQuery('.pq-bottom-header').addClass('pq-header-sticky animated fadeInDown animate__faster');
                } else {
                    jQuery('.pq-bottom-header').removeClass('pq-header-sticky animated fadeInDown animate__faster');
                }
            });
        }

        /*==================================================
        [ Slick Slider ]
        ==================================================*/

        if (jQuery('.slick-slider-main').length) {
            var $slider = jQuery('.slick-slider-main').slick({
                slidesToShow: 1,
                infinite: false,
                arrows: true,
                autoplay: false,
                dots: false,
                lazyLoad: 'ondemand',
                autoplaySpeed: 3000,
                loop: true,
                asNavFor: '.slick-slider-thumb'
            });
            var $slider2 = jQuery('.slick-slider-thumb').slick({
                slidesToShow: 1,
                infinite: false,
                lazyLoad: 'ondemand',
                asNavFor: '.slick-slider-main',
                autoplay: false,
                dots: false,
                Default: '50px',
                arrows: false,
                centerMode: false,
                loop: true,
                focusOnSelect: true
            });
        }

        /*==================================================
        [ Owl Carousel ]
        ==================================================*/

        jQuery('.center-owl-carousel .owl-carousel').each(function () {
            var app_slider = jQuery(this);
            var rtl = false;
            var prev = 'ion-ios-arrow-left';
            var next = 'ion-ios-arrow-right';
            var prev_text = 'Prev';
            var next_text = 'Next';

            if (app_slider.data('prev_text') && app_slider.data('prev_text') != '') {
                prev_text = app_slider.data('prev_text');
            }
            if (app_slider.data('next_text') && app_slider.data('next_text') != '') {
                next_text = app_slider.data('next_text');
            }
            app_slider.owlCarousel({
                //center: true,
                items: app_slider.data("desk_num"),
                loop: app_slider.data("loop"),
                nav: app_slider.data("nav"),
                dots: app_slider.data("dots"),
                margin: app_slider.data("margin"),
                autoplay: app_slider.data("autoplay"),
                autoplayHoverPause: true,
                autoplayTimeout: app_slider.data("autoplay-timeout"),
                navText: ["<i class='" + prev + "'></i>", "<i class='" + next + "'></i>"],
                responsiveClass: true,
                responsive: {

                    0: {
                        items: app_slider.data("mob_sm"),
                        // nav: true,
                        dots: false
                    },
                    // breakpoint from 480 up
                    480: {
                        items: app_slider.data("mob_num"),
                        // nav: true,
                        dots: false
                    },
                    // breakpoint from 786 up
                    786: {
                        items: app_slider.data("tab_num")
                    },
                    // breakpoint from 1023 up
                    1023: {

                        items: app_slider.data("lap_num")
                    },
                    1199: {
                        center: true,
                        items: app_slider.data("desk_num")
                    }
                }
            });
        });

        jQuery('.owl-carousel').each(function () {
            var app_slider = jQuery(this);
            var rtl = false;
            var prev = 'ion-ios-arrow-back';
            var next = 'ion-ios-arrow-forward';
            var prev_text = 'Prev';
            var next_text = 'Next';
            if (jQuery('body').hasClass('pq-is-rtl')) {
                rtl = true;
                prev = 'ion-ios-arrow-forward';
                next = 'ion-ios-arrow-back';
            }
            if (app_slider.data('prev_text') && app_slider.data('prev_text') != '') {
                prev_text = app_slider.data('prev_text');
            }
            if (app_slider.data('next_text') && app_slider.data('next_text') != '') {
                next_text = app_slider.data('next_text');
            }
            app_slider.owlCarousel({
                rtl: rtl,
                items: app_slider.data("desk_num"),
                loop: app_slider.data("loop"),
                margin: app_slider.data("margin"),
                nav: app_slider.data("nav"),
                dots: app_slider.data("dots"),
                loop: app_slider.data("loop"),
                autoplay: app_slider.data("autoplay"),
                autoplayHoverPause: true,
                autoplayTimeout: app_slider.data("autoplay-timeout"),
                navText: ["<i class='" + prev + "'></i>", "<i class='" + next + "'></i>"],
                responsiveClass: true,
                responsive: {
                    // breakpoint from 0 up
                    0: {
                        items: app_slider.data("mob_sm"),
                        nav: false,
                        dots: false
                    },
                    // breakpoint from 480 up
                    480: {
                        items: app_slider.data("mob_num"),
                        nav: false,
                        dots: false
                    },
                    // breakpoint from 786 up
                    786: {
                        items: app_slider.data("tab_num")
                    },
                    // breakpoint from 1023 up
                    1023: {
                        items: app_slider.data("lap_num")
                    },
                    1199: {
                        items: app_slider.data("desk_num")
                    }
                }
            });
        });

        /*==================================================
        [ Progressbar ]
        ==================================================*/

        jQuery(".pq-progressbar-content .show-progress").each(function () {
            jQuery(this).animate({
                width: jQuery(this).attr("data-width") + "%",
            },
                2000
            );
        });
    });

    /*==================================================
    [ Back To Top ]
    ==================================================*/
    
    jQuery('#back-to-top').fadeOut();
    jQuery(window).on("scroll", function() {
        if (jQuery(this).scrollTop() > 250) {
            jQuery('#back-to-top').fadeIn(1400);
        } else {
            jQuery('#back-to-top').fadeOut(400);
        }
    });
    jQuery('#top').on('click', function() {
        jQuery('top').tooltip('hide');
        jQuery('body,html').animate({
            scrollTop: 0
        }, 100);
        return false;
    });
    
    /*==================================================
    [ Isotope ]
    ==================================================*/

    jQuery('.pq-masonry').isotope({
        itemSelector: '.pq-masonry-item',
        masonry: {
            columnWidth: '.grid-sizer',
            // gutter: 0
        }
    });
    jQuery('.pq-grid').isotope({
        itemSelector: '.pq-grid-item',
    });
    jQuery('.pq-filter-button-group').on('click', '.pq-filter-btn', function () {
        var filterValue = jQuery(this).attr('data-filter');
        // console.log(filterValue);
        jQuery('.pq-masonry').isotope({
            filter: filterValue
        });
        jQuery('.pq-grid').isotope({
            filter: filterValue
        });
        jQuery('.pq-filter-button-group .pq-filter-btn').removeClass('active');
        jQuery(this).addClass('active');
        updateFilterCounts();
    });
    var initial_items = 5;
    var next_items = 3;
    if (jQuery('.pq-masonry').length > 0) {
        var initial_items = jQuery('.pq-masonry').data('initial_items');
        var next_items = jQuery('.pq-masonry').data('next_items');
    }
    if (jQuery('.pq-grid').length > 0) {
        var initial_items = jQuery('.pq-grid').data('initial_items');
        var next_items = jQuery('.pq-grid').data('next_items');
    }

    function showNextItems(pagination) {
        var itemsMax = jQuery('.visible_item').length;
        var itemsCount = 0;
        jQuery('.visible_item').each(function () {
            if (itemsCount < pagination) {
                jQuery(this).removeClass('visible_item');
                itemsCount++;
            }
        });
        if (itemsCount >= itemsMax) {
            jQuery('#showMore').hide();
        }
        if (jQuery('.pq-masonry').length > 0) {
            jQuery('.pq-masonry').isotope('layout');
        }
        if (jQuery('.pq-grid').length > 0) {
            jQuery('.pq-grid').isotope('layout');
        }
    }
    // function that hides items when page is loaded
    function hideItems(pagination) {
        var itemsMax = jQuery('.pq-filter-items').length;
        // console.log(itemsMax);
        var itemsCount = 0;
        jQuery('.pq-filter-items').each(function () {
            if (itemsCount >= pagination) {
                jQuery(this).addClass('visible_item');
            }
            itemsCount++;
        });
        if (itemsCount < itemsMax || initial_items >= itemsMax) {
            jQuery('#showMore').hide();
        }
        if (jQuery('.pq-masonry').length > 0) {
            jQuery('.pq-masonry').isotope('layout');
        }
        if (jQuery('.pq-grid').length > 0) {
            jQuery('.pq-grid').isotope('layout');
        }
    }
    jQuery('#showMore').on('click', function (e) {
        e.preventDefault();
        showNextItems(next_items);
    });
    hideItems(initial_items);

    function updateFilterCounts() {
        // get filtered item elements
        if (jQuery('.pq-masonry').length > 0) {
            var itemElems = jQuery('.pq-masonry').isotope('getFilteredItemElements');
        }
        if (jQuery('.pq-grid').length > 0) {
            var itemElems = jQuery('.pq-grid').isotope('getFilteredItemElements');
        }
        var count_items = jQuery(itemElems).length;
        // console.log(count_items);
        if (count_items > initial_items) {
            jQuery('#showMore').show();
        } else {
            jQuery('#showMore').hide();
        }
        if (jQuery('.pq-filter-items').hasClass('visible_item')) {
            jQuery('.pq-filter-items').removeClass('visible_item');
        }
        var index = 0;
        jQuery(itemElems).each(function () {
            if (index >= initial_items) {
                jQuery(this).addClass('visible_item');
            }
            index++;
        });
        if (jQuery('.pq-masonry').length > 0) {
            jQuery('.pq-masonry').isotope('layout');
        }
        if (jQuery('.pq-grid').length > 0) {
            jQuery('.pq-grid').isotope('layout');
        }
    }

    /*==================================================
    [ counter ]
    ==================================================*/
    jQuery('.timer').countTo();

    /*==================================================
    [ wow ]
    ==================================================*/

    new WOW().init();


    /*==================================================
    [ Magnific Popup ]
    ==================================================*/
    jQuery(document).ready(function () {
        jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        jQuery('.gallery').each(function () { // the containers for all your galleries
            jQuery(this).magnificPopup({
                delegate: 'a', // the selector for gallery item
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        });
    });

    /*==================================================
    [ Service Box Effect ]
    ==================================================*/

    jQuery(".pq-service-box.pq-style-1").hover(function () {
        jQuery(".pq-service-box.pq-style-1").removeClass("active");
        jQuery(this).addClass("active");
    });

    jQuery('.pq-service-box-4-list .item:first-child .pq-service-box.pq-style-4').addClass("active");
    jQuery(".pq-service-box.pq-style-4").hover(function () {
        jQuery(".pq-service-box.pq-style-4").removeClass("active");
        jQuery(this).addClass("active");
    });

    jQuery('.pq-service-box-5-list .item:nth(1) .pq-service-box.pq-style-5').addClass("active");
    jQuery(".pq-service-box.pq-style-5").hover(function () {
        jQuery(".pq-service-box.pq-style-5").removeClass("active");
        jQuery(this).addClass("active");
    });

    jQuery('.pq-service-box-6-list .item:nth(1) .pq-service-box.pq-style-6').addClass("active");
    jQuery(".pq-service-box.pq-style-6").hover(function () {
        jQuery(".pq-service-box.pq-style-6").removeClass("active");
        jQuery(this).addClass("active");
    });

    /*==================================================
    [ Fancy Box Effect ]
    ==================================================*/

    jQuery(".pq-fancy-box.pq-style-1").hover(function () {
        jQuery(".pq-fancy-box.pq-style-1").removeClass("active");
        jQuery(this).addClass("active");
    });

    jQuery(".pq-fancy-box.pq-style-2").hover(function () {
        jQuery(".pq-fancy-box.pq-style-2").removeClass("active");
        jQuery(this).addClass("active");
    });

    /*==================================================
    [ Team Box Effect ]
    ==================================================*/

    jQuery('.pq-team-box-grid.pq-style-2 .item:first-child .pq-team-box.pq-style-2').addClass("active");
    jQuery(".pq-team-box.pq-style-2").hover(function () {
        jQuery(".pq-team-box.pq-style-2").removeClass("active");
        jQuery(this).addClass("active");
    });

    /*==================================================
    [ Award Tabs Effect ]
    ==================================================*/

    jQuery('.pq-award-tabs.pq-style-1 .award-tabs-item:first-child').addClass("active");
    jQuery('.pq-award-tabs.pq-style-1 .award-tabs-item').on({
        mouseenter: function () {
            jQuery(this).parent().addClass('parent');
            jQuery('.pq-award-tabs.pq-style-1 .award-tabs-item').removeClass('active');
            jQuery(this).addClass('active');
        },
    });

    
	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(100);
				$(target).addClass('active-tab');
			}
		});
	}


	// courses-tab
	if($('.courses-tab').length){
		$('.courses-tab .courses-tab-btns .p-tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).hasClass('actve-tab')){
				return false;
			}else{
				$('.courses-tab .courses-tab-btns .p-tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				$('.courses-tab .p-tabs-content .p-tab').removeClass('active-tab');
				$(target).addClass('active-tab');
			}
		});
	}


    /*==================================================
    [ Circle Progressbar ]
    ==================================================*/

    jQuery('.pq-circle-progress-bar').each(function() {
        var number = jQuery(this).data('skill-level');
        var empty_color = jQuery(this).data('empty-color');
        var fill_color = jQuery(this).data('fill-color');
        var size = jQuery(this).data('size');
        var thickness = jQuery(this).data('thickness');
        jQuery(this).circleProgress({
            value: '0.' + number,
            size: size,
            emptyFill: empty_color,
            fill: {
                color: fill_color
            }
        }).on('circle-animation-progress', function(event, progress) {
            jQuery(this).find('.pq-progress-count').html(Math.round(number * progress) + '%');
        });
    });


    $('.product-img--main')
        // tile mouse actions
        .on('mouseover', function(){
          $(this).children('.product-img--main__image').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
        })
        .on('mouseout', function(){
          $(this).children('.product-img--main__image').css({'transform': 'scale(1)'});
        })
        .on('mousemove', function(e){
          $(this).children('.product-img--main__image').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
        })
        // tiles set up
        .each(function(){
          $(this)
            // add a image container
            .append('<div class="product-img--main__image"></div>')
            // set up a background image for each tile based on data-image attribute
            .children('.product-img--main__image').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
        });
})(jQuery);