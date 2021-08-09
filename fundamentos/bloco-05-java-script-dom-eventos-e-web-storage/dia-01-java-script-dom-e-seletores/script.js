document.querySelector("header").style.backgroundColor = "rgb(76,164,109)";

let purpleBackground = document.querySelectorAll(".emergency-tasks h3");
for(let index=0;index<purpleBackground.length;index+=1) {
  purpleBackground[index].style.backgroundColor = "purple";
}

let blackBackground = document.querySelectorAll(".no-emergency-tasks h3");
for(let superIndex = 0;superIndex<blackBackground.length;superIndex+=1) {
  blackBackground[superIndex].style.backgroundColor = "black";
}

 document.querySelector(".emergency-tasks").style.backgroundColor = "pink";
 document.querySelector(".no-emergency-tasks").style.backgroundColor = "yellow";
 document.querySelector("footer").style.backgroundColor = "green";
 