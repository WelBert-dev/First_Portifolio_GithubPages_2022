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
                    <br/><br/>
                    <span className="main-sobre--shellDir">ADENDO: </span><br/><br/>
                    Aqui eu descrevo minhas convicções e hobbies, sobre os aprofundamentos técnicos estão nas páginas Habilidades e Currículo!<br/><br/>

                    Fiz isso pois se não o site só iria conter "CONHEÇO ISSO E AQUILO, ESTUDEI ISSO E AQUILO, ESTOU ESTUDANDO ISSO E AQUILO", quem é de tecnolgia 
                    vai entender rsrsrs...<br/><br/>

                    <span className="main-sobre--shellDir">CONVICÇÕES: </span><br/><br/>

                    Vivo e respiro programação e desenvolvimento todos os dias, desde quando decidi seguir minha paixão há 3 anos 
                    atrás.<br/><br/>
                    
                    Gosto muito da frase "A obsessão ganha do talento, todas as vezes" pois essa mentalidade me impulsiona 
                    a crescer cada dia mais.<br/><br/>

                    Sou de uma família humilde, sonhador e determinado. Tenho certeza que no futuro conseguirei 
                    proporcionar melhorias para o mundo.<br/><br/>
                    
                    Sigo a filosofia de "Um leão por dia", acreditando que a persistência e o esforço constante 
                    são o caminho para o sucesso.<br/><br/>

                    <span className="main-sobre--shellDir">HOBBIES:</span><br/><br/>

                    Atualmente estou procurando hobbies fora do mundo da tecnologia, pois meus hobbies envolvem 
                    mexer com meu Site, a Bíblia do Java, estudar as utilidades, possibilidades, e usabilidades  
                    reais sobre as Inteligências Artificiais aplicadas no dia-a-dia.<br/><br/>
                    
                    Dentre elas, o maior foco é dissecando o GPT internamente, NÃO apenas "prompts" mágicos, 
                    mas indo além e compreendendo como e por que ele gera as respostas.<br/><br/>
                    
                    - Mais detalhes segue link "Dissecando o GPT": <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/ceunsp/tree/main/ADS-2Semestre-2023/tendencias_em_ciencias_da_computacao_optativa" target="_blank">Clique AQUI!</a><br/><br/>
                    
                    E também já utilizei o Real-ESRGAN para otimizar vídeos clássicos, isso é bem útil para remasterizar filmes ou animes antigos 
                    como os primeiros eps de One Piece por exemplo, ou ir além e melhorar as sprites dos jogos retro como Super Mario Bross...<br/><br/>
                    

                    Além desses conhecimentos, eu gosto de consumir assuntos sobre Psicologia e Neurociência 
                    do canal do YT Eslen Delanogare pois alguns dos fundamentos apresentados possibilita 
                    a aplicação de técnicas e estratégias mais eficientes de estudos e aprendizagem. 
                    Além de VÁRIOS podcasts com intuito de disseminar a Ciência.<br/><br/>

                    Também gosto bastante das estratégias de persuasão por trás do Copywriting (Marketing Digital).<br/><br/>

                    Curiosidade: Faço jejum de dopamina, porisso não utilizo muito as redes sociais e nem jogo vídeo 
                    game, apenas em raros momentos de lazer com os amigos (Mais especificamente jogos clássicos e 
                    nostalgicos de nintendo e etc).<br/><br/>
                    
                    Evitar ao máximo tarefas que proporcionam recompensas dopaminérgicas rápidas é a chave para uma vida 
                    mais feliz e motivada a longo prazo.<br/><br/>
                    
                    Bom, melhor eu parar por aqui rsrs, para finalizar eu TENHO UMA GRANDE PAIXÃO pela Cultura Open 
                    Source e Software Livre, porisso utilizo GNU/Linux em meu dia-a-dia desde 2021. Mais detalhes em 
                    Currículo!<br/><br/>

                    
                    Vamos solucionar problemas aplicando tecnologia juntos? ^^
                    </p>
                </div>
            </div>             
        </div>
    </section>
    )
};
