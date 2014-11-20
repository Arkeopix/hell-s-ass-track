function dragThisShit() {
  this.style.position = 'absolute';
  var self = this;

  document.onmousemove = function( e ) {
	   e = e || event;
	   self.style.left = e.pageX - 25 + 'px';
	   self.style.top = e.pageY - 25 + 'px';
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

    var str_attribute = ( i == 0 ) ? 'assets/' + color + '_jammer.png'
      : ( i == 1 ) ? 'assets/' + color + '_pivot.png'
      : 'assets/' + color + '.png';

    img.setAttribute( 'src', str_attribute );
    img.setAttribute( 'draggable', 'true' );
	  img.setAttribute( 'height', '26px' );
    img.setAttribute( 'width', '26px' );
    img.onmousedown = dragThisShit;
    img.ondragstart = function() { return false }
    team.appendChild( img );
  }
}

window.onload=function() {
  createTeam( 'red' );
  createTeam( 'blue' );
}
