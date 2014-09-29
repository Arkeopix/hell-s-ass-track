function fixPageXY( e ) {
    if ( e.pageX == null && e.clientX != null ) { 
	var html = document.documentElement
	var body = document.body

	e.pageX = e.clientX + ( html.scrollLeft || body && body.scrollLeft || 0 )
	e.pageX -= html.clientLeft || 0
	
	e.pageY = e.clientY + ( html.scrollTop || body && body.scrollTop || 0 )
	e.pageY -= html.clientTop || 0
    }
}



window.onload=function() {
    var red = document.getElementById( 'red' );
    for ( var i = 0; i < 10; i++ ) {
	var img = document.createElement( 'img' );
	img.setAttribute( 'class', 'drag_ok' );
	img.setAttribute( 'src', 'assets/reddot.jpg' );
	img.setAttribute( 'dragable', 'true' );
	img.setAttribute( 'height', '50px' );
	img.setAttribute( 'width', '50px' );
	img.onmousedown = function() {
	    this.style.position = 'absolute';
	    
	    var self = this;
	    
	    document.onmousemove = function( e ) {
		e = e || event;
		fixPageXY( e );
		self.style.left = e.pageX-25+'px';
		self.style.top = e.pageY-25+'px';
	    }
	    this.onmouseup = function() {
		document.onmousemove = null;
	    }
	}
	img.ondragstart = function() { return false }
	red.appendChild( img );
    }

    var blue = document.getElementById( 'blue' );
    for ( var i = 0; i < 10; i++ ) {
	var img = document.createElement( 'img' );
	img.setAttribute( 'class', 'drag_ok' );
	img.setAttribute( 'src', 'assets/150px-Blue_sphere.svg.png' );
	img.setAttribute( 'dragable', 'true' );
	img.setAttribute( 'height', '50px' );
	img.setAttribute( 'width', '50px' );
	blue.appendChild( img );
    }
}
