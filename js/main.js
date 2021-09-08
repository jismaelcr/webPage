
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // new Glider(document.querySelector('.carousel__lista'),{
    //   slidesToShow: 4,
    //   slidesToScroll: 2,
    //   draggable: true,
    //   rewind: true,
    //   dots: '.carousel_indicadores',
    //   arrows: {
    //       prev: '.carousel__anterior',
    //       next: '.carousel__siguiente'
    //   },
    //   responsive: [
    //    {
    //       // screens greater than >= 775px
    //       breakpoint: 450,
    //       settings: {
    //         // Set to `auto` and provide item width to adjust to viewport
    //         slidesToShow: 8,
    //         slidesToScroll: 4 /*,
    //         itemWidth: 150,
    //         duration: 0.25*/
    //       }
    //     },{
    //       // screens greater than >= 1024px
    //       breakpoint: 800,
    //       settings: {
    //         slidesToShow: 10,
    //         slidesToScroll: 5/*,
    //         itemWidth: 150,
    //         duration: 0.25*/
    //       }
    //     }
    //   ]
    // });
  });

const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')
const closeVLight = document.querySelector('.closeV')
const closePLight = document.querySelector('.closeP')

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})
