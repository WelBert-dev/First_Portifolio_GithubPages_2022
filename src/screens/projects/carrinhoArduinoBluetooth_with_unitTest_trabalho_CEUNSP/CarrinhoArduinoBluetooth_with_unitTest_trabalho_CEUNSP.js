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

                    <li>
                        <h3 class="projects-subtitle">Terminal Module Dabble:</h3>
                        <ul className="projects-frontend--container">
                            <li>Documentação oficial: <a className="-linkBoldYellowProjects" href="https://ai.thestempedia.com/docs/dabble-app/terminal-module/" target="_blank">Clique AQUI!</a></li>
                            <li>Pelo Terminal Module do aplicativo android Dabble é possível realizar trocas de mensagem texto entre o celular e o arduíno via bluetooth.</li>
                            <li>E de acordo com essas mensagens podemos realizar diversas ações no arduíno.</li>
                            <li>Neste caso, quando enviado um "t" a bateria de testes unitários é iniciada.</li>
                            <li>A utilização é bem simples, basta instalar a biblioteca do Dabble pelo gerenciador de dependências da IDE.</li>
                            <li>Depois, é só realizar o include do <code className="-efeitoMarcaTexto">#include &#60;Dabble.h&#62;</code> e <code className="-efeitoMarcaTexto">#define INCLUDE_TERMINAL_MODULE</code></li>
                        
                            <li className="-marginNone--inMobile"><p className="-listItem--inMobile --newThemeBWMCiano">Após configurações de ambiente finalizadas, basta utilizar blocos switch-case ou similar para aplicar lógicas quando "t" for recebido.</p>
                                <p className="main-title--implementFullBlock">Exemplo de utilização do Terminal Module, quando receber "t" bateria de testes unitários é iniciada:</p>
                                <ul className="main-implementFullBlock--container">
                                <code className="implementFullBlock"> 
                                    <code className="-tokenClassEntity">String</code> serialdata = <code className="-tokenString">""</code>;<br/>
                                    <code className="-tokenKeyword">bool</code> dataflag = <code className="-tokenKeyConstant">0</code>;<br/>
                                    <br/>
                                    <code className="-tokenKeyword">void</code> <code className="-tokenMethod">loop</code>() &#123;<br/>  
                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">Dabble</code>.<code className="-tokenMethod">processInput</code>();</code><br/>
                                        <br/>
                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">while</code> (<code className="-tokenClassEntity">Serial</code>.<code className="-tokenMethod">available</code>() != <code className="-tokenKeyConstant">0</code>) &#123;</code><br/>
                                            <code className="-nestedInnerCode --2Identation">serialdata = <code className="-tokenClassEntity">String</code>(serialdata + <code className="-tokenKeyword">char</code>(<code className="-tokenClassEntity">Serial</code>.<code className="-tokenMethod">read</code>()));</code><br/>
                                            <code className="-nestedInnerCode --2Identation">dataflag = <code className="-tokenKeyConstant">1</code>;</code><br/>
                                        <code className="-nestedInnerCode">&#125;</code><br/>

                                        <br/>
                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">if</code>(dataflag == <code className="-tokenKeyConstant">1</code>) &#123;</code><br/>
                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenClassEntity">Terminal</code>.<code className="-tokenMethod">print</code>(serialdata);</code><br/>
                                            <code className="-nestedInnerCode --2Identation">serialdata = <code className="-tokenString">""</code>;</code><br/>
                                            <code className="-nestedInnerCode --2Identation">dataflag = <code className="-tokenKeyConstant">0</code>;</code><br/>
                                        <code className="-nestedInnerCode">&#125;</code><br/>

                                        <br/>
                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">if</code>(<code className="-tokenClassEntity">Terminal</code>.<code className="-tokenMethod">available</code>()) &#123;</code><br/>
                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenKeyword">while</code> (<code className="-tokenClassEntity">Terminal</code>.<code className="-tokenMethod">available</code>() != <code className="-tokenKeyConstant">0</code>) &#123;</code><br/>
                                                <code className="-nestedInnerCode --3Identation"><code className="-tokenKeyword">char</code> command = (<code className="-tokenKeyword">char</code>) <code className="-tokenClassEntity">Terminal</code>.<code className="-tokenMethod">read</code>();</code><br/>
                                                
                                                <br/>
                                                <code className="-nestedInnerCode --3Identation"><code className="-tokenKeyword">switch</code> ((<code className="-tokenKeyword">char</code>)command) &#123;</code><br/>
                                                    <code className="-nestedInnerCode --4Identation"><code className="-tokenKeyword">case</code> <code className="-tokenString">'t'</code>:</code><br/>
                                                        <code className="-nestedInnerCode --5Identation"><code className="-tokenMethod">run_all_unit_test</code>();</code><br/>
                                                        <code className="-nestedInnerCode --5Identation"><code className="-tokenKeyword">break</code>;</code><br/>

                                                    <code className="-nestedInnerCode --4Identation"><code className="-tokenKeyword">default</code>:</code><br/>   
                                                        <code className="-nestedInnerCode --5Identation"><code className="-tokenMethod">stop</code>();</code><br/>
                                                        <code className="-nestedInnerCode --5Identation"><code className="-tokenKeyword">break</code>;</code><br/>
                                                                                   
                                                <code className="-nestedInnerCode --3Identation">&#125;</code><br/>
                                            <code className="-nestedInnerCode --2Identation">&#125;</code><br/>
                                        <code className="-nestedInnerCode">&#125;</code><br/>
                                    &#125;  
                                </code>                                    
                                </ul>
                            </li>   
                        </ul>
                    </li>

                    <li>
                        <h3 class="projects-subtitle">ArduinoUnit e Polimorfismo:</h3>
                        <ul className="projects-frontend--container">
                            <li>A saída padrão dos resultados dos testes para monitoramentos e feedbacks sobre eles, é por meio do stdout <code className="-efeitoMarcaTexto">Serial.print...()</code> nativo do arduíno.</li>
                            <li>Ou seja, para debbugar e verificar esses resultados, deve-se estar com o arduíno conectado no computador via cabo USB.</li>
                            <li>E visualizar por meio da janela serial do ArduínoIDE.</li>
                            <li>Porém isso é bem chato e desgastante, então resolvi me desafiar ainda mais.</li>
                            <li>Estamos com uma conexão Bluetooth estabelecida entre o celular e o carrinho.</li>
                            <li>Então podemos utilizar o mesmo ambiente como interface de comunicação homen-máquina, para monitoramento dos testes: Aplicativo Android Dabble - Terminal Module.</li>
                            <li>Com uso do polimorfismo, podemos implementar uma classe compatível com <code className="-efeitoMarcaTexto">Print</code> herdando dele.</li>
                            <li>Pois "por debaixo dos panos" a biblioteca ArduinoUnit utiliza os métodos dele para realizar impressões print, uma vez que ele é a super classe do <code className="-efeitoMarcaTexto">Serial</code></li>
                            <li className="-marginNone--inMobile"><p className="-listItem--inMobile --newThemeBWMCiano">Então basta sobrescrever o método <code className="-efeitoMarcaTexto">write()</code> do <code className="-efeitoMarcaTexto">Print</code>, pois ele é executado por todos os métodos de impressões do <code className="-efeitoMarcaTexto">Serial.print...()</code></p>
                                <p className="main-title--implementFullBlock">Exemplo de classe compatível com Print utilizando polimorfismo por meio de herança:</p>
                                <ul className="main-implementFullBlock--container">
                                <code className="implementFullBlock">    

                                    <code className="-tokenKeyword">class</code> <code className="-tokenClassEntity">PrintAdapterArduinoUnitToTerminalDabble</code> : <code className="-tokenKeyword">public</code> <code className="-tokenClassEntity">Print</code> &#123;<br/>
                                    <code className="-tokenKeyword">public:</code><br/>
                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">String</code> buffer;</code><br/>

                                        <br/>
                                        <code className="-nestedInnerCode"><code className="-tokenKeyConstant">size_t</code> <code className="-tokenMethod">write</code>(<code className="-tokenKeyConstant">uint8_t</code> c) <code className="-tokenKeyword">override</code> &#123;</code><br/>
                                        <code className="-nestedInnerCode --2Identation">buffer += (<code className="-tokenKeyword">char</code>) c;</code><br/>
                                        <code className="-nestedInnerCode --2Identation"><code className="-tokenKeyword">return</code> <code className="-tokenKeyConstant">1</code>;</code><br/>
                                        <code className="-nestedInnerCode">&#125;</code><br/>

                                        <br/>
                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">void</code> <code className="-tokenMethod">sendMsgToTerminalDabble</code>() &#123;</code><br/>
                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenClassEntity">Terminal</code>.<code className="-tokenMethod">print</code>(buffer);</code><br/>
                                            <code className="-nestedInnerCode --2Identation">buffer = <code className="-tokenString">""</code>; <span className="-tokenComment">// Limpa o buffer após o envio.</span></code><br/>
                                        <code className="-nestedInnerCode">&#125;</code><br/>

                                        <br/>
                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">void</code> <code className="-tokenMethod">sendMsgToTerminalDabble</code>(<code className="-tokenClassEntity">String</code> message) &#123;</code><br/>
                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenClassEntity">Terminal</code>.<code className="-tokenMethod">println</code>(message);</code><br/>
                                        <code className="-nestedInnerCode">&#125;</code><br/>
    
                                    &#125;<br/>

                                    <br/>
                                    <code className="-tokenClassEntity">PrintAdapterArduinoUnitToTerminalDabble</code> myPrintAdapter_arduinoUnitStdout_toTerminalDabbleBluetooth;     
                                </code>                                    
                                </ul>
                            </li>  
                            <li className="-marginNone--inMobile"><p className="-listItem--inMobile --newThemeBWMCiano">E depois, alterar o ponteiro padrão do <code className="-efeitoMarcaTexto">Test::out = &Serial;</code> para uma instância da classe compatível com <code className="-efeitoMarcaTexto">Print</code> criado por nós anteriormente.</p>
                                <p className="main-title--implementFullBlock">Exemplo de como alterar o ponteiro, não precisa ser necessáriamente neste bloco, mas deve ser executado antes da bateria de testes unitários:</p>
                                <ul className="main-implementFullBlock--container">
                                <code className="implementFullBlock">    

                                    <code className="-tokenKeyword">void</code> <code className="-tokenMethod">setup</code>() &#123;<br/>
                                        <code className="-nestedInnerCode">...</code><br/>
                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">Test</code>::<code className="-tokenMethod">out</code> =  &myPrintAdapter_arduinoUnitStdout_toTerminalDabbleBluetooth;</code><br/>
                                        <code className="-nestedInnerCode">...</code><br/>
                                    &#125;
                                </code>                                    
                                </ul>
                            </li>  

                            <li>Desta forma, podemos personalizar as regras de saída serial, redirecionando todas as impressões para outros módulos do projeto.</li>
                            <li>Neste caso, redirecionamos para o Terminal Module, que é outra funcionalidade do aplicativo android Dabble.</li>

                            <li className="-marginNone--inMobile"><p className="-listItem--inMobile --newThemeBWMCiano">Executamos essa ação após finalizar toda a bateria de testes unitários, enviando o buffer acumulado.</p>
                                <p className="main-title--implementFullBlock">Exemplo de chamada para execução da bateria de testes, e após finalizado, envia o feedback dos testes acumulados no buffer:</p>
                                <ul className="main-implementFullBlock--container">
                                <code className="implementFullBlock">    
                                    <code className="-tokenKeyword">int</code> count = <code className="-tokenKeyConstant">0</code>;<br/>
                                    <code className="-tokenKeyword">int</code> qtde_execution_all_tests_cases = <code className="-tokenKeyConstant">1</code>;<br/>

                                    <br/>
                                    <code className="-tokenKeyword">void</code> <code className="-tokenMethod">run_all_unit_test</code>() &#123;<br/>

                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">while</code> (count &#62;= qtde_execution_all_tests_cases) &#123;</code><br/>

                                        <code className="-nestedInnerCode --2Identation"><code className="-tokenMethod">sendMsgToTerminalDabble</code>(<code className="-tokenString">"Teste Número: "</code>+<code className="-tokenClassEntity">String</code>(count+<code className="-tokenKeyConstant">1</code>));</code><br/> 
                                        <code className="-nestedInnerCode --2Identation"><code className="-tokenMethod">sendMsgToTerminalDabble</code>(<code className="-tokenString">"Iniciando bateria de testes..."</code>);</code><br/> 
                                        <code className="-nestedInnerCode --2Identation"><code className="-tokenClassEntity">Test</code>::<code className="-tokenMethod">run</code>();</code><br/>
                                        <code className="-nestedInnerCode --2Identation"><code className="-tokenMethod">sendMsgToTerminalDabble</code>(<code className="-tokenString">"Finalizando bateria de testes..."</code>);</code><br/> 
                                        <code className="-nestedInnerCode --2Identation">count++;</code><br/>
                                        <code className="-nestedInnerCode">&#125;</code><br/>

                                        <br/>
                                        <code className="-nestedInnerCode"><code className="-tokenMethod">sendMsgToTerminalDabble</code>(<code className="-tokenString">"Generating Summary..."</code>);</code><br/> 

                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Após finalizado, envia buffer acumulado do `Test::out.print()` para Terminal Module:</span></code><br/>
                                        <code className="-nestedInnerCode"><code className="-tokenMethod">sendMsgToTerminalDabble</code>();</code><br/> 

                                        <code className="-nestedInnerCode">count = <code className="-tokenKeyConstant">0</code>;</code><br/>
                                    &#125;
                                </code>                                    
                                </ul>
                            </li>  
                        </ul>
                    </li>

                    <li>
                        <h3 class="projects-subtitle">Ajuste fino no ArduinoUnit:</h3>
                        <ul className="projects-frontend--container">
                            <li>Após finalizar toda a bateria de testes unitários, variáveis de controles internas da biblioteca ArduinoUnit são definidas como "Já executado".</li>
                            <li>Isso implica que a bateria de testes só poderá ser executada UMA única vez, a cada compilação das instruções no arduíno.</li>
                            <li>Isso ocorre para não ficar executando o mesmo metodo de teste repetidas vezes, MAS isso também ocorre quando os parâmetros dos testes são diferentes.</li>
                            <li>E isso é ruím, pois e se quisermos executar a mesma função, porém com diferentes parâmetros?</li>
                            <li>Na versão LTS da main instalado via gerenciador de dependências do ArduinoIDE isso não é possível, então deve-se instalar o seguinte commit:  <a className="-linkBoldYellowProjects" href="https://github.com/mmurdoch/arduinounit/commit/c96d03d405dea4be713768287070e64fa676ccbb" target="_blank">Clique AQUI!</a></li>
                            <li>Após a execução por completo dos testes <code className="-efeitoMarcaTexto">Test:run()</code> deve-se executar o resetter <code className="-efeitoMarcaTexto">resetDoneTests()</code> para limpar as variáveis internas de controle do ArduinoUnit.</li>
                            <li>Desta forma, podemos enviar o comando "t" várias vezes pelo aplicativo android Dabble que os testes serão executados quantas vezes quisermos.</li>
                        </ul>
                    </li>      
                </ul>
            </div>
        </div>
    </article>
    )
};
