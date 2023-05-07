// instrukcje warunkowe

//document.getElementById("result").innerHTML = "HelLo World";

var result = document.getElementById("result");

var x = 15, y = 10;
var age = 19;
var num = 10;
if (num > 0)
{
    result.innerHTML = "Dodatnia";
}
else
{
    if (num == 0)
    {
        result.innerHTML = "Równa 0";
    }
    else
    {
        result.innerHTML = "ujemna";
    }
    
}
if (true)
alert("Komunikat1");
alert("Komunikat2");
alert("Komunikat3");

age >= 18 ? alert ("Pełnoletni") : alert ("Niepełnoletni");