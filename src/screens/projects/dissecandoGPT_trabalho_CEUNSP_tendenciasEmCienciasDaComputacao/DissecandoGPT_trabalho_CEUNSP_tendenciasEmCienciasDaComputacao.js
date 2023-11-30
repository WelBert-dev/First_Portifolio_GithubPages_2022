import React from 'react';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import './DissecandoGPT_trabalho_CEUNSP_tendenciasEmCienciasDaComputacao.css';

import video_sobre_ia_feito_com_ia from '../../../resources/videos/inteligncia-artificial.mp4';

export default function DissecandoGPT_trabalho_CEUNSP_tendenciasEmCienciasDaComputacao() {
    return (
    <article className="projects-single">
        <div className="projects-right">
            <div className="projects-title--container">
                <div>
                    <h3 className="projects-title">Dissecando Inteligência Artificial Generativa<br/>Como o GPT gera as respostas em baixo nível</h3>
                    <a href="
https://github.com/WelBert-dev/ceunsp/tree/main/ADS-2Semestre-2023/tendencias_em_ciencias_da_computacao_optativa" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                </div>
                <span>Trabalho ADS CEUNSP - Tendências em Ciências da Computação.</span>
                <code className="subtituloOfSingleProject --dateOfImplementation">Desenvolvido em 29/09/2023 até 28/11/2023</code>
                <p>Artefatos, rascunhos e documentos em formato ABNT no botão acima.</p>
            </div>
            <ul className="projects-description--container">
                <li>
                    <span class="-spanOfLinkAkitaDesbAlgTwitter">Bônus: Vídeo sobre Inteligência Artificial feito com Inteligência Artificial.</span>
                </li>
            </ul>
            <div className="video-sobre-ia-feito-com-ia--container"> 
                <video className="video-sobre-ia-feito-com-ia" src={video_sobre_ia_feito_com_ia} type="video/mp4" preload="true" controls></video>
            </div>
            <div className="subContainer-bottom">
                <ul className="projects-description--container">
                    <li>
                        <h3 class="projects-subtitle">Overview:</h3>
                        <ul className="projects-frontend--container">
                            <li>Apesar de ser trabalho da faculdade, eu já conhecia há muito tempo.</li>
                            <li>Antes do hype gerado pela interface web, o GPT já era bastante conhecido e utilizado pela bolha Dev.</li>
                            <li>Sem dúvida, a melhor generativa de hoje e marcou 2023 como o início da revolução das Inteligências Artificiais.</li>
                            <li>O trabalho é dividido em duas (2) partes: uma criar um artefato em formato ABNT sem utilizar o GPT.</li>
                            <li>E depois outro artefato, porém utilizando o GPT para melhorar o documento original, mencionado no ponto acima.</li>
                            <br/>
                            <li>BÔNUS: Acima está um vídeo sobre Inteligência Artificial, feito com Inteligência Artificial.</li>
                            <li>Obs: Apenas o VÍDEO foi gerado com Inteligência Artificial, o conteúdo foi com base em meus estudos.</li>
                        </ul>
                    </li>
                    <li>
                        <h3 class="projects-subtitle">Tópicos abordados:</h3>
                        <ul className="projects-frontend--container">
                            <li>O que é o GPT e como ele gera as respostas na sua implementação em baixo nível.</li>
                            <li>Cadeias de Markov, que é o algoritmo "Pai" dessas generativas mais modernas.</li>
                            <li>Como foi o treinamento do modelo: </li>
                            <li>Grande maior parte dos dados são em inglês devido a qualidade de artigos científicos em inglês ser superior (Pelo menos quando o assunto é tecnologia).</li>
                            <li>E a maior parte da World Wide Web (www) é em inglês (50%): Fonte: <a className="-linkBoldYellowProjects" href="https://w3techs.com/technologies/history_overview/content_language/ms/y" target="_blank">Clique AQUI!</a></li>
                            <li>Por conta do ponto acima, as respostas vão conter fortes viéses puxados para a cultura Inglesa.</li>
                            <li>Podemos comprovar o ponto acima se perguntar "Quem foi o inventor do avião" no chatGPT, a resposta será "Os irmãos Orville e Wilbur Wright", e não o "Santos Dumont" que aprendemos nas escolas brasileiras.</li>
                            <li>Por conta também do ponto acima, devemos nos atentar a palavras que não possuem tradução, ou a contextos especifícos da cultura brasileira.</li>
                            <li>Por exemplo, as palavras "Saudade" e "Gambiarra" não possuem tradução para o inglês.</li>
                            <li>Explicamos também as diferenças entre o GPT e corretores ortográficos.</li>
                            <li>Pois em baixo nível, eles utilizam a mesma técnica que prevê sequências de palavras, dado uma sequência inicial.</li>
                            <li>A principal diferença entre os dois, é que os corretores ortográficos não consideram muitas palavras nesta sequência, na hora de probabilizar a próxima palavra mais provável.</li>
                            <li>Ao contrário dos corretores ortográficos, modelos de linguagem levam em conta o contexto mais amplo da frase para gerar previsões mais precisas e contextuais.</li>
                            <li>O que é o tal "contexto" no contexto de Inteligência Artificial Generativa?</li>
                            <li>Similaridade entre palavras por conta do ponto acima (Exemplo: Banana tem similaridade com maçã).</li>
                            <li>Semântica (Significado) das palavras, também por conta do ponto acima (É dado de acordo com os tokens vizinhos).</li>
                            <li>Graças a esses mecanismos o GPT consegue resumir textos por exemplo, pois ele sabe identificar palavras-chave.</li>
                            <li>Ele faz isso removendo as redundâncias (palavras que não trasmitem a mensagem principal) em volta das palavras-chave.</li>
                            <li>Palavras-chave são aquelas que aparecem em contextos específicos:</li>
                            <li>"Java" é um exemplo de palavra-chave pois ele aparece em contextos especifícos de T.I, diferente de "Portanto" que aparece em todos contextos.</li>
                            <li>Como fazer boas perguntas para obter boas respostas: A primeira camada é uma I.A treinada constantemente com perguntas.</li>
                            <li>Então, quanto melhor for o formato de nossas perguntas em relação a formatos "comuns" para perguntas, melhor será os resultados.</li>
                            <li>O que são N-Grams, ou tokens, não são apenas "Palavras" simples, mas sim o padrão que o modelo aprendeu durante o treinamento:</li>
                            <li>Isso pode ser caracteres, palavras, ou até mesmo conjunto de várias palavras que "aparecem" bastante vezes juntas.</li>
                            <li>Podemos comprovar o ponto acima se pesquisar por "fairenhait" no google, a primeira sujestão que ele vai dar é "fahrenheit" justamente o que queremos.</li>
                            <li>Isso ocorre pois o "padrão" identificado no treinamento está considerando caracteres, ou seja, as duas palavras são similares pois os caracteres vizinhos entre elas são bem próximos, porém "embaralhado".</li>
                            <li>Isso implica que, o modelo não entende o que é a palavra, mas sim quais são as palavras vizinhas dela, e esse será o significado desse token em observação.</li>
                            <li>Na prática, isso está intrinsecamente ligado ao contexto (Quem são os vizinhos dessa palavra?).</li>
                            <li>O que são os viéses em sistemas inteligentes, e porque eles devem ser observados.</li>
                            <li>Ética e Moral em Inteligência Artificial, e os problemas que os viéses não observados podem levar.</li>
                            <li>Existem três características nos dados que conduzem o aprendizado de máquina, e se não se atentar podem influenciar em problemas relacionados a Ética e Moral:</li>
                            <li>Não existe base de dados neutra.</li>
                            <li>Os conhecimentos contidos nas bases de dados tem validade.</li>
                            <li>Às vezes existem vieses escondidos nos dados.</li>
                            <br/>
                            <li>Bônus de conhecimento extra e que casou com o tema "Ética e Moral" da última parte do trabalho:</li>
                            <li>O primeiro conhecimento do homem, também foi o primeiro pecado do homem, e além disto foi o surgimento do conhecimento, e indo além foi o surgimento da Ética e Moral, de acordo com o vídeo: <a className="-linkBoldYellowProjects" href="https://www.youtube.com/watch?v=JvKyjPDASx0&t=565s" target="_blank">Clique AQUI!</a></li>
                        </ul>
                    </li>
                    <li>
                        <h3 class="projects-subtitle">Inteligências Artificiais úteis:</h3>
                        <ul className="projects-frontend--container">
                            <li>Otimizar imagens (Macete possibilita aplicar em Vídeos): Real-ESRGAN.</li>
                            <li>Criador de Mapa Mental com I.A (Roadmap): X Mind Copilot.</li>
                            <li>Resumir Streaming Ao Vivo com I.A: tldv.io</li>
                            <li>Encontrar qualquer artigo: Scispace.</li>
                            <li>Conversar com livros ou documentos PDF: chatPDF.</li>
                            <li>Criar apresentações estilo Power Point: Gamma.</li>
                            <li>Humanizar textos: Quillbot.</li>
                            <li>Resumir Videos: Aizzy AI.</li>
                            <li>Converter textos em vídeos: Runwayml, e Fliki-ai.</li>
                            <li>Criar imagens apartir de prompts: DALL-E, Midjourney e Seaart.ia</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </article>
    )
};
