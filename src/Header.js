import React, { Component } from 'react'
import estilo from './css/header.module.css'

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="row m-0 p-0 border">
          <div className="col-9 col-md-7 col-lg-6 d-flex flex-column justify-content-center align-items-center py-lg-5 px-1 border">
              <img className="col-12 col-lg-11" src="../img/jpw.png"/>
              <h2 className="col-sm-12 col-md-11 col-lg-11 pt-3 text-justify">PREÇO JUSTO COM ATENDIMENTO DIFERENCIADO EM FERRAGENS EM UBERLÂNDIA E REGIÃO?</h2>
              <a href="#formulario"><input type="button" value="Confira aqui!" className={estilo.confiraAqui}/></a>
              <a href='https://wa.me/5534984417989?text=Desejo%20fazer%20um%20orçamento' target="_blank" rel="noopener noreferrer"><img src='../img/zap.png' className={estilo.logozap} id="img"/></a>
          </div>
        </header>
      </div>
    )
  }
}
