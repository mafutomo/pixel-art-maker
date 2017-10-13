console.log("hi!")

document.addEventListener("DOMContentLoaded", function() {
//CREATING THE GRID
//establishing the row
  for (let i = 0; i < 43; i++) {
    var divRow = document.createElement('div');
    var grid = document.getElementById('griddiv');
    divRow.style.height = '100%';
    divRow.style.width = '100%';
    grid.append(divRow);

//establishing the squares
    for (let i = 0; i < 30; i++) {
      var squareDiv = document.createElement('div');
      squareDiv.style.display = 'left';
      squareDiv.style.height = '3%';
      squareDiv.style.width = '100%';
      squareDiv.style.backgroundColor = 'white';
      squareDiv.style.border = 'solid rgba(184, 184, 184,0.5) 1px';
      divRow.append(squareDiv);
    }
  }

//COLOR PALLET STYLE
var colorsArray = document.getElementsByClassName('color')
console.log(colorsArray.length)
for (let i = 0; i < colorsArray.length; i++) {
  colorsArray[i].style.width = '8%';
  colorsArray[i].style.height = '30px';
  colorsArray[i].style.display = 'inline-block';
  colorsArray[i].style.border = '0.5px grey solid';
  colorsArray[i].style.borderRadius = '50%';
}

//PAINTING
//Have paint contain even listeners
//when clicked on, initiate function that will store that color? in a var?

//Add an event listener on the grid,
//Apply that var color as the style.background-color;

});
