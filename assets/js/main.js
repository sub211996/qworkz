

$( document ).ready(function() {

    var workOwl = $('.work-areas .owl-carousel');

    workOwl.owlCarousel({
        center: true,
        items:6,
        loop:true,
        dots:false,
        margin:10,
        slideTransition: 'ease',
        responsive:{
            300:{
                items:1,
                dots:true,
            },
            600:{
                items:1
            },
            1000:{
                items:6
            }
        }
    });


    $('.customNextBtn').click(function(event) {
        if(event.target.matches('.customNextBtn')){
            let dataItem = parseInt(event.target.parentElement.parentElement.dataset.item);
            workOwl.trigger('to.owl.carousel', dataItem);
        }else if(event.target.matches('.owl_to--arrow')){
            let dataItem = parseInt(event.target.parentElement.parentElement.parentElement.dataset.item);
            workOwl.trigger('to.owl.carousel', dataItem);
        }            
    })
    

    var owl = $('.portfolio .owl-carousel').owlCarousel({
        loop:true,
        center: true,
        margin:10,
        nav:true,
        dots:false,
        navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        stagePadding: 50,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });

    

    $('.owl-filter-bar').on( 'click', ' .item', function() {
        var $item = $(this);
        var filter = $item.data( 'owl-filter' )
        console.log($item);
        owl.owlcarousel2_filter( filter );
    });
              
    $('.owl-filter-bar .item').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
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
                items:1
            },
            1000:{
                items:3
            }
        }
    });

    let scrollpos = window.scrollY
    const header = document.querySelector("nav.navbar")
    const header_height = header.offsetHeight

    const add_class_on_scroll = () => {
        header.classList.add("fade-in")
        header.classList.remove("fade-out")
    }
    const remove_class_on_scroll = () => {
        header.classList.remove("fade-in")
        header.classList.add("fade-out")
    }

    window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    if (scrollpos >= header_height) { 
        add_class_on_scroll() 
    } else { 
        remove_class_on_scroll() 
    }
  })

});
