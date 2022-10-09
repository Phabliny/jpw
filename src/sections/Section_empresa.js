import React, { Component } from 'react'
import estilo from '../css/style.module.css'

export default class Section_empresa extends Component {
    render() {
        return (
            <div className={estilo.container}>
                    <h1>SOBRE A EMPRESA</h1>
                    <h2 className={estilo.subtitulo}>(CONHEÇA A NOSSA EMPRESA)</h2>
                    <div className={estilo.caixa}>
                        <img className={`${estilo.foto_wellington}`} src="../img/foto.jpeg" />
                        <div className={estilo.textoEmpresa}>
                            <p>Somos um empresa localizada na cidade de Uberlândia (MG) com foco na venda de  produtos para os seguintes seguimentos: <spam className={estilo.negrito}>marcenaria</spam>, <spam className={estilo.negrito}>marmoraria</spam>, <spam className={estilo.negrito}>serralheria</spam> e <spam className={estilo.negrito}>vidraçaria.</spam></p>
                            <p><spam className={estilo.negrito}>Wellington Oliveira</spam> é fundador da JPW Ferragens e natural da cidade de Uberlândia (MG). Sua experiência no ramo iniciou-se no ano de 1997. Segundo ele, no ano de 2011 decidiu realizar um grande sonho, criar a marca JPW Ferragens. Segundo Wellington, a marca foi idealizada para dar continuidade a um trabalho que já vinha sendo realizado com sucesso e que consistia na construção de uma base de clientes satisfeitos, a partir da entrega de produtos com qualidade e rapidez!</p>
                        </div>
                    </div>
                </div>
        );
    }
}
