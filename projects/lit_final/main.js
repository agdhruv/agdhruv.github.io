var chapterNames = ['part-0', 'part-1', 'part-2', 'part-3', 'part-4', 'part-5', 'part-6', 'part-7', 'part-8', 'part-9']

$(document).ready(function(){

    // On every scroll event, check which element is on screen
    $('div#scroll').on('scroll', function() {
        for (var i = 0; i < chapterNames.length; i++) {
            var chapterName = chapterNames[i];
            if (isElementOnScreen(chapterName)) {
                setActiveChapter(chapterName);
                break;
            }
        }
    });

});

var activeChapterName = 'part-0';

function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    $('#map img').css({
        'display': 'none'
    });

    $(`#map img[src=\"img/${chapterName}.jpg\"]`).fadeIn(400);

    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');

    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var elem = $(`#${id}`);
    var elementTop = elem.offset().top;
    var elementBottom = elementTop + elem.outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementTop < viewportBottom/2 && elementBottom > 2*viewportTop;
}