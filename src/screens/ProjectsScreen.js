import React, { useEffect } from 'react';

import './ProjectsScreen.css';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import amazonAmostra from '../resources/amazona.jpg';
import netflixAmostra from '../resources/NetFlixCloneWeb.gif';
import auauMiauNoFrameworkAmostra from '../resources/auauMiauNoFramework.png';
import restauranteIfspAmostra from '../resources/restauranteIfspAmostra.png';
import logoQrCodeGenerator from '../resources/logo-qrcodeGeneratorInC.png';

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
                                    <h3 className="projects-title">QR Code Generator (C Language) + Scanner WEB (Reactjs)</h3>
                                    <a href="https://github.com/WelBert-dev/QRCodeReader_SummarizingInvoiceNotes" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <p>Código do projeto clicando no botão a cima</p>
                                <span>WEB E2E + Módulo QR Code Generator em linguagem C</span>
                            </div>
                            <div>
                                <img className="projects-logo" src={logoQrCodeGenerator} alt="Amostra Amazon" ></img>
                            </div>
                            <div className="subContainer-bottom">
                                <ul className="projects-description--container">
                                    <li>
                                        <h3 class="projects-subtitle">BackEnd</h3>
                                        <ul>
                                            <li>Mongoose em linguagem C: <a href="https://mongoose.ws/">Clique AQUI!</a></li>
                                            <li>API Rest em Linguagem C(Apenas o método POST).</li>
                                            <li>API Funcional porém desligado do projeto devido ao aumento de complexidade do trabalho!</li>
                                            <li>Escolher a linguagem C não é recomendável para implementar API's pois não existe muito material sobre.</li>
                                            <li>Mas era regras do trabalho implementar algo em C.</li>
                                            <li>Motivo maior: Pouco desenvolvimento útil e maior parte Configurações de ambiente.</li>
                                            <li>Problema de CORS: A Lib Mongoose não possuí documentações boas sobre, mas acabei resolvendo o problema.</li>
                                            <li>Contribuição no Github: O Problema de cima foi desafiador e eu acabei contribuindo com a solução para a comunidade.</li>
                                            <li>Contribuição com a solução do problema de CORS no Mongoose: <a href="https://github.com/cesanta/mongoose/discussions/1860?fbclid=IwAR1M02dj-ifnabqFVUfR9T_RjOS4A73W980kaGBfjPVXDRJsI45HgNZhZjQ#discussioncomment-4156317">Clique AQUI!</a></li>
                                            <li>Publicação no Facebook sobre: <a href="https://www.facebook.com/photo?fbid=1285811385351916&set=a.323462608253470">Clique AQUI!</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">FrontEnd</h3>
                                        <ul className="projects-frontend--container">
                                            <li>Lib para escanear QR Code: react-qr-reader <a href="https://www.npmjs.com/package/react-qr-reader">Clique AQUI!</a></li>
                                            <li>HTML5 e CSS3: Elementos semânticos, CSS Grid, Flexbox.</li>
                                            <li>ReactJs: Componentes, Props, Eventos, Hooks, Router, Axios.</li>
                                            <li>Apesar de utilizar react, grande parte da lógica esta em JS Vanilla.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">QR Code Generator</h3>
                                        <ul>
                                            <li>Libqrencode-dev em linguagem C (Via apt no repositório Ubuntu): <a href="https://packages.ubuntu.com/search?keywords=libqrencode-dev">Clique AQUI!</a></li>
                                            <li>Utilitário em linha de comando qrencode (Porém não utilizado, desenvolvi a solução "na unha" mesmo): <a href="https://manpages.ubuntu.com/manpages/jammy/man1/qrencode.1.html">Clique AQUI!</a></li>
                                            <li>Obs: O Utilitário a cima só é utilizado para testar a camada de apresentação (escanear) pois a solução desenvolvida a nível didático não gera PNG.</li>
                                            <li>Documentação base (em Japonês) para entendimento das camadas do QR Code em relação a Lib mencionada: <a href="https://coolshell.cn/articles/10590.html">Clique AQUI!</a></li>
                                            <li>Repositório Github Oficial da Lib: <a href="https://github.com/fukuchi/libqrencode">Clique AQUI!</a></li>
                                            <li>Documentação ABNT do trabalho: <a href="https://github.com/WelBert-dev/QRCodeReader_SummarizingInvoiceNotes/blob/main/generatedQRCodeWithLibqrencode/apresentacaoFinalDocs/docs/avaliacaoA2-programacao_de_computadores-15-05-2023.pdf?fbclid=IwAR0uV6sGIkihLfhk1kvJxP5B7EsFLLkQFYu2jfAe4UB8rzMgAsDm_EsnlfM">Clique AQUI!</a></li>
                                            <li>Apresentação em PowerPoint: <a href="https://github.com/WelBert-dev/QRCodeReader_SummarizingInvoiceNotes/blob/main/generatedQRCodeWithLibqrencode/apresentacaoFinalDocs/docs/ceunsp_programacao_de_computadores_QRCode_generator_em_C.pptx">Clique AQUI!</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="projects-subdescription--container">
                                    <h3 class="projects-subtitle">Descrição</h3>
                                    <p>
                                        Trabalho final do primeiro semestre da disciplina Programação de Computadores (CEUNSP) do meu curso CST ADS que iniciei esse ano, 
                                        o professor optou por começar pela linguagem C e não deixou quem já estudava outras tecnologias utilizar elas (No meu caso eu queria 
                                        desenvolver com Java), trabalho de tema livre com apenas uma regra: Utilizar a linguagem C na implementação. Estou em busca de desafios
                                        e então escolhi por desenvolver um algoritmo capaz de gerar QR Codes e após isso escanea-los em outro projeto WEB (ReactJs) 
                                        afim de verificar visualmente a consistência dos resultados. Todo o processo está documentado no padrão ABNT e também fiz uma apresentação em Power Point.
                                        Adorei a escolha e acabei aprendendo bastante sobre as camadas do QR Code e a sua implementação Low Level.
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
                </div>
            </div>
        </section>
    )
};
