import React from 'react';
import Estado from './Estado';

class PersonalInfo extends React.Component {
  render() {
    return(
      <fieldset>
        <label>Nome
          <input required maxLength="40"type="text" name="nome" value={this.props.nameValue}  onChange={this.props.handleChange}></input>
        </label>
        <label>E-mail
          <input type="text" name="email" value={this.props.emailValue} required maxLength="50"onChange={this.props.handleChange}></input>
        </label>
        <label>CPF
          <input type="text" name="cpf" maxLength="11" required value={this.props.cpfValue}
            onChange={this.props.handleChange}></input>
        </label>
        <label>Endereco
          <input type="text" name="endereco" required maxLength="200" value={this.props.enderecoValue}
          onChange={this.props.handleChange}></input>
        </label>
        <label>Cidade:
        <input type="text" maxLength="28" required name="cidade" value={this.props.cidadeValue}
        onChange={this.props.handleChange} onBlur={this.props.onBlur}></input>
        </label>
        <Estado value={this.props.estadoValue} onChange={this.props.handleChange}/>
        <label>Tipo de residência
          <label >Casa
          <input type="radio" value="casa" name="residencia"></input>
          </label>
          <label>Apartamento
          <input type="radio" value ="apartamento" name="residencia"></input>
          </label>
        </label>

      </fieldset>
    )
  }
}

export default PersonalInfo;
