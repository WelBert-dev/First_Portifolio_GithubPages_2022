import React from 'react';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import './CarrinhoArduinoBluetooth_with_unitTest_trabalho_CEUNSP.css';

import video_carrinho_arduino_bluetooth from '../../../resources/videos/carrinho_arduino_bluetooth.mp4';
import video_testes_unitarios_no_carrinho_arduino_bluetooth from '../../../resources/videos/carrinho_arduino_bluetooth_testes_unitarios.mp4';

export default function CarrinhoArduinoBluetooth_with_unitTest_trabalho_CEUNSP() {
    return (
    <article className="projects-single">
        <div className="projects-right">
            <div className="projects-title--container">
                <div>
                    <h3 className="projects-title">Carrinho Arduíno Bluetooth<br/>Bônus: Testes Unitários de Software</h3>
                    <a href="https://github.com/WelBert-dev/ceunsp/tree/main/ADS-2Semestre-2023/testes_unitarios_carrinho_arduino_bluetooth_trabalho_final" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                </div>
                <span>Trabalho ADS CEUNSP - Disciplinas compartilhadas</span>
                <code className="subtituloOfSingleProject --dateOfImplementation">Desenvolvido em 26/10/2023</code>
                <p>Código do projeto clicando no botão acima</p>
            </div>        
            <div class="video-carrinho-arduino-bluetooth--container--hidden">
                <video className="video-carrinho-arduino-bluetooth--hidden" src={video_carrinho_arduino_bluetooth} type="video/mp4" preload="true" controls></video>
                <video className="video-carrinho-arduino-bluetooth--hidden" src={video_testes_unitarios_no_carrinho_arduino_bluetooth} type="video/mp4" preload="true" controls></video>
            </div>

            <div class="video-carrinho-arduino-bluetooth--container">
                <div class="video-carrinho-arduino-bluetooth-wrapper">
                    <iframe class="video-carrinho-arduino-bluetooth" src={video_carrinho_arduino_bluetooth} frameborder="0" allowfullscreen></iframe>
                </div>
                <div class="video-carrinho-arduino-bluetooth-wrapper">
                    <iframe class="video-carrinho-arduino-bluetooth" src={video_testes_unitarios_no_carrinho_arduino_bluetooth} frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div className="subContainer-bottom">
                <ul className="projects-description--container">
                    <li>
                        <h3 class="projects-subtitle">Overview:</h3>
                        <ul className="projects-frontend--container">
                            <li>Trabalho Final de conclusão do 2o Semestre de ADS no CEUNSP, entre disciplinas compartilhadas.</li>
                            <li>Utilizando o aplicativo android Dabble como interface de comunicação Homen-Máquina.</li>
                            <li>Apesar de utilizarmos como base o seguinte projeto do makerhero, muitas mudanças foram necessárias para funcionar corretamente: <a className="-linkBoldYellowProjects" href="https://www.makerhero.com/blog/como-fazer-um-carrinho-de-controle-remoto-simples-com-bluetooth" target="_blank">Clique AQUI!</a></li>
                            <li>Carrinho controlado via GamePad Module do aplicativo android Dabble.</li>
                            <li>Bateria de testes unitários disparados e monitorados via Terminal Module do mesmo aplicativo, mencionado acima.</li>
                        </ul>
                    </li>
                    <li>
                        <h3 class="projects-subtitle">Primeiros bugs:</h3>
                        <ul className="projects-frontend--container">
                            <li>Lógica não condiz com esquema elétrico apresentado, conexões dos motores das rodas NÃO correspondem ao código fornecido pelo projeto base do makerhero.</li>
                            <li>Direções estavam trocadas, a funcionalidade "para frente" indo "para esquerda", e para os lados também incorretos.</li>
                            <li>SOLUÇÃO: Bastanto extraír o bloco "para esquerda" e plugar no bloco "para frente" e assim por diante, já foi possível resolver.</li>
                        </ul>
                    </li>
                    <li>
                        <h3 class="projects-subtitle">Lib ArduinoUnit:</h3>
                        <ul className="projects-frontend--container">
                            <li>Documentação oficial: <a className="-linkBoldYellowProjects" href="https://github.com/mmurdoch/arduinounit" target="_blank">Clique AQUI!</a></li>
                            <li>Biblioteca do arduíno especializada em testes unitários (bem similar ao JUnit do Java), por meio dos Assertions.</li>

                            <li className="-marginNone--inMobile"><p className="-listItem--inMobile --newThemeBWMCiano">Primeiro devemos definir os métodos de testes, passando como parâmetro qual é o tipo de Assertion que estamos realizando.</p>
                                <p className="main-title--implementFullBlock">Exemplo de teste unitário para o cenário simples "When forward is successful then returns OK":</p>
                                <ul className="main-implementFullBlock--container">
                                <code className="implementFullBlock">                                                    
                                    <code className="-tokenMethod">test</code>(ok) &#123;<br/>
                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">Serial</code>.<code className="-tokenMethod">println</code>(<code className="-tokenString">"- WHEN forward is successful THEN returns OK"</code>);</code><br/>
                                        <code className="-nestedInnerCode"><code className="-tokenMethod">forward</code>(); <span className="-tokenComment">// Método que vamos testar, "para frente".</span></code><br/>
                                        <code className="-nestedInnerCode"><code className="-tokenMethod">assertEqual</code>(<code className="-tokenMethod">digitalRead</code>(<code className="-tokenKeyConstant">INT1</code>, <code className="-tokenKeyConstant">HIGH</code>));</code><br/>
                                        <code className="-nestedInnerCode"><code className="-tokenMethod">assertEqual</code>(<code className="-tokenMethod">digitalRead</code>(<code className="-tokenKeyConstant">INT2</code>, <code className="-tokenKeyConstant">HIGH</code>));</code><br/>
                                        <code className="-nestedInnerCode"><code className="-tokenMethod">assertEqual</code>(<code className="-tokenMethod">digitalRead</code>(<code className="-tokenKeyConstant">INT3</code>, <code className="-tokenKeyConstant">LOW</code>));</code><br/>
                                        <code className="-nestedInnerCode"><code className="-tokenMethod">assertEqual</code>(<code className="-tokenMethod">digitalRead</code>(<code className="-tokenKeyConstant">INT4</code>, <code className="-tokenKeyConstant">LOW</code>));</code><br/>
                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">Serial</code>.<code className="-tokenMethod">println</code>(<code className="-tokenString">"- Finalizou teste SUCCESSFUL no forward..."</code>);</code><br/>
                                    &#125;
                                </code>                                    
                                </ul>
                            </li>   
                            <li>Após definir os métodos de testes, deve-se executar a chamada para o método estático <code className="-efeitoMarcaTexto">Test::run();</code></li>
                            <li>Que inicia a bateria de testes para TODOS os métodos de <code className="-efeitoMarcaTexto">test(ok | bad...)&#123;...&#125;</code> definidos.</li>                        
                        </ul>
                    </li>     
                </ul>
            </div>
        </div>
    </article>
    )
};
