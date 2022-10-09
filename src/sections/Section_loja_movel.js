import React, { Component } from 'react';
import estilo from '../css/style.module.css'

export default class Section_loja_movel extends Component {
    render() {
        return (
            <div className={`${estilo.paddingTop} ${estilo.fundo_loja_movel}`}>
                <h1>NOVIDADE - LOJA MÓVEL</h1>
                <h2 className={estilo.subtitulo}>(LEVANDO AOS NOSSOS CLIENTES UM ATENDIMENTO PERSONALIZADO)</h2>
                <div className={`${estilo.paddingBottom} ${estilo.caixa}`}>
                    <img src="../../img/loja_movel.png" className={estilo.img_van} />
                    <p className={`${estilo.textoLoja}`}>A JWP Ferragens irá contar, em breve, com um novidade que irá trazer ainda mais comodidade aos nossos clientes. Uma gama de opções de itens nos seguimentos de marcenaria, marmoraria, serralheria e vidraçaria irão até você. Entre em contato no <a href="#formulario">formulário</a> abaixo para saber mais ...</p>
                </div>
            </div>
        );
    }
}