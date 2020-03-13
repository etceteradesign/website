$(document).ready(function(){

  $('#quotes ul').bxSlider();

  // Mobile nav bar
  $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
      $(".navbar-brand").toggleClass("is-active");
  });

  $("a[href^=#]").click(function(e) { 
    e.preventDefault(); 
    var dest = $(this).attr('href');
    $('html,body')
      .animate({
          scrollTop: $(dest).offset().top
        },
        'slow'
      );
  });

  $(window).scroll(function(){
    if($(window).scrollTop() === 0){
      $(".navbar").removeClass("fixed")
      $(".navbar").removeClass("hidden")
    }
  })

  $(window).scroll(_.debounce(function(){
    if($(window).scrollTop() >= $(window).height()) {
      $(".navbar").addClass("hidden")
      setTimeout(function(){
        $(".navbar").addClass("fixed");
      }, 50)
    } else {
      $(".navbar").removeClass("fixed")
      setTimeout(function(){
        $(".navbar").removeClass("hidden");
      }, 200)
    }
  }, 50));



});