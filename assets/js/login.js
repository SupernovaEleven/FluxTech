/*
	Fractal by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
(function($) {

	var $window = $(window),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: ['361px', '480px'],
		xxsmall: [null, '360px']
	});

	// Play initial animations on page load.
	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Mobile?
	if (browser.mobile)
		$body.addClass('is-mobile');
	else {

		breakpoints.on('>medium', function() {
			$body.removeClass('is-mobile');
		});

		breakpoints.on('<=medium', function() {
			$body.addClass('is-mobile');
		});

	}

	// Scrolly.
	$('.scrolly')
		.scrolly({
			speed: 1500
		});

})(jQuery);
let loginButton = document.querySelector('#login')

loginButton.addEventListener('click', e => {
	let email = document.querySelector('#email').value
	let password = document.querySelector('#password').value

	firebase.auth().signInWithEmailAndPassword(email, password)
		.then(() => {
			console.log('user logged in!')
		}).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// ...
		});
loginButton.classList.add('hidden')
window.location = 'index3.html'
	// Handle Errors here.

	document.querySelector('#email').value = ""
	document.querySelector('#password').value = ""
})


