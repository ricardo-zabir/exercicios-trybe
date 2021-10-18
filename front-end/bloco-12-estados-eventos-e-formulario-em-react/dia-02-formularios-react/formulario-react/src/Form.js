import React from 'react';
import Agreed from './Agreed';
import Team from './Team';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      time:'',
      nome:'',
      idade:0,
      agreed:false,
      formComErro:false,
    }
  }
  handleChange = ({target}) => {
    const {name} = target;
    let value = null;
    if (target.type === 'checkbox') {
      value = target.checked;
    }
    else {
      value = target.value;
    }
    this.setState({
      [name]:value,
    })
  }
  render() {
    return(
      <form>
        <Team value={this.state.time} handleChange={this.handleChange} />
        <fieldset>
        <label>Qual é seu nome
          <input type="text" name="nome" onChange={this.handleChange} value={this.state.nome}></input>
        </label>
        <label>Qual é sua idade
          <input type="number" name="idade" onChange={this.handleChange} value={this.state.idade}></input>
        </label>
        </fieldset>
        <Agreed checked={this.state.agreed} handleChange={this.handleChange} handleError={this.handleError}/>
        <label>Adicione uma foto
          <input type="file"></input>
        </label>
        <br></br>
        <label>Esse formulário está correto e pronto para envios
          <input type="checkbox" checked={!this.state.formComErro}></input>
        </label>
      </form>
    )
  }
}

export default Form;