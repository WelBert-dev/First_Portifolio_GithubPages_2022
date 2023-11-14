import React from 'react';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import auauMiauNoFrameworkAmostra from '../../../resources/images/projects/auauMiauNoFramework.png';

export default function ClinicaAuauMiau_nonFramework_frontendVanilla() {
    return (    
    <article className="projects-single">
        <div className="projects-right">
            <div className="projects-title--container">
                <div>
                    <h3 className="projects-title">Interface Clínica AuauMiau sem frameworks (Frontend) Vanilla</h3>
                    <a href="https://github.com/WelBert-dev/auauMiauWeb-NoFramework" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                </div>
                <span>WEB NoE2E (HTML5 + CSS3 + Js PURO)</span>
                <code className="token_reservada --dateOfImplementation">Desenvolvido em 08/06/2022</code>
                <p>Código do projeto clicando no botão acima</p>
            </div>
            <div>
                <img className="projects-logo" src={auauMiauNoFrameworkAmostra} alt="Amostra AuauMiau NoFamework" ></img>
            </div>
            <div className="subContainer-bottom">
                <ul className="projects-description--container">
                    <li>
                        <h3 class="projects-subtitle">BackEnd ("Back do front")</h3>
                        <ul className="projects-frontend--container">
                            <li>Persistência de dados utilizando Local Storage.</li>
                            <li>Utilizando Js puro, para percorrer e criar elementos HTML.</li>
                            <li>Utilizei a abordagem de POO com Js para criar as Entidades e persistir dados.</li>
                            <li>Conversões de Entidades para Json ao armazenar e retornar dados.</li>
                            <li>Resumo: CRUD Client-Side.</li>
                            <li>Trabalho do curso!</li>
                        </ul>
                    </li>
                    <li>
                        <h3 class="projects-subtitle">FrontEnd</h3>
                        <ul className="projects-frontend--container">
                            <li>HTML5 e CSS3: Elementos semânticos, CSS Grid, Flexbox.</li>
                            <li>Animações CSS: Sucesso e Erro ao registrar clientes.</li>
                            <li>Componentização, para ja ir acostumando com ReactJS.</li>
                            <li>Herança de classes, utilizado a mesma classe em vários comps "iguais".</li>
                            <li>Js Vanilla.</li>
                        </ul>
                    </li>
                </ul>
                <div className="projects-subdescription--container">
                    <ul className="projects-description--container">
                        <li>
                            <h3 class="projects-subtitle">Descrição</h3>
                        </li>
                    </ul>
                    <p>
                        Trabalho do curso, aonde foi realizado um parsing do semestre anterior, o projeto
                        foi desenvolvido inicialmente em windows forms com .NetCore (C#) da Microsoft,
                        a lógica e documentação continuaram as mesmas porém desta vez mudando a camada de
                        apresentação para as tecnologias WEB. Projeto "Puro" sem nenhum framework, utilizando a persistencia
                        de dados "client-side" do navegador (LocalStorage).
                        Abordagem escolhida pois muitas das vezes é mais interessante utilizar este recurso
                        (desde que não exagere), pois o armazenamento não se perde com Re-Loads e nem possuem tempo
                        de expiração (diferente de coockies).
                        Foi ótimo para treinar e aprender conceitos que muitos dos frameworks abstraem e acaba passando
                        despercebido, então foi possível "olhar por de baixo dos panos", colocando a mão no código.
                    </p>
                </div>
            </div>
        </div>
    </article>
    )
};
