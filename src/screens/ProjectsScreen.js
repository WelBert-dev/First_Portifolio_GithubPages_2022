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
import logoMaratonaJavaDevDojo from '../resources/maratonaJavaDevDojoLogo.jpg';

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
                                    <h3 className="projects-title">Maratona Java - DevDojo</h3>
                                    <a href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span>Curso completo desde Fundamentos até a API Nativa, com Total de 285 Aulas.</span>
                                <span>Repositório git criado no formato de "RoadMap" para cada Módulo e seus tópicos abordados.</span>
                                <span>Processo todo documentado e informações faltantes adicionadas utilizando ChatGPT.</span>
                                <span>Dividido em duas partes/pacotes: Documentação em Anotações e SRC de estudos práticos.</span>
                                <span>Para cada Módulo um pacote separado em SRC, e um arquivo txt com o Overview geral sobre.</span>
                                <span>Resumo para cada tópico abordado em cada Módulo e seus devidos links logo abaixo.</span>
                                <p>Código do projeto clicando no botão acima</p>
                            </div>
                            <div>
                                <ul className="projects-description--container">
                                    <li>
                                        <span class="-spanOfLinkAkitaDesbAlgTwitter">Playlist completa do curso no Youtube em: <a className="-linkBoldYellowProjects" href="https://www.youtube.com/watch?v=VKjFuX91G5Q&list=PL62G310vn6nFIsOCC0H-C2infYgwm8SWW" target="_blank">Clique AQUI!</a></span>
                                    </li>
                                </ul>
                                <img className="projects-logo" src={logoMaratonaJavaDevDojo} alt="Amostra logo DevDojo Maratona Java" ></img>
                            </div>
                            <div className="subContainer-bottom">
                                <ul className="projects-description--container">
                                    <li>
                                        {/* <h3 class="projects-subtitle">[Aulas 75 até 94]</h3> */}
                                        <h3 class="projects-subtitle">OverView geral sobre POO: </h3>
                                        <ul>
                                            <li>[Aula 75] - Sequência de inicialização (Ordem de precedência de execução quando usado herança <code className="token_reservada">extends</code>, e blocos estáticos <code className="token_reservada">static &#123;&#125;</code>): <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula75-sequenciaDeInicializacao.txt" target="_blank">Clique AQUI!</a></li>
                                            <li>[Aula 77] - Mais sobre <code className="token_reservada">static</code> (Alocamento único de memória, Compartilhado entre todas instâncias de classe): <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula77-maisSobreStatic.txt" target="_blank">Clique AQUI!</a></li>
                                            <li>[Aulas 78 e 79] - Mais sobre <code className="token_reservada">final</code> (Constante): <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula78e79-maisSobreFinal.txt" target="_blank">Clique AQUI!</a></li>
                                            <li>[Aulas 80 até 83] - Mais sobre <code className="token_reservada">enum</code> (Enumeradores também são Classes e Objetos): <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula80a83-enum.txt" target="_blank">Clique AQUI!</a></li>
                                            <li>[Aulas 84 até 86] - Mais sobre <code className="token_reservada">abstract</code> (Generaliza classes, define comportamentos comuns a todos herdeiros): <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula84a86-abstract.txt" target="_blank">Clique AQUI!</a></li>
                                            <li>[Aulas 87 até 89] - Mais sobre <code className="token_reservada">interface</code> (Definição de contratos que obrigam comportamentos, ajuda no desacoplamento dos módulos, bastante utilizado com <code className="token_reservada">Dependency Injection</code>, que é uma das implementações para <code className="token_reservada">Inversion of control</code> <code className="token_reservada">DI/IoC</code>): <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula87a89-interfaces.txt" target="_blank">Clique AQUI!</a></li>
                                            <li>[Aulas 90 até 94] - Mais sobre <code className="token_reservada">polimorfismo</code> (Capacidade de se adaptar a mudanças ao longo da implementação, existem várias formas de aplicar este conceito em POO): <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula90a94-polimorfismo.txt" target="_blank">Clique AQUI!</a></li>

                                            {/* <li>Manipulação de Data e Tempo (Maneira legada pacote util e Maneira nova do pacote especializado time).</li>
                                            <li>Maneira legada é as classes Date e Calendar do pacote java.util, foram as primeiras classes especializadas neste contexto.</li>
                                            <li>Na maneira legada as datas eram representadas por um Long que representava os milisegundos de 01/01/1970 até 17/08/292278994 (Valor max representado por Long).</li>
                                            <li>O Problema delas era a dificuldade de Internacionalização, eis que vem Calendar para suprir.</li>
                                            <li>Na maneira nova é o pacote completo especializado em manipulações de Datas e Tempo, criado por um Brasileiro, Java adota ela apartir da versão 8.</li>
                                            <li>Formatação de Data e Tempo em diversos padrões de acordo com o Locale (Internacionalização) ou personalizados por nós.</li>
                                            <li>Formatação de Números e moedas também com uso de Locale (Internacionalização).</li>
                                            <li>Principais classes do pacote novo especializado em Data e Tempo (LocalDate, LocalTime, Instant, e LocalDateTime).</li>
                                            <li>Pegando intervalos com uso de Duration (Para Datas) e Period (Para Tempo).</li>
                                            <li>ChronoUnit: Unidades do tempo (Tipagens para Dias, Semanas, Meses, Anos).</li>
                                            <li>TemporalAdjusters: utilitário para Ajustes na Data e Tempo.</li>
                                            <li>Zone: trabalhando com Zonas podendo assim verificar diferenças em fuso horarios (A diferença entre SP e Tokyo é de +9 Horas em relação a SP).</li> */}
                                            
                                        </ul>
                                    </li>
                                    <li>
                                        {/* <h3 class="projects-subtitle">[Aulas 95 até 105]</h3> */}
                                        <h3 class="projects-subtitle">Errors, Exceptions, e RuntimeExceptions: </h3>
                                        <ul className="projects-frontend--container">
                                            <li>Estrutura Hierárquica do fluxo de herança, Herdeiros de <code className="token_reservada">Exception</code> são <code className="token_reservada">Checked</code> e Herdeiros de <code className="token_reservada">RuntimeException</code> são <code className="token_reservada">Unchecked</code>, quando lançar <code className="token_reservada">throws</code> na assinatura e quando tratar em blocos <code className="token_reservada">try-catch</code>.</li>
                                            <li>Estrutura Hierarquica do fluxo de herança pois tudo no java é  <code className="token_reservada">Object</code>, logo, as exceções também possuem superClasses e subClasses (<code className="token_reservada">Checked</code> para herdeiros de <code className="token_reservada">Exception</code> e <code className="token_reservada">Unchecked</code> para herdeiros de <code className="token_reservada">RuntimeException</code>).</li>
                                            <li>Todos são herdeiros de <code className="token_reservada">Throwable</code> porisso é possível lançar, porém existem diferenças nos tipos de exceções e a forma como é tratado (<code className="token_reservada">Error</code>, <code className="token_reservada">Exception</code> (<code className="token_reservada">Checked</code>) e <code className="token_reservada">RuntimeException</code> (<code className="token_reservada">Unchecked</code>)).</li>
                                            <li><code className="token_reservada">Error</code> não são exceções, esse tipo esta fora de nosso controle, Erros não são possiveis de tratar com lógica, logo, quando ocorrer geralmente o programa finaliza, por exemplo acabar a memória durante a execução (<code className="token_reservada">OutOfMemoryError</code>), ou quando estoura a pilha de chamadas (<code className="token_reservada">StackOverflowError</code>).</li>
                                            <li>Exceções do tipo <code className="token_reservada">Checked</code>: São checadas e filhas da classe <code className="token_reservada">Exception</code> diretamente, se não tratadas o JavaC nem compila. (Exemplo <code className="token_reservada">IOException</code> ao tentar ler arquivos inexistentes, esse se não tratar não irá compilar).</li>
                                            <li>Exceções do tipo <code className="token_reservada">Unchecked</code>: São desconhecidas até que ocorra em tempo de execução (Ou seja, geralmente é causado por falhas de lógica do desenvolvedor), filhas da classe <code className="token_reservada">RuntimeException</code> diretamente ou elá própria, não necessita de tratamentos prévios pois ela só será conhecida em tempo de execução, logo, o Java não obriga tratamentos (Exemplo <code className="token_reservada">IndexOutOfBoundsException</code> ao tentar acessar index inválido/inexistente de um Array).</li>
                                            <li>Nunca definir regras de negócio em blocos <code className="token_reservada">catch</code>, ele serve apenas para TRATAR a <code className="token_reservada">Exception</code> lançada.</li>
                                            <li>Exceções capturadas em blocos <code className="token_reservada">try-catch</code> NÃO param o fluxo de execução corrente deste método em questão se lançadas!</li>
                                            <li>Exceções lançadas com <code className="token_reservada">throws new RuntimeException</code> (Ou subclasses filhas dela <code className="token_reservada">Unchecked</code>'s) no fluxo regular de execução corrente PARAM e retornam para quem chamou, porém NÃO obriga o chamador a tratar ela, neste caso, vai retornando a pilha de chamadas até alguém interceptar e tratar, se ninguem deste workflow tratar o programa é finalizado.</li>
                                            <li>A Regra sobre NÃO obrigar tratamentos em blocos <code className="token_reservada">try-catch</code> <code className="token_reservada">RuntimeException</code>'s (<code className="token_reservada">Unchecked</code>) é aplicada MESMO se lançado <code className="token_reservada">throws</code> na assinatura do método, para este tipo de <code className="token_reservada">RuntimeException</code> (<code className="token_reservada">Unchecked</code>) essa funcionalidade serve apenas para dar dicas ao desenvolvedor no momento de utilizar esse método em questão.</li>
                                            <li>Ao contrário ocorre com <code className="token_reservada">Exception</code>'s (<code className="token_reservada">Checked</code>) que obrigam o tratamento no fluxo regular de execução corrente com uso de <code className="token_reservada">try-catch</code> ou delegando essa responsabilidade de tratamento para quem está chamando, com o lançamento de <code className="token_reservada">throws Exception</code> (<code className="token_reservada">Checked</code>) na assinatura do método.</li>
                                            <li>Quando tratar em blocos <code className="token_reservada">try-catch</code> e quando delegar a responsabilidade para quem está chamando (Lançando <code className="token_reservada">throws</code> na assinatura do método)?</li>
                                            <li>Podemos lançar <code className="token_reservada">throws</code> na assinatura de todos os métodos da pilha de chamadas para delegar e retornar a responsabilidade para TODOS do fluxo, que ele vai retornando o workflow em cascata, porisso o questionamento acima, então em qual passo deste workflow de chamadas devemos tratar a <code className="token_reservada">Exception</code> (<code className="token_reservada">Checked</code>)? se ninguem tratar o programa irá finalizar.</li>
                                            <li>Para saber quando tratar ou não com blocos <code className="token_reservada">try-catch</code> no fluxo regular de execução corrente, devemos análisar se esse método em questão será utilizado por vários outros, se isso ocorrer é ideal DELEGAR a responsabilidade de tratamento para quem está chamando pois assim cada um trata da melhor forma para o seu contexto especifico.</li>
                                            <li>Dica sobre o ponto acima: Análisar qual é o nível de privacidade do <code className="token_reservada">modificador de acesso</code> deste método que lança, quanto mais ABERTO (Exemplo: <code className="token_reservada">public</code>) ele for quer dizer que vários outros iram utiliza-lo, logo, é ideal DELEGAR esse tratamento para eles.</li>
                                            <li>Tratamento em mão dupla, tratando com <code className="token_reservada">try-catch</code> no fluxo regular corrente de execução e re-lançando a <code className="token_reservada">Exception</code> para o chamador: Podemos também capturar a <code className="token_reservada">Exception</code> lançada em blocos <code className="token_reservada">try-catch</code> e mesmo assim DELEGAR esse mesmo tratamento para quem está chamando também, definindo <code className="token_reservada">throws</code> na assinatura do método e retornando o Objeto da <code className="token_reservada">Exception</code> (<code className="token_reservada">`ex`</code>) no bloco <code className="token_reservada">catch</code> (Neste caso, não será necessário utilizar <code className="token_reservada">new</code> pois o Objeto já existe neste ponto e está vindo no argumento do <code className="token_reservada">catch(Exception ex)</code>, a não ser que deseja lançar outro tipo de <code className="token_reservada">Exception</code>, neste caso é necessário criar o Objeto com <code className="token_reservada">new</code>).</li>
                                            <li>Blocos <code className="token_reservada">try-catch-finally</code> para quando desejamos sempre executar algum bloco de lógica, independentemente se ocorrer lançamentos ou não (Definindo essa lógica que sempre será executada no bloco <code className="token_reservada">finally</code>).</li>
                                            <li>Capturando múltiplas exceções com uso de <code className="token_reservada">Sobrecarga de catchs</code> para tratamentos, sempre começando a tratar as Exceções mais Especializadas e por final a mais Genérica, pois se inverter ele sempre irá executar a mais Genérica devido ao polimorfismo e irá simplismente ignorar as outras, ou seja, nunca seram executados.</li>
                                            <li><code className="token_reservada">Múltiplos catch em linha</code> (utilizando pipe <code className="token_reservada">`|`</code> como separador no parâmetro do <code className="token_reservada">catch(BlablaException | WubalubaException | DubDubException ex)&#123;&#125;</code>) serve APENAS para Exceções com fluxo de herança diferentes entre sí (Devido ao polimorfismo), NÃO é possível nem se colocado o parâmetro na ordem do mais Especializado para o mais Genérico! Sintaxe diferente para a mesma ação anterior, porém apenas para Exceções com fluxo de herança diferentes entre sí e para todos o tratamento é o MESMO (Já que para todos irão executar esse mesmo bloco <code className="token_reservada">catch</code>), essa sintaxe torna o código mais legível e coeso em alguns casos.</li>
                                            <li>Ao utilizar <code className="token_reservada">mútiplos catch em linha</code> a variável de referência <code className="token_reservada">`ex`</code> (<code className="token_reservada">catch(BlablaException | WubalubaException | DubDubException ex)</code>) passada no argumento do <code className="token_reservada">catch</code> por segurança é <code className="token_reservada">final</code>, não sendo possível atribuir um novo Objeto para ela (Nem mesmo se for algum dos tipos de <code className="token_reservada">Exception</code>'s sobrecarregados em linha com o <code className="token_reservada">`|`</code> no argumento do <code className="token_reservada">catch</code>).</li>
                                            <li><code className="token_reservada">try-with-resources</code> (Exemplo: <code className="token_reservada">try(ResourceCloseable r = new ResourceCloseable) catch&#123;&#125;</code>) para fechar/liberar recursos sem a necessidade de utilizar <code className="token_reservada">.close()</code> explícitamente (APENAS para classes que implementam a interface <code className="token_reservada">Closeable</code> ou <code className="token_reservada">AutoCloseable</code> devido ao polimorfismo que obriga a concretização/implementação do método <code className="token_reservada">.close()</code> presente nestas interfaces), pois a própria JVM se encarrega de executar esse método no final do <code className="token_reservada">try-with-resources</code>. Deixando a implementação mais legível e coesa sem códigos redundantes.</li>
                                            <li>Diferente de outros usos do <code className="token_reservada">try-catch</code>, o <code className="token_reservada">try-with-resources</code> não obriga o uso do <code className="token_reservada">catch</code> em conjunto do <code className="token_reservada">try()</code>, desde que lançado na assinatura do método o <code className="token_reservada">throws</code> com as possíveis <code className="token_reservada">Exception</code>'s lançadas pelos Recursos closeable do argumento <code className="token_reservada">try(ResourceCloseable r = new ResourceCloseable)</code>, DELEGANDO assim esse tratamento <code className="token_reservada">catch</code> para o chamador deste método no passo anterior do workflow na pilha de chamadas.</li>
                                            <li>Ordem de execução do método <code className="token_reservada">.close()</code> quando utilizado mais de um Recurso closeable no argumento do <code className="token_reservada">try(ResourceCloseable r1 = new ResourceCloseable; ResourceCloseable2 r2 = new ResourceCloseable2)</code>, neste caso a ordem de execução para liberar recursos será na ordem INVERSA em que foram declarados, ou seja, do ÚLTIMO argumento até/para o PRIMEIRO.</li>
                                            <li>Isso ocorre pois geralmente quando estamos liberando recursos de <code className="token_reservada">banco de dados</code> por exemplo, a pilha de chamadas (Stack) que libera recursos e/ou fecha conexão devem ser executadas na ordem INVERSA da qual foram executadas para abrir o recurso.</li>
                                            <li>Implementando Exceções customizadas com <code className="token_reservada">extends</code> em alguma <code className="token_reservada">Exception/RuntimeException</code> para cenários especificos em que o Java não o faz. Essas também seguem as mesmas regras ditas anteriormente (<code className="token_reservada">Checked</code> e <code className="token_reservada">Unchecked</code>) e etc...</li>
                                            <li>Regras sobre sobrescritas <code className="token_reservada">@Override</code> quando esse método em modificação lança alguma <code className="token_reservada">Exception</code>: Quem está herdando com <code className="token_reservada">extends</code> (subClasse) não é obrigado a declarar as mesmas <code className="token_reservada">Exceptions/RuntimeExceptions</code> que o pai (superClasse) faz, pois o mesmo (subClasse/filho) pode querer realizar tratamentos diferentes ou lançar Exceções diferentes da que o pai (superClasse) está lançando, umas vez que essa nova implementação pode ser TOTALMENTE diferente e automaticamente lançar diferentes Exceções, ou nem lançar nenhuma, se necessário.</li>
                                            <li>Para o cenário anterior, APENAS não será possível declarar <code className="token_reservada">Exceptions/RuntimeExceptions</code> diferentes na assinatura com <code className="token_reservada">throws</code> do filho (subClasse) que está sobrescrevendo <code className="token_reservada">@Override</code> (<code className="token_reservada">extends</code>), se lançado Exceções de tipos mais GENÉRICOS que o pai (superClasse) está lançando, apenas podemos lançar o mesmo tipo de Exceção ou subClasses mais Especializadas que o pai (superClasse) está lançando.</li>
                                            <li>EM NENHUM CASO é possível declarar <code className="token_reservada">Exception</code>'s (<code className="token_reservada">Checked</code>) neste método sobrescrito <code className="token_reservada">@Override</code> se o pai (superClasse) não estiver declarando.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        {/* <h3 class="projects-subtitle">[Aulas 106 e 107]</h3> */}
                                        <h3 class="projects-subtitle">Wrappers dos Tipos Primitivos: </h3>
                                        <ul className="projects-frontend--container">
                                            <li>Encapsula os <code className="token_reservada">Tipos Primitivos</code> em Objetos para contextos que esperam eles alocando memória e tratando eles como se fossem Objetos (Devido a isso, altera o comportamento de <code className="token_reservada">passagem por valor</code> dos Primitivos para <code className="token_reservada">passagem por referência</code> dos Objetos).</li>
                                            <li>Fornece funcionalidades/métodos estáticos prontos especializado para cada tipo primitivo (Utilitário).</li>
                                            <br/>
                                            <li><code className="token_reservada">Byte</code>: Objeto Wrapper para o Tipo Primitivo int (8bits).</li>
                                            <li><code className="token_reservada">Short</code>: Objeto Wrapper para o Tipo Primitivo int (16bits).</li>
                                            <li><code className="token_reservada">Integer</code>: Objeto Wrapper para o Tipo Primitivo int (32bits).</li>
                                            <li><code className="token_reservada">Long</code>: Objeto Wrapper para o Tipo Primitivo long (64bits).</li>
                                            <li><code className="token_reservada">Float</code>: Objeto Wrapper para o Tipo Primitivo float (32bits).</li>
                                            <li><code className="token_reservada">Double</code>Double: Objeto Wrapper para o Tipo Primitivo double (64bits).</li>
                                            <li><code className="token_reservada">Character</code>: Objeto Wrapper para o Tipo Primitivo char.</li>
                                            <li><code className="token_reservada">Boolean</code>: Objeto Wrapper para o Tipo Primitivo boolean.</li>
                                            <br/>
                                            <li>Muito utilizado com Listas/Coleções pois as mesmas utilizam a referência do Objeto, logo, não é possível criar as mesmas para <code className="token_reservada">Tipos Primitivos</code> (Já que os mesmos não possuem referência), então a solução é criar Listas/Coleções para os <code className="token_reservada">Objetos Wrappers</code>.</li>
                                            <li>Além das listas, também é bem utilizado em cenários de concorrência <code className="token_reservada">concurrency</code> (MultiThreads) aonde para sincronizar com o token <code className="token_reservada">synchronized</code> só é possível em Objetos, dentre outros contextos.</li>
                                            <li>A regra do polimorfismo também se aplica a eles.</li>
                                            <br/>
                                            <li><code className="token_reservada">Boxing/AutoBoxing</code>: Processo no qual a JVM encapsula o valor do <code className="token_reservada">Tipo Primitivo</code> em um Objeto <code className="token_reservada">Wrapper</code> (Alocando memória, assim temos a referência e o valor em sí) Exemplo: <code className="token_reservada">Integer intW = 10;</code>.</li>
                                            <li><code className="token_reservada">Unboxing/AutoUnboxing</code>: Processo inverso, no qual JVM desencapsula o <code className="token_reservada">Tipo Primitivo</code> retirando o valor encapsulado no Objeto Wrapper, ou seja, processo INVERSO do anterior (Removendo a referência e re-alocando o valor em uma <code className="token_reservada">variável primitiva</code> comum) Exemplo: <code className="token_reservada">int intP = intW;</code>.</li>
                                            <br/>
                                            <li>É importante conhecer essa ação do Java implementado na JVM sobre os <code className="token_reservada">Wrappers</code>, pois em alguns cenários aonde realizamos operações de múltiplas iterações com somas e etc utilizando os Objetos <code className="token_reservada">Wrappers</code>, esse processo pode ser computacionalmente CUSTOSO em relação ao desempenho pois a cada iteração a JVM aloca e desaloca memória, para encapsular e desencapsular o valor do primitivo, além disto, também devemos considerar o custo computacional de outros processamentos necessários para a construção de Objetos.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        {/* <h3 class="projects-subtitle">[Aulas 108 até 111]</h3> */}
                                        <h3 class="projects-subtitle">Strings: </h3>
                                        <ul className="projects-frontend--container">
                                            <li>Não são consideradas <code className="token_reservada">Wrappers</code> pois elas já são Objetos normalmente e não existe <code className="token_reservada">Tipo Primitivo</code> para elas (Como ocorre em linguagens de mais alto nível como python por exemplo).</li>
                                            <li><code className="token_reservada">Strings literais</code> (<code className="token_reservada">String b = "Wubalubadubdub";</code>) no Java são Objetos Imutáveis devido ao <code className="token_reservada">Pool de Strings constantes</code>.</li>
                                            <li><code className="token_reservada">Strings constants pool</code> é uma técnica que a JVM faz para otimizar recursos de armazenamento quando trabalhamos com <code className="token_reservada">Strings literais</code>. (Implementação baseada em <code className="token_reservada">String Interning</code> que é uma técnica na computação para armazenar apenas uma cópia de cada valor de string distinto), vídeo aula com explicação mais completa: <a className="-linkBoldYellowProjects" href="https://www.youtube.com/watch?v=vH7izlkNewI&list=PL62G310vn6nFIsOCC0H-C2infYgwm8SWW&index=109" target="_blank">Clique AQUI!</a></li>
                                            <li>A JVM implementa o conceito acima compartilhando as palavras entre toda aplicação, alocando memória no pool apenas para palavras novas, porisso é necessário a Imutabilidade delas já que esses valores do pool em memória seram compartilhados entre todas as referências da aplicação que apontam para a mesma <code className="token_reservada">Strings literal</code>, essa regra <code className="token_reservada">NÃO</code> se aplica para as <code className="token_reservada">Strings</code> alocados manualmente com <code className="token_reservada">new</code>.</li>
                                            <li>Ou seja, antes dele alocar memória para a palavra, ele verifica no <code className="token_reservada">pool de Strings constantes</code> se ela já existe evitando assim duplicatas (<code className="token_reservada">DISTINCT</code>).</li>
                                            <li>PORÉM essa implementação acaba atrapalhando alguns cenários em que é realizado muitas Iterações com concatenação, devido a JVM alocar memória no <code className="token_reservada">pool de Strings constantes</code> para CADA palavra diferente, logo, a cada iteração será alocado memória no pool. (Mais explicações no TXT de estudos), vídeo aula com explicação mais completa: <a className="-linkBoldYellowProjects" href="https://www.youtube.com/watch?v=5hfftQx_S8Q&list=PL62G310vn6nFIsOCC0H-C2infYgwm8SWW&index=110&pp=iAQB" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">StringBuilder</code> e <code className="token_reservada">StringBuffer</code> (Chegam para corrigir o problema de cima, e outros cenários que visam performance em Iterações), pois eles manipulam diretamente a memória alocada inicialmente, e não utiliza o <code className="token_reservada">pool de Strings constantes</code> que fica alocando espaço para cada palavra diferente.</li>
                                            <li>A Diferença deles é que o <code className="token_reservada">StringBuffer</code> é desenhado para cenários de <code className="token_reservada">MultiThreads</code> e Concorrência <code className="token_reservada">Concurrency</code>.</li>
                                            <li>Se atentar ao tipo de retorno se utilizado essas classes (<code className="token_reservada">StringBuilder</code> e <code className="token_reservada">StringBuffer</code>) ou outras, quando o tipo de retorno é diferente do Objeto manipulado em memória em sí, quer dizer que a lógica não está alterando o valor real em memória e sim apenas esse retorno em questão.</li>
                                            <li>Sobre o ponto acima neste contexto, quando utilizamos um <code className="token_reservada">StringBuilder</code> e algum método está retornando uma <code className="token_reservada">String</code> Wrapper comum, isso quer dizer que a lógica só está sendo aplicada no retorno, e não está alterando o valor real em memória do Objeto. (<code className="token_reservada">objBuilderOrBuffer.reverse()</code> retorna um <code className="token_reservada">StringBuilder</code>, logo altera o valor real em memória, já <code className="token_reservada">.subString(startIndex, endIndex)</code> retorna uma <code className="token_reservada">String</code> Wrapper comum, logo NÃO está alterando o valor real em memória, está apenas aplicando a lógica no retorno).</li>
                                            <li>Métodos utilitários prontos para manipulação de <code className="token_reservada">Strings</code> (<code className="token_reservada">.replace(thisValue, fromThisValue)</code>, <code className="token_reservada">.substring(startIndex, endIndex)</code>, <code className="token_reservada">.trim()</code>, <code className="token_reservada">.charAt()</code>, <code className="token_reservada">.toUpperCase()</code>, e etc).</li>
                                            <br/>
                                            <li>Obs sobre o método <code className="token_reservada">.replace(thisValue, fromThisValue)</code>: Diferente do Javascript que substitui apenas a primeira ocorrência, no Java TODAS as ocorrências são substituidas.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        {/* <h3 class="projects-subtitle">[Aulas 112 até 129]</h3> */}
                                        <h3 class="projects-subtitle">Manipulação de Data e Hora: </h3>
                                        <ul className="projects-frontend--container">
                                            <li>Maneira Legada (<code className="token_reservada">Date</code> e <code className="token_reservada">Calendar</code> do pacote <code className="token_reservada">java.util</code>) porém tem problemas de Internacionalização e Limitações nas possibilidades de representações.</li>
                                            <li>Muitos sistemas ainda utilizam elas! Não é uma boa prática apartir do Java 8.</li>
                                            <li><code className="token_reservada">Date</code>: Representado em baixo nível por um <code className="token_reservada">long</code> que representa os milissegundos de 01/01/1970 até 17/08/292278994 04:12 (valor máximo de um <code className="token_reservada">long</code>), mais informações sobre <code className="token_reservada">Date</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula112Date.java" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">Calendar</code>: Devido ao problema inicial de Internacionalização é criado a classe <code className="token_reservada">Calendar</code> (Abstrata, ou seja, é necessário uso do método <code className="token_reservada">builder</code> estático para sua criação, o mesmo faz verificações de origem da JVM para obter datas corretas (Internacionalização), ou podemos alterar esse comportamento padrão passando na <code className="token_reservada">sobrecarga do construtor</code> um Objeto <code className="token_reservada">Locale</code>), mais informações sobre <code className="token_reservada">Calendar</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula113Calendar.java" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">Calendar</code>: utiliza em baixo nível o mesmo <code className="token_reservada">long</code> do <code className="token_reservada">Date</code> para representar a data (sendo os mesmos milissegundos de 01/01/1970 até 17/08/292278994 04:12).</li>
                                            <li><code className="token_reservada">Calendar</code>: é concretizada/implementada por 3 classes no Java 17: <code className="token_reservada">BuddhistCalendar</code>, <code className="token_reservada">GregorianCalendar</code> e <code className="token_reservada">JapaneseImperialCalendar</code>.</li>
                                            <br/>
                                            <li><code className="token_reservada">DateFormat</code>: Surge devido a este tipo de representação em baixo nível utilizando <code className="token_reservada">long</code> ser inviável na visualização e compreensão humana, uma vez que as representações são números enormes que parecem não fazer sentido para quem não conhece, podemos utilizar a classe <code className="token_reservada">DateFormat</code> para melhorar na visibilidade humana formatando e adicionando uma camada de mais alto nível nesses milissegundos, e representando eles em <code className="token_reservada">Strings</code> com máscaras de Datas "22/12/199" (equivalente do <code className="token_reservada">`-h`</code> do Unix Like), mais informações sobre <code className="token_reservada">DateFormat</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula114DateFormat.java" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">DateFormat</code>: Para armazenar em <code className="token_reservada">banco de dados</code> podemos utilizar a mesma abordagem de cima, porém no padrão da máscara suportado pelo banco (Para o DB MySQL: "yyyy-mm-dd").</li>
                                            <li><code className="token_reservada">DateFormat</code>: As conversões do valor <code className="token_reservada">long</code> em baixo nível para Strings em alto nível que converte e adiciona máscara de Datas melhorando na compreensão humana, seguem a mesma convenção sobre <code className="token_reservada">parsings</code> em geral para várias outras classes da <code className="token_reservada">API Nativa do Java</code>: Regra sobre <code className="token_reservada">.format()</code> que recebe um Objeto e retorna/converte em uma <code className="token_reservada">String</code>, e <code className="token_reservada">.parse()</code> que recebe uma <code className="token_reservada">String</code> e retorna/converte em um Objeto (Mais explicações sobre esses <code className="token_reservada">parsings</code> e <code className="token_reservada">formats</code> logo abaixo na classe <code className="token_reservada">DateTimeFormatter</code>).</li>
                                            <br/>
                                            <li><code className="token_reservada">Locale</code>: é o Objeto que representa a Origem/Localidade da JVM, ou seja, podemos utilizar o polimorfismo aqui para alterar diversos comportamentos de diversas Classes visando a Internacionalização, mais informações sobre <code className="token_reservada">Locale</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula115Locale_Internacionalizacao.java" target="_blank">Clique AQUI!</a></li>
                                            <br/>
                                            <li>Internacionalização de Datas com <code className="token_reservada">Locale</code> (Alterando o formato e etc de acordo com o padrão de origem <code className="token_reservada">Locale</code>), mais informações: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/C_formatacao/Aula115Locale_Internacionalizacao.java" target="_blank">Clique AQUI!</a></li>
                                            <li>Internacionalização de Números com <code className="token_reservada">Locale</code> (Separadores de milhares e etc diferentes para cada pais "1,200", "1.200,00"), mais informações: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/C_formatacao/Aula116NumberFormat_Number_Locale.java" target="_blank">Clique AQUI!</a></li>
                                            <li>Internacionalização de Moedas com <code className="token_reservada">Locale</code> (Separadores de milhares e etc também são diferentes para cada pais "$10,000.21", "￥10,000", "10.000,21 €"), mais informações: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/C_formatacao/Aula117NumberFormat_Coin_Locale.java" target="_blank">Clique AQUI!</a></li>
                                            <br/>
                                            <li><code className="token_reservada">SimpleDateFormat</code>: Mesmo contexto da <code className="token_reservada">DateFormat</code> porém podemos definir um padrão de máscara personalizado por nós (Mesma regra sobre <code className="token_reservada">.format()</code> que recebe um Objeto e retorna/converte em uma <code className="token_reservada">String</code>, e <code className="token_reservada">.parse()</code> que recebe uma <code className="token_reservada">String</code> e retorna/converte em um Objeto), mais informações sobre <code className="token_reservada">SimpleDateFormat</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula118SimpleDateFormat.java" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">SimpleDateFormat</code>: Porisso devemos nos atentar as possíveis lançadas de <code className="token_reservada">RuntimeExceptions</code> por criar um padrão de máscara e na hora de converter passar um padrão diferente deste criado anteriormente.</li>
                                            <br/>
                                            <li>Maneira Nova: Com esses problemas de Limitações nas representações (<code className="token_reservada">long</code>) possíveis e problemas de Internacionalização apartir do Java 8 é adicionado um pacote completo especializado em datas <code className="token_reservada">java.time</code> (Criado por um Brasileiro e adotado pelo Java).</li>
                                            <li>Maneira Nova: <code className="token_reservada">Imutável</code> e Representa os milissegundos, suportando até +999999999-12-31 e -999999999-01-01.</li>
                                            <li><code className="token_reservada">LocalDate</code>: Utilizada para representar datas simples "22/12/1999" substituindo <code className="token_reservada">Date</code> e <code className="token_reservada">Calendar</code> (Saída do <code className="token_reservada">.toString()</code>: "1999-12-22"), mais informações sobre <code className="token_reservada">LocalDate</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula119LocalDate.java" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">LocalTime</code>: Utilizada para representar tempos "horas:minutos:segundos:milissegundos" (Saída do <code className="token_reservada">.toString()</code>: "08:30:00"), mais informações sobre <code className="token_reservada">LocalTime</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula120LocalTime.java" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">LocalDateTime</code>: Utilizada para representar as duas anteriores, mais completas compostas por data e tempo, contendo todas as funcionalidades das duas classes anteriores em uma, sendo assim "yyyy-MM-ddThoras:minutos:segundos.milissegundos" (Saída do <code className="token_reservada">.toString()</code>: "2022-12-07T23:39:20.813999247"), mais informações sobre <code className="token_reservada">LocalDateTime</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula121LocalDateTime.java" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">Instant</code>: Utilizada para representar nano segundos (de 01/01/1970 até 17/08/292278994 04:12), ou seja, a menor unidade/medida de tempo suportada pelo computador, representa um ponto instantâneo dentro de uma linha temporal. A Saída do <code className="token_reservada">.toString()</code> ("2022-12-09T00:20:37.073909679Z") dele é a mesma que do <code className="token_reservada">LocalDateTime</code> porém com um <code className="token_reservada">`Z`</code> no final de <code className="token_reservada">Zulu time (UTC)</code>, mais informações sobre <code className="token_reservada">Instant</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/B_time/Aula122Instant_NanoSeconds.java" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">Zulu time (UTC)</code> é um fuso horário universal, ou seja, quando queremos o horário correto basta converter "Zulu time to brazil" e etc...</li>
                                            <li><code className="token_reservada">Instant</code>: Utiliza 2 variáveis para representar <code className="token_reservada">Nano</code> e <code className="token_reservada">EpochSeconds</code>.</li>
                                            <br/>
                                            <li><code className="token_reservada">Duration</code>: Classe utilitária para pegar intervalos entre <code className="token_reservada">datas e horas ou APENAS horas</code>, NÃO sendo possível utilizar em datas simples "22/12/1999" (<code className="token_reservada">Compatível: Time or DateTime</code>). Exemplo de classes compatíveis: <code className="token_reservada">LocalDateTime</code>, <code className="token_reservada">LocalTime</code> e <code className="token_reservada">Instant</code>, mais informações sobre <code className="token_reservada">Duration</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/B_time/Aula123Duration_Intervalos_Utils.java" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">Period</code>: Classe utilitária com mesmo contexto da anterior, porém para pegar intervalos entre <code className="token_reservada">datas simples</code> "22/12/1999" solução para a limitação da anterior (<code className="token_reservada">Compatível: Date</code>). Exemplo de classes compatíveis: <code className="token_reservada">LocalDate</code>, mais informações sobre <code className="token_reservada">Period</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula124Period_IntervalosDate_Utils.java" target="_blank">Clique AQUI!</a></li>
                                            <br/>
                                            <li><code className="token_reservada">ChronoUnit</code>: Tudo que é co-relacionado a datas, horas, minutos, segundos, milissegundos e nano segundos utiliza <code className="token_reservada">ChronoUnit</code>, que seria tipo a "tipagem" desses tempos, logo, bastante métodos deste contexto utilizam eles como parâmetro e também temos métodos utilitários para cada tipo dessas unidades de tempo. (Exemplo de uso: Periodo entre dias <code className="token_reservada">ChronoUnit.DAY.beetween(talDia, talDia);</code>, mais informações sobre <code className="token_reservada">ChronoUnit</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula125ChronoUnit_Utils.java" target="_blank">Clique AQUI!</a></li>
                                            <br/>
                                            <li><code className="token_reservada">TemporalAdjusters</code>: Existe uma Classe estática e também uma Interface, ou seja, 100% utilitária para ajustar objetos do tipo <code className="token_reservada">Temporal</code>, como <code className="token_reservada">LocalDate</code>, <code className="token_reservada">LocalTime</code> e <code className="token_reservada">LocalDateTime</code>. Ela fornece métodos estáticos para realizar ajustes em datas e horários, mais detalhes sobre <code className="token_reservada">TemporalAdjusters</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula126TemporalAdjusters_Utils.java" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">TemporalAdjusters</code>: A Interface é polimorfica, utilizada como parâmetro de várias classes relacionadas ao tempo, podemos assim sobrecrever <code className="token_reservada">@Override</code> o método <code className="token_reservada">public Temporal adjustInto(Temporal temporal)</code> para personalizar regras de negócios, mais detalhes sobre as possibilidades de implementações em <code className="token_reservada">src</code> de treino no repositório git (Exemplo: Pegando o próximo dia útil, considerando de segunda até quinta): <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula127TemporalAdjuster_Impl_ExeComWith.java" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">TemporalAdjusters</code>: Obs: A diferença entre <code className="token_reservada">.with()</code> e <code className="token_reservada">.plusDays()</code> é que o <code className="token_reservada">.with()</code> altera sobrescrevendo a data (Equivalente ao <code className="token_reservada">`=`</code>), já o <code className="token_reservada">.plusDays()</code> faz a adição nele (Equivalente ao <code className="token_reservada">`+=`</code>).</li>
                                            <br/>
                                            <li><code className="token_reservada">Zone</code>: Representa as zonas suportadas pelo Java, essas zonas é as representações dos fuso horários (<code className="token_reservada">OffSet</code>), mais informações sobre essas <code className="token_reservada">Zonas</code>, <code className="token_reservada">OffSet</code>, <code className="token_reservada">ZonedId</code>, <code className="token_reservada">ZonedDateTime</code>, <code className="token_reservada">ZoneOffSet</code>, <code className="token_reservada">OffSetDateTime</code> e etc: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula128Zone_Utils.java" target="_blank">Clique AQUI!</a></li>
                                            <br/>
                                            <li><code className="token_reservada">ZonedId</code>: Com elá é possível retornar um mapa <code className="token_reservada">Map</code> com as zonas suportadas pelo Java.</li>
                                            <li>Saída do <code className="token_reservada">.toString()</code> do <code className="token_reservada">Map&lt;String, String&gt; shortIds = ZoneId.SHORT_IDS;</code> com as Zonas suportadas: </li>
                                            <li><code className="token_reservada">EAT=Africa/Addis_Ababa</code></li>
                                            <li><code className="token_reservada">EST=-05:00</code></li>
                                            <li><code className="token_reservada">PNT=America/Phoenix</code></li>
                                            <li><code className="token_reservada">PLT=Asia/Karachi</code></li>
                                            <li><code className="token_reservada">CNT=America/St_Johns</code></li>
                                            <li><code className="token_reservada">IET=America/Indiana/Indianapolis</code></li>
                                            <li><code className="token_reservada">VST=Asia/Ho_Chi_Minh</code></li>
                                            <li><code className="token_reservada">JST=Asia/Tokyo</code></li>
                                            <li><code className="token_reservada">ART=Africa/Cairo</code></li>
                                            <li><code className="token_reservada">PST=America/Los_Angeles</code></li>
                                            <li><code className="token_reservada">BET=America/Sao_Paulo</code></li>
                                            <li><code className="token_reservada">MIT=Pacific/Apia</code></li>
                                            <li><code className="token_reservada">CAT=Africa/Harare</code></li>
                                            <li><code className="token_reservada">AGT=America/Argentina/Buenos_Aires</code></li>
                                            <li><code className="token_reservada">NET=Asia/Yerevan</code></li>
                                            <li><code className="token_reservada">CST=America/Chicago</code></li>
                                            <li><code className="token_reservada">IST=Asia/Kolkata </code></li>
                                            <li><code className="token_reservada">AET=Australia/Sydney</code></li>
                                            <li><code className="token_reservada">BST=Asia/Dhaka</code></li>
                                            <li><code className="token_reservada">ACT=Australia/Darwin</code></li>
                                            <li><code className="token_reservada">HST=-10:00</code></li>
                                            <li><code className="token_reservada">NST=Pacific/Auckland</code></li>
                                            <li><code className="token_reservada">AST=America/Anchorage</code></li>
                                            <li><code className="token_reservada">MST=-07:00</code></li>
                                            <li><code className="token_reservada">SST=Pacific/Guadalcanal</code></li>
                                            <li><code className="token_reservada">CTT=Asia/Shanghai</code></li>
                                            <li><code className="token_reservada">PRT=America/Puerto_Rico</code></li>
                                            <li><code className="token_reservada">ECT=Europe/Paris</code></li>
                                            <br/>        
                                            <li>Para o horário de brasília temos a seguinte opção: <code className="token_reservada">BET=America/Sao_Paulo</code>.</li>
                                            <li><code className="token_reservada">ZonedDateTime</code>: Com ela é possível visualizar as diferenças de horarios entre as zonas/locais (mostrando a <code className="token_reservada">ZoneId</code> tbm).</li>
                                            <li><code className="token_reservada">ZoneOffSet</code>: é aonde demonstra as diferenças de horários em sí (Encapsulando em apenas isto), ou seja, não demonstra a <code className="token_reservada">ZoneId</code>.</li>
                                            <li><code className="token_reservada">OffSetDateTime</code>: é a classe que faz o <code className="token_reservada">parsing</code> entre as diferenças e ai podemos visualizar em formato de data.</li>
                                            <br/>
                                            <li>Em resumo uma representação de uma data completa seria composta por: <code className="token_reservada">Data/THora:Minuto:Segundo.Milissegundos/+OffSet/[Zona]</code> ("2022-12-26T19:45:19.447985416+09:00[Asia/Tokyo]").</li>
                                            <br/>
                                            <li><code className="token_reservada">DateTimeFormatter</code>: Classe utilitária utilizada como parâmetro nos métodos das classes de Data e Hora para formatar e alterar os padrões de representação delas (Podemos representar com números "dd/mm/yyyy", também podemos representar escrito por extenso "22 de dezembro de 1999", dentre outros...) além de outras formatações mais complexas com <code className="token_reservada">DateTimeFormatterBuilder</code>, mais informações sobre <code className="token_reservada">DateTimeFormatter</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula129DateTimeFormatter_Utils.java" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">DateTimeFormatter</code>: Convertendo apartir de um Objeto de data ou tempo em uma <code className="token_reservada">String</code>, e convertendo/retornando apartir de uma <code className="token_reservada">String</code> em um Objeto de data ou tempo, e vise versa: Para converter/retornar uma <code className="token_reservada">String</code> apartir de um Objeto de tempo, passamos como argumento no método <code className="token_reservada">nowDate.format(DateTimeFormatter.BASIC_ISO_DATE);</code> aonde <code className="token_reservada">`nowDate`</code> é o objeto que representa a data atual simples "20/06/2023" <code className="token_reservada">LocalDate nowDate = LocalDate.now();</code> para transformar um objeto em uma <code className="token_reservada">String</code> formatada de acordo com esse padrão de máscara definido em <code className="token_reservada">DateTimeFormatter.ALGUM_ISO</code>, e o contrário para o <code className="token_reservada">LocalDate.parse("20221226", DateTimeFormatter.BASIC_ISO_DATE);</code> no qual transforma uma <code className="token_reservada">String</code> em um objeto (se atentar ao padrão de máscara definido anteriormente, pois se utilizar um inválido será lançado um <code className="token_reservada">DateTimeParseException</code>)</li>
                                            <li><code className="token_reservada">DateTimeFormatter</code>: Também é possível definir um padrão personalizado, utilizando o método estático <code className="token_reservada">DateTimeFormatter.ofPattern("dd/MM/yyyy");</code> e passá-lo no método <code className="token_reservada">.format()</code>.</li>
                                            <li><code className="token_reservada">DateTimeFormatter</code>: Mesma lógica serve para o <code className="token_reservada">.parse();</code>, para funcionar basta passar essa mesma instância padrão de máscara <code className="token_reservada">Pattern</code> personalizado dito acima como segundo argumento, sendo assim: <code className="token_reservada">nowDate.parse("22/12/1999", DateTimeFormatter.ofPattern("dd/MM/yyyy"));</code>.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        {/* <h3 class="projects-subtitle">[Aulas 108 até 111]</h3> */}
                                        <h3 class="projects-subtitle">Internacionalização: </h3>
                                        <ul className="projects-frontend--container">
                                            <li>Internacionalizar é polimorfisar o sistema de acordo com o <code className="token_reservada">Locale</code> (Região/Origem), adequando o sistema para diversos paises utilizando a mesma implementação, bastando alterar a instância do objeto <code className="token_reservada">Locale</code> para oferecer suporte a outros paises/origem.</li>
                                            <li><code className="token_reservada">Locale</code>: é o Objeto que representa a Origem/Localidade da JVM, ou seja, podemos utilizar o polimorfismo aqui para alterar diversos comportamentos de diversas Classes visando a Internacionalização, mais informações sobre <code className="token_reservada">Locale</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula115Locale_Internacionalizacao.java" target="_blank">Clique AQUI!</a></li>
                                            <li>Internacionalização de Datas com <code className="token_reservada">Locale</code> (Alterando o formato e etc de acordo com o padrão de origem <code className="token_reservada">Locale</code>), mais informações: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/C_formatacao/Aula115Locale_Internacionalizacao.java" target="_blank">Clique AQUI!</a></li>
                                            <li>Internacionalização de Números com <code className="token_reservada">Locale</code> (Separadores de milhares e etc diferentes para cada pais "1,200", "1.200,00"), mais informações: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/C_formatacao/Aula116NumberFormat_Number_Locale.java" target="_blank">Clique AQUI!</a></li>
                                            <li>Internacionalização de Moedas com <code className="token_reservada">Locale</code> (Separadores de milhares e etc também são diferentes para cada pais "$10,000.21", "￥10,000", "10.000,21 €"), mais informações: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/C_formatacao/Aula117NumberFormat_Coin_Locale.java" target="_blank">Clique AQUI!</a></li>
                                            <br/>
                                            <li><code className="token_reservada">ResourceBundle</code>: Classe utilizada para internacionalização e tradução automática de acordo com o <code className="token_reservada">Locale</code>, funciona como se fosse um dicionário aonde definimos arquivos de resource (estilo <code className="token_reservada">.env</code>) para cada linguagem/pais e nele definimos pares <code className="token_reservada">chave-valor</code> <code className="token_reservada">Key-Value</code>, esses dicionários são acessados pelo Java em cascata buscando o valor correspondente da chave, assim podemos pegar valores diferentes com a mesma chave, de acordo com esses <code className="token_reservada">Locale</code> que corresponde ao dicionário para ele, sendo assim podemos realizar traduções de linguagens em geral ou algo do tipo bastando alterar a instância do <code className="token_reservada">Locale</code> para o sistema se adequar nesta nova linguagem, mais informações sobre <code className="token_reservada">ResourceBundle</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/D_internacionalizacao/Aula130ResourceBundle_Internacionalizacao_Util.java" target="_blank">Clique AQUI!</a></li>
                                            <li>Esses dicionários são definidos como se fosse um <code className="token_reservada">`.env`</code> na raiz do projeto e com uma nomeclatura especial, algo parecido com <code className="token_reservada">`messages_en_US.properties`</code>, aonde <code className="token_reservada">`_en_US`</code> indica que é para acessar esse dicionário quando instânciado um <code className="token_reservada">Locale</code> <code className="token_reservada">`en_US`</code>, assim podemos definir vários dicionários para suportar os Paises desejados.</li>
                                            <li>Então definimos pares <code className="token_reservada">chave-valor</code> contendo a mesma chave para todos os dicionários porém com valores diferentes, algo parecido com <code className="token_reservada">`hello = Hello`</code> para o dicionário <code className="token_reservada">`messages_en_US.properties`</code> e <code className="token_reservada">`hello = Olá`</code> para o dicionário <code className="token_reservada">`messages_pt_BR.properties`</code>, sendo assim, utilizamos a mesma chamada da chave na implementação, bastando alterar apenas a instância do objeto <code className="token_reservada">Locale</code> para traduzir automáticamente.</li>
                                            <br/>
                                            <li>Existe uma regra sobre a ordem de procura do dicionário <code className="token_reservada">resource bundle</code> na raiz (<code className="token_reservada">`algo_bla_blabla.properties`</code>), caso não encontre o pais definido pelo <code className="token_reservada">Locale</code> correspondente ao criado nos <code className="token_reservada">`.properties`</code>, aonde a JVM executa a busca em cascata na seguinte ordem até encontrar o dicionário correspondente:</li>
                                            <li>Exemplo com o <code className="token_reservada">Locale("fr", "CA");</code>:</li>
                                            <li><code className="token_reservada">1o Primeiro</code> - Ele procura pelo dicionário correspondente ao <code className="token_reservada">Locale</code> instânciado, neste caso seria o dicionário <code className="token_reservada">`messages_fr_CA.properties`</code>.</li>
                                            <li><code className="token_reservada">2o segundo</code> - Se não encontrar, ele procura pelo dicionário genérico daquela linguagem, ignorando o pais (Genérico pois abstrai o pais e generaliza para a linguagem como um todo, neste caso o pais abstraído/ignorado seria o Canada <code className="token_reservada">`CA`</code>), neste caso seria o dicionário correspondente <code className="token_reservada">`messages_fr.properties`</code>.</li>
                                            <li><code className="token_reservada">3o Terceiro</code> - Se não encontrar, ele procura pelo dicionário correspondente ao <code className="token_reservada">Default do sistema</code>, ou seja, a linguagem e pais padrão do S.O corrente, no meu caso seria o dicionário <code className="token_reservada">`messages_en_US.properties`</code> (Linguagem e Pais Default do meu sistema).</li>
                                            <li><code className="token_reservada">4o Quarto</code> - Se não encontrar, ele procura pelo dicionário genérico da linguagem relacionado ao <code className="token_reservada">Default do sistema</code>, ignorando o pais (Genérico pois abstrai o pais e generaliza para a linguagem como um todo, no meu caso o pais abstraído/ignorado seria o <code className="token_reservada">`US`</code>), neste caso seria o dicionário correspondente <code className="token_reservada">`messages_en.properties`</code> (Linguagem Default do meu sistema).</li>
                                            <li><code className="token_reservada">5o Quinto</code> - Se não encontrar, ele procura pelo dicionário MAIS genérico de todos, ou seja, esse cenário seria o último caso, então é ideal definir a linguagem mais universal possivel nos valores correspondentes para as chaves dele, é sempre indicado definir ele para não ocorrer problemas se não encontrar nenhum, ele é definido como <code className="token_reservada">`messages.properties`</code>.</li>
                                            <li><code className="token_reservada">6o Sexto</code> - Se não encontrar nenhum vai ser lançado uma <code className="token_reservada">EXCEÇÃO</code>, porisso sempre é bom definir o dicionário MAIS genérico <code className="token_reservada">`messages.properties`</code>.</li>
                                            <br/>
                                            <li>Exemplo de utilização para o dicionário MAIS genérico <code className="token_reservada">`messages.properties`</code> é definir palavras que não possuem tradução para outros Idiomas, ou definir mensagens de <code className="token_reservada">Exceptions</code> pois sempre será as mesmas (em inglês) independente do <code className="token_reservada">Locale</code>.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        {/* <h3 class="projects-subtitle">[Aulas 131 até 137]</h3> */}
                                        <h3 class="projects-subtitle">Regex: </h3>
                                        <ul className="projects-frontend--container">
                                            <li><code className="token_reservada">Regex</code> (Expressões regulares) ou <code className="token_reservada">Regexp</code> (Regular Expression) é uma técnica na computação para encontrar padrões em textos, no Java utilizamos basicamente duas classes para essa funcionalidade, sendo elas <code className="token_reservada">Pattern</code> que define o padrão a ser buscado e <code className="token_reservada">Matcher</code> para realizar as comparações/matchs em sí no texto, mais informações sobre <code className="token_reservada">Pattern</code> e <code className="token_reservada">Matcher</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/E_regex/Aula131PatternAndMatcher.java" target="_blank">Clique AQUI!</a></li>
                                            <br/>
                                            <li><code className="token_reservada">1o Primeiro</code> - Utilizamos o método estático da classe <code className="token_reservada">Pattern.compile(regex)</code>, aonde <code className="token_reservada">`regex`</code> é os caracteres especiais que contém a lógica do padrão a ser buscado no texto, esse método só irá retornar a instância de <code className="token_reservada">Pattern objPattern</code> se a expressão passada no argumento for válida e compilar.</li>
                                            <li><code className="token_reservada">2o Segundo</code> - Após compilado a expressão, utilizamos o método NÃO estático do <code className="token_reservada">`objPattern`</code> retornado/criado no passo anterior, sendo assim <code className="token_reservada">objPattern.matcher(texto)</code>, aonde <code className="token_reservada">`texto`</code> é a <code className="token_reservada">String</code> do texto em sí que estamos realizando a busca utilizando como critério de comparação a expressão válida e compilada no primeiro passo, o retorno agora será um <code className="token_reservada">Matcher objMatcher</code>.</li>
                                            <li><code className="token_reservada">3o Terceiro</code> - Utilizamos um <code className="token_reservada">looping</code> que irá percorrer a <code className="token_reservada">String</code> e realizar os matchs em sí <code className="token_reservada">while(objMatcher.find())&#123;&#125;</code>.</li>
                                            <li><code className="token_reservada">4o Quarto</code> - Neste bloco do <code className="token_reservada">looping</code> podemos utilizar vários métodos do <code className="token_reservada">`objMatcher`</code> com diversos tipos de retornos relacionados aos matchs, nos estudos eu utilizei <code className="token_reservada">objMatcher.start()</code> e <code className="token_reservada">objMatcher.group()</code>.</li>
                                            <br/>
                                            <li><code className="token_reservada">objMatcher.start()</code> retorna o primeiro indice da posição dos matchs encontrados.</li>
                                            <li><code className="token_reservada">objMatcher.group()</code> retorna a quantidade total de valores que deram match no padrão, considerando apartir do valor corrente até os anteriores.</li>
                                            <li>Detalhe importante sobre o comportamento do <code className="token_reservada">`objMatcher`</code>: Ao utilizar o método <code className="token_reservada">objMatcher.start()</code>, por padrão, ele percorre a lista de elementos e ao dar match com o padrão definido na <code className="token_reservada">regex</code> ele retorna o indice e continua APARTIR DALI, ou seja, se temos um padrão <code className="token_reservada">"aba"</code> e realizamos a busca na String <code className="token_reservada">"abababa"</code> ele irá considerar os retornos: <code className="token_reservada">`0`</code> <code className="token_reservada">`4`</code> pois ele descarta o <code className="token_reservada">"aba"</code> do meio que já fez match na iteração anterior com a primeira ocorrência.</li>
                                            <br/>
                                            <li><code className="token_reservada">Meta Caracteres</code>: Os meta caracteres são os caracteres especiais de configuração para o <code className="token_reservada">Pattern</code>, existem inumeros e aqui estão os mais utilizados, mais informações sobre os <code className="token_reservada">Meta Caracteres</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/E_regex/Aula132PatternAndMatcher_metaCaracteres.java" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">`\d`</code> - Todos os <code className="token_reservada">digítos</code>.</li>
                                            <li><code className="token_reservada">`\D`</code> - Ao contrário, ou seja, retorna tudo que <code className="token_reservada">NÃO</code> for <code className="token_reservada">digito</code>.</li>
                                            <li><code className="token_reservada">`\s`</code> - Todos os <code className="token_reservada">espaços em branco</code> (<code className="token_reservada">`\t`, `\n`, `\f`, `\r`</code>).</li>
                                            <li><code className="token_reservada">`\S`</code> - Ao contrário, ou seja, retorna tudo que <code className="token_reservada">NÃO</code> for <code className="token_reservada">espaço em branco</code>.</li>
                                            <li><code className="token_reservada">`\w`</code> - Todas as letras (<code className="token_reservada">a-z e A-Z</code>), <code className="token_reservada">digítos</code>, e <code className="token_reservada">`_`</code> (Ou seja, exclui todos caracteres especiais menos o <code className="token_reservada">`_`</code>).</li>
                                            <li><code className="token_reservada">`\W`</code> - Ao contrário, ou seja, retorna tudo que <code className="token_reservada">NÃO</code> for <code className="token_reservada">letras</code>, <code className="token_reservada">digitos</code> e <code className="token_reservada">`_`</code>.</li>
                                            <br/>
                                            <li><code className="token_reservada">Range</code> <code className="token_reservada">`[]`</code>: Podemos delimitar intervalos de valores no <code className="token_reservada">Pattern</code> utilizando <code className="token_reservada">`[]`</code> (Exemplo: Intervalos numéricos de 1 até 9 <code className="token_reservada">`[1-9]`</code>, ou também intervalos alfabéticos de A até Z com <code className="token_reservada">case insensitive</code> <code className="token_reservada">`[a-zA-Z]`</code>), porém desta forma sem nenhum <code className="token_reservada">quantificador</code> ele vai considerar apenas a primeira ocorrência encontrada, ou seja, o primeiro char que corresponder ao padrão, mais informações sobre range <code className="token_reservada">`[]`</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/E_regex/Aula133PatternAndMatcher_range.java" target="_blank">Clique AQUI!</a></li>
                                            <br/>
                                            <li><code className="token_reservada">Quantificadores</code>: Utilizamos quantificadores quando desejamos retornar vários valores de um range <code className="token_reservada">`[]`</code> pois o default é retornar apenas a primeira ocorrência que corresponder ao padrão do intervalo range, quando queremos continuar a interação sobre esse intervalo range e retornar mais valores utilizamos um <code className="token_reservada">agrupamento</code> <code className="token_reservada">`([])`</code> seguido de um dos operadores descritos abaixo (Exemplo <code className="token_reservada">`([])*`</code>), mais informações sobre os operadores <code className="token_reservada">quantificadores</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/E_regex/Aula134PatternAndMatcher_quantificadores.java" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">`?`</code> - Zero ou uma.</li>
                                            <li><code className="token_reservada">`*`</code> - Zero ou mais/vários.</li>
                                            <li><code className="token_reservada">`+`</code> - Uma ou mais/vários.</li>
                                            <li><code className="token_reservada">`&#123;n-min, n-max&#125;`</code> - De n-min até n-max.</li>
                                            <li><code className="token_reservada">`()`</code> - Agrupamento.</li>
                                            <li><code className="token_reservada">`|`</code> - Ou/Or (Exemplo: <code className="token_reservada">`o(v|c)o`</code> retorna match com <code className="token_reservada">"ovo"</code> ou <code className="token_reservada">"oco"</code>).</li>
                                            <li><code className="token_reservada">`$`</code> - Flag que indica fim da linha.</li>
                                            <br/>
                                            <li>Fonte interessante sobre <code className="token_reservada">quantificadores</code> e <code className="token_reservada">regex</code> em geral com Java: <a className="-linkBoldYellowProjects" href="https://www.programacaoprogressiva.net/2012/08/java-expressoes-regulares-regex-em-java_2423.html" target="_blank">Clique AQUI!</a></li>
                                            <br/>
                                            <li><code className="token_reservada">Anchor</code> <code className="token_reservada">`^`</code>: Esse operador possuí duas utilidades distintas a depender do contexto no qual estiver inserido, as duas possibilidades estão descritas abaixo, mais informações sobre <code className="token_reservada">Anchor</code> <code className="token_reservada">`^`</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/E_regex/Aula136PatternAndMatcher_Anchor.java" target="_blank">Clique AQUI!</a></li>
                                            <li>Utilizando ele no começo da expressão fora do range <code className="token_reservada">`^[\w]`</code> indicamos que queremos <code className="token_reservada">EXATAMENTE</code> a próxima expressão, isto em referência ao inicio do texto no qual estamos aplicando o match do regex.</li>
                                            <li>Utilizando ele dentro do range <code className="token_reservada">`[^\w]`</code> indicamos que <code className="token_reservada">NÃO</code> queremos esses valores do intervalo,  ou seja, funciona como <code className="token_reservada">negação</code> <code className="token_reservada">`!`</code> dos valores deste intervalo range, sendo assim, vai retornar TUDO que <code className="token_reservada">NÃO</code> fazer match na expressão do range.</li>
                                            <br/> 
                                            <li><code className="token_reservada">Scanner</code>: <code className="token_reservada">NÃO</code> é uma classe relacionada a <code className="token_reservada">regex</code>, mas podemos utilizar ela em conjunto e realizar algumas operações interessantes (Ela vai além de escanear as entradas do usuário pelo console com <code className="token_reservada">Scanner scan = new Scanner(System.in);</code> rsrs), utilizamos ela também para iterar em arquivos textos e etc, podendo assim fragmentar em tokens de acordo com alguma lógica/padrão e receber esses valores dos elementos (tokens) em variáveis corretas a depender de seus <code className="token_reservada">Tipos Primitivos</code> sem precisar fazer <code className="token_reservada">casts</code> explícitos pois o default é considerar todos tokens como <code className="token_reservada">String</code>. Para realizar essa operação basta apenas instânciar um Objeto <code className="token_reservada">Scanner</code> passando no construtor qual será o recurso texto que desejamos iterar e pegar esses valores (<code className="token_reservada">Scanner scann = new Scanner(texto_str);</code>), após instânciado o Objeto <code className="token_reservada">`scann`</code> podemos alterar o <code className="token_reservada">delimitador</code> que faz o <code className="token_reservada">.split()</code> em sí, esse parâmetro dele é uma <code className="token_reservada">regex</code> portanto podemos personalizar a regra que irá fragmentar esse texto em tokens no qual iremos iterar (<code className="token_reservada">scann.useDelimiter(", ");</code>), após isso basta utilizarmos um looping (<code className="token_reservada">while(scanner.hasNext())&#123;&#125;</code>) e neste bloco realizar verificações com <code className="token_reservada">if</code> qual é o <code className="token_reservada">Tipo Primitivo</code> do próximo elemento em iteração (<code className="token_reservada">if(scanner.hasNextInt())&#123;&#125;</code>), assim bastando recebe-los em variáveis correspondentes, mais informações sobre <code className="token_reservada">Scanner</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/E_regex/Aula137Scanner_Utils.java" target="_blank">Clique AQUI!</a></li>
                                            <br/>   
                                            <li> AINDA NÃO ACABOU!! Estou atualizando aos poucos... ;D (Material completo no repositório git)</li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="projects-subdescription--container">
                                    <h3 class="projects-subtitle">Descrição</h3>
                                    <p>
                                        EM DESENVOLVIMENTO... (Material completo no repositório git)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <hr/>
                    <article className="projects-single">
                        <div className="projects-right">
                            <div className="projects-title--container">
                                <div>
                                    <h3 className="projects-title">Gerador de Resumos de Vídeos com Inteligência Artificial</h3>
                                    <a href="https://github.com/WelBert-dev/ExtractTranscriptFromVideoAndSummarizingGeneratorUsingGPT/tree/main" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span>Ciência de Dados: Utilizando GPT e Whisper</span>
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
                                        <ul>
                                            <li>Inteligência Artificial para extrair textos de áudios.</li>
                                            <li>Essas extrações são chamadas de "Transcript" que é a representação do áudio em arquivo texto.</li>
                                            <li>A entrada do Whisper é áudio, logo, devemos converter o vídeo em áudio.</li>
                                            <li>Open Source, ou seja, podemos instalar e executar em ambiente Local.</li>
                                            <li>MIT License.</li>
                                            <li>Apesar de ser Open Source, executar localmente exige boa capacidade de hardware (O que não é meu caso rsrs).</li>
                                            <li>Existem 5 módulos, cada um com um tamanho diferente, e automaticamente diferentes capacidades de processamento e resultados.</li>
                                            <li>Tiny: Módulo mais básico, 39M de parameters, não exige tanto poder de hardware/processamento (min de VRAM 1GB) e 32x velocidade.</li>
                                            <li>Base: Módulo mais básico, com mesmo VRAM do anterior porém menor velocidade e mais parametros de entrada 74M de parameters e 16x velocidade.</li>
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
                                        <ul>
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
                                    <h3 class="projects-subtitle">Descrição</h3>
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
                                <p>Código do projeto clicando no botão acima</p>
                            </div>
                            <div>
                                <img className="projects-logo" src={logoQrCodeGenerator} alt="Amostra Amazon" ></img>
                            </div>
                            <div className="subContainer-bottom">
                                <ul className="projects-description--container">
                                    <li>
                                        <h3 class="projects-subtitle">BackEnd</h3>
                                        <ul>
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
                                        <ul>
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
                                    <h3 class="projects-subtitle">Descrição</h3>
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
                                <p>Código do projeto clicando no botão acima</p>
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
                            <div className="projects-title--container">
                                <div>
                                    <h3 className="projects-title">Clone Amazon ReactJs e Asp.NetCore</h3>
                                    <a href="https://github.com/welBert-dev/ecommerceWebApi-microServices-dotNetCoreMVC" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span>WEB E2E</span>
                                <p>Código do projeto clicando no botão acima</p>
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
                                <p>Código do projeto clicando no botão acima</p>
                            </div>
                            <div>
                                <img className="projects-logo" src={netflixAmostra} alt="Amostra Netflix" ></img>
                            </div>
                            <div className="subContainer-bottom">
                                <ul className="projects-description--container">
                                    <li>
                                        <h3 class="projects-subtitle">BackEnd</h3>
                                        <ul>
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
                                            <li>Parametro para vir traduzido em pt-BR: <span className="-BoldYellow">"language=pt-BR"</span></li>
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
                                        Clone da interface netflix web utilizando as ferramentas acima, projeto teoricamente simples porém cheio de detalhes
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
                            <div className="projects-title--container">
                                <div>
                                    <h3 className="projects-title">Interface Clínica AuauMiau sem frameworks (Frontend) Vanilla</h3>
                                    <a href="https://github.com/WelBert-dev/auauMiauWeb-NoFramework" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span>WEB NoE2E (HTML5 + CSS3 + Js PURO)</span>
                                <p>Código do projeto clicando no botão acima</p>
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
