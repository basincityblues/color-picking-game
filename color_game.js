const colors = generateRandomColors(6);

const squares = document.querySelectorAll('.square');
const pickedColor = pickColor();
const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const h1 = document.querySelector('h1');

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  // add click listeners to squares
  squares[i].addEventListener('click', function(){
    // grab color of clicked square
    const clickedColor = this.style.backgroundColor;
    // compare color to pickedColor
    if(clickedColor === pickedColor){
      messageDisplay.textContent = 'Correct!';
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = '#232323';
      messageDisplay.textContent = 'Try Again';
    };
  });
};

function changeColors(color){
  // loop through all squares
  for(let i = 0; i < squares.length; i++){
  // change each color to match given color
  squares[i].style.backgroundColor = color;
  };
};

// Function picks a random index of the colors array 
function pickColor(){
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

// Function generates an array of random colors for any argument, in number type, provided.
function generateRandomColors(num){
  // make an array
  const arr = [];
  // repeat num times
  for(let i = 0; i < num; i++){
    // get random color and push into arr
    arr[i] = randomColor();
  };
  // return that array
  return arr;
};


// Function generates random colors in rgb parameter format
function randomColor(){
  // pick a 'red' from 0 to 255
  const r = Math.floor(Math.random() * 256);
  // pick a 'green' from 0 to 255
  const g = Math.floor(Math.random() * 256);
  // pick a 'blue'
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`
};
