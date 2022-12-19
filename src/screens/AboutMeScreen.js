import React from 'react';
import { TbCodePlus, TbArrowsMaximize, TbArrowsDiagonalMinimize2 } from 'react-icons/tb';
import { BiSearchAlt } from 'react-icons/bi';
import { GiHamburger } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

import './AboutMeScreen.css';

export default function AboutMeScreen() {

    return (
        <section id="main-sobre--container">
            <div>
                <h1 className="main-title">&lsaquo;Sobre Mim&rsaquo;</h1>
                <div>
                    <div>
                        <div className="main-sobre--shellHead">
                            <i><TbCodePlus /></i>
                            <span><h3>root@r2d2:/home/welbert/aboutMe</h3></span>
                            <div>
                                <i><BiSearchAlt /></i>
                                <i><GiHamburger /></i>
                            </div>
                            <div className="main-sobre--shellHeadWindowCommomIcons">
                                <i><TbArrowsDiagonalMinimize2 /></i>
                                <i><TbArrowsMaximize /></i>
                                <i><AiOutlineClose /></i>
                            </div>

                        </div>
                        <p>
                        <span className="main-sobre--shellUser">root@r2d2</span>:<span className="main-sobre--shellDir">/home/welbert/aboutMe</span># \ <br/>> Desenvolvedor e entusiasta do mundo da programação e tecnologia, focado na web2.0 de ponta a ponta 
                        com boa base na stack Frontend (ReactJs) e atualmente estudando Backend (Java), buscando experiência
                        em projetos reais e/ou em produção, vivendo e estudando programação todos os dias de segunda a segunda a 2 anos,
                        pois alguém uma vez me disse "Obsessão vence do talento natural", e esta frase vem fazendo mais sentido a cada dia!
                        Sonhador e de uma familia humilde, um dia com certeza irei proporcionar melhoria aos meus..
                        "Um leão por dia", acredito que um dia chego la!
                        Obs: Trabalhando como freelancer nos dias atuais.
                        </p>
                    </div>
                </div>             
            </div>
        </section>
    )
};
