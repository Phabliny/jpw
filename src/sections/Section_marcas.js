import React, { Component } from 'react';
import estilo from '../css/style.module.css'

export default class Section_marcas extends Component {
    render() {
        return (
            <div className={estilo.container}>
                    <h1>PRINCIPAIS MARCAS</h1>
                    <h2 className={estilo.subtitulo}>(TRABALHAMOS COM AS MELHORES MARCAS DO MERCADO)</h2>
                    <div className={`${estilo.marcas} d-flex flex-row justify-content-center align-items-center flex-wrap mt-3 col-10`}>
                            <img src="../../img/marcas/logo_power.png" className={`${estilo.img_marca} p-2 col-7 col-md-5`}/>
                            <img src="../../img/marcas/logo_kisafix.jpeg" className={`${estilo.img_marca} p-2 col-7 col-md-5`}/>
                            <img src="../../img/marcas/logo_new-fix.jpeg" className={`${estilo.img_marca} p-2 col-7 col-md-5 col-lg-3`}/>
                            <img src="../../img/marcas/logo_ciser.png" className={`${estilo.img_marca} p-2 col-7 col-md-5`}/>
                            <img src="../../img/marcas/logo_orbi.png" className={`${estilo.img_marca} p-2 col-7 col-md-5`}/>
                            <img src="../../img/marcas/logo_alltape.png" className={`${estilo.img_marca} p-2 col-7 col-md-5 col-lg-3`}/>
                            <img src="../../img/marcas/logo_jo-marcas.png" className={`${estilo.img_marca} p-2 col-7 col-md-5 col-lg-3`}/>
                            <img src="../../img/marcas/logo_3m.png" className={`${estilo.img_marca} p-2 col-7 col-md-5`}/>
                    </div>
                </div>
        );
    }
}
