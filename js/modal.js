( function() {

  var modal = {
    el: {
      modalWindow  : $( '.modal' ),
      modalImage   : $( '.image' ),
      modalOverlay : $( '.overlay' ),
      items        : $( '.item' ),
      close        : $( '.close' )
    },

    template: function( img ) {

      return '<img src="' + img + '" />'
    },

    init: function() {

      this.bindEvents();
    },

    bindEvents: function() {

      Array.prototype.slice.call( this.el.items ).forEach( function( el, i ) {

        $( el ).on( 'click', this.construct.bind( this ) )
      }.bind( this ));
      this.el.close.on( 'click', this.toggleModal );
      this.el.modalOverlay.on( 'click', this.toggleModal );
    },

    construct: function( e ) {

      var template = modal.template( $( e.currentTarget ).data( 'modal-img' ) );

      this.el.modalImage.html( template );
      this.toggleModal();
    },

    toggleModal: function() {

      modal.el.modalWindow.toggleClass( 'show' );
      modal.el.modalOverlay.toggleClass( 'show' );
    }
  };

  modal.init();
}).call();
