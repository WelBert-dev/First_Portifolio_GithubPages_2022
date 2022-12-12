import React from 'react';

import WelbertBg from '../resources/wellisonPerfil.jpg';

import './HomeScreen.css';

export default function HomeScreen() {
    // const verificaSize = () => {
    //     if (window.screen.width > 700)
    //     {
    //         document.querySelector(".main-header--right")
    //             .style.backgroundImage = `linear-gradient(to right, #b5b5b5 5%, transparent 25%), url(${WelbertBg})`;
    //     }
    //     else 
    //     {
    //         document.querySelector(".main-header--right")
    //             .style.backgroundImage = `url(${WelbertBg})`;
    //     }
    // }

    // window.addEventListener("resize", verificaSize);
    return (
        <div className="main-header--container">
            <div className="main-header--left">
                <h1>Desenvolvedor</h1>
                <h1>Web2.0</h1>
                <h1>&lsaquo;FullStack/Backend&rsaquo;</h1>
            </div>
            <div className='main-header--right'>
                <img src={WelbertBg} alt="Amostra AuauMiau NoFamework"></img>
            </div>
        </div>
    )
};
