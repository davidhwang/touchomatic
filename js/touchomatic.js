$(document).ready(function() {

	$("body").hide();
	$("body").fadeIn(700);

	$("a.trigger").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(700, redirectPage);
	});
 
	function redirectPage() {
		window.location = linkLocation;
  }
});