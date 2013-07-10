(function($) {
  $.fn.detectAdBlock = function(foundAdBlock) {
    // This testURL can be randomized on server side to encounter AdBlocker updates
		var testURL = window.location + "?advertising=1"; 

		$.ajax(testURL, {
				error: foundAdBlock
		});
  };
})(jQuery);
