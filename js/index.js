(function() {

	$('.scroll-chevron').click(function() {
		$('html, body').animate({
			scrollTop: $('.my-container').offset().top - $('.margin-window-top').height()
		}, 500);
	});

})();