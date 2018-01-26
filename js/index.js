// GET projects.json file from the server
$.getJSON('/js/projects.json', (data) => {

	// get projects from JSON file into specific variable 
	var projects = data['projects'];

	// populate the page by iterating through the ex-JSON object 
	for (var i = 0; i < projects.length; i++) {

		// init string
		var HTMLString = '';

		// generate HTML string to append from ex-JSON Object
		HTMLString += `<article class="project" data-project-no="${i}">`;
		HTMLString += `<h2 class="thumbnail" style="background-image: url('${projects[i]['thumbnail']}')"></h2>`;
		if (projects[i]['link']) {
			HTMLString += `<h2 class="name">${projects[i]['name']}<a target="_blank" href="${projects[i]['link']}" class="link"><i class="fas fa-external-link-alt" aria-hidden="true"></i></a></h2>`;
		}
		else {
			HTMLString += `<h2 class="name">${projects[i]['name']}</h2>`;
		}
		HTMLString += `<p class="stack">Stack: ${projects[i]['stack']}</p>`;
		HTMLString += `<p class="description get-ellipsis">${projects[i]['description']}</p>`;
		HTMLString += `<button class="expand"><i class="fas fa-plus-circle" aria-hidden="true"></i></button>`;
		HTMLString += `</article>`;

		// append generated HTML string to respective element
		$('.my-projects').append(HTMLString);
	}
});
	
// rest of the DOM logic in a self-invoking anonymous function to avoid global variables
(function() {

	$('.scroll-chevron').click(function() {
		$('html, body').animate({
			scrollTop: $('.my-container').offset().top - $('.margin-window-top').height()
		}, 500);
	});

	$(document).on('click', 'article.project button.expand i', function() {
		var $this = $(this);
		$this.closest('button.expand').toggleClass('red');
		$this.closest('.project').find('.description').toggleClass('get-ellipsis');
	});
})();