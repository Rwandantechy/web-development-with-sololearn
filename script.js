//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
     var pos = 0; 
    //our box element
    var box = document.getElementById('box');
    var x = document.getElementById('buutton');
   // element.addEventListener("click", boarding);

     //element.addEventListener("mouseover", boarding);
    var t = setInterval(moveRight, 10);
    //var t2 = setInterval(moveBottom, 20);
  
    function moveRight() {
        if (pos >= 250)
        {
            clearInterval(t);
        }
        
        else
        {
            pos += 1;
            box.style.left = pos + 'px';
            //(box.style.top = pos + 'px', 10);           
        }
        
    }
    x.onclick = function () {
        document.body.innerHTML = Date();
    }
}; 
function change() {
    var x = document.getElementById('name');
    // x
    if (x.value.length = 8) {
        alert("Are you " + x.value);
     
        x.value =" your name is "+ x.value.toUpperCase();
    }  

}
// function boarding()
//     {
//         alert("certain event has been triggered on the document");
//     }
 

