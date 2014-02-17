jQuery(document).ready(function(){
  jQuery('a.head').click(function(e) {

      jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top - jQuery('#header').height()}, 500);

      return false;

      e.preventDefault();

  });
});

