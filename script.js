  // FUNCTION TO EDIT THE BIO  

  function toggleEdit() {
    var input = document.getElementById('bio');
    input.readOnly = !input.readOnly;
  }
  
//   function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// // Function to change box shadow color for the entire body
// function changeBoxShadowColor() {
//     var body = document.body;
//     var newColor = getRandomColor();
//     body.style.boxShadow = '0 0 10px ' + newColor;
// }

// // Call the function to change box shadow color every 2 seconds
// setInterval(changeBoxShadowColor, 2000);

function showDiv(divNumber) {
  // Hide all sub-divs
  var subDivs = document.querySelectorAll('.sub-div');
  subDivs.forEach(function(div) {
    div.style.display = 'none';
  });

  // Show the selected sub-div
  var selectedDiv = document.getElementById('sub-div' + divNumber);
  selectedDiv.style.display = 'block';
}
