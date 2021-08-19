const selectElement = document.querySelector('select');
let arrayTextoEstado = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato rosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];
for (let index = 0; index < arrayTextoEstado.length; index += 1) {
  let optionElement = document.createElement('option');
  optionElement.innerHTML = arrayTextoEstado[index];
  selectElement.appendChild(optionElement);
}

function keepData(event) {
  event.preventDefault();
  let validBoolean = validation();
  if(validBoolean === false) {
    alert('Entrada inválida');
  }
  else { let div = document.createElement('div');
  div.style.padding = '50px';
  div.style.backgroundColor = 'pink';
  div.style.color = 'black';
  div.style.textAlign = 'center';
  div.className = 'curriculumContainer';
  document.body.appendChild(div);
  setCurriculum();
}
}

function dateCheck(data) { 
  
  let continueTask = true;
  data = '' + data + '';
  if(data.length < 8) {
    return false;
    continueTask = false;
  }
  if(continueTask === true) {for(let index = 0; index < data.length; index +=1) {
    if(typeof parseInt(data[index]) !== 'number') {
      continueTask = false;
      
    }
  }
}
  if(continueTask === true){
  let dia = data[0] + data[1];
  let mes = data[2] + data[3];
  let ano = data[4] + data[5] + data[6] + data[7] + data[8];
  dia = parseInt(dia);
  mes = parseInt(mes);
  ano = parseInt(ano);
  if(continueTask === true) {
  if(dia < 1 || dia > 31) {
    return false;
  }
  if(mes < 1 || mes > 12) {
    return false;
  }
  if(ano < 0) {
    return false;
  }
  }
}
}


function validation() { 
  let booleanValid = true;
  if(document.querySelector('#nome').value.length < 1 || document.querySelector('#nome').value > 40) {
    booleanValid = false;
  }
  if(document.querySelector('#email').value < 1 || document.querySelector('#email').value > 50) {
    booleanValid = false;
  }
  if(document.querySelector('#cpf').value < 1 || document.querySelector('#cpf').value > 12) {
    booleanValid = false;
  }
  if(document.querySelector('#endereco').value < 1 || document.querySelector('#endereco').value > 200) {
    booleanValid = false;
  }
  if(document.querySelector('#cidade').value < 1 || document.querySelector('#cidade').value > 28) {
    booleanValid = false;
  }
  if(document.querySelector('#casa').value === 'off' && document.querySelector('#ap').value === 'off') {
    booleanValid = false;
  }
  if(document.querySelector('#resumo').value < 1 || document.querySelector('#resumo').value > 1000) {
    booleanValid = false;
  }
  if(document.querySelector('#cargo').value < 1 || document.querySelector('#cargo').value > 40) {
    booleanValid = false;
  }
  if(document.querySelector('#descricao').value < 1 || document.querySelector('#descricao').value > 500) {
    booleanValid = false;
  }
  if(booleanValid === true) {booleanValid = dateCheck(document.querySelector('#data-de-inicio').value);
  }
  return booleanValid;
}

function setCurriculum() { 
  let h2 = document.createElement('h2');
  h2.innerHTML = 'Currículo';
  document.querySelector('.curriculumContainer').appendChild(h2);
  let h3 = document.createElement('h3');
  h3.innerHTML = 'Nome : ' + document.querySelector('#nome').value;
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
