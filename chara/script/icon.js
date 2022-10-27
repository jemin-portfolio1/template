$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.button').fadeIn();
    } else {
        $('.button').fadeOut();
    }
});

$( '.top' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
} );

