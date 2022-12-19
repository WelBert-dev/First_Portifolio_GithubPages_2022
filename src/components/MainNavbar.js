import React, { useRef, useState, useEffect } from 'react';
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

    const [navBarEmColumn, setNavBarEmColumn] = useState(false);
    console.log(navBarEmColumn);

    useEffect(()=>{
        if(window.location.href.substring(1).split("/")[5] == 'projects'){
            const navBarElement = document.getElementById("navbar-container");
            navBarElement.style.flexDirection = "column";
            navBarElement.style.width = "inherit"; 
    
            const sectionElement = document.getElementById("main-projects--container");
            sectionElement.style.padding = "2rem 0 1rem 15%";
            console.log("CARAIo entrou", window.location.href.substring(1).split("/")[5]);
        }else {
            const navBarElement = document.getElementById("navbar-container");
            navBarElement.style.flexDirection = "row";
            navBarElement.style.width = "100%"; 
        }
    }, [navBarEmColumn]);

    return (
        <>
            <nav id="navbar-container" ref={navRef} >
                <button id="nav-close-btn" className="nav-btn nav-close-btn" onClick={showNavbar}><FaTimes /></button>
                <a href="/firstPortifolioGithubPages-2022">Home</a>
                <a href="/firstPortifolioGithubPages-2022/#/aboutMe" onClick={() => setNavBarEmColumn(false)}>Sobre</a>
                <a href="/firstPortifolioGithubPages-2022/#/skills" rel="Link Linguagens" onClick={() => setNavBarEmColumn(false)}>Skills</a>     
                <a href="/firstPortifolioGithubPages-2022/#/projects" rel="Link Projetos" onClick={() => setNavBarEmColumn(true)}>Projetos</a>
                <a href="/firstPortifolioGithubPages-2022/#/certificates" rel="Link Certificados" onClick={() => setNavBarEmColumn(true)}>Certificados</a>   
                <a href="/firstPortifolioGithubPages-2022/#/curriculumVitae" rel="Link Curriculo" onClick={() => setNavBarEmColumn(false)}>Currículo</a>        
            </nav>
            <button id="btn-hamburguer" className="nav-btn" onClick={showNavbar}><FaBars /></button>
        </>
        

    )
};
