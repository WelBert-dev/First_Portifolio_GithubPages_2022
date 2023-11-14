import React from 'react';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import netflixAmostra from '../../../resources/images/projects/NetFlixCloneWeb.gif';

export default function CloneNetflix_reactJs_consuming_API_TMDB_B7Web() {
    return (    
    <article className="projects-single">
        <div className="projects-right">
            <div className="projects-title--container">
                <div>
                    <h3 className="projects-title">Clone Netflix Reactjs consumindo API TMDB</h3>
                    <a href="https://github.com/WelBert-dev/netflixCloneWeb-NoE2E-react" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                </div>
                <span>WEB NoE2E</span>
                <code className="token_reservada --dateOfImplementation">Desenvolvido em 08/07/2022</code>
                <p>Código do projeto clicando no botão acima</p>
            </div>
            <div>
                <img className="projects-logo" src={netflixAmostra} alt="Amostra Netflix" ></img>
            </div>
            <div className="subContainer-bottom">
                <ul className="projects-description--container">
                    <li>
                        <h3 class="projects-subtitle">BackEnd</h3>
                        <ul className="projects-frontend--container">
                            <li>API do TMDB: <span className="-BoldYellow">https://api.themoviedb.org/3</span></li>
                            <li>Lista de filmes categoria originais netflix: <span className="-BoldYellow">"/discover/tv?with_network=213"</span></li>
                            <li>Lista de filmes Recomendados: <span className="-BoldYellow">"/trending/all/week"</span></li>
                            <li>Lista de filmes Em Alta: <span className="-BoldYellow">"/movie/top_rated"</span></li>
                            <li>Lista de filmes categoria Ação: <span className="-BoldYellow">"/discover/movie?with_genres=28"</span></li>
                            <li>Lista de filmes categoria Comédia: <span className="-BoldYellow">"/discover/movie?with_genres=35"</span></li>
                            <li>Lista de filmes categoria Terror: <span className="-BoldYellow">"/discover/movie?with_genres=27"</span></li>
                            <li>Lista de filmes categoria Romance: <span className="-BoldYellow">"/discover/movie?with_genres=10749"</span></li>
                            <li>Lista de filmes categoria Documentário: <span className="-BoldYellow">"/discover/movie?with_genres=99"</span></li>
                            <li>Endpoint detalhes de um filme específico: <span className="-BoldYellow">"/movie/id:int"</span></li>
                            <li>Endpoint detalhes de uma série específica: <span className="-BoldYellow">"/tv/id:int"</span></li>
                            <li>Parâmetro para vir traduzido em pt-BR: <span className="-BoldYellow">"language=pt-BR"</span></li>
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
                    <ul className="projects-description--container">
                        <li>
                            <h3 class="projects-subtitle">Descrição</h3>
                        </li>
                    </ul>
                    <p>
                        Clone da interface netflix web utilizando as ferramentas acima, projeto teoricamente simples porém cheio de detalhes
                        feito quando eu estava começando a estudar Reactjs com apoio do Bonieky do canal B7Web, foi quando eu me interessei
                        pelo ReactJs pois vi o seu potêncial e achei bem interessante, não é atoa que o facebook criador utiliza nos projetos,
                        ótima ferramenta que me fez me interessar bastante pelo frontend, pois até então eu estudava a stack porém, meu forte
                        sempre foi mais as tecnologias backend, foi ai que eu decidi me tornar Full Stack... lógico que é uma escolha bem ousada,
                        mas acredito que com esforço e dedicação eu consigo cumprir essa meta! "Um leão por dia".
                    </p>
                </div>
            </div>
        </div>
    </article>
    )
};
