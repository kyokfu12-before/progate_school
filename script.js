//これにjQuery書く
$(function(){
	console.log(111)
	$('.lung-hover').hover(
    function() {
      $(this).find('.lung-content').addClass('lung-active');
    },
    function() {
      $(this).find('.lung-content').removeClass('lung-active'); 
    }
  );
});