const selectElement = document.querySelector('select');
let arrayTextoEstado = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato rosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];
for (let index = 0; index < arrayTextoEstado.length; index += 1) {
  let optionElement = document.createElement('option');
  optionElement.innerHTML = arrayTextoEstado[index];
  selectElement.appendChild(optionElement);
}

function keepData(event) {
  event.preventDefault();
 let div = document.createElement('div');
  div.style.padding = '50px';
  div.style.backgroundColor = 'pink';
  div.style.color = 'black';
  div.style.textAlign = 'center';
  div.className = 'curriculumContainer';
  document.body.appendChild(div);
  setCurriculum();
}




function setCurriculum() { 
  let h2 = document.createElement('h2');
  h2.innerHTML = 'Currículo';
  document.querySelector('.curriculumContainer').appendChild(h2);
  let h3 = document.createElement('h3');
  h3.innerHTML = 'Nome : ' + document.querySelector('#name').value;
  document.querySelector('.curriculumContainer').appendChild(h3);
  h3 = document.createElement('h3');
  h3.innerHTML = 'Email : ' + document.querySelector('#email').value;
  document.querySelector('.curriculumContainer').appendChild(h3);
  let h4 = document.createElement('h4');
  h4.innerHTML = 'CPF : ' + document.querySelector('#cpf').value;
  document.querySelector('.curriculumContainer').appendChild(h4);
  let h5 = document.createElement('h5');
  h5.innerHTML = 'Endereço : ' + document.querySelector('#endereco').value;
  document.querySelector('.curriculumContainer').appendChild(h5);
  h4 = document.createElement('h4');
  h4.innerHTML = 'Cidade : ' + document.querySelector('#cidade').value;
  document.querySelector('.curriculumContainer').appendChild(h4);
  h4 = document.createElement('h4');
  h4.innerHTML = 'Estado : ' + document.querySelector('#estado').value;
  document.querySelector('.curriculumContainer').appendChild(h4);
  h5 = document.createElement('h5');
  h5.innerHTML = 'Tipo : ' + document.querySelector('#tipo');
  document.querySelector('.curriculumContainer').appendChild(h5);

}

const button = document.querySelector('button');
button.addEventListener('click',keepData);


