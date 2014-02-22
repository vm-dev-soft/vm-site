
$(document).ready(function(){

	// animation scroll Top when click link tag header
  $('a.head').click(function(e) {

      $('html,body').animate({ scrollTop: $(this.hash).offset().top - $('#header').height()}, 500);

      return false;

      e.preventDefault();

  });

  //change background color when scroll

  $(document).scroll(function(){
    var x = $(this).scrollTop(),
        $introduce = $('#introduce'),
        $ourteam = $('#ourteam'),
        $ourwork = $('#ourwork'),
        $contactUs = $('#contact-us'),
        heightIntroduce = $introduce.height(),
        heightOurteam = $ourteam.height(),
        heightOurwork = $ourwork.height(),
        heightContactUs = $contactUs.height(),
        heightIntroduceTop = $introduce.offset().top -70,
        heightOurteamTop = $ourteam.offset().top -70,
        heightOurworkTop = $ourwork.offset().top -70,
        heightContactUsTop = $contactUs.offset().top -70,
        plusHeightIntroduceTop = heightIntroduceTop + heightIntroduce ,
        plusHeightOurteamTop = heightOurteamTop + heightOurteam ,
        plusHeightOurworkTop = heightOurworkTop + heightOurwork ,
        plusHeightContactUsTop = heightContactUsTop + heightContactUs ;

    if ( x >= heightIntroduceTop && x < plusHeightIntroduceTop ) {
      $('.head').removeClass('active');
      $('[href="#introduce"]').addClass("active");
    }

    if ( x >= heightOurteamTop && x < plusHeightOurteamTop ) {
      //$('header').css("background-color", "#d3ebf2");
      $('.head').removeClass('active');
      $('[href="#ourteam"]').addClass("active");
    }

    if ( x >= heightOurworkTop && x < plusHeightOurworkTop ) {
      //$('header').css("background-color", "#e1f0d5");
      $('.head').removeClass('active');
      $('[href="#ourwork"]').addClass("active");
    }

    if ( x >= heightContactUsTop && x < plusHeightContactUsTop ) {
      //$('header').css("background-color", "#f9fabb");
      $('.head').removeClass('active');
      $('[href="#contact-us"]').addClass("active");
    }
  });
});