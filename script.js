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
      squareDiv.className = 'canvas';
      divRow.append(squareDiv);
    }
  }

  //COLOR PALLET STYLE

  var colorsArray = document.getElementsByClassName('color')
  // console.log(colorsArray.length)
  for (let i = 0; i < colorsArray.length; i++) {
    colorsArray[i].style.width = '8%';
    colorsArray[i].style.height = '30px';
    colorsArray[i].style.display = 'inline-block';
    colorsArray[i].style.border = '0.5px grey solid';
    colorsArray[i].style.borderRadius = '50%';
  }

  //IMG PALLET STYLE

  var imgsArray = document.getElementsByClassName('img')
  for (let j = 0; j < imgsArray.length; j++) {
    imgsArray[j].style.width = '8%';
    imgsArray[j].style.height = '30px';
    imgsArray[j].style.display = 'inline-block';
    imgsArray[j].style.border = '0.5px grey solid';
    imgsArray[j].style.borderRadius = '50%';
  }

  //ERASER
  var eraserIcon = document.getElementById('eraser');
  eraserIcon.style.width = '8%';
  eraserIcon.style.height = '30px';
  eraserIcon.style.display = 'inline-block';

  //PAINTING
  //GLOBAL VARIABLE FOR COLOR STORAGE
  var chosenColor = "";

  //Grab parent element and stored in variable
  var pickColor = document.getElementById('paintstationdiv');
  // var pickKittie = document.getElementById('paintstationdiv');

  //Setting event listener to pick color and storing it in chosenColor
  pickColor.addEventListener('click', function(event) {
    if (event.target.style.backgroundColor === 'white') {
      chosenColor = 'white'; //for eraser
    } else if (event.target.style.backgroundColor === "") {
      chosenColor = event.target.style.backgroundImage
    } else {
      chosenColor = event.target.style.backgroundColor;
    }
    console.log(chosenColor)
  });

  //Grab parent element and stored in variable
  var putColor = document.getElementById('griddiv');

  //using mouseover as a boolian value
  var mouseover = false;

  putColor.addEventListener('mousedown', function(event) {
    mouseover = true;
  });

  putColor.addEventListener('mouseover', function(event) {
    if (mouseover === true) {

      if (chosenColor.startsWith("url")) {
        console.log("it's getting there!")
        event.target.style.backgroundImage = chosenColor;
        event.target.style.backgroundSize = '25px 25px';
      } else {
        event.target.style.backgroundColor = chosenColor;
      }

    }
  });
  putColor.addEventListener('mouseup', function(event) {
    mouseover = false;
  });

  //REFRESH BUTTON
  function refreshButton() {
    location.reload();
  }

});
