



$(document).ready(function() {
  
  $('tbody td').not(':contains("Not Available")').click(function() {
      
      $(this).toggleClass('selected');
  });

  
  $('tbody td').not(':contains("Not Available")').hover(function() {
      $(this).css('cursor', 'pointer');
  }, function() {
      $(this).css('cursor', 'default');
  });

});

$(document).ready(function(){

  /* Open lightbox on button click */
  $('.lightbox-toggle img').click(function(){
      $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
      $('.box').fadeIn();

      //Check if lightbox has an image
      if ($('.box').contents('img')) {
          $('.box').contents().remove('img'); //If true, clear image
      }

      //Get text content in attribute
      var $altvalue = $(this).hasClass('card-image'); //or var altvalue = $(this).attr('alt');
      console.log($altvalue);
      var imgNum = $(this).attr('alt');
    

      if ($altvalue==true) {
          var img = $('.card:nth-child('+(imgNum-1)+') img').clone(); //Duplicate DOM element
          $('.box').append(img); //Insert duplicated element in another element
      }
  });

  /* Click to close lightbox */
  $('.close, .backdrop').click(function(){
      $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
          $('.backdrop').css('display', 'none');
      });
      $('.box').fadeOut();
  });

});



