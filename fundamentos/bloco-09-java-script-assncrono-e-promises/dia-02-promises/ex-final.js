
const jokeContainer = document.querySelector('#jokeContainer');

const API_URL = 'https://icanhazdadjoke.com/';
//const fetch = require('node-fetch');
async function fetchJoke(url,object) {
  return new Promise((resolve,reject) => {
    
      fetch(url,object)
        .then((response) => response.json())
        .then((result) => result.joke)
          .then((param) => printToWebsite(param))
            
              
    }

            
  
  );
}




const object = {
  method: 'GET' ,
  headers: { 'Accept': 'application/json' },
}

const printToWebsite = joke  => {
    jokeContainer.innerHTML = joke;

}

fetchJoke(API_URL,object);
window.onload = () => {
  
};

