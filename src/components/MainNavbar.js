import React, { useRef, useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

import { MdFiberNew } from 'react-icons/md';
import { MdNotificationImportant } from 'react-icons/md';

import rickAndMortyMainIntro from '../resources/audios/Rick And Morty Intro (320 kbps).mp3';
import fullmetalAlchemistBHMainIntro from '../resources/audios/Fullmetal Alchemist Brotherhood Creditless OP 1 1080p (320 kbps).mp3';
import yuyuHakushoMainIntro from '../resources/audios/Yu Yu Hakusho (OP Português) 1° abertura (320 kbps).mp3';
import deathNoteMainIntro from '../resources/audios/Death Note - Opening [4K] (320 kbps).mp3';
import tokyoGhoulMainIntro from '../resources/audios/unravel (320 kbps).mp3';
import dbzChalaHeChalaIntro from '../resources/audios/Dragon Ball Z  - Abertura 1° - Chala Head Chala em Portugues - BR (320 kbps).mp3';
import dbzPossoPressentirOPerigoEoCaos from '../resources/audios/Dragon Ball Z - Abertura 2[HD](Melhor Qualidade) (320 kbps).mp3';
import dbzSeuSorrisoEhTaoResplandecente from '../resources/audios/Dragon Ball GT abertura em HD e tela inteira (320 kbps).mp3';
import dbzVoaVamosVemComigoVamosJuntosAoParaiso from '../resources/audios/Dragon Ball Kai - Opening PT-BR _ FULL HD (320 kbps).mp3';
import dbzSagaBoo from '../resources/audios/Abertura Dragon ball Kai Saga Boo Dublado (320 kbps).mp3';
import dbzSuperMainIntro from '../resources/audios/Dragon Ball Super _ Abertura 1 - Versão Brasileira (Oficial) (320 kbps).mp3';
import inuyashaMainIntro from '../resources/audios/Inuyasha   Abertura 1 - Mudar O Mundo (320 kbps).mp3';
import pokemonMainIntro from '../resources/audios/Pokémon Abertura 1 PT-BR - Temos que Pegar (320 kbps).mp3';
import digimonMainIntro from '../resources/audios/Digimon - Abertura (HD) (320 kbps).mp3';
import cavaleirosDoZodiacoMainIntro from '../resources/audios/Abertura Os Cavaleiros Do Zodíaco - PEGASUS FANTASY (BR) [1080p] (320 kbps).mp3';
import bleachMainIntro from '../resources/audios/Bleach abertura 1 HD (320 kbps).mp3';
import onePunchManMainIntro from '../resources/audios/One Punch Man OP - Opening 1 (320 kbps).mp3';
import attackOnTitanMainIntro from '../resources/audios/Shingeki No Kyojin Opening 1 [With Lyrics] (320 kbps).mp3';
import narutoClassicoMainIntro from '../resources/audios/Naruto Opening 1 (HD) (320 kbps).mp3';
import narutoClassico2 from '../resources/audios/Naruto Opening 2 _ Haruka Kanata (HD) (320 kbps).mp3';
import narutoShippudenMainIntro from '../resources/audios/Naruto Shippuden Opening 1  (320 kbps).mp3';
import narutoShippuden2 from '../resources/audios/Naruto Shippuden Opening 2 _ Distance (HD) (320 kbps).mp3';
import narutoShippuden3 from '../resources/audios/Naruto Shippuden Opening 3 _ Blue Bird (HD) (320 kbps).mp3';
import narutoShippuden4 from '../resources/audios/Naruto Shippuden Opening 4 _ Closer (HD) (320 kbps).mp3';
import narutoShippuden5 from '../resources/audios/Naruto Shippuden Opening 5 _ Hotaru no Hikari (HD) (320 kbps).mp3';
import narutoShippuden6 from '../resources/audios/Naruto Shippuden Opening 6 _ Sign (HD) (320 kbps).mp3';
import narutoShippuden7 from '../resources/audios/Naruto Shippuden Opening 7 _ Toumei Datta Sekai (HD) (320 kbps).mp3';
import narutoShippuden8 from '../resources/audios/Naruto Shippuden Opening 8 _ Diver (HD) (320 kbps).mp3';
import narutoShippuden9 from '../resources/audios/Naruto Shippuden Opening 9 _ Lovers (HD) (320 kbps).mp3';
import narutoShippuden10 from '../resources/audios/Naruto Shippuden Opening 10 _ Newsong (HD) (320 kbps).mp3';
import narutoShippuden11 from '../resources/audios/Naruto Shippuden Opening 11 _ Totsugeki Rock (HD) (320 kbps).mp3';
import narutoShippuden12 from '../resources/audios/Naruto Shippuden Opening 12 _ Moshimo (HD) (320 kbps).mp3';
import narutoShippuden13 from '../resources/audios/Naruto Shippuden Opening 13 _ Niwaka Ame ni mo Makezu (HD) (320 kbps).mp3';
import narutoShippuden14 from '../resources/audios/Naruto Shippuden Opening 14 _ Tsuki no Ookisa (HD) (320 kbps).mp3';
import narutoShippuden15 from '../resources/audios/Naruto Shippuden Opening 15 _ Guren (HD) (320 kbps).mp3';
import narutoShippuden16 from '../resources/audios/Naruto Shippuden Opening 16 _ Silhouette (HD) (320 kbps).mp3';
import narutoShippuden17 from '../resources/audios/Naruto Shippuden Opening 17 _ Kaze (HD) (320 kbps).mp3';
import narutoShippuden18 from '../resources/audios/Naruto Shippuden Opening 18 _ LINE (HD) (320 kbps).mp3';
import narutoShippuden19 from '../resources/audios/Naruto Shippuden Opening 19 _ Blood Circulator (HD) (320 kbps).mp3';
import narutoShippuden20 from '../resources/audios/Naruto Shippuden Opening 20 _ Kara no Kokoro (HD) (320 kbps).mp3';

import seteMinutoz_RapDoBrolyKyuubiLevi from '../resources/audios/Rap do Broly, Kyuubi e Levi - O PODER DA MINHA IRA 2 _ NERD HITS.mp3';
import seteMinutoz_RapDoGai from '../resources/audios/Rap do Maito Gai (Naruto) - O NINJA MAIS FORTE _ NERD HITS.mp3';
import seteMinutoz_RapDoItachi from '../resources/audios/Rap do Itachi (Naruto) - ESSA DOR QUE CAUSEI... _ NERD HITS.mp3';
import seteMinutoz_RapDaAkatsuki from '../resources/audios/Rap da Akatsuki (Naruto) - OS NINJAS MAIS PROCURADOS DO MUNDO _ NERD HITS.mp3';
import seteMinutoz_RapDosHokages from '../resources/audios/Rap dos Hokages (Naruto) - A VONTADE DO FOGO _ NERD HITS.mp3';
import tauz_RapDoZoro from '../resources/audios/Rap do Zoro (One Piece) _ Tauz RapTributo 17.mp3';
import tauz_RapDoLuffy from '../resources/audios/Rap do Luffy (One Piece) _ Tauz RapTributo 10.mp3';
import tauz_RapDoBarbaBranca from '../resources/audios/Rap do Barba Branca (One Piece) _ Tauz RapTributo 63.mp3';
import tauz_RapDoFullmetalAlchemist from '../resources/audios/Rap do Edward Elric (FullMetal Alchemist) _ Tauz RapTributo 26.mp3';
import tauz_RapDoZarakiKenpachi from '../resources/audios/Rap do Zaraki Kenpachi (Bleach) _ Tauz RapTributo 25.mp3';
import tauz_RapDoSasukeII from '../resources/audios/Rap do Sasuke Pt II (Naruto) _ Tauz RapTributo 19.mp3'; 
import tauz_RapDoNaruto from '../resources/audios/Rap do Naruto _ Tauz RapTributo 05.mp3';
import tauz_RapDoBan from '../resources/audios/Rap do Ban (Nanatsu no Taizai) _ Tauz RapTributo 50.mp3';
import tauz_RapDoDeadPool from '../resources/audios/Rap do Deadpool _ Tauz RapTributo 15.mp3';
import tauz_RapDoKakashi from '../resources/audios/Rap do Kakashi (Naruto) _ Tauz RapTributo 09.mp3';
import tauz_RapDoAssassinsCreed from '../resources/audios/Rap do Assassins Creed _ Tauz RapGame 19.mp3';
import tauz_RapDoJiraiya from '../resources/audios/Rap do Jiraiya (Naruto) _ Tauz RapTributo 48.mp3';
import tauz_RapDoItachi from '../resources/audios/Rap do Itachi (Naruto) _ Tauz RapTributo 18.mp3';
import tauz_RapDoL from '../resources/audios/Rap do L (Death Note) _ Tauz RapTributo 28.mp3';
import tauz_RapDoKillua from '../resources/audios/Rap do Killua (Hunter x Hunter) _ Tauz RapTributo 47.mp3';
import tauz_RapDoSanji from '../resources/audios/Rap do Sanji (One Piece) _ Tauz RapTributo 37.mp3';
import tauz_RapDoLevi from '../resources/audios/Rap do Levi (Attack on Titan) _ Tauz RapTributo 56.mp3';
import tauz_RapDoAlucard from '../resources/audios/Rap do Alucard (Hellsing) _ Tauz RapTributo 64.mp3';
import tauz_RapDoHisoka from '../resources/audios/Rap do Hisoka (Hunter x Hunter) _ Tauz RapTributo 69.mp3';

import ghostBustersMainIntro from '../resources/audios/Ray Parker Jr. - Ghostbusters (Official Video).mp3';
import umMalucoNoPedacoMainIntro from '../resources/audios/Abertura de - um maluco no pedaço (320 kbps).mp3';
import casteloRaTimBumMainIntro from '../resources/audios/Abertura do Castelo Rá Tim Bum.mp3';
import phineasEFerbMainIntro from '../resources/audios/Phineas e Ferb - Abertura PT-BR em HD (Clássica).mp3';
import horaDeAventuraMainIntro from '../resources/audios/Abertura Hora de Aventura ( Português ).mp3';
import baraberaCrazyFrogAxelF from '../resources/audios/Crazy Frog - Axel F (Official Video) (128 kbps).mp3';
import maskaraMainIntro from '../resources/audios/Abertura O Maskara.mp3';
import os7MonstrinhosMainIntro from '../resources/audios/Os Sete Monstrinhos - Abertura (TV Cultura).mp3';
import euVoceEZoobomafu from '../resources/audios/Zoboomafoo Abertura HD (60 FPS) (128 kbps).mp3';
import sitioDoPicaPauAmareloMainIntro from '../resources/audios/Gilberto Gil -  Sítio Do Picapau Amarelo.mp3';
import cocoricoMainIntroAndEnd from '../resources/audios/Cocoricó - Abertura e Encerramento.mp3';
import palavraCantadaRato from '../resources/audios/Palavra Cantada _ Rato.mp3';
import ginasticaDaMaquina from '../resources/audios/Ginástica da máquina - pitagoras.mp3';
import cateloRaTimBumRatoBanhoEhBom from '../resources/audios/Castelo Rá Tim Bum  Ratinho - Meu pé meu querido pé.mp3';
import umMeninoMaluquinhoMainIntro from '../resources/audios/Abertura Um Menino Muito Maluquinho.mp3';
import txutxuCaoFunk from '../resources/audios/Txutxucão funk.mp3';


import { IoPlayCircle } from 'react-icons/io5';
import { IoPlaySkipBackCircle } from 'react-icons/io5';
import { IoPlaySkipForwardCircle } from 'react-icons/io5';
import { IoPauseCircle } from 'react-icons/io5';


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

        }else 
        {
            document.getElementById("btn-hamburguer").style.display = 'flex';
            document.getElementById("btn-hamburguer").style.position = 'fixed';
            document.getElementById("navbar-container").classList.remove("responsive_nav-opacityUm");
            document.getElementById("navbar-container").classList.add("responsive_nav-opacityZero");

        }  
    };

    const locationFlag = useLocation();
    const [navBarEmColumn, setNavBarEmColumn] = useState(false);
    



    /* Comom Area */
    
    useEffect(()=>{

        if(window.screen.width >= 810 && window.location.href.substring(1).split("/")[5] == 'projects' 
        || window.screen.width >= 810 && window.location.href.substring(1).split("/")[5] == 'certificates' 
        || window.screen.width >= 810 && window.location.href.substring(1).split("/")[5] == 'javaBible'){
            const navBarElement = document.getElementById("navbar-container");
            navBarElement.style.flexDirection = "column";
            navBarElement.style.width = "inherit"; 

            navBarElement.childNodes[1].style.width = "100%";
            navBarElement.childNodes[2].style.width = "100%";
            navBarElement.childNodes[3].style.width = "100%";
            navBarElement.childNodes[4].style.width = "100%";
            navBarElement.childNodes[5].style.width = "100%";
            navBarElement.childNodes[6].style.width = "100%";
            navBarElement.childNodes[7].style.width = "100%";

            if (!navBarElement.classList.contains("responsive_nav")) {
                navBarElement.childNodes[9].style.marginLeft = "0px";
            }
    
            if (window.location.href.substring(1).split("/")[5] == 'projects' && window.screen.width >= 810){
                const sectionElement = document.getElementById("main-projects--container");
                sectionElement.style.padding = "2rem 0 1rem 10%";
            }else if(window.location.href.substring(1).split("/")[5] == 'certificates' && window.screen.width >= 810){
                const sectionElement = document.getElementById("main-certificate--container");
                sectionElement.style.padding = "2rem 0 1rem 10%";
            }else if(window.location.href.substring(1).split("/")[5] == 'javaBible' && window.screen.width >= 810){
                const sectionElement = document.getElementById("main-javaBible--container");
                sectionElement.style.padding = "2rem 0 1rem 10%";
            }
            
        }else{
            if(window.screen.width >= 810){
                const navBarElement = document.getElementById("navbar-container");
                navBarElement.style.flexDirection = "row";
                navBarElement.style.width = "100%"; 

                navBarElement.childNodes[1].style.width = "max-content";
                navBarElement.childNodes[2].style.width = "max-content";
                navBarElement.childNodes[3].style.width = "max-content";
                navBarElement.childNodes[4].style.width = "max-content";
                navBarElement.childNodes[5].style.width = "max-content";
                navBarElement.childNodes[6].style.width = "max-content";
                navBarElement.childNodes[7].style.width = "max-content";

                if (!navBarElement.classList.contains("responsive_nav")) {
                    navBarElement.childNodes[9].style.marginLeft = "auto";
                }
            }
        }
    }, [navBarEmColumn, locationFlag]);




    /*======================================== PLAYER MUSIC AREA ============================================*/

    // Local Storage responsável por salvar o estado da musica corrente, guardando o index e o current Time dela
    // Salva apenas em casos de Pause e Re-Loads da página.
    const getLocalStorage_stateOfMusic = () => JSON.parse(localStorage.getItem('db_stateOfMusic')) ?? {indexOfMusic: 0, stateOfTime: 0};
    const setLocalStorage_stateOfMusic = (dbStateOfMusic = {indexOfMusic: 0, stateOfTime: 0}) => localStorage.setItem("db_stateOfMusic", JSON.stringify(dbStateOfMusic));

    // Local Storage responsável por salvar apenas o index da música em execução corrente ()
    const getLocalStorage_indexOfCurrentMusic = () => localStorage.getItem('db_indexOfCurrentMusic') ?? 0;
    const setLocalStorage_indexOfCurrentMusic = (dbIndexOfMusic) => localStorage.setItem("db_indexOfCurrentMusic", Number(dbIndexOfMusic));

    // Harcoded, porém esta em testes ainda, pretendo retirar TODA a lógica deste arquivo.
    const [listOfMusics, setListOfMusics] = useState([
        {title:"Rick And Morty Intro - Primeira Temporada", src:`${rickAndMortyMainIntro}`, totalDurationInSeconds: 32.256},
        {title:"Fullmetal Alchemist Brotherhood Intro - Opeging 1", src:`${fullmetalAlchemistBHMainIntro}`, totalDurationInSeconds: 92.64},
        {title:"Yu Yu Hakusho (Português) Intro - Opening 1", src:`${yuyuHakushoMainIntro}`, totalDurationInSeconds: 86.808},
        {title:"Death Note Intro - Opening 1", src:`${deathNoteMainIntro}`, totalDurationInSeconds: 80.88},
        {title:"Tokyo Ghoul - Opening 1 - Unravel", src:`${tokyoGhoulMainIntro}`, totalDurationInSeconds:  90}, 
        {title:"Dragon Ball Z - Opening 1 - Chala Head Chala (Português)", src:`${dbzChalaHeChalaIntro}`, totalDurationInSeconds: 109.512},
        {title:"Dragon Ball Z - Opening 2 - Posso pressentir o perigo e o caos (Português)", src:`${dbzPossoPressentirOPerigoEoCaos}`, totalDurationInSeconds: 107.904},
        {title:"Dragon Ball GT - Opening 1 - Seu sorriso é tão resplandecente (Português)", src:`${dbzSeuSorrisoEhTaoResplandecente}`, totalDurationInSeconds: 147},
        {title:"Dragon Ball Kai - Opening 1 - Voa vamos vem comigo, vamos juntos ao paraíso (Português)", src:`${dbzVoaVamosVemComigoVamosJuntosAoParaiso}`, totalDurationInSeconds: 85.128},
        {title:"Dragon Ball Kai - Saga Boo (Português)", src:`${dbzSagaBoo}`, totalDurationInSeconds: 85.368},
        {title:"Dragon Ball Super - Opening 1 (Português)", src:`${dbzSuperMainIntro}`, totalDurationInSeconds: 90.312},
        {title:"Inuyasha - Opening 1 - Mudar O Mundo (Português)", src:`${inuyashaMainIntro}`, totalDurationInSeconds: 96.096},
        {title:"Pokémon - Opening 1 - Temos que Pegar (Português)", src:`${pokemonMainIntro}`, totalDurationInSeconds: 61.704},
        {title:"Digimon - Opening 1 (Português)", src:`${digimonMainIntro}`, totalDurationInSeconds: 94.152},
        {title:"Os Cavaleiros Do Zodíaco - Opening 1 - PEGASUS FANTASY (Português)", src:`${cavaleirosDoZodiacoMainIntro}`, totalDurationInSeconds: 85.128},
        {title:"Bleach - Opening 1", src:`${bleachMainIntro}`, totalDurationInSeconds: 89.832},
        {title:"One Punch Man - Opening 1", src:`${onePunchManMainIntro}`, totalDurationInSeconds: 103.272},
        {title:"Shingeki No Kyojin - Opening 1", src:`${attackOnTitanMainIntro}`, totalDurationInSeconds: 91.08},
        {title:"Naruto Classic - Opening 1", src:`${narutoClassicoMainIntro}`, totalDurationInSeconds: 104.976},
        {title:"Naruto Classic - Opening 2 - Haruka Kanata", src:`${narutoClassico2}`, totalDurationInSeconds: 103.944},
        {title:"Naruto Shippuden - Opening 1", src:`${narutoShippudenMainIntro}`, totalDurationInSeconds: 104.256},
        {title:"Naruto Shippuden - Opening 2 - Distance", src:`${narutoShippuden2}`, totalDurationInSeconds: 104.04},
        {title:"Naruto Shippuden - Opening 3 - Blue Bird", src:`${narutoShippuden3}`, totalDurationInSeconds: 104.256},
        {title:"Naruto Shippuden - Opening 4 - Closer", src:`${narutoShippuden4}`, totalDurationInSeconds: 104.112},
        {title:"Naruto Shippuden - Opening 5 - Hotaru no Hikari", src:`${narutoShippuden5}`, totalDurationInSeconds: 103.992},
        {title:"Naruto Shippuden - Opening 6 - Sign", src:`${narutoShippuden6}`, totalDurationInSeconds: 103.896},
        {title:"Naruto Shippuden - Opening 7 - Toumei Datta Sekai", src:`${narutoShippuden7}`, totalDurationInSeconds: 103.896},
        {title:"Naruto Shippuden - Opening 8 - Diver", src:`${narutoShippuden8}`, totalDurationInSeconds: 104.4},
        {title:"Naruto Shippuden - Opening 9 - Lovers", src:`${narutoShippuden9}`, totalDurationInSeconds: 103.728},
        {title:"Naruto Shippuden - Opening 10 - Newsong", src:`${narutoShippuden10}`, totalDurationInSeconds: 103.56},
        {title:"Naruto Shippuden - Opening 11 - Totsugeki Rock", src:`${narutoShippuden11}`, totalDurationInSeconds: 104.112},
        {title:"Naruto Shippuden - Opening 12 - Moshimo", src:`${narutoShippuden12}`, totalDurationInSeconds: 104.064},
        {title:"Naruto Shippuden - Opening 13 - Niwaka Ame ni mo Makezu", src:`${narutoShippuden13}`, totalDurationInSeconds: 103.992},
        {title:"Naruto Shippuden - Opening 14 - Tsuki no Ookisa", src:`${narutoShippuden14}`, totalDurationInSeconds: 104.424},
        {title:"Naruto Shippuden - Opening 15 - Guren", src:`${narutoShippuden15}`, totalDurationInSeconds: 104.064},
        {title:"Naruto Shippuden - Opening 16 - Silhouette", src:`${narutoShippuden16}`, totalDurationInSeconds: 103.896},
        {title:"Naruto Shippuden - Opening 17 - Kaze", src:`${narutoShippuden17}`, totalDurationInSeconds: 104.064},
        {title:"Naruto Shippuden - Opening 18 - LINE", src:`${narutoShippuden18}`, totalDurationInSeconds: 104.016},
        {title:"Naruto Shippuden - Opening 19 - Blood Circulator", src:`${narutoShippuden19}`, totalDurationInSeconds: 103.56},
        {title:"Naruto Shippuden - Opening 20 - Kara no Kokoro", src:`${narutoShippuden20}`, totalDurationInSeconds: 104.232}, 
        {title:"7Minutoz - Rap do Broly, Kyuubi e Levi - O PODER DA MINHA IRA 2 (NERD HITS)", src:`${seteMinutoz_RapDoBrolyKyuubiLevi}`, totalDurationInSeconds: 175.777959},
        {title:"7Minutoz - Rap do Maito Gai (Naruto) - O NINJA MAIS FORTE (NERD HITS)", src:`${seteMinutoz_RapDoGai}`, totalDurationInSeconds: 256.731429},
        {title:"7Minutoz - Rap do Itachi (Naruto) - ESSA DOR QUE CAUSEI... (NERD HITS)", src:`${seteMinutoz_RapDoItachi}`, totalDurationInSeconds: 206.576327},
        {title:"7Minutoz - Rap da Akatsuki (Naruto) - OS NINJAS MAIS PROCURADOS DO MUNDO (NERD HITS)", src:`${seteMinutoz_RapDaAkatsuki}`, totalDurationInSeconds: 616.724898},
        {title:"7Minutoz - Rap dos Hokages (Naruto) - A VONTADE DO FOGO (NERD HITS)", src:`${seteMinutoz_RapDosHokages}`, totalDurationInSeconds: 606.798367},
        {title:"Player Tauz - Rap do Zoro (One Piece) - Tauz RapTributo 17", src:`${tauz_RapDoZoro}`, totalDurationInSeconds: 285.309388},
        {title:"Player Tauz - Rap do Luffy (One Piece) - Tauz RapTributo 10", src:`${tauz_RapDoLuffy}`, totalDurationInSeconds: 264.602256},
        {title:"Player Tauz - Rap do Barba Branca (One Piece) - Tauz RapTributo 63", src:`${tauz_RapDoBarbaBranca}`, totalDurationInSeconds: 200.803265},
        {title:"Player Tauz - Rap do Edward Elric (FullMetal Alchemist) - Tauz RapTributo 26", src:`${tauz_RapDoFullmetalAlchemist}`, totalDurationInSeconds: 272.143673},
        {title:"Player Tauz - Rap do Zaraki Kenpachi (Bleach) - Tauz RapTributo 25", src:`${tauz_RapDoZarakiKenpachi}`, totalDurationInSeconds: 278.177959},
        {title:"Player Tauz - Rap do Sasuke Pt II (Naruto) - Tauz RapTributo 19", src:`${tauz_RapDoSasukeII}`, totalDurationInSeconds: 278.204082},
        {title:"Player Tauz - Rap do Naruto - Tauz RapTributo 05", src:`${tauz_RapDoNaruto}`, totalDurationInSeconds: 309.498776},
        {title:"Player Tauz - Rap do Ban (Nanatsu no Taizai) - Tauz RapTributo 50", src:`${tauz_RapDoBan}`, totalDurationInSeconds: 238.497959},
        {title:"Player Tauz - Rap do Deadpool - Tauz RapTributo 15", src:`${tauz_RapDoDeadPool}`, totalDurationInSeconds: 273.606531},
        {title:"Player Tauz - Rap do Kakashi (Naruto) - Tauz RapTributo 09", src:`${tauz_RapDoKakashi}`, totalDurationInSeconds: 310.961633},
        {title:"Player Tauz - Rap do Assassins Creed - Tauz RapGame 19", src:`${tauz_RapDoAssassinsCreed}`, totalDurationInSeconds: 358.765714},
        {title:"Player Tauz - Rap do Jiraiya (Naruto) - Tauz RapTributo 48", src:`${tauz_RapDoJiraiya}`, totalDurationInSeconds: 201.404082},
        {title:"Player Tauz - Rap do Itachi (Naruto) - Tauz RapTributo 18", src:`${tauz_RapDoItachi}`, totalDurationInSeconds: 376.32},
        {title:"Player Tauz - Rap do L (Death Note) - Tauz RapTributo 28", src:`${tauz_RapDoL}`, totalDurationInSeconds: 321.697959},
        {title:"Player Tauz - Rap do Killua (Hunter x Hunter) - Tauz RapTributo 47", src:`${tauz_RapDoKillua}`, totalDurationInSeconds: 196.493061},
        {title:"Player Tauz - Rap do Sanji (One Piece) - Tauz RapTributo 37", src:`${tauz_RapDoSanji}`, totalDurationInSeconds: 314.67102},
        {title:"Player Tauz - Rap do Levi (Attack on Titan) - Tauz RapTributo 56", src:`${tauz_RapDoLevi}`, totalDurationInSeconds: 226.35102},
        {title:"Player Tauz - Rap do Alucard (Hellsing) - Tauz RapTributo 64", src:`${tauz_RapDoAlucard}`, totalDurationInSeconds: 197.250612},
        {title:"Player Tauz - Rap do Hisoka (Hunter x Hunter) - Tauz RapTributo 69", src:`${tauz_RapDoHisoka}`, totalDurationInSeconds: 231.967347},
        {title:"Ray Parker Jr. - Ghostbusters (Official Video)", src:`${ghostBustersMainIntro}`, totalDurationInSeconds: 244.897959},
        {title:"Um maluco no pedaço - Abertura", src:`${umMalucoNoPedacoMainIntro}`, totalDurationInSeconds: 110.471875},
        {title:"Castelo Rá Tim Bum - Abertura", src:`${casteloRaTimBumMainIntro}`, totalDurationInSeconds: 54.151837},
        {title:"Phineas e Ferb - Abertura PT-BR (Clássica)", src:`${phineasEFerbMainIntro}`, totalDurationInSeconds: 56.894694},
        {title:"Hora de Aventura - Abertura PT-BR", src:`${horaDeAventuraMainIntro}`, totalDurationInSeconds: 24.711837},
        {title:"Crazy Frog - Axel F (Official Video)", src:`${baraberaCrazyFrogAxelF}`, totalDurationInSeconds: 172.544688},
        {title:"O Maskara - Abertura PT-BR", src:`${maskaraMainIntro}`, totalDurationInSeconds: 58.357551},
        {title:"Os Sete Monstrinhos - Abertura (TV Cultura)", src:`${os7MonstrinhosMainIntro}`, totalDurationInSeconds: 60.577959},
        {title:"Zoboomafoo - Abertura PT-BR (Clássica)", src:`${euVoceEZoobomafu}`, totalDurationInSeconds: 60.865375},
        {title:"Gilberto Gil -  Sítio Do Picapau Amarelo (Abertura Clássica)", src:`${sitioDoPicaPauAmareloMainIntro}`, totalDurationInSeconds: 193.645714},
        {title:"Cocoricó - Abertura e Encerramento", src:`${cocoricoMainIntroAndEnd}`, totalDurationInSeconds: 62.693878},
        {title:"Palavra Cantada - Rato (Clássico da TV Cultura)", src:`${palavraCantadaRato}`, totalDurationInSeconds: 335.15102},
        {title:"Ginástica da máquina - pitagoras (Clássico da TV Cultura)", src:`${ginasticaDaMaquina}`, totalDurationInSeconds: 63.216327},
        {title:"Castelo Rá Tim Bum - Ratinho - Meu pé meu querido pé", src:`${cateloRaTimBumRatoBanhoEhBom}`, totalDurationInSeconds: 94.693878},
        {title:"Um Menino Muito Maluquinho - Abertura PT-BR", src:`${umMeninoMaluquinhoMainIntro}`, totalDurationInSeconds: 51.069388},
        {title:"Txutxucão funk (Clássico)", src:`${txutxuCaoFunk}`, totalDurationInSeconds: 64.496327},
    ]);


    // Além de validar, também ajusta se o index ficar negativo ou maior do que a lista
    // Criando assim efeito de rotação, ou seja, se o index passar do tamanho da lista
    // quer dizer que chegou no final, então faz um rollback para o inicio.
    // Se o index chegar negativo quer dizer que está voltando então faz rollback para o final.
    function validateIndexOfMusic(indexOfCurrentMusic) {

        if (Number(indexOfCurrentMusic) < 0 ) {
    
            let newIndex = (listOfMusics.length-1);
            setLocalStorage_indexOfCurrentMusic(Number(newIndex));

            return;
        } else if (Number(indexOfCurrentMusic) > Number(listOfMusics.length-1)) {

            setLocalStorage_indexOfCurrentMusic(0);

            return;
        }
    }

    useEffect(()=>{

        const player = document.querySelector("#audioPlayer");

        // Plural pois existem dois containers com as mesmas tags em lugares diferentes, porém os dois devem estarem linear
        // ou seja, o estado dos dois devem ser os mesmos, pois a musica em execução é a mesma, só muda a disposição do layout
        // o código é assim devido a responsividade. 

        const playerPlaysElements = document.querySelectorAll(".audioPlayer-control--play");
        const playerPausesElements = document.querySelectorAll(".audioPlayer-control--pause");
        const playerProgressBarsElements = document.querySelectorAll(".audioPlayer-progressBar--fillBar>progress");

        const playerSkipPreviousElements = document.querySelectorAll(".audioPlayer-control--skipPrevious");
        const playerSkipNextsElements = document.querySelectorAll(".audioPlayer-control--skipNext");
        
        
        /* Verifica se já tem musica salva no local storage, e atualiza barra de progresso de acordo com o estado */
        // Pois a musica sempre fica salva no estado em que deu pause, ou mudou, até mesmo em re-loads é salvo o estado antes.

        if (Number(getLocalStorage_stateOfMusic().stateOfTime) > 0) {
            playerProgressBarsElements[0].value = (Number(getLocalStorage_stateOfMusic().stateOfTime) / Number(listOfMusics[Number(getLocalStorage_stateOfMusic().indexOfMusic)].totalDurationInSeconds));
            playerProgressBarsElements[1].value = (Number(getLocalStorage_stateOfMusic().stateOfTime) / Number(listOfMusics[Number(getLocalStorage_stateOfMusic().indexOfMusic)].totalDurationInSeconds));
        }


        /* 
            Eventos de Pausa e Play na musica Obs: Como existem dois containers devido a responsividade, aqui é
            duplicado os códigos para manter o mesmo estado nos dois containers.
        */

        // Serve como se fosse um troca-fitas, ele recebe o index, prepara e da play na musica no objeto player
        // player == elemento HTML <audio> único para os dois containers se não iria tocar duas musicas ao mesmo tempo
        const musicRenderer = (indexOfCurrentMusic) => {

            let musicSelected = listOfMusics[Number(indexOfCurrentMusic)];
            player.setAttribute("src", musicSelected.src);

            player.addEventListener("loadeddata", () => {
                document.title = musicSelected.title;
            });

            player.play();
        } 

        // Ajusta os icones visuais de acordo com o estado do Player, ou seja, 
        // - Se a musica estiver rolando o icone de "pause" aparece, 
        // - Se a musica for alterada para a próxima o ícone de "pause" aparece,
        // - Se a musica for alterada para a anterior o ícone de "pause" aparece,
        // Obs: if's duplicados alterando apenas a posição do elemento da lista
        // pois existem dois (2) containers na tela que representam o player de musica
        // devido a responsividade eles estão em lugares diferentes, então o estado
        // dos dois sempre é o mesmo.
        const adjustTheDisplayOfIconsPlayAndPause_pauseShowUp = () => {
            
            if (!playerPlaysElements[0].classList.contains("isActiv")) {
                playerPlaysElements[0].classList.add("isActiv");

                playerPausesElements[0].classList.remove("isActiv");
            }
            if (!playerPlaysElements[1].classList.contains("isActiv")) {
                playerPlaysElements[1].classList.add("isActiv");

                playerPausesElements[1].classList.remove("isActiv");
            }
        }



        /* Evento disparado quando a página sofre re-loads, salvando assim o estado da musica corrente em localstorage: */

        window.onbeforeunload = () => {
            setLocalStorage_stateOfMusic({indexOfMusic: Number(getLocalStorage_indexOfCurrentMusic()), stateOfTime: Number(player.currentTime)});
            
            // if (player.readyState >= 2) { //  Verifica se o recurso está pronto para ser reproduzido (readyState >= 2).

            //     player.play()
            //         .catch(error => {
            //             // Tratar qualquer erro ocorrido durante a reprodução.
            //             console.error('Erro ao reproduzir mídia:', error);
            //         }); 
            // } else {
            //     // Se o recurso ainda não estiver pronto, adicione um ouvinte para o evento 'canplay'.

            //     player.addEventListener("canplay", () => {
            //         console.log("BLOCO DO EVENTO CANPLAY ADICIONADO NO RE_LOAD DA PAG");

            //         player.play()
            //           .catch(error => {
            //             // Tratar qualquer erro ocorrido durante a reprodução.
            //             console.error('Erro ao reproduzir mídia:', error);
            //           });
            //       }, { once: true }); // O ouvinte será acionado apenas uma vez para evitar execuções múltiplas.
            // }
        }



        /* Evento que atualiza a barra de progresso da musica e se chegar no final altera para a próxima */

         // O Player é único para os dois containers que contém os controles play, pause, next, previous e progress bar
         // em lugares diferentes de acordo com a responsividade.

        player.addEventListener("timeupdate", () => {
            if ((player.currentTime / player.duration) !== NaN && (player.currentTime / player.duration) > 0) {
                playerProgressBarsElements[0].value = (player.currentTime / player.duration);
                playerProgressBarsElements[1].value = (player.currentTime / player.duration);

                // Musica chegou no final, altera para a próxima
                if (player.currentTime == player.duration) {
                    
                    setLocalStorage_indexOfCurrentMusic(Number(getLocalStorage_indexOfCurrentMusic())+1);
                    validateIndexOfMusic(Number(getLocalStorage_indexOfCurrentMusic()));
                    var newMusic = listOfMusics[Number(getLocalStorage_indexOfCurrentMusic())];
                    player.setAttribute("src", newMusic.src);
                    player.play();

                    // coloca no titulo o nome da musica:
                    player.addEventListener("loadeddata", () => {
                        document.title = newMusic.title;
                    });
                }
            }
        });

        function handlePlayerPlayClick () {
            if (Number(getLocalStorage_stateOfMusic().stateOfTime) > 0 && Number(getLocalStorage_stateOfMusic().stateOfTime) != player.duration) {
                // ja existe um estado de musica salvo! reculpera qual musica e em qual parte parou:
                let musicSelected = listOfMusics[Number(getLocalStorage_stateOfMusic().indexOfMusic)];
                player.setAttribute("src", musicSelected.src)
                player.currentTime = Number(getLocalStorage_stateOfMusic().stateOfTime);

                player.muted = true;
                player.play();
                player.muted = false;

                // coloca no titulo o nome da musica:
                player.addEventListener("loadeddata", () => {
                    document.title = musicSelected.title;
                });

            } else {
                // primeira vez que deu play, ou acabou a musica toda anterior, carrega c/ o index da musica corrente

                musicRenderer(Number(getLocalStorage_indexOfCurrentMusic()));

                player.muted = true;
                player.play();
                player.muted = false;
                
            }
            
            // Flagga que o Play está ativo, sumindo com o icon de Play e Aparecendo o icon de Pause
            adjustTheDisplayOfIconsPlayAndPause_pauseShowUp();
        }
        playerPlaysElements[0].children[0].addEventListener("click", () => handlePlayerPlayClick());
        playerPlaysElements[1].children[0].addEventListener("click", () => handlePlayerPlayClick());


        function handlePlayerPauseClick () {
            // salva o estado em que a música foi pausada em local storage
            setLocalStorage_stateOfMusic({indexOfMusic: Number(getLocalStorage_indexOfCurrentMusic()), stateOfTime: Number(player.currentTime)});

            player.pause();
            
            // Flagga que o Pause está ativo, sumindo com o icon de Pause e Aparecendo o icon de Play
            // Obs: Não estraí em outro método pois essa lógica só é aplicada aqui, ela é exatamente
            // a mesma lógica que o `adjustTheDisplayOfIconsPlayAndPause_pauseShowUp()` PORÉM invertido, ou seja, 
            // O úncio momento em que o icon de play aparece é quando o pause é acionado, 
            // o outro método é aplicado em 3 partes, pois o icon de pause aparece em 3 momentos:
            // Quando da play em sí na musica, Quando vai para a próxima, e Quando vai para a anterior;
            if (!playerPausesElements[0].classList.contains("isActiv")) {
                playerPausesElements[0].classList.add("isActiv");

                playerPlaysElements[0].classList.remove("isActiv");
            }
            if (!playerPausesElements[1].classList.contains("isActiv")) {
                playerPausesElements[1].classList.add("isActiv");

                playerPlaysElements[1].classList.remove("isActiv");
            }
        }
        playerPausesElements[0].children[0].addEventListener("click", () => handlePlayerPauseClick());
        playerPausesElements[1].children[0].addEventListener("click", () => handlePlayerPauseClick());


         /* Mudando de musicas Next e Previous */

        function handlePlayerSkipPreviousClick () {
            setLocalStorage_indexOfCurrentMusic(Number(getLocalStorage_indexOfCurrentMusic())-1);

            validateIndexOfMusic(Number(getLocalStorage_indexOfCurrentMusic()));

            musicRenderer(Number(getLocalStorage_indexOfCurrentMusic()));

            adjustTheDisplayOfIconsPlayAndPause_pauseShowUp();
        }
        playerSkipPreviousElements[0].children[0].addEventListener("click", () => handlePlayerSkipPreviousClick());
        playerSkipPreviousElements[1].children[0].addEventListener("click", () => handlePlayerSkipPreviousClick());


        function handlePlayerSkipNextClick () {
            setLocalStorage_indexOfCurrentMusic(Number(getLocalStorage_indexOfCurrentMusic())+1);

            validateIndexOfMusic(Number(getLocalStorage_indexOfCurrentMusic()));

            musicRenderer(Number(getLocalStorage_indexOfCurrentMusic()));

            adjustTheDisplayOfIconsPlayAndPause_pauseShowUp();
        }
        playerSkipNextsElements[0].children[0].addEventListener("click", () => handlePlayerSkipNextClick());
        playerSkipNextsElements[1].children[0].addEventListener("click", () => handlePlayerSkipNextClick());

    }, []);

   

    
    return (
        <>
            <nav id="navbar-container" ref={navRef} >
                <button id="nav-close-btn" className="nav-btn nav-close-btn" onClick={showNavbar}><FaTimes /></button>
                <a href="/firstPortifolioGithubPages-2022">Home</a>
                <a href="/firstPortifolioGithubPages-2022/#/aboutMe" onClick={() => setNavBarEmColumn(true)}>Sobre</a>
                <a href="/firstPortifolioGithubPages-2022/#/skills" rel="Link Linguagens" onClick={() => setNavBarEmColumn(true)}>Skills</a>     
                <a href="/firstPortifolioGithubPages-2022/#/projects" rel="Link Projetos" onClick={() => setNavBarEmColumn(true)}>Projetos</a>
                <a href="/firstPortifolioGithubPages-2022/#/certificates" rel="Link Certificados" onClick={() => setNavBarEmColumn(true)}>Certificados</a>   
                <a href="/firstPortifolioGithubPages-2022/#/curriculumVitae" rel="Link Curriculo" onClick={() => setNavBarEmColumn(true)}>Currículo</a>     
                <a className={window.location.href.substring(1).split("/")[5] === 'javaBible' ? "" : "-btn-ancorToJavaBibleScreen"} href="/firstPortifolioGithubPages-2022/#/javaBible" rel="Link Biblia do Java" onClick={() => setNavBarEmColumn(true)}>Bíblia do Java {window.location.href.substring(1).split("/")[5] === 'javaBible' ? "" : <MdFiberNew className="animaIconPisca"/>}</a>        
                
                <audio id="audioPlayer" src={rickAndMortyMainIntro}></audio>
                <div className="audioPlayer--container --audioPlayer--container --navBar">
                    <div className="audioPlayer--controls">
                        <i className="audioPlayer-control--skipPrevious"><IoPlaySkipBackCircle/></i>
                        <i className="audioPlayer-control--play"><IoPlayCircle/></i>
                        <i className="audioPlayer-control--pause isActiv"><IoPauseCircle/></i>
                        <i className="audioPlayer-control--skipNext"><IoPlaySkipForwardCircle/></i>
                    </div>
                    <div className="audioPlayer-progressBar--duration">
                        <div className="audioPlayer-progressBar--fillBar">
                            <progress value="0" max="1"></progress>
                        </div>
                    </div>
                </div>
            </nav>
            <button id="btn-hamburguer" className="nav-btn"><FaBars onClick={showNavbar}/>{window.location.href.substring(1).split("/")[5] === 'javaBible' ? "" : <MdNotificationImportant className="animaIconPisca--alert" onClick={showNavbar}/>}

                <div className="audioPlayer--container --btnHamburguerResponsive">
                    <div className="audioPlayer--controls">
                        <i className="audioPlayer-control--skipPrevious"><IoPlaySkipBackCircle/></i>
                        <i className="audioPlayer-control--play"><IoPlayCircle/></i>
                        <i className="audioPlayer-control--pause isActiv"><IoPauseCircle/></i>
                        <i className="audioPlayer-control--skipNext"><IoPlaySkipForwardCircle/></i>
                    </div>
                    <div className="audioPlayer-progressBar--duration">
                        <div className="audioPlayer-progressBar--fillBar">
                            <progress value="0" max="1"></progress>
                        </div>
                    </div>
                </div>

            </button>
        </>
    )
};
