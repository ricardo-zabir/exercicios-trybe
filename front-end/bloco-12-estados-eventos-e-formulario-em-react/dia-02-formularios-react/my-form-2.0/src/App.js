import React from 'react';
import './App.css';
import PersonalInfo from './PersonalInfo';
import WorkInfo from './WorkInfo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email:'',
      cpf:'',
      endereco:'',
      cidade:'',
      estado:'',
      resumo:'',
      cargo:'',


    }
  }
  handleChange = ({target}) => {
    const {value, name} = target;
    if(name === 'nome') {
      this.setState({
        [name]:value.toUpperCase()
      })
    }
    else if(name === 'endereco') {
      this.setState({
        [name]:this.removeSpecialChar(value)
      })
    }
    else {
    this.setState({
      [name]:value
    });
  }
  }
  removeSpecialChar = (str) => {
    return str.replace(/[^a-zA-Z ]/g, "");
  }

  handleOnBlur = ({target}) => {
    const {value, name} = target;
    var matches = value.match(/\d+/g);
    if (matches !== null) {
      this.setState({
        [name]:''
      });
    }
  }
  
  alertGiven = false;
  
  handleOnMouseEnter = () => {
    if(this.alertGiven === false) {
    alert('Preencha com cuidado esta informação');
    this.alertGiven = true;
    }
  }

  alertGivenCounter = () => {

  }

  render() {
    return(
    <div className="App">
      <h1>Formulário React</h1>
      <form>
        <PersonalInfo handleChange={this.handleChange}
        nameValue = {this.state.nome}
        emailValue = {this.state.email}
        cpfValue = {this.state.cpf}
        enderecoValue = {this.state.endereco}
        cidadeValue = {this.state.cidade} onBlur = {this.handleOnBlur}
        estadoValue = {this.state.estado}
        />
        <WorkInfo handleChange={this.handleChange}
        resumoValue = {this.state.resumo}
        cargoValue = {this.state.cargo}
        handleOnMouseEnter = {this.handleOnMouseEnter} />
      </form>
    </div>
    )
  }
}

export default App;
