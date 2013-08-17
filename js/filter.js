( function() {

  var filter = {
    el: {
      items    : $( '.item' ),
      all      : $( '#all' ),
      identity : $( '#identity' ),
      clothing : $( '#clothing' ),
      print    : $( '#print' )
    },

    init: function() {

      this.bindEvents();
    },

    bindEvents: function() {

      this.el.all.on( 'click', this.filter );
      this.el.identity.on( 'click', this.filter );
      this.el.clothing.on( 'click', this.filter );
      this.el.print.on( 'click', this.filter );
    },

    filter: function() {

      var items = filter.el.items,
          cats  = [ filter.el.all, filter.el.identity, filter.el.clothing, filter.el.print ],
          cat   = this.id;

      cats.forEach( function( el, i ) {

        var filter = ( el.attr( 'id' ) === cat );

        el.toggleClass( 'filter', filter )
      });

      Array.prototype.slice.call( items ).forEach( function( el, i ) {

        var $el    = $( el ),
            toggle = ( $el.data( 'cat' ) === cat );

        cat === 'all' ? $el.toggleClass( 'hide', false ) : $el.toggleClass( 'hide', !toggle );
      });
    }
  };

  filter.init();
}).call();
