$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() > 10)
      $('.site-header, .page-content').addClass('smaller');
    else 
      $('.site-header, .page-content').removeClass('smaller');
  });
});