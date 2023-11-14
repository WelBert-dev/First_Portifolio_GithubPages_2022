import React from 'react';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import amazonAmostra from '../../../resources/images/projects/amazona.jpg';

export default function CloneAmazon_with_reactJs_and_aspNetCore() {
    return (    
    <article className="projects-single">
        <div className="projects-right">
            <div className="projects-title--container">
                <div>
                    <h3 className="projects-title">Clone Amazon ReactJs e Asp.NetCore</h3>
                    <a href="https://github.com/welBert-dev/ecommerceWebApi-microServices-dotNetCoreMVC" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                </div>
                <span>WEB E2E</span>
                <code className="token_reservada --dateOfImplementation">Desenvolvido em 15/08/2022</code>
                <p>Código do projeto clicando no botão acima</p>
            </div>
            <div>
                <img className="projects-logo" src={amazonAmostra} alt="Amostra Amazon" ></img>
            </div>
            <div className="subContainer-bottom">
                <ul className="projects-description--container">
                    <li>
                        <h3 class="projects-subtitle">BackEnd</h3>
                        <ul className="projects-frontend--container">
                            <li>C#: Asp.NetCoreMVC.</li>
                            <li>API Mircroservices.</li>
                            <li>80% REST.</li>
                            <li>Architecture pattern: MVC.</li>
                            <li>EntityframeworkCore: Framework para abstrair a persistência de Dados (Ecossistema .Net).</li>
                            <li>EF Core Migrations: Lib para manter o banco de dados e a aplicação atualizados/conectados (Ecossistema .Net).</li>
                            <li>AutoMap: Lib para fazer mapeamento/Parsing DTO &lsaquo;=&rsaquo; Entidade/Model.</li>
                            <li>Persistência de dados: MySQL.</li>
                        </ul>
                    </li>
                    <li>
                        <h3 class="projects-subtitle">FrontEnd</h3>
                        <ul className="projects-frontend--container">
                            <li>HTML5 e CSS3: Elementos semânticos, CSS Grid, Flexbox.</li>
                            <li>ReactJs: Componentes, Props, Eventos, Hooks, Router, Axios.</li>
                            <li>Redux: Store, Reducers, Actions.</li>
                            <li>Dependência de desenvolvimento: ESLint.</li>
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
                        Clone da amazon web utilizando as ferramentas acima, resultado da junção de duas tecnologias distintas
                        sendo elas o Reactjs do Facebook no frontend e o Asp.NetCore da Microsoft no backend,
                        com auxilio das bibliotecas mencionadas... projeto parcialmente concluído, ainda vai receber novas funcionalidades
                        e o objetivo é chegar bem próximo do sistema original.
                    </p>
                </div>
            </div>
        </div>
    </article>
    )
};
