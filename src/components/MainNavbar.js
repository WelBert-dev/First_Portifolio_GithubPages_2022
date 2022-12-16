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
                <a href="/firstPortifolioGithubPages-2022">Home</a>
                <a href="/firstPortifolioGithubPages-2022/#/aboutMe">Sobre</a>
                <a href="/firstPortifolioGithubPages-2022/#/skills" rel="Link Linguagens">Skills</a>     
                <a href="/firstPortifolioGithubPages-2022/#/projects" rel="Link Projetos">Projetos</a>
                <a href="/firstPortifolioGithubPages-2022/#/curriculumVitae" rel="Link Curriculo">Curriculo</a>        
                <a href="/firstPortifolioGithubPages-2022/#/certificates" rel="Link Certificados">Certificados</a>   
            </nav>
            <button id="btn-hamburguer" className="nav-btn" onClick={showNavbar}><FaBars /></button>
        </>
        

    )
};
