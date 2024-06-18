// File1.js
var elements = document.querySelectorAll('.subject');
var i = 0;
var b = [];

elements.forEach(function(element) {
  b[i] = element.innerHTML;
  i++;
});

// Store the 'b' array in localStorage
localStorage.setItem('myDataArray', JSON.stringify(b));
