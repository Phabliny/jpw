import React, { Component } from "react";
import Elemento_generico from "./Elemento_generico";
import estilo from '../css/footer.module.css'

class Elemento_completo extends Component {
  render() {
    return (
      <div className={estilo.textos_footer}>
        <Elemento_generico id={0}/>
        <Elemento_generico id={1}/>
        <Elemento_generico id={2}/>
      </div>
    );
  }
}

export default Elemento_completo;
