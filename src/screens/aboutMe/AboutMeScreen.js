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
                    <span className="main-sobre--shellUser">root@r2d2</span>:<span className="main-sobre--shellDir">/home/welbert/aboutMe</span># \ <br/>&rsaquo;
                    Como desenvolvedor e entusiasta da programação e tecnologia, tenho forte base na stack Frontend 
                    (ReactJs) e estou atualmente aprofundando meus estudos em Backend com Java, buscando desafios 
                    em projetos reais e/ou em produção. <br/><br/>

                    Vivo e respiro programação e desenvolvimento todos os dias, desde quando decidi seguir minha paixão há quase 3 anos 
                    atrás. Gosto muito da frase "A obsessão ganha do talento, todas as vezes" pois essa mentalidade me impulsiona 
                    a crescer cada dia mais.<br/><br/>
                    Formado em "Técnico em Informática" pelo Instituto Federal de Educação, Ciência e Tecnologia de São Paulo 
                    (IFSP - Salto) desde o final de 2022 e atualmente cursando CST em "Análise e Desenvolvimento de Sistemas" no CEUNSP - Salto, 
                    com o objetivo de, após a conclusão do curso, fazer Mestrado e Doutorado.<br/><br/>

                    Sou de uma família humilde, sonhador e determinado. Tenho certeza que no futuro conseguirei 
                    proporcionar melhorias para o mundo. Sigo a filosofia de "Um leão por dia", acreditando 
                    que a persistência e o esforço constante são o caminho para o sucesso. Vamos solucionar problemas aplicando tecnologia juntos? ^^
                    </p>
                </div>
            </div>             
        </div>
    </section>
    )
};
