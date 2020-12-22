

$( document ).ready(function() {

    $('.work-areas .owl-carousel').owlCarousel({
        center: true,
        items:6,
        loop:true,
        dots:false,
        margin:10,
        responsive:{
            600:{
                items:6
            }
        }
    });


    $('.testimony .owl-carousel').owlCarousel({
        rtl:true,
        nav:true,
        dots:false,
        navText: [`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 31.494 31.494" style="enable-background:new 0 0 31.494 31.494;" xml:space="preserve">
   <path d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554
       c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587
       c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"/>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   </svg>
   `,"<i class='fa fa-chevron-right'></i>"],
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1000000000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

});