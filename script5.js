//pętle

var box = document.getElementById("result");
var box2 = document.getElementById("result2");
var box3 = document.getElementById("result3");

//while
var i = 0;
while (i < 10)
{
    box.innerHTML += i + "<br>";
    i++;
}

//Do while

var j = 0;

do
{
    box2.innerHTML += j + "<br>";
    j++;
 } while (j < 10);

 //for
var k = 0;

 for(var k = 0; k < 10; k++)
 {
     box3.innerHTML += k + "<br>";
     k++;
 }