function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
// Ex. 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
for(let index=0;index<dezDaysList.length;index+=1) {
  const liDaysList = document.createElement("li");
  let day = dezDaysList[index];
  liDaysList.innerHTML = day;
  liDaysList.className = "day";
  if(day === 24 || day === 31|| day === 25) {
    liDaysList.className += " holiday";
  }
  if(day === 4 || day === 11 || day === 18 || day === 25) {
    liDaysList.className += " friday";
  }
  document.querySelector("#days").appendChild(liDaysList);
}
// Ex. 2
function createButton(string) {
  let button = document.createElement("button");
  button.innerHTML = string;
  button.id = "btn-holiday";
  document.querySelector(".buttons-container").appendChild(button);
}
createButton("Feriados");

// Ex. 3
document.querySelector("#btn-holiday").addEventListener("click",changeBackgroundColor);
function changeBackgroundColor() {
  let arrayOfHolidays = document.querySelectorAll(".holiday");
  for(let index=0;index<arrayOfHolidays.length;index+=1) {
    let holidayN = arrayOfHolidays[index];
    if(holidayN.style.backgroundColor != "pink") {
    holidayN.style.backgroundColor = "pink"; }
    else {
      holidayN.style.backgroundColor = "rgb(238,238,238)";
    }
  }
}

// Ex. 4
function createFridayButton(string) {
  let fridayButton = document.createElement("button");
  fridayButton.innerHTML = string;
  fridayButton.id = "btn-friday";
  document.querySelector(".buttons-container").appendChild(fridayButton);
}
createFridayButton("Sexta-feira");

// Ex. 5
document.querySelector("#btn-friday").addEventListener("click",changeFridayColor);
function changeFridayColor() {
  let arrayOfFridays = document.querySelectorAll(".friday");
  for(let index=0;index<arrayOfFridays.length;index+=1) {
    let fridayN = arrayOfFridays[index];
    if(fridayN.style.backgroundColor != "salmon") {
    fridayN.style.backgroundColor = "salmon"; }
    else {
      fridayN.style.backgroundColor = "rgb(238,238,238)";
      }
    }
  }

  // Ex. 6
  let dias = document.querySelectorAll(".day");
  for(let index=0;index<dias.length;index+=1) {
    dias[index].addEventListener("mouseover",() => {
      dias[index].style.fontSize = "50px";
      
    })
    dias[index].addEventListener("mouseleave", () => {
      dias[index].style.fontSize = "20px";
    })}
  

  

  // Ex. 7
  function createTask(string) {
    let span = document.createElement("span");
    span.innerHTML = string;
    document.querySelector(".my-tasks").appendChild(span);
  }
  createTask("cozinhar");

  // Ex. 8
  function colorize(cor) {
    let div = document.createElement("div");
    div.className = "task";
    div.style.backgroundColor = cor;
    document.querySelector(".my-tasks").appendChild(div);
  }
  colorize("blue");
  
  // Ex. 9
  let color = document.querySelector(".task")
  color.addEventListener("click",select);

  function select() {
    if(color.className==="task") {
      color.className += " selected"
    }
    else {
      color.className = "task";
    }
  }

  // Ex. 10
  for(let hyperIndex=0;hyperIndex<dias.length;hyperIndex+=1) {
    dias[hyperIndex].addEventListener("click",() => {console.log(document.querySelector(".task.selected").style.backgroundColor);
      dias[hyperIndex].style.backgroundColor = document.querySelector(".task.selected").style.backgroundColor;
      dias[hyperIndex].style.color = "white";
    })}

    // Ex. Bonûs
    
      let buttonAdd = document.querySelector("#btn-add");
      buttonAdd.addEventListener("click", () => {
        let input = document.querySelector("input").value;
        if(input === "") {
          alert("Erro: Nenhuma tarefa adicionada");
        }
        let taskListItem = document.createElement("li");
        taskListItem.innerText = input;
        console.log(taskListItem);
        document.querySelector(".task-list").appendChild(taskListItem);
      })
    