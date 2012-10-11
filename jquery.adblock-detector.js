(function($) {
  $.fn.detectAdBlock = function(foundAdBlock) {
		var testURL = window.location + "?advertising=1";
		$.ajax(testURL, {
				error: foundAdBlock
		});
  };
})(jQuery);
