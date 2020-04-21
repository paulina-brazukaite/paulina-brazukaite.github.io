// // execute above function
// initPhotoSwipeFromDOM('.gallery');
(function($){

  // Init empty gallery array
  var container = [];

  // Loop over gallery items and push it to the array
  $('.gallery').find('figure').each(function(){

    var $link = $(this).find('a'),
        item = {
          src: $link.attr('href'),
          w: $link.attr('data-size').split('x')[0],
          h: $link.attr('data-size').split('x')[1],
          title: $link.data('caption')
        };
    container.push(item);

    $link.click(function(event){

      // Prevent location change
      event.preventDefault();
  
      // Define object and gallery options
      var $pswp = $('.pswp')[0],
          options = {
            index: $(this).parent('figure').data('index'),
            bgOpacity: 0.85,
            showHideOpacity: true
          };
  
      // Initialize PhotoSwipe
      var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, container, options);
      gallery.init();
    });
  });

}(jQuery));













$('#carouselExample').on('slide.bs.carousel', function (e) {

  /*

  CC 2.0 License Iatek LLC 2018
  Attribution required
  
  */

  var $e = $(e.relatedTarget);
  
  var idx = $e.index();
  console.log("IDX :  " + idx);
  
  var itemsPerSlide = 8;
  var totalItems = $('.carousel-item').length;
  
  if (idx >= totalItems-(itemsPerSlide-1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i=0; i<it; i++) {
          // append slides to end
          if (e.direction=="left") {
              $('.carousel-item').eq(i).appendTo('.carousel-inner');
          }
          else {
              $('.carousel-item').eq(0).appendTo('.carousel-inner');
          }
      }
  }
});