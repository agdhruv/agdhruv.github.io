// GET projects.json file from the server
$.getJSON('/js/projects.json', (data) => {

	// get projects from JSON file into specific variable 
	var projects = data['projects'];

	// populate the page by iterating through the ex-JSON object 
	for (var i = 0; i < projects.length; i++) {

		// init string
		var HTMLString = '';

		// generate HTML string to append from ex-JSON Object
		HTMLString += '<article class="project">';
		HTMLString += '<h2 class="name">' + projects[i]['name'] + '</h2>';
		HTMLString += '<p class="stack">Stack: ' + projects[i]['stack'] + '</p>';
		HTMLString += '<p class="description">' + projects[i]['description'] + '</p>';
		// HTMLString += '<a target="_blank" href="' + projects[i]['link'] + '" class="link">Link</a>';
		HTMLString += '</article>';

		// append generated HTML string to respective element
		$('.my-projects').append(HTMLString);
	}
});
	
// rest of the DOM logic in a self-invoking anonymour function to avoid global variables
(function() {

	$('.scroll-chevron').click(function() {
		$('html, body').animate({
			scrollTop: $('.my-container').offset().top - $('.margin-window-top').height()
		}, 500);
	});

})();