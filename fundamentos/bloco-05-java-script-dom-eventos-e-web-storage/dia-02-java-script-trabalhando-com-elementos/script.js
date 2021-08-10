  console.log(document.getElementById("elementoOndeVoceEsta"));
  console.log(document.getElementById("elementoOndeVoceEsta").parentNode);
  console.log(document.getElementById("elementoOndeVoceEsta").parentNode.style.color = "red");
  console.log(document.querySelector("#primeiroFilhoDoFilho").innerHTML = "Esse é o texto do primeiro filho do filho");
  console.log(document.getElementById("pai").firstChild);
  console.log(document.getElementById("pai"));
  console.log(document.querySelector("#elementoOndeVoceEsta").firstChild);
  console.log(document.querySelector("#elementoOndeVoceEsta").nextSibling);
  console.log(document.querySelector("#elementoOndeVoceEsta").nextElementSibling);
  console.log(document.querySelector("#pai").lastElementChild.previousElementSibling);
  let textoASerAcrescido = "Se esse texto está na tela é um sinal que a adição de elementos HTML pelo JS funcionou";
  let textContainer = document.createElement("p");
  textContainer.innerText = textoASerAcrescido;
  document.querySelector("#pai").appendChild(textContainer);
  let textoFilhoEOVE = "Esse é o filho do elementoOndeVoceEsta";
  let filhoEOVEContainer = document.createElement("p");
  filhoEOVEContainer.innerText = textoFilhoEOVE;
  document.querySelector("#elementoOndeVoceEsta").appendChild(filhoEOVEContainer);
  let filhoPrimeiroFilhoDoFilho = document.createElement("p");
  filhoPrimeiroFilhoDoFilho.innerHTML = "Esse é o texto do filho do primeiro filho do filho";
  document.querySelector("#primeiroFilhoDoFilho").appendChild(filhoPrimeiroFilhoDoFilho);
  console.log(document.querySelector("#primeiroFilhoDoFilho p").parentNode.parentNode.nextElementSibling);


  