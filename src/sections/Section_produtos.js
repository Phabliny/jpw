import React, { Component } from 'react';
import Carousel_completo from './carousel/Carousel_completo';
import estilo from '../css/style.module.css'

export default class Section_produtos extends Component {
    render() {
        return (
            <div className={`${estilo.container} ${estilo.fundo_produtos}`}>
                <h1 className={estilo.paddingTop}>NOSSOS PRODUTOS</h1>
                <h2 className={estilo.subtitulo}>(TEMOS UMA VARIEDADE GRANDE DE OUTROS PRODUTOS)</h2>
                <div className={`${estilo.caixa} ${estilo.paddingBottom}`}>
                    <Carousel_completo />
                </div>
            </div>
        );
    }
}