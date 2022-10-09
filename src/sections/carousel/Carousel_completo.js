import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Flip from './Flip'
import estilo from '../../css/carousel.module.css'

class Carousel_completo extends Component {
    render() {
        return (
            <>
                <div className={`col-7 ${estilo.carousel_grande}`}>
                    <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false} stopOnHover={true} showArrows={true} transitionTime={10000}>
                    <div className={`${estilo.item} d-flex justify-content-between align-center`}>
                        <Flip id="0"/>
                        <Flip id="1"/>
                        <Flip id="2"/>
                        <Flip id="3"/>
                    </div>
                    <div className={`${estilo.item} d-flex justify-content-between align-center`}>
                        <Flip id="4"/>
                        <Flip id="5"/>
                        <Flip id="6"/>
                        <Flip id="7"/>
                    </div>
                    </Carousel>
                </div>
                <div className={`col-7 ${estilo.carousel_medio}`}>
                    <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false} stopOnHover={true} showArrows={true} transitionTime={10000}>
                    <div className={`item d-flex justify-content-between align-center`}>
                        <Flip id="0"/>
                        <Flip id="1"/>
                        <Flip id="2"/>
                    </div>
                    <div className={`item d-flex justify-content-between align-center`}>
                        <Flip id="3"/>
                        <Flip id="4"/>
                        <Flip id="6"/>
                    </div>
                    </Carousel>
                </div>
                <div className={`col-7 ${estilo.carousel_pequeno}`}>
                    <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false} stopOnHover={true} showArrows={true} transitionTime={10000}>
                    <div className={`${estilo.item} d-flex justify-content-between align-center`}>
                        <Flip id="0"/>
                    </div>
                    <div className={`${estilo.item} d-flex justify-content-between align-center`}>
                        <Flip id="1"/>   
                    </div>
                    <div className={`${estilo.item} d-flex justify-content-between align-center`}>
                        <Flip id="2"/>
                    </div>
                    <div className={`${estilo.item} d-flex justify-content-between align-center`}>
                        <Flip id="3"/>
                    </div>
                    <div className={`${estilo.item} d-flex justify-content-between align-center`}>
                        <Flip id="4"/>   
                    </div>
                    <div className={`${estilo.item} d-flex justify-content-between align-center`}>
                        <Flip id="5"/>
                    </div>
                    <div className={`${estilo.item} d-flex justify-content-between align-center`}>
                        <Flip id="6"/>
                    </div>
                    <div className={`${estilo.item} d-flex justify-content-between align-center`}>
                        <Flip id="7"/>   
                    </div>
                    </Carousel>
                </div>
        </>
        );
    }
}

export default Carousel_completo;
