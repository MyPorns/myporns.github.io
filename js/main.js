/*
Fractal by HTML5 UP
html5up.net | @ajlkn
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		xlarge:		'(max-width: 1680px)',
		large:		'(max-width: 1280px)',
		medium:		'(max-width: 980px)',
		small:		'(max-width: 736px)',
		xsmall:		'(max-width: 480px)',
		xxsmall:	'(max-width: 360px)'
	});

	$(function() {

		var	$window = $(window),
		$body = $('body'),
		$header = $('#header');
		$toolbar = $('#toolbar');
		

		// Disable animations/transitions until the page has loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-loading');
			}, 100);
		});

		// Mobile?
		if (skel.vars.mobile)
			$body.addClass('is-mobile');
		else
			skel
		.on('-medium !medium', function() {
			$body.removeClass('is-mobile');
		})
		.on('+medium', function() {
			$body.addClass('is-mobile');
		});

		// Fix: Placeholder polyfill.
		$('form').placeholder();

		// Prioritize "important" elements on medium.
		skel.on('+medium -medium', function() {
			$.prioritize(
				'.important\\28 medium\\29',
				skel.breakpoint('medium').active
			);
		});

		// Scrolly.
		$('.scrolly')
		.scrolly({
			speed: 333,
			offset: $toolbar.outerHeight() - 1
					
		});
				
		// Toolbar.
		if (skel.vars.IEVersion < 9)
			$toolbar.removeClass('alt');

		if ($header.length > 0 && $toolbar.hasClass('alt')) {

				$window.on('resize', function() {
					$window.trigger('scroll');
					console.log($toolbar.outerHeight());
					//$('.scrolly').("scrolly")
				});

				$header.scrollex({
					bottom:		$toolbar.outerHeight() + 5,
					terminate:	function() { $toolbar.removeClass('alt'); },
					enter:		function() { $toolbar.addClass('alt'); },
					leave:		function() { $toolbar.removeClass('alt'); }
				});

			}

		});

	})(jQuery);