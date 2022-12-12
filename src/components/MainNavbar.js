import React, { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import './MainNavbar.css';

export default function MainNavbar() {

    const navRef = useRef();

    const showNavbar = () => {
        
        if (navRef.current.classList.toggle("responsive_nav"))
        { // responsivo ativo e botao precionado
            document.getElementById("btn-hamburguer").style.display = 'none';
            document.getElementById("btn-hamburguer").style.position = 'relative';
            document.getElementById("navbar-container").classList.remove("responsive_nav-opacityZero");
            document.getElementById("navbar-container").classList.add("responsive_nav-opacityUm");
            console.log("entrou no if");
        }else 
        {
            document.getElementById("btn-hamburguer").style.display = 'block';
            document.getElementById("btn-hamburguer").style.position = 'fixed';
            document.getElementById("navbar-container").classList.remove("responsive_nav-opacityUm");
            document.getElementById("navbar-container").classList.add("responsive_nav-opacityZero");
            console.log("else");
        }  
    };

    return (
        <>
            <nav id="navbar-container" ref={navRef} >
                <button id="nav-close-btn" className="nav-btn nav-close-btn" onClick={showNavbar}><FaTimes /></button>
                <a href="/">Home</a>
                <a href="/aboutMe">Sobre</a>
                <a href="/skills" rel="Link Linguagens">Skills</a>     
                <a href="/projects" rel="Link Projetos">Projetos</a>
                <a href="/curriculumVitae" rel="Link Curriculo">Curriculo</a>        
            </nav>
            <button id="btn-hamburguer" className="nav-btn" onClick={showNavbar}><FaBars /></button>
        </>
        

    )
};
