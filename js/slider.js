( function() {

  $( '#slider .slide:gt(0)' ).hide();

  setInterval( function() {
    $( '#slider .slide:first-child' )
      .fadeTo( 500, 0 )
      .next( '.slide' )
      .fadeTo( 500, 1 )
      .end()
      .appendTo( '#slider' );
  }, 5000);
}).call();
