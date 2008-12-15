/* -------------------------------------------------- *
 * ToggleVal 1.0
 * Updated: 8/18/07
 * -------------------------------------------------- *
 * Author: Aaron Kuzemchak
 * URL: http://aaronkuzemchak.com/
 * Copyright: 2007 Aaron Kuzemchak
 * License: MIT License
** -------------------------------------------------- */

(function($) {
	$.fn.toggleVal = function(focusClass) {
		return this.each(function() {
			$(this).focus(function() {
				// clear value if current value is the default
				if($(this).val() == this.defaultValue) { $(this).val(""); }
				
				// if focusClass is set, add the class
				if(focusClass) { $(this).addClass(focusClass); }
			}).blur(function() {
				// restore to the default value if current value is empty
				if($(this).val() == "") { $(this).val(this.defaultValue); }
				
				// if focusClass is set, remove class
				if(focusClass) { $(this).removeClass(focusClass); }
			});
		});
	}
})(jQuery);