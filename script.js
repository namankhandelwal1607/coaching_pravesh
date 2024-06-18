function search()
{
   let dhundh = document.querySelector("input");
   let data=dhundh.value;
   if(data === 'a')
   {
        var newPageUrl = "/ss.html";
        window.location.href = newPageUrl;
   }

   else
   {
    alert("This doesn't exist");
   }

}

// File2.js
// Retrieve the 'b' array from localStorage
var storedData = localStorage.getItem('myDataArray');

// Parse the stored string back into an array
var b = JSON.parse(storedData);

// Use the retrieved array as needed
var elements = document.querySelectorAll('.up2');
var j = 0;

elements.forEach(function(ele) {
  ele.innerHTML = b[j];
  j++;
});


