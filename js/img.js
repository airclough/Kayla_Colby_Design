;( function() {

  var sliderImg = {
    init: function() {

      this.bindEvents();
      this.resize();
    },

    bindEvents: function() {

      $( window ).resize( this.resize );
    },

    resize: function() {

      var $el = $( '#slider' ),
          w   = $el.width(),
          h   = 400 * w / 1024;

      $el.height( h );
    }
  };

  var portfolioImg = {
    init: function() {

      this.bindEvents();
      this.resize();
    },

    bindEvents: function() {

      $( window ).resize( this.resize );
    },

    resize: function() {

      var $el = $( '.img' );

      Array.prototype.slice.call( $el ).forEach( function( el, i ) {

        $( el ).height( $( el ).width() );
      });
    }
  };

  sliderImg.init();
  portfolioImg.init();
}).call();
