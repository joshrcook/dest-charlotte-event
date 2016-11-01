// Youtube background video
jQuery( document ).ready( function( $ ) {

	$( '.jumbotron__video' ).YTPlayer({
		fitToBackground: true,
		videoId: 'jInk8-L6QnY', 
		playerVars: {
			playbackRate: 0.25
		}
	});

});

jQuery( document ).ready( function($) {

	$( "[href^='#']" ).on( 'click', function( e ) {
		e.preventDefault();
		var el = $( $( this ).attr( 'href' ) );
		$( 'html, body' ).stop().animate({
			scrollTop: el.offset().top
		}, 2000 );
	});

});