import React from 'react';

import './ProjectsScreen.css';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import amazonAmostra from '../resources/amazona.jpg';
import netflixAmostra from '../resources/NetFlixCloneWeb.gif';
import auauMiauNoFrameworkAmostra from '../resources/auauMiauNoFramework.png';
import restauranteIfspAmostra from '../resources/restauranteIfspAmostra.png';

export default function ProjectsScreen() {
    return (
        <section id="main-projects--container">
            <div>
                <h1 className="main-title">&lsaquo;Projetos&rsaquo;</h1>
                <div className="wrapper-projects">     
                    <article className="projects-single">
                        <div className="projects-right">
                            <div className="projects-title--container -certificateTitleContainer">
                                <div>
                                    <h3 className="projects-title">Restaurante IFSP Springboot e ReactJs</h3>
                                    <a href="https://github.com/WelBert-dev/backupLg3Ecommerce-Springboot" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <p>Código do projeto clicando no botão a cima</p>
                                <span>WEB E2E</span>
                            </div>
                            <div>
                                <img className="projects-logo" src={restauranteIfspAmostra} alt="Amostra Amazon" ></img>
                            </div>
                            <div className="subContainer-bottom">
                                <ul className="projects-description--container">
                                    <li>
                                        <h3 class="projects-subtitle">BackEnd</h3>
                                        <ul>
                                            <li>Java: Springboot (Estudando atualmente).</li>
                                            <li>API Rest.</li>
                                            <li>Arquitetura de diretórios: MVC.</li>
                                            <li>JPA: Framework para abstrair a persistência de Dados.</li>
                                            <li>SpringSecurity: Lib para controle de autenticação e autorização.</li>
                                            <li>Persistência de dados: MySQL</li>
                                            <li>Testes realizados no shell Bash com uso do curl (binários/comandos presentes no arquivo txt).</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">FrontEnd</h3>
                                        <ul className="projects-frontend--container">
                                            <li>HTML5 e CSS3: Elementos semânticos, CSS Grid, Flexbox.</li>
                                            <li>ReactJs: Componentes, Props, Eventos, Hooks, Router, Axios.</li>
                                            <li>Redux: Store, Reducers, Actions.</li>
                                            <li>Dependência de desenvolvimento: ESLint.</li>
                                            <li>Apesar de utilizar react, grande parte da lógica esta em JS Vanilla.</li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="projects-subdescription--container">
                                    <h3 class="projects-subtitle">Descrição</h3>
                                    <p>
                                        Trabalho final de semestre da disciplina LG3 (Linguagem e Tecnicas de Programação) aonde tomei a abordagem de separar as
                                        tecnologias web do core do sistema (API Springboot) diminuindo assim acoplamentos das mesmas, melhorando a manutenção e escalabilidade
                                        e melhorando a possibilidade de expansão dos módulos (Caso queria adotar novas tecnologias na camada de apresentação, como um projeto Mobile por ex),
                                        escolhi dessa vez o Springboot pois estou estudando Java atualmente e essa linguagem ganhou meu coração, pois é uma linguagem bem madura e particularmente mais
                                        "clean" a sintaxe se comparado com C# que é uma cópia descarada dela (foi inspirada nela), além de eu ser entusiasta GNU e o Java é Multiplataforma, 
                                        então é nela que pretendo me especializar e se tudo der certo ano que vem pretendo tirar a certificação da Oracle...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <hr />    
                    <article className="projects-single">
                        <div className="projects-right">
                            <div className="projects-title--container -certificateTitleContainer">
                                <div>
                                    <h3 className="projects-title">Clone Amazon ReactJs e Asp.NetCore</h3>
                                    <a href="https://github.com/welBert-dev/ecommerceWebApi-microServices-dotNetCoreMVC" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <p>Código do projeto clicando no botão a cima</p>
                                <span>WEB E2E</span>
                            </div>
                            <div>
                                <img className="projects-logo" src={amazonAmostra} alt="Amostra Amazon" ></img>
                            </div>
                            <div className="subContainer-bottom">
                                <ul className="projects-description--container">
                                    <li>
                                        <h3 class="projects-subtitle">BackEnd</h3>
                                        <ul>
                                            <li>C#: Asp.NetCoreMVC.</li>
                                            <li>API Mircroservices.</li>
                                            <li>80% REST.</li>
                                            <li>Arquitetura de diretórios: MVC.</li>
                                            <li>EntityframeworkCore: Framework para abstrair a persistência de Dados.</li>
                                            <li>Migrations: Lib para manter o banco de dados e a aplicação atualizados/conectados.</li>
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
                                    <h3 class="projects-subtitle">Descrição</h3>
                                    <p>
                                        Clone da amazon web utilizando as ferramentas a cima, resultado da junção de duas tecnologias distintas
                                        sendo elas o Reactjs do Facebook no frontend e o Asp.NetCore da Microsoft no backend,
                                        com auxilio das bibliotecas mencionadas... projeto parcialmente concluído, ainda vai receber novas funcionalidades
                                        e o objetivo é chegar bem próximo do sistema original.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <hr />
                    <article className="projects-single">
                        <div className="projects-right">
                            <div className="projects-title--container -certificateTitleContainer">
                                <div>
                                    <h3 className="projects-title">Clone Netflix Reactjs consumindo API TMDB</h3>
                                    <a href="https://github.com/WelBert-dev/netflixCloneWeb-NoE2E-react" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <p>Código do projeto clicando no botão a cima</p>
                                <span>WEB NoE2E</span>
                            </div>
                            <div>
                                <img className="projects-logo" src={netflixAmostra} alt="Amostra Netflix" ></img>
                            </div>
                            <div className="subContainer-bottom">
                                <ul className="projects-description--container">
                                    <li>
                                        <h3 class="projects-subtitle">BackEnd</h3>
                                        <ul>
                                            <li>API do TMDB: https://api.themoviedb.org/3</li>
                                            <li>Lista de filmes categoria originais netflix: "/discover/tv?with_network=213"</li>
                                            <li>Lista de filmes Recomendados: "/trending/all/week"</li>
                                            <li>Lista de filmes Em Alta: "/movie/top_rated"</li>
                                            <li>Lista de filmes categoria Ação: "/discover/movie?with_genres=28"</li>
                                            <li>Lista de filmes categoria Comédia: "/discover/movie?with_genres=35" </li>
                                            <li>Lista de filmes categoria Terror: "/discover/movie?with_genres=27"</li>
                                            <li>Lista de filmes categoria Romance: "/discover/movie?with_genres=10749"</li>
                                            <li>Lista de filmes categoria Documentário: "/discover/movie?with_genres=99"</li>
                                            <li>Endpoint detalhes de um filme específico: "/movie/id:int"</li>
                                            <li>Endpoint detalhes de uma série específica: "/tv/id:int"</li>
                                            <li>Parametro para vir traduzido em pt-BR: "language=pt-BR"</li>
                                            <li>È necessário também passar a API KEY, para isto basta registrar na plataforma.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">FrontEnd</h3>
                                        <ul className="projects-frontend--container">
                                            <li>HTML5 e CSS3: Elementos semânticos, CSS Grid, Flexbox.</li>
                                            <li>ReactJs: Componentes, Props, Eventos, Hooks.</li>
                                            <li>JavaScript Vanila: Evento scroll</li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="projects-subdescription--container">
                                    <h3 class="projects-subtitle">Descrição</h3>
                                    <p>
                                        Clone da interface netflix web utilizando as ferramentas a cima, projeto teoricamente simples porém cheio de detalhes
                                        feito quando eu estava começando a estudar Reactjs com apoio do Bonieky do canal B7Web, foi quando eu me interessei 
                                        pelo ReactJs pois vi o seu potêncial e achei bem interessante, não é atoa que o facebook criador utiliza nos projetos,
                                        ótima ferramenta que me fez me interessar bastante pelo FrontEnd, pois até então eu estudava a stack porém, meu forte 
                                        sempre foi mais as tecnologias BackEnd, foi ai que eu decidi me tornar FullStack... lógico que é uma escolha bem ousada,
                                        mas acredito que com esforço e dedicação eu consigo cumprir essa meta! "Um leão por dia".
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <hr />
                    <article className="projects-single">
                        <div className="projects-right">
                            <div className="projects-title--container -certificateTitleContainer">
                                <div>
                                    <h3 className="projects-title">Interface Clínica AuauMiau sem frameworks (Frontend) Vanilla</h3>
                                    <a href="https://github.com/WelBert-dev/auauMiauWeb-NoFramework" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <p>Código do projeto clicando no botão a cima</p>
                                <span>WEB NoE2E (HTML5 + CSS3 + Js PURO)</span>
                            </div>
                            <div>
                                <img className="projects-logo" src={auauMiauNoFrameworkAmostra} alt="Amostra AuauMiau NoFamework" ></img>
                            </div>
                            <div className="subContainer-bottom">
                                <ul className="projects-description--container">
                                    <li>
                                        <h3 class="projects-subtitle">BackEnd ("Back do front")</h3>
                                        <ul>
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
                                    <h3 class="projects-subtitle">Descrição</h3>
                                    <p>
                                        Trabalho do curso, aonde foi realizado um parsing do semestre anterior, o projeto 
                                        foi desenvolvido inicialmente em windows forms com .NetCore (C#) da Microsoft,
                                        a lógica/documentação continuaram as mesmas porém desta vez mudando a camada de 
                                        apresentação para a web. Projeto "Puro" sem nenhum framework, utilizando a persistencia
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
                    <hr />
                </div>
            </div>
        </section>
    )
};
