// rest of the DOM logic in a self-invoking anonymous function to avoid global variables
(function() {
	$(document).on('click', 'article.project button.expand i', function() {
		var $this = $(this);
		$this.closest('button.expand').toggleClass('red');
		$this.closest('.project').find('.description').toggleClass('get-ellipsis');
	});
})();