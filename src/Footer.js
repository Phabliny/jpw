import React, { Component } from 'react'
import Elemento_completo from './componente_footer/Elemento_completo';
import estilo from './css/footer.module.css'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className={estilo.caixa_footer}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.6761021638654!2d-48.25757988570122!3d-18.901445012027455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a44596c2f6d2fd%3A0x16752f25fef21fc2!2sR.%20Atenas%2C%20240%20-%20Tibery%2C%20Uberl%C3%A2ndia%20-%20MG%2C%2038405-066!5e0!3m2!1spt-BR!2sbr!4v1654963759885!5m2!1spt-BR!2sbr" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={`${estilo.mapa} map-responsive`}></iframe>

                    <div className={`${estilo.contato} mt-2`}>
                        <Elemento_completo/>
                    </div>
                </div>               
                <div className={`${estilo.fim_footer} p-1`}>
                    <span>@Todos os direitos reservados</span>
                </div>
            </footer>
        );
    }
}