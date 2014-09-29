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

function dragThisShit() {
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

function resetPlayers( color ) {
    console.log( document.getElementById( color ).classList );
    for ( var i = 0; i < 10; i++ ) {
	var to_del = document.getElementById( color + i );
	to_del.parentNode.removeChild( to_del );
    }
    createTeam( color );
}

function createTeam( color ) {
    var team = document.getElementById( color );
    for ( var i = 0; i < 10; i++ ) {
	var img = document.createElement( 'img' );
	img.setAttribute( 'class', 'drag_ok' );
	img.setAttribute( 'id', color + i );
	img.setAttribute( 'src', 'assets/' + color + 'dot.jpg' );
	img.setAttribute( 'dragable', 'true' );
	img.setAttribute( 'height', '50px' );
	img.setAttribute( 'width', '50px' );
	img.onmousedown = dragThisShit;
	img.ondragstart = function() { return false }
	team.appendChild( img );
    }
}

window.onload=function() {
    createTeam( 'red' );
    createTeam( 'blue' );
}
