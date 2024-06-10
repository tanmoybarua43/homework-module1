



$(document).ready(function() {
  
  $('tbody td').not(':contains("Not Available")').click(function() {
      var content = $(this).text(); //get text content of cell
      var selectedCol = $('thead tr th').eq($(this).index()).text();
      $(this).toggleClass('selected');
      $('#displaySelected').show();

      if ($(this).hasClass("selected")) { //check if selected cell has class 
        // $('#displaySelected').css("visibility", "visible"); //make display box visible 
        $('#displaySelected').css("margin","2em 0"); 
        $('#displaySelected').css("border","1px solid black");
        $('#displaySelected').css("padding","20px");////add spaces above display box 
        $('#result').append("<p>"+content+" at "+selectedCol+"</p>"); //add child element with contents of cell
      } else { //if selected cell don't have class
      $('#result p:contains('+content+')').remove(); //remove child element
      if ($('#result').has('p').length == false) { //check if there are any child elements within parent
      $('#displaySelected').css("visibility","hidden"); //make display box hidden 
      $('#displaySelected').css("margin-top", "0"); //remove spaces above display box
      }
    }

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
      if ($('.box').contents('img') && $('.box').contents('h3')) {
          $('.box').contents().remove('img');
          $('.box').contents().remove('h3');
      }

      //Get text content in attribute
      var $altvalue = $(this).hasClass('card-image'); //or var altvalue = $(this).attr('alt');
      console.log($altvalue);
      var imgNum = $(this).attr('alt');
    

      if ($altvalue==true) {
          var img = $('.card:nth-child('+(imgNum-1)+') img').clone();
          var name = $('.card:nth-child('+(imgNum-1)+') .card-header').text(); 
          
          $('.box').append(img, '<h3>' + name + '</h3>'); //Insert duplicated element in another element
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



