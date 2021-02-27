export default function range(){
  $( function() {
      $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 100000,
        value: 1000,
        values: [ 1000, 90000 ],
        slide: function( event, ui ) {
          $( "#min" ).val( ui.values[ 0 ] );
          $( "#max" ).val( ui.values[ 1 ] );
        }});
      $( "#min" ).val( $( "#slider-range" ).slider( "values", 0 ));
      $( "#max" ).val( $( "#slider-range" ).slider( "values", 1 ) );
  });
}