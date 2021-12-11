/*global $ */
(function($) {
    "use strict";

    // $(window).on('load', function(){
    //     $('body').addClass('stopScroll');
    //     $('.loader').fadeOut(500, function () {
    //         $(this).remove();
    //         $('body').removeClass('stopScroll');
    //     }); 
    //});

    // OPEN SIDE  MENU 
    $('.menuBtn').on('click', function () {
       $(this).toggleClass('open');
       $('.menu').toggleClass('show');
       $('.bodyOverlay').toggleClass('show');
       setTimeout(function () {
           $('body').toggleClass('stopScroll');
       }, 50);
    });

   // CLOSE SIDE MENU 
   $('.bodyOverlay').on('click', function () {
       $(this).removeClass('show');
       console.log('btn clicked');
       $('.menu').removeClass('show');
       $('.menuBtn').removeClass('open');
       $('body').removeClass('stopScroll');
   });

    // //  Open DropDown
    // $('.dropToggle').on('click', function(e){
    //     e.preventDefault();
    //     e.stopPropagation();
    //     if($(this).next('.dropDown').hasClass('open')){
    //         $('.dropDown').removeClass('open');
    //     } else {
    //         $('.dropDown').removeClass('open');
    //         $(this).next('.dropDown').toggleClass('open');
    //     } 
    // });

    //  Close DropDown
    // $(document).on('click', function(){
    //     $('.dropDown').removeClass('open');
    // });

    // Check if Rtl 
    var rtlVal = true ;   
    $('body').hasClass('en') ? rtlVal = false : rtlVal = true;
    
    // Header OWL 
    $('.owlHome').owlCarousel({
        rtl: false ,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: false,
        dots: true,
        autoplaySpeed : 2000,
        autoplayTimeout : 2000,
        smartSpeed: 3000 ,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 1,
                dotsEach: 1
            },
            600: {
                items: 1,
                dotsEach: 1
            },
            1000: {
                items: 1,
                dotsEach: 1
            }
        }
    });


    // Project OWL 
    $('.owlProject').owlCarousel({
        rtl : true,
        margin: 15,
        autoplay: true,
        loop: true,
        nav: true,
        dots: false,
        autoplaySpeed : 5000,
        autoplayTimeout : 5000,
        smartSpeed: 5000 ,       
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1.2
            },
            1000: {
                items: 1.2
            }
        }
    });

    // Display Project Details
    $('.projectIcon').on('click', function(){
        $('.projectData').toggleClass('open');
    });

    // verse video Images 
    $('.videosType').hover(function(){     
        $('.videosType').addClass('show');    
        $(this).removeClass('show');
    },     
    function(){ });

    // Show Member Information
    $('.member').on('click', function(){
        $('.tab').slideUp();
        let tabId = $(this).parent().data('tab');
        $('#'+tabId).slideDown();
    });

    // Hide Member Information
    $('.closeMember').on('click', function(){
        $(this).parents('.tab').slideUp();
    });

    // Display Input File Name 
    $('.uploadFile input').on('change' , function(e) {
        let fileName = e.target.files[0].name;
        $(e.target).parent().prev('.fileName').text(fileName);
    });


    // Input Animation 
    $('.field input').focus(function(){
        $(this).parent('.field').addClass('focused');
    });

    $('.field input').each(function() { 
        if ($(this).val() != "") {
            $(this).parent('.field').addClass('focused');   
        }
    });

    $('.field input').focusout(function(){
        if($(this).val() === "")
        $(this).parent('.field').removeClass('focused');
    });

    // Testimonials OWL 
    // $('.owlTestimonials').owlCarousel({
    //     margin: 20,
    //     autoplay: true,
    //     loop: false,
    //     nav: true,
    //     dots: false,
    //     center : false ,
    //     autoplaySpeed : 5000,
    //     autoplayTimeout : 5000,
    //     smartSpeed: 5000 ,
    //     navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 2
    //         },
    //         1000: {
    //             items: 2
    //         }
    //     }
    // });

    // Partners OWL 
    // $('.owlPartners').owlCarousel({
    //     margin: 20,
    //     autoplay: true,
    //     loop: true,
    //     nav: false,
    //     dots: false,
    //     center : false ,
    //     autoplaySpeed : 5000,
    //     autoplayTimeout : 5000,
    //     smartSpeed: 5000 ,
    //     navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 3
    //         },
    //         1000: {
    //             items: 4
    //         }
    //     }
    // });

    // Clients OWL 
    // $('.owlClients').owlCarousel({
    //     margin: 20,
    //     autoplay: true,
    //     loop: true,
    //     nav: true,
    //     dots: false,
    //     center : false ,
    //     autoplaySpeed : 5000,
    //     autoplayTimeout : 5000,
    //     smartSpeed: 5000 ,
    //     navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 3
    //         },
    //         1000: {
    //             items: 4
    //         }
    //     }
    // });


    // // Upload File 
    // $('.uploadFile').on('change', function(e) {
    //     let fileName = e.target.value.split( '\\' ).pop();
    //     console.log(fileName);
    //     let files = $(this).parent('.uploadBox').prev('.uploadedFiles');
    //     files.append(
    //         '<div class="file">' +
    //             '<h3 class="fileName">' + fileName  + '</h3>' +
    //             '<span class="deleteFile"> <i class="icofont-ui-delete"></i> </span>' +
    //         '</div>'
    //     );               
    // });

    // // Delete File
    // $(document).on('click','.deleteFile' , function(){
    //     $(this).parent('.file').remove();
    // });

    // iniat WOW Js
    new WOW().init();
   
})(jQuery);

