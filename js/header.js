( function() {

  var header = {
    el: {
      header: $( 'header' )
    },

    scrolling: false,

    init: function() {

      this.bindEvents();
    },

    bindEvents: function() {

      $( window ).on( 'scroll', function() {

        if( !header.scrolling ) {
          header.scrolling = true;
          header.scroll();
        }
      });
    },

    scroll: function() {

      var y = this.scrollY();

      if( y > 0 ) {
        this.el.header.addClass( 'transition' );
      } else {
        this.el.header.removeClass( 'transition' );
      }

      this.scrolling = false;
    },

    scrollY: function() {

      return window.pageYOffset || document.documentElement.scrollTop;
    }
  };

  header.init();
}).call();
