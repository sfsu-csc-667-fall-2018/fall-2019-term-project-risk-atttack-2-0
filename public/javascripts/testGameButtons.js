
function getPlayerColor(id){
  console.log(id);

  var color;

  if (id = 1){
    color = "LightBlue";

  } else if (id = 2) {
    color = "DarkSeaGreen";

  } else if (id = 3) {
    color = "IndianRed";

  } 

  console.log(color);

  return color;

}



function myFunction(element, id) {
    var colorName = getPlayerColor(id);


    console.log(colorName);

    document.getElementById(element).style.background = colorName;
}
