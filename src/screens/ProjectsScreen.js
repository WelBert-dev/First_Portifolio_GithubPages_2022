import React, { useEffect } from 'react';

import './ProjectsScreen.css';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import amazonAmostra from '../resources/amazona.jpg';
import netflixAmostra from '../resources/NetFlixCloneWeb.gif';
import auauMiauNoFrameworkAmostra from '../resources/auauMiauNoFramework.png';
import restauranteIfspAmostra from '../resources/restauranteIfspAmostra.png';
import logoQrCodeGenerator from '../resources/logo-qrcodeGeneratorInC.png';
import logoVideoSummaryGeneratorWithGPT from '../resources/logo-videoSummaryGeneratorWithGPT.png';
import logoVideoAkitaExemploCap07 from '../resources/logo-videoAkita-videoSummaryGeneratorWithGPT.png';

export default function ProjectsScreen() {

    return (
        <section id="main-projects--container">
            <div>
                <h1 className="main-title">&lsaquo;Projetos&rsaquo;</h1>
                <div className="wrapper-projects">
                    <article className="projects-single">
                        <div className="projects-right">
                            <div className="projects-title--container">
                                <div>
                                    <h3 className="projects-title">Gerador de Resumos de Vídeos com Inteligência Artificial</h3>
                                    <a href="https://github.com/WelBert-dev/ExtractTranscriptFromVideoAndSummarizingGeneratorUsingGPT/tree/main" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span>Ciência de Dados: Utilizando GPT e Whisper</span>
                                <code className="token_reservada --dateOfImplementation">Desenvolvido em 18/05/2023</code>
                                <p>Código do projeto clicando no botão acima</p>
                            </div>
                            <div>
                                <ul className="projects-description--container">
                                    <li>
                                        <span class="-spanOfLinkAkitaDesbAlgTwitter">Vídeo completo do Youtube e já carregando apartir do Capítulo 07 do exemplo em: <a className="-linkBoldYellowProjects" href="https://www.youtube.com/watch?v=uIflMYQnp8A#t=27m50s" target="_blank">Clique AQUI!</a></span>
                                        <h3 class="projects-subtitle">Vídeo EXEMPLO (CAP07):</h3>
                                    </li>
                                </ul>
                                <img className="projects-logo" src={logoVideoAkitaExemploCap07} alt="Amostra Amazon" ></img>
                                <ul className="projects-description--container">
                                    <li> <h3 class="projects-subtitle">RESULTADO Gerado: </h3></li>
                                </ul>
                                <img className="projects-logo" src={logoVideoSummaryGeneratorWithGPT} alt="Amostra Amazon" ></img>
                            </div>
                            <div className="subContainer-bottom">
                                <ul className="projects-description--container">
                                    <li>
                                        <h3 class="projects-subtitle">Whiper (OpenAI)</h3>
                                        <ul className="projects-frontend--container">
                                            <li>Inteligência Artificial para extrair textos de áudios.</li>
                                            <li>Essas extrações são chamadas de "Transcript" que é a representação do áudio em arquivo texto.</li>
                                            <li>A entrada do Whisper é áudio, logo, devemos converter o vídeo em áudio.</li>
                                            <li>Open Source, ou seja, podemos instalar e executar em ambiente Local.</li>
                                            <li>MIT License.</li>
                                            <li>Apesar de ser Open Source, executar localmente exige boa capacidade de hardware (O que não é meu caso rsrs).</li>
                                            <li>Existem 5 módulos, cada um com um tamanho diferente, e automaticamente diferentes capacidades de processamento e resultados.</li>
                                            <li>Tiny: Módulo mais básico, 39M de parameters, não exige tanto poder de hardware/processamento (min de VRAM 1GB) e 32x velocidade.</li>
                                            <li>Base: Módulo mais básico, com mesmo VRAM do anterior porém menor velocidade e mais parâmetros de entrada 74M de parameters e 16x velocidade.</li>
                                            <li>Small: Mediano, 244M de parameters, já exige maior capacidade de hardware/processamento (min de VRAM 2GB) e 6x velocidade.</li>
                                            <li>Medium: Intermediário, 769M de parameters, também exige maior processamento (min de VRAM 5GB) e 2x velocidade.</li>
                                            <li>Large: Maior, 1550M de parameters, mais exigênte (min de VRAM 10GB) e 1x velocidade, ou seja, o Tiny é 32 vezes mais rápido.</li>
                                            <li>O Medium é o melhor em relação ao custo x beneficio para gerar transcripts de vídeos técnicos (pois os outros pecam e erram bastante).</li>
                                            <li>Tentei executar o Small em ambiente local, mas meus 4GB de RAM não suportaram! então executei no Google Colab.</li>
                                            <li>Executando no Google Colab tive um bom processamento utilizando o Small, demorando em média 3 minutos a baixo do tempo do vídeo para gerar todo o transcript.</li>
                                            <li>Ou seja, o processo mais demorado na geração dos resumos é a extração dos Transcripts, em melhor cenário optar pela API Whisper.</li>
                                            <li>Além do poder de processamento da API ser considerável, também é possível passar prompts para melhor acurar e identificar palavras técnicas corretamente durante as extrações.</li>
                                            <li>Porém utilizar a API é um serviço pago! então tive que utilizar a versão manual hardcoded mesmo rsrs...</li>
                                            <li>Arquivo gerado do Google Colab dessas extrações (Basta editar para suas necessidades): <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/ExtractTranscriptFromVideoAndSummarizingGeneratorUsingGPT/blob/main/google_colab/audioToTranscription_withWhisperOpenAI.ipynb" target="_blank">Clique AQUI!</a></li>
                                            <li>Para executar localmente, basta clonar o repositório git e seguir o get started: <a className="-linkBoldYellowProjects" href="https://github.com/openai/whisper/" target="_blank">Clique AQUI!</a></li>
                                            <li>Finalizado o processo, aqui conseguimos extrair o Transcript do áudio localmente ou utilizando processamento em nuvem (Google Colab).</li>
                                            <li>A nível de curiosidade os transcripts que eu gerei estão em: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/ExtractTranscriptFromVideoAndSummarizingGeneratorUsingGPT/tree/main/transcriptions" target="_blank">Clique AQUI!</a></li>

                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">ChatGPT (OpenAI)</h3>
                                        <ul className="projects-frontend--container">
                                            <li>Inteligência Artificial super poderosa, capaz de realizar VÁRIAS tarefas em cima do Transcript!</li>
                                            <li>Apesar da API do GPT-3 Turbo ser gratuíta, o limite excede devido a quantidade de dados (Transcripts geralmente são ENORMES).</li>
                                            <li>Porisso não foi possível automatizar essas tarefas em uma interface de apresentação (Frontend).</li>
                                            <li>Até mesmo utilizando o GPT pelo chat não é possível enviar transcripts grandes.</li>
                                            <li>Então a solução é fragmentar esses transcripts grandes em vários outros de acordo com algum critério.</li>
                                            <li>Dica: As vezes o próprio produtor de conteúdos no Youtube por exemplo, fragmenta o vídeo em breakpoints de assuntos. (CAP01, CAP02...)</li>
                                            <li>Prompt Engineering: Basicamente especialista em contextualizar perguntas/respostas para Inteligências Artificiais.</li>
                                            <li>Devemos realizar boas perguntas com o maior contexto possível sobre o assunto do vídeo e também contextualizar a resposta desejada do chat. (Isso é o prompt).</li>
                                            <li>Essa é a parte mais difícil do processo, por isso separei em diretórios "prompt01, prompt02..." para realizar melhorias contínuas, ajustando e testando em vários ciclos.</li>
                                            <li>Os prompts que eu fiz estão em: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/ExtractTranscriptFromVideoAndSummarizingGeneratorUsingGPT/blob/main/promptsList.txt" target="_blank">Clique AQUI!</a></li>
                                            <li>Aonde está "&#x0007B;transcribe&#x0007D;" é aonde colamos o transcript fragmentado.</li>
                                            <li>Pronto, basta integrar o transcript com uma boa pergunta (prompt) para o ChatGPT gerar os resumos desejados! ;D</li>
                                            <li>A nível de curiosidade os resumos que eu gerei estão separados por prompts em: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/ExtractTranscriptFromVideoAndSummarizingGeneratorUsingGPT/tree/main/summaries_generated" target="_blank">Clique AQUI!</a></li>
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
                                        A Ideia surgiu com o vídeo da rocketseat, aonde o produtor fala sobre estar criando o projeto e explica o overview do fluxograma, e com base nessas informações eu fui atrás da solução completa.
                                        Para obter um resultado mais preciso é recomendável utilizar a API do Whisper na extração do Transcript pois ela possibilita enviar prompts como parâmetros junto com o áudio, assim
                                        a Inteligência Artificial identifica melhor as palavras técnicas ditas no vídeo, pois gerar transcripts de vídeos técnicos é complicado, uma vez que as palavras chaves não existe em dicionários, ou não é muito comum fora do contexto de programação e desenvolvimento de softwares.
                                        Porém como mencionado nas seções acima, a API do Whisper e do GPT-3 Turbo é um serviço pago, devido a quantidade de entrada de dados exceder o limite Free.
                                        Logo, o sistema que eu desenvolvi é totalmente manual, e devemos executar o passo a passo na mão se queres executar de maneira FREE rsrs, mas como dito nas seções anteriores o fluxograma é até que simples, ja está tudo pronto e basta adaptar pequenos trechos para as suas necessidades.
                                        Seguindo o passo a passo das seções anteriores é possível obter ótimos resultados! Adorei desenvolver essa solução e está sendo bem útil nas pós anotações das vídeos aulas.
                                        Publicação mais completa no facebook: <a className="-linkBoldYellowProjects" href="https://www.facebook.com/photo/?fbid=1289365691663152&set=a.601406970459031" target="_blank">Clique AQUI!</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <hr />
                    <article className="projects-single">
                        <div className="projects-right">
                            <div className="projects-title--container">
                                <div>
                                    <h3 className="projects-title">QR Code Generator (C Language) + Scanner WEB (Reactjs)</h3>
                                    <a href="https://github.com/WelBert-dev/QRCodeReader_SummarizingInvoiceNotes" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span>WEB E2E + Módulo QR Code Generator em linguagem C</span>
                                <code className="token_reservada --dateOfImplementation">Desenvolvido em 05/05/2023</code>
                                <p>Código do projeto clicando no botão acima</p>
                            </div>
                            <div>
                                <img className="projects-logo" src={logoQrCodeGenerator} alt="Amostra Amazon" ></img>
                            </div>
                            <div className="subContainer-bottom">
                                <ul className="projects-description--container">
                                    <li>
                                        <h3 class="projects-subtitle">BackEnd</h3>
                                        <ul className="projects-frontend--container">
                                            <li>Mongoose em linguagem C: <a className="-linkBoldYellowProjects" href="https://mongoose.ws/" target="_blank">Clique AQUI!</a></li>
                                            <li>API Rest em Linguagem C (Apenas o método POST).</li>
                                            <li>API Funcional porém desligado do projeto devido ao aumento de complexidade do trabalho!</li>
                                            <li>Escolher a linguagem C não é recomendável para implementar API's pois não existe muito material sobre.</li>
                                            <li>Mas era regras do trabalho implementar algo em C.</li>
                                            <li>Motivo maior: Pouco desenvolvimento útil e maior parte Configurações de ambiente.</li>
                                            <li>Problema de CORS: A Lib Mongoose não possuí documentações boas sobre, mas acabei resolvendo o problema.</li>
                                            <li>Contribuição no Github: O Problema de cima foi desafiador e eu acabei contribuindo com a solução para a comunidade.</li>
                                            <li>Contribuição com a solução do problema de CORS no Mongoose: <a className="-linkBoldYellowProjects" href="https://github.com/cesanta/mongoose/discussions/1860?fbclid=IwAR1M02dj-ifnabqFVUfR9T_RjOS4A73W980kaGBfjPVXDRJsI45HgNZhZjQ#discussioncomment-4156317" target="_blank">Clique AQUI!</a></li>
                                            <li>Publicação no Facebook sobre: <a className="-linkBoldYellowProjects" href="https://www.facebook.com/photo?fbid=1285811385351916&set=a.323462608253470" target="_blank">Clique AQUI!</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">FrontEnd</h3>
                                        <ul className="projects-frontend--container">
                                            <li>Lib para escanear QR Code: react-qr-reader <a className="-linkBoldYellowProjects" href="https://www.npmjs.com/package/react-qr-reader" target="_blank">Clique AQUI!</a></li>
                                            <li>HTML5 e CSS3: Elementos semânticos, CSS Grid, Flexbox.</li>
                                            <li>ReactJs: Componentes, Props, Eventos, Hooks, Router, Axios.</li>
                                            <li>Apesar de utilizar react, grande parte da lógica esta em JS Vanilla.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">QR Code Generator</h3>
                                        <ul className="projects-frontend--container">
                                            <li>Libqrencode-dev em linguagem C (Via apt no repositório Ubuntu): <a className="-linkBoldYellowProjects" href="https://packages.ubuntu.com/search?keywords=libqrencode-dev" target="_blank">Clique AQUI!</a></li>
                                            <li>Utilitário em linha de comando qrencode (Porém não utilizado, desenvolvi a solução "na unha" mesmo): <a className="-linkBoldYellowProjects" href="https://manpages.ubuntu.com/manpages/jammy/man1/qrencode.1.html" target="_blank">Clique AQUI!</a></li>
                                            <li>Obs: O Utilitário acima só é utilizado para testar a camada de apresentação (escanear) pois a solução desenvolvida a nível didático não gera PNG.</li>
                                            <li>Documentação base (em Japonês) para entendimento das camadas do QR Code em relação a Lib mencionada: <a className="-linkBoldYellowProjects" href="https://coolshell.cn/articles/10590.html" target="_blank">Clique AQUI!</a></li>
                                            <li>Repositório Github Oficial da Lib: <a className="-linkBoldYellowProjects" href="https://github.com/fukuchi/libqrencode" target="_blank">Clique AQUI!</a></li>
                                            <li>Documentação ABNT do trabalho: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/QRCodeReader_SummarizingInvoiceNotes/blob/main/generatedQRCodeWithLibqrencode/apresentacaoFinalDocs/docs/avaliacaoA2-programacao_de_computadores-15-05-2023.pdf?fbclid=IwAR0uV6sGIkihLfhk1kvJxP5B7EsFLLkQFYu2jfAe4UB8rzMgAsDm_EsnlfM" target="_blank">Clique AQUI!</a></li>
                                            <li>Apresentação em PowerPoint: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/QRCodeReader_SummarizingInvoiceNotes/blob/main/generatedQRCodeWithLibqrencode/apresentacaoFinalDocs/docs/ceunsp_programacao_de_computadores_QRCode_generator_em_C.pptx" target="_blank">Clique AQUI!</a></li>
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
                                        Trabalho final do primeiro semestre da disciplina Programação de Computadores (CEUNSP) do meu curso CST ADS que iniciei esse ano,
                                        o professor optou por começar pela linguagem C e não deixou quem já estudava outras tecnologias utilizar elas (No meu caso eu queria
                                        desenvolver com Java), trabalho de tema livre com apenas uma regra: Utilizar a linguagem C na implementação. Estou em busca de desafios
                                        e então escolhi por desenvolver um algoritmo capaz de gerar QR Codes e após isso escanea-los em outro projeto WEB (ReactJs)
                                        afim de verificar visualmente a consistência dos resultados. Todo o processo está documentado no padrão ABNT e também fiz uma apresentação em Power Point (Links na seção de cima).
                                        Adorei a escolha e acabei aprendendo bastante sobre as camadas do QR Code e a sua implementação Low Level.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <hr />
                    <article className="projects-single">
                        <div className="projects-right">
                            <div className="projects-title--container">
                                <div>
                                    <h3 className="projects-title">Restaurante IFSP Springboot e ReactJs</h3>
                                    <a href="https://github.com/WelBert-dev/backupLg3Ecommerce-Springboot" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span>WEB E2E</span>
                                <code className="token_reservada --dateOfImplementation">Desenvolvido em 12/10/2022</code>
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
                                            <li>ReactJs: Componentes, Props, Eventos, Hooks, Router.</li>
                                            <li>Redux: Store, Reducers, Actions.</li>
                                            <li>Dependência de desenvolvimento: ESLint.</li>
                                            <li>Apesar de utilizar react, grande parte da lógica esta em JS Vanilla.</li>
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
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <hr />
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
                    <hr />
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
                    <hr />
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
                </div>
            </div>
        </section>
    )
};
