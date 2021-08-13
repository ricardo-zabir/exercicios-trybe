let arrayOfInputs = document.querySelectorAll("input");

let arrayOfButtons = document.querySelectorAll("button");


for(let index=0;index<arrayOfButtons.length;index+=1) {
  let button = arrayOfButtons[index];
  button.addEventListener("click",change);
  
}
let newColor = null;
function change() {
  let input = document.querySelector("#color-input")
    let newColor = input.value;
    console.log(input.value);
    document.body.style.backgroundColor = newColor;
    localStorage.setItem("background-color",);
  }
  if(newColor!=null) {
  document.body.style.backgroundColor = newColor;
  }