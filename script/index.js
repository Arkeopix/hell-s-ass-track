window.onload=function() {

    var red = document.getElementById( 'red' );
    for ( var i = 0; i < 10; i++ ) {
	var img = document.createElement( 'img' );
	img.setAttribute( 'class', 'red_dot' );
	img.setAttribute( 'src', 'assets/reddot.jpg' );
	img.setAttribute( 'dragable', 'true' );
	img.setAttribute( 'height', '50px' );
	img.setAttribute( 'width', '50px' );
	red.appendChild( img );
    }

    var blue = document.getElementById( 'blue' );
    for ( var i = 0; i < 10; i++ ) {
	var img = document.createElement( 'img' );
	img.setAttribute( 'class', 'blue_dot' );
	img.setAttribute( 'src', 'assets/150px-Blue_sphere.svg.png' );
	img.setAttribute( 'dragable', 'true' );
	img.setAttribute( 'height', '50px' );
	img.setAttribute( 'width', '50px' );
	blue.appendChild( img );
    }
}
