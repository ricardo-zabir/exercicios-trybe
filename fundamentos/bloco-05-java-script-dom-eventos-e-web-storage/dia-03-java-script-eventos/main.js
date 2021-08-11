const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
input.addEventListener("keyup",changeText);
const mySpotrybefy = document.getElementById('mySpotrybefy');
mySpotrybefy.addEventListener("click",sendToPage);
mySpotrybefy.addEventListener("mouseover",changeColor);
function addTech(element) {
  element.className = "tech";
}

function changeText() {
  let elementWClassTech = document.querySelector(".tech");
  elementWClassTech.innerHTML = input.value;
  
}
function sendToPage() {
  let website = document.createElement("a");
  website.href = "https://ricardo-zabir.github.io/";
  mySpotrybefy.innerHTML = "<a href='https://ricardo-zabir.github.io/'>Meu top 3 do Spotrybefy</a>";
}

function changeColor() {
  mySpotrybefy.style.backgroundColor = "white";
  mySpotrybefy.style.color = "black";
}
