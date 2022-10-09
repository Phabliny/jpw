import React, { Component } from "react";
import elementos from "../json/elementos.json";
import estilo from '../css/footer.module.css'

export default class Elemento_generico extends Component {
  constructor(props) {
    super(props);
    this.state = elementos;
  }
  render() {
    return (
      <div className={`${estilo.elemento_footer}`}>
          <img
            src={this.state.elementos[this.props.id].img}
            className={estilo.icone}
          />
        <div className={estilo.na_coluna}>
          <h5>{this.state.elementos[this.props.id].titulo}</h5>
          <p className="my-0">{this.state.elementos[this.props.id].paragrafo}</p>
        </div>
      </div>
    );
  }
}
