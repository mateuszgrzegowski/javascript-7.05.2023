//instrukcje wyboru switch

var box = document.getElementById("result");

var color = "4";

switch(color)
{
    case 1:
        box.style.backgroundColor = "red";
        box.style.color = "white";
        alert("Red");
        break;
    case 2:
        box.style.backgroundColor = "blue";
        box.style.color = "white";
        alert("Blue");
        break;
    case 3:
        box.style.backgroundColor = "green";
        box.style.color = "white";
        alert("Green")
        break;
    default:
        box.style.backgroundColor = "grey";
        box.style.color = "white";
        alert("Pink");
        break;    
}