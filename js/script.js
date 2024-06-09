$(document).ready(function() {
  // Select only table cells in tbody that are not labeled 'Not Available'
  $('tbody td').not(':contains("Not Available")').click(function() {
      // Toggle a 'selected' class that changes the background color
      $(this).toggleClass('selected');
  });

  // Change cursor on hover for selectable cells
  $('tbody td').not(':contains("Not Available")').hover(function() {
      $(this).css('cursor', 'pointer');
  }, function() {
      $(this).css('cursor', 'default');
  });

  // Apply 'not-allowed' cursor to 'Not Available' cells
  $('td:contains("Not Available")').css('cursor', 'not-allowed');
});

window.onload = function() {
  disableButton(true); // Initially disable the button
};
//Function to generate combination of characters
function generateCode() {
  var code = "";
  var btnValue; // This controls the disabled state of the button
  var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

  //Generate character multiple times using a loop
  for (i = 1; i <= 8; i++) {
    var char = Math.random() * str.length;
    code += str.charAt(char);
  }
  return code; //return the final accumulated string when loop ends
}

//Get HTML element to display
var genCode = generateCode();

document.getElementById("codes").innerHTML = genCode;

//Disable Button
function disableButton(btnValue) {
  var button = document.getElementById('submit');
  if (btnValue) {
      button.style.backgroundColor = "gray"; // Button appears disabled
      button.disabled = true;
  } else {
      button.style.backgroundColor = "blue"; // Button appears enabled
      button.disabled = false;
  }
}



document.getElementById('codeInput').addEventListener('input', evaluateCode);

function evaluateCode() {
  var inputCode = document.getElementById('codeInput').value.trim();
  var generatedCode = genCode.trim(); // Assuming 'code' is set somewhere as the generated code
  console.log(generatedCode);
  if (inputCode === generatedCode) {
      disableButton(false); // Enable the button if the codes match
  } else {
      disableButton(true); // Keep the button disabled if the codes do not match
  }
}


disableButton();
