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




    /* Player Music Area */

    // const player = document.querySelector("#audioPlayer");

    // const playerPlay = document.querySelector(".audioPlayer-control--play");
    // const playerPause = document.querySelector(".audioPlayer-control--pause");

    const getLocalStorage_stateOfMusic = () => JSON.parse(localStorage.getItem('db_stateOfMusic')) ?? {indexOfMusic: 0, stateOfTime: 0};
    const setLocalStorage_stateOfMusic = (dbStateOfMusic = {indexOfMusic: 0, stateOfTime: 0}) => localStorage.setItem("db_stateOfMusic", JSON.stringify(dbStateOfMusic));

    const [listOfMusics, setListOfMusics] = useState([
        {title:"Rick And Morty Intro - Primeira Temporada", artist:"Rick and Morty", genre:"Adventure", src:`${rickAndMortyMainIntro}`, totalDurationInSeconds: 32.256},
        {title:"Fullmetal Alchemist Brotherhood Intro - Opeging 1", artist:"Fullmetal Alchemist BH", genre:"Adventure", src:`${fullmetalAlchemistBHMainIntro}`, totalDurationInSeconds: 92.64},
        {title:"Yu Yu Hakusho (Português) Intro - Opening 1", artist:"froid", genre:"Classic", src:`${yuyuHakushoMainIntro}`, totalDurationInSeconds: 86.808},
        {title:"Death Note Intro - Opening 1", artist:"froid", genre:"Mistery", src:`${deathNoteMainIntro}`, totalDurationInSeconds: 80.88},
        {title:"Tokyo Ghoul - Opening 1 - Unravel", artist:"froid", genre:"Mistery", src:`${tokyoGhoulMainIntro}`, totalDurationInSeconds:  90}, 
        {title:"Dragon Ball Z - Opening 1 - Chala Head Chala (Português)", artist:"froid", genre:"Mistery", src:`${dbzChalaHeChalaIntro}`, totalDurationInSeconds: 109.512},
        {title:"Dragon Ball Z - Opening 2 - Posso pressentir o perigo e o caos (Português)", artist:"froid", genre:"Mistery", src:`${dbzPossoPressentirOPerigoEoCaos}`, totalDurationInSeconds: 107.904},
        {title:"Dragon Ball GT - Opening 1 - Seu sorriso é tão resplandecente (Português)", artist:"froid", genre:"Mistery", src:`${dbzSeuSorrisoEhTaoResplandecente}`, totalDurationInSeconds: 147},
        {title:"Dragon Ball Kai - Opening 1 - Voa vamos vem comigo, vamos juntos ao paraíso (Português)", artist:"froid", genre:"Mistery", src:`${dbzVoaVamosVemComigoVamosJuntosAoParaiso}`, totalDurationInSeconds: 85.128},
        {title:"Dragon Ball Kai - Saga Boo (Português)", artist:"froid", genre:"Mistery", src:`${dbzSagaBoo}`, totalDurationInSeconds: 85.368},
        {title:"Dragon Ball Super - Opening 1 (Português)", artist:"froid", genre:"Mistery", src:`${dbzSuperMainIntro}`, totalDurationInSeconds: 90.312},
        {title:"Inuyasha - Opening 1 - Mudar O Mundo (Português)", artist:"froid", genre:"Mistery", src:`${inuyashaMainIntro}`, totalDurationInSeconds: 96.096},
        {title:"Pokémon - Opening 1 - Temos que Pegar (Português)", artist:"froid", genre:"Mistery", src:`${pokemonMainIntro}`, totalDurationInSeconds: 61.704},
        {title:"Digimon - Opening 1 (Português)", artist:"froid", genre:"Mistery", src:`${digimonMainIntro}`, totalDurationInSeconds: 94.152},
        {title:"Os Cavaleiros Do Zodíaco - Opening 1 - PEGASUS FANTASY (Português)", artist:"froid", genre:"Mistery", src:`${cavaleirosDoZodiacoMainIntro}`, totalDurationInSeconds: 85.128},
        {title:"Bleach - Opening 1", artist:"froid", genre:"Mistery", src:`${bleachMainIntro}`, totalDurationInSeconds: 89.832},
        {title:"One Punch Man - Opening 1", artist:"froid", genre:"Mistery", src:`${onePunchManMainIntro}`, totalDurationInSeconds: 103.272},
        {title:"Shingeki No Kyojin - Opening 1", artist:"froid", genre:"Mistery", src:`${attackOnTitanMainIntro}`, totalDurationInSeconds: 91.08},
        {title:"Naruto Classic - Opening 1", artist:"froid", genre:"Mistery", src:`${narutoClassicoMainIntro}`, totalDurationInSeconds: 104.976},
        {title:"Naruto Classic - Opening 2 - Haruka Kanata", artist:"froid", genre:"Mistery", src:`${narutoClassico2}`, totalDurationInSeconds: 103.944},
        {title:"Naruto Shippuden - Opening 1", artist:"froid", genre:"Mistery", src:`${narutoShippudenMainIntro}`, totalDurationInSeconds: 104.256},
        {title:"Naruto Shippuden - Opening 2 - Distance", artist:"froid", genre:"Mistery", src:`${narutoShippuden2}`, totalDurationInSeconds: 104.04},
        {title:"Naruto Shippuden - Opening 3 - Blue Bird", artist:"froid", genre:"Mistery", src:`${narutoShippuden3}`, totalDurationInSeconds: 104.256},
        {title:"Naruto Shippuden - Opening 4 - Closer", artist:"froid", genre:"Mistery", src:`${narutoShippuden4}`, totalDurationInSeconds: 104.112},
        {title:"Naruto Shippuden - Opening 5 - Hotaru no Hikari", artist:"froid", genre:"Mistery", src:`${narutoShippuden5}`, totalDurationInSeconds: 103.992},
        {title:"Naruto Shippuden - Opening 6 - Sign", artist:"froid", genre:"Mistery", src:`${narutoShippuden6}`, totalDurationInSeconds: 103.896},
        {title:"Naruto Shippuden - Opening 7 - Toumei Datta Sekai", artist:"froid", genre:"Mistery", src:`${narutoShippuden7}`, totalDurationInSeconds: 103.896},
        {title:"Naruto Shippuden - Opening 8 - Diver", artist:"froid", genre:"Mistery", src:`${narutoShippuden8}`, totalDurationInSeconds: 104.4},
        {title:"Naruto Shippuden - Opening 9 - Lovers", artist:"froid", genre:"Mistery", src:`${narutoShippuden9}`, totalDurationInSeconds: 103.728},
        {title:"Naruto Shippuden - Opening 10 - Newsong", artist:"froid", genre:"Mistery", src:`${narutoShippuden10}`, totalDurationInSeconds: 103.56},
        {title:"Naruto Shippuden - Opening 11 - Totsugeki Rock", artist:"froid", genre:"Mistery", src:`${narutoShippuden11}`, totalDurationInSeconds: 104.112},
        {title:"Naruto Shippuden - Opening 12 - Moshimo", artist:"froid", genre:"Mistery", src:`${narutoShippuden12}`, totalDurationInSeconds: 104.064},
        {title:"Naruto Shippuden - Opening 13 - Niwaka Ame ni mo Makezu", artist:"froid", genre:"Mistery", src:`${narutoShippuden13}`, totalDurationInSeconds: 103.992},
        {title:"Naruto Shippuden - Opening 14 - Tsuki no Ookisa", artist:"froid", genre:"Mistery", src:`${narutoShippuden14}`, totalDurationInSeconds: 104.424},
        {title:"Naruto Shippuden - Opening 15 - Guren", artist:"froid", genre:"Mistery", src:`${narutoShippuden15}`, totalDurationInSeconds: 104.064},
        {title:"Naruto Shippuden - Opening 16 - Silhouette", artist:"froid", genre:"Mistery", src:`${narutoShippuden16}`, totalDurationInSeconds: 103.896},
        {title:"Naruto Shippuden - Opening 17 - Kaze", artist:"froid", genre:"Mistery", src:`${narutoShippuden17}`, totalDurationInSeconds: 104.064},
        {title:"Naruto Shippuden - Opening 18 - LINE", artist:"froid", genre:"Mistery", src:`${narutoShippuden18}`, totalDurationInSeconds: 104.016},
        {title:"Naruto Shippuden - Opening 19 - Blood Circulator", artist:"froid", genre:"Mistery", src:`${narutoShippuden19}`, totalDurationInSeconds: 103.56},
        {title:"Naruto Shippuden - Opening 20 - Kara no Kokoro", artist:"froid", genre:"Mistery", src:`${narutoShippuden20}`, totalDurationInSeconds: 104.232}
    ]);

    const getLocalStorage_indexOfCurrentMusic = () => localStorage.getItem('db_indexOfCurrentMusic') ?? 0;
    const setLocalStorage_indexOfCurrentMusic = (dbIndexOfMusic) => localStorage.setItem("db_indexOfCurrentMusic", Number(dbIndexOfMusic));

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

        if (Number(getLocalStorage_stateOfMusic().stateOfTime) > 0) {
            playerProgressBarsElements[0].value = (Number(getLocalStorage_stateOfMusic().stateOfTime) / Number(listOfMusics[Number(getLocalStorage_stateOfMusic().indexOfMusic)].totalDurationInSeconds));
            playerProgressBarsElements[1].value = (Number(getLocalStorage_stateOfMusic().stateOfTime) / Number(listOfMusics[Number(getLocalStorage_stateOfMusic().indexOfMusic)].totalDurationInSeconds));
        }



        /* 
            Eventos de Pausa e Play na musica Obs: Como existem dois containers devido a responsividade, aqui é
            duplicado os códigos para manter o mesmo estado nos dois containers.
        */

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
                // primeira vez que deu play, ou acabou a musica toda anterior, carrega o index da musica corrente

                musicRenderer(Number(getLocalStorage_indexOfCurrentMusic()));

                player.muted = true;
                player.play();
                player.muted = false;
                
            }
            

            if (!playerPlaysElements[0].classList.contains("isActiv")) {
                playerPlaysElements[0].classList.add("isActiv");

                playerPausesElements[0].classList.remove("isActiv");
            }
            if (!playerPlaysElements[1].classList.contains("isActiv")) {
                playerPlaysElements[1].classList.add("isActiv");

                playerPausesElements[1].classList.remove("isActiv");
            }
        }
        playerPlaysElements[0].children[0].addEventListener("click", () => handlePlayerPlayClick());
        playerPlaysElements[1].children[0].addEventListener("click", () => handlePlayerPlayClick());


        function handlePlayerPauseClick () {
            setLocalStorage_stateOfMusic({indexOfMusic: Number(getLocalStorage_indexOfCurrentMusic()), stateOfTime: Number(player.currentTime)});

            player.pause();
            
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


         /* Evento que atualiza a barra de progresso da musica */

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


         /* Mudando de musicas Next e Previous */

        const musicRenderer = (indexOfCurrentMusic) => {

            let musicSelected = listOfMusics[Number(indexOfCurrentMusic)];
            player.setAttribute("src", musicSelected.src);

            player.addEventListener("loadeddata", () => {
                document.title = musicSelected.title;
            });

            player.play();
        } 
        

        function handlePlayerSkipPreviousClick () {
            setLocalStorage_indexOfCurrentMusic(Number(getLocalStorage_indexOfCurrentMusic())-1);

            validateIndexOfMusic(Number(getLocalStorage_indexOfCurrentMusic()));

            musicRenderer(Number(getLocalStorage_indexOfCurrentMusic()));

            if (!playerPlaysElements[0].classList.contains("isActiv")) {
                playerPlaysElements[0].classList.add("isActiv");

                playerPausesElements[0].classList.remove("isActiv");
            }
            if (!playerPlaysElements[1].classList.contains("isActiv")) {
                playerPlaysElements[1].classList.add("isActiv");

                playerPausesElements[1].classList.remove("isActiv");
            }
        }
        playerSkipPreviousElements[0].children[0].addEventListener("click", () => handlePlayerSkipPreviousClick());
        playerSkipPreviousElements[1].children[0].addEventListener("click", () => handlePlayerSkipPreviousClick());


        function handlePlayerSkipNextClick () {
            setLocalStorage_indexOfCurrentMusic(Number(getLocalStorage_indexOfCurrentMusic())+1);

            validateIndexOfMusic(Number(getLocalStorage_indexOfCurrentMusic()));

            musicRenderer(Number(getLocalStorage_indexOfCurrentMusic()));

            if (!playerPlaysElements[0].classList.contains("isActiv")) {
                playerPlaysElements[0].classList.add("isActiv");

                playerPausesElements[0].classList.remove("isActiv");
            }
            if (!playerPlaysElements[1].classList.contains("isActiv")) {
                playerPlaysElements[1].classList.add("isActiv");

                playerPausesElements[1].classList.remove("isActiv");
            }

        }
        playerSkipNextsElements[0].children[0].addEventListener("click", () => handlePlayerSkipNextClick());
        playerSkipNextsElements[1].children[0].addEventListener("click", () => handlePlayerSkipNextClick());



        // Evento disparado quando a página sofre re-load, salvando assim o estado da musica current em localstorage:

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
