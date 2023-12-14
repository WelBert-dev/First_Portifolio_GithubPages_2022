import React from 'react';

import WelbertBg from '../../resources/images/home/wellisonPerfil.jpg';
import WelbertBg_inMobile from '../../resources/images/home/wellisonPerfil_inMobile.jpg';

import './HomeScreen.css';

export default function HomeScreen() {

    return (
    <div className="main-header--container">
        <div className="main-header--left">
            <h1>Desenvolvedor</h1>
            <h1>Web2.0</h1>
            <h1>&lsaquo;FullStack&rsaquo;</h1>
            <h1 className="--home-especializando">&lsaquo;Especializando em Backend&rsaquo;</h1>
            <h1 className="--home-rubrica">Wellison Bertelli</h1>
        </div>
        <div className='main-header--right'>
            <div class="moldura-um">
                <div class="moldura-dois">
                    <img className="--perfil-InDesktop" src={WelbertBg} alt="Amostra AuauMiau NoFamework"></img>
                    <img className="--perfil-InMobile" src={WelbertBg_inMobile} alt="Amostra AuauMiau NoFamework"></img>
                </div>
            </div>
        </div>
    </div>
    )
};
