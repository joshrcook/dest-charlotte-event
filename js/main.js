// Youtube background video
jQuery( document ).ready( function( $ ) {

	$( '.jumbotron__video' )[0].playbackRate = .75;

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