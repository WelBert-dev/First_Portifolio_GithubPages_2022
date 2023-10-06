import React from 'react';

import WelbertBg from '../../resources/images/wellisonPerfil.png';

import './HomeScreen.css';

export default function HomeScreen() {
    
    return (
    <div className="main-header--container">
        <div className="main-header--left">
            <h1>Desenvolvedor</h1>
            <h1>Web2.0</h1>
            <h1>&lsaquo;FullStack&rsaquo;</h1>
            <h1 className="--home-especializando">&lsaquo;Especializando em Backend&rsaquo;</h1>
        </div>
        <div className='main-header--right'>
            <img src={WelbertBg} alt="Amostra AuauMiau NoFamework"></img>
        </div>
    </div>
    )
};
