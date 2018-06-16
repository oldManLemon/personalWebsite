function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
  /*   var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height(); */

    var viewportTop = $(window).scrollTop();
var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round($elem.offset().top);
    //var elemTop = Math.round($elem.offset());
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkPhp() {
    var $elem = $('.progress #fullPHP');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
        announceSuccess();
    }
}
function checkJs() {
    var $elem = $('.progress #fullJS');

    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        
        $elem.addClass('start');
        announceSuccess();
    }
}
function checkHtml() {
    var $elem = $('.progress #fullHTML');

    
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        
        $elem.addClass('start');
        announceSuccess();
    }
}
function checkCss() {
    var $elem = $('.progress #fullCSS');


    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        
        $elem.addClass('start');
        announceSuccess();
    }
}


$(window).scroll(function () {
     checkPhp();
    checkJs();
    checkHtml();
    checkCss();
    
});

function announceSuccess(){
    var $jsBar = $("#fullJS");
    var $htmlBar = $("#fullHTML");
    var $cssBar = $("#fullCSS");
    var $phpBar = $("#fullPHP");
    if($jsBar.hasClass('start')&& $cssBar.hasClass('start')&& $htmlBar.hasClass('start') && $phpBar.hasClass('start')){
      
        setTimeout(function(){
             /* JS */
           $($jsBar).removeClass('yellow') && $('#outerJS').removeClass('yellow');
           $($jsBar).addClass('teal') && $('#outerJS').addClass('teal lighten-3');
            /* HTML */
            $($htmlBar).removeClass('orange') && $('#outerHTML').removeClass('orange lighten-2');
            $($htmlBar).addClass('teal') && $('#outerHTML').addClass('teal lighten-3');
             /* CSS */
           $($cssBar).removeClass('blue') && $('#outerCSS').removeClass('blue');
           $($cssBar).addClass('teal') && $('#outerCSS').addClass('teal');
            
            /* PHP */
           $($phpBar).removeClass('purple') && $('#outerPHP').removeClass('purple');
           $($phpBar).addClass('teal') && $('#outerPHP').addClass('teal');

       },10000);
       
        console.log("Congratualtions! You passed the bars!");


    }


}
