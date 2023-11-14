import React from 'react';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import restauranteIfspAmostra from '../../../resources/images/projects/restauranteIfspAmostra.png';

export default function RestauranteIFSP_with_springBoot_and_reactJs_authenticationAndAuthorization() {
    return (
    <article className="projects-single">
        <div className="projects-right">
            <div className="projects-title--container">
                <div>
                    <h3 className="projects-title">Restaurante IFSP Springboot e ReactJs</h3>
                    <a href="https://github.com/WelBert-dev/backupLg3Ecommerce-Springboot" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                </div>
                <span>WEB E2E</span>
                <code className="subtituloOfSingleProject --dateOfImplementation">Desenvolvido em 12/10/2022</code>
                <p>Código do projeto clicando no botão acima</p>
            </div>
            <div>
                <img className="projects-logo" src={restauranteIfspAmostra} alt="Amostra Amazon" ></img>
            </div>
            <div className="subContainer-bottom">
                <ul className="projects-description--container">
                    <li>
                        <h3 class="projects-subtitle">BackEnd</h3>
                        <ul className="projects-frontend--container">
                            <li>Java: Springboot (Estudando atualmente).</li>
                            <li>CRUD.</li>
                            <li>API Rest.</li>
                            <li>Architecture pattern: MVC.</li>
                            <li>Spring Data JPA: Framework para abstrair a persistência de Dados (Ecossistema Spring).</li>
                            <li>Spring Security: Framework para controle de autenticação e autorização (Ecossistema Spring).</li>
                            <li>Auth0 JWT: Token utilizado nas trocas de mensagens JSON para controle de autenticação e autorização (Padrão aberto (RFC 7519)).</li>
                            <li>Persistência de dados: MySQL.</li>
                            <li>Testes realizados no shell Bash com uso do curl (binários/comandos presentes no arquivo txt).</li>
                        </ul>
                    </li>
                    <li>
                        <h3 class="projects-subtitle">FrontEnd</h3>
                        <ul className="projects-frontend--container">
                            <li>HTML5 e CSS3: Elementos semânticos, CSS Grid, Flexbox.</li>
                            <li>ReactJs: Componentes, Eventos, Hooks, Router.</li>
                            <li>Redux: Store, Reducers, Actions.</li>
                            <li>Apesar de utilizar ReactJs, grande parte da lógica esta em JS Vanilla.</li>
                            <li>Autenticação e Autorização a nível de rotas e a nível de componentes. (Foco maior do trabalho foi nisso).</li>
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
                        Trabalho final de semestre da disciplina LG3 (Linguagem e Técnicas de Programação do IFSP) aonde tomei a abordagem de separar as
                        tecnologias WEB do core do sistema (API Springboot) diminuindo assim acoplamentos das mesmas, melhorando a manutenção e escalabilidade
                        e melhorando a possibilidade de expansão dos módulos (Caso queria adotar novas tecnologias na camada de apresentação, como um projeto Mobile por ex).
                        Escolhi dessa vez o Springboot pois estou estudando Java atualmente e essa linguagem ganhou meu coração, pois é uma linguagem bem madura e apesar dela ser verbosa e conter bastante boilerplate, achei particularmente mais
                        "clean" a sintaxe se comparado com C# (Linguagem na qual aprendi POO) que é uma cópia descarada dela (foi inspirada nela), além de eu ser entusiasta GNU e o Java é Multiplataforma,
                        então é nela que pretendo me especializar e se tudo der certo ano que vem pretendo tirar a certificação da Oracle...
                        Como na época eu ainda não conhecia muito Java e Spring e eu estava focado em Frontend com ReactJs, eu foquei mais na Autenticação
                        e Autorização no client-side, demonstrando a nível de rotas e a nível de componentes.
                    </p>
                </div>
            </div>
        </div>
    </article>
    )
};
