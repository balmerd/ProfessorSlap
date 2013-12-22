// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

String.prototype.format = function() {
	//
	// usage:
	//
	// var template = '{0} and {1} and {2}';
	// console.log(template.format(99, 'yes', true));
	//
	var i, re, s = this;
	//
	// String.prototype.format.cache is a form of function "memoization" 
	// where all unique RegExp objects created are cached for re-use.
	//
	if (!String.prototype.format.cache) {
		String.prototype.format.cache = {};
	}
	for (i = 0; i < arguments.length; i++) {
		if (!String.prototype.format.cache[i]) {
			String.prototype.format.cache[i] = new RegExp('\\{' + (i) + '\\}', 'g');
		}
		re = String.prototype.format.cache[i];
		s = s.replace(re, arguments[i]);
	}
	return s;
};

// Place any jQuery/helper plugins in here.

// Document ready here.

$(function() {
	$('#copyright-year').text((new Date()).getFullYear());
});
