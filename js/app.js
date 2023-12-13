$(function(){
    $('.sliders').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        prevArrow: `.leftArrow`,
        nextArrow: `.rightArrow`,
        dots: true,
      });

      $('.spincrement').spincrement()

      $('#jq').LineProgressbar({
        percentage: 90,
        ShowProgressCount: true
      });
      $('.pop').magnificPopup({
        type: 'image',
        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it
        
            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function
        // other options
        }
      });

      let slider = $(".banner .sliders .slider")
      console.log(slider);
        
})