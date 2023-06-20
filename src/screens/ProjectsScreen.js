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
                                    <h3 className="projects-title">Maratona Java - DevDojo (285 Aulas)</h3>
                                    <a href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span>Curso completo desde Fundamentos até a API Nativa.</span>
                                <span>Repositório git criado no formato de "RoadMap" para cada Módulo e seus tópicos abordados.</span>
                                <span>Processo todo documentado e informações faltantes adicionada utilizando ChatGPT.</span>
                                <span>Dividido em duas partes/pacotes: Documentação em Anotações e SRC de estudos práticos.</span>
                                <span>Para cada Módulo um pacote separado em SRC, e um arquivo txt com o Overview geral sobre.</span>
                                <span>Resumo para cada tópico abordado em cada Módulo e seus devidos links logo abaixo.</span>
                                <p>Código do projeto clicando no botão a cima</p>
                            </div>
                            <div>
                                <img className="projects-logo" src={logoMaratonaJavaDevDojo} alt="Amostra logo DevDojo Maratona Java" ></img>
                            </div>
                            <div className="subContainer-bottom">
                                <ul className="projects-description--container">
                                    <li>
                                        <h3 class="projects-subtitle">[Aulas 75 até 94]</h3>
                                        <h3 class="projects-subtitle">OverView geral sobre POO (Relembrando): </h3>
                                        <ul>
                                            <li>[Aula 75] - Sequência de inicialização (Ordem de precedência de execução quando usado herança, e blocos estáticos): <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula75-sequenciaDeInicializacao.txt" target="_blank">Clique AQUI!</a></li>
                                            <li>[Aula 77] - Mais sobre Static (Alocamento único de memória, Compartilhado entre todas instâncias de classe): <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula77-maisSobreStatic.txt" target="_blank">Clique AQUI!</a></li>
                                            <li>[Aulas 78 e 79] - Mais sobre Final (Constante): <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula78e79-maisSobreFinal.txt" target="_blank">Clique AQUI!</a></li>
                                            <li>[Aulas 80 até 83] - Mais sobre Enum (Enumeradores também são Classes e Objetos): <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula80a83-enum.txt" target="_blank">Clique AQUI!</a></li>
                                            <li>[Aulas 84 até 86] - Mais sobre Abstract (Generaliza classes, define comportamentos comuns a todos herdeiros): <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula84a86-abstract.txt" target="_blank">Clique AQUI!</a></li>
                                            <li>[Aulas 87 até 89] - Mais sobre Interfaces (Definição de contratos que obrigam comportamentos, ajuda no desacoplamento dos módulos, bastante utilizado com Dependency Injection (Inversion of control) DI/IoC): <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula87a89-interfaces.txt" target="_blank">Clique AQUI!</a></li>
                                            <li>[Aulas 90 até 94] - Mais sobre Polimorfismo (Capacidade de se adaptar a mudanças ao longo da implementação, existem várias formas de aplicar este conceito em POO): <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula90a94-polimorfismo.txt" target="_blank">Clique AQUI!</a></li>

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
                                            
                                            <li>Continua...</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">[Aulas 95 até 105]</h3>
                                        <h3 class="projects-subtitle">Mais sobre Exceptions: <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula94a105-exception.txt" target="_blank">Clique AQUI!</a></h3>
                                        <ul className="projects-frontend--container">
                                            <li>Estrutura Hierárquica do fluxo de herança, Herdeiros de Exception são Checked e Herdeiros de RuntimeException são Unchecked, quando lançar throws na assinatura e quando tratar em blocos try-catch.</li>
                                            <li>Estrutura Hierarquica do fluxo de herança pois tudo no java é Object, logo, as Exceptions também possuem superclasses e subclasses (Checked para herdeiros de Exception e Unchecked para herdeiros de RuntimeException).</li>
                                            <li>Todos são herdeiros de Throwable porisso é possível lançar, porém existem diferenças nos tipos de Exceptions e a forma como é tratado (Error, Exception (Checked) e RuntimeException (Unchecked)).</li>
                                            <li>Errors não são Exceptions, esse tipo esta fora de nosso controle, Errors não são possiveis de tratar com lógica, logo, quando ocorrer geralmente o programa finaliza, por exemplo acabar a memória durante a execução (OutOfMemoryError), ou quando estoura a pilha de chamadas (StackOverflowError).</li>
                                            <li>Exceptions do tipo Checked: São checadas e filhas da classe Exception diretamente, se não tratadas o JavaC nem compila. (Exemplo IOException ao tentar ler arquivos inexistentes, esse se não tratar não irá compilar).</li>
                                            <li>Exceptions do tipo Unchecked: São desconhecidas até que ocorra em tempo de execução (Ou seja, geralmente é causado por falhas de lógica do desenvolvedor), filhas da classe RuntimeException diretamente ou elá própria, não necessita de tratamentos prévios pois ela só será conhecida em tempo de execução, logo, o Java não obriga tratamentos (Exemplo IndexOutOfBoundsException tentar acessar index inválido/inexistente de um Array).</li>
                                            <li>Nunca definir regras de negócio em blocos catch, ele serve apenas para TRATAR a Exception lançada.</li>
                                            <li>Exceptions capturadas em blocos try-catch NÃO param o fluxo de execução corrente deste método em questão se lançadas!</li>
                                            <li>Exceptions lançadas com throws new RuntimeException (Ou subclasses filhas dela Uncheckeds) no fluxo regular de execução corrente PARAM e retornam para quem chamou, porém NÃO obriga o chamador a tratar ela, neste caso, vai retornando a pilha de chamadas até alguém interceptar e tratar, se ninguem deste workflow tratar o programa é finalizado.</li>
                                            <li>A Regra sobre NÃO obrigar tratamentos em blocos try-catch RuntimeException's (Unchecked) é aplicada MESMO se lançado throws na assinatura do método, para este tipo de RuntimeException (Unchecked) essa funcionalidade serve apenas para dar dicas ao desenvolvedor no momento de utilizar esse método em questão.</li>
                                            <li>Ao contrário ocorre com Exceptions (Checked) que obrigam o tratamento no fluxo regular de execução corrente com uso de try-catch ou delegando essa responsabilidade de tratamento para quem está chamando com o lançamento de throws Exception (Checked) na assinatura.</li>
                                            <li>Quando tratar em blocos try-catch e quando delegar a responsabilidade para quem está chamando (Lançando throws na assinatura).</li>
                                            <li>Podemos lançar throws na assinatura de todos os métodos da pilha de chamadas para delegar e retornar a responsabilidade para TODOS do fluxo, que ele vai retornando o workflow em cascata, porisso o questionamento a cima, então em qual passo deste workflow de chamadas devemos tratar a Exception (Checked)? se ninguem tratar o programa irá finalizar.</li>
                                            <li>Para saber quando tratar ou não com blocos try-catch no fluxo regular de execução corrente, devemos análisar se esse método em questão será utilizado por vários outros, se isso ocorrer é ideal DELEGAR a responsabilidade de tratamento para quem está chamando pois assim cada um trata da melhor forma para o seu contexto especifico.</li>
                                            <li>Dica sobre o ponto acima: Análisar qual é o nível de privacidade do modificador de acesso deste método que lança, quanto mais ABERTO (public) ele for quer dizer que vários outros iram utiliza-lo, logo, é ideal DELEGAR esse tratamento para eles.</li>
                                            <li>Tratamento em mão dupla, tratando com try-catch e re-lançando a Exception: Podemos também capturar a Exception lançada em blocos try-catch e mesmo assim DELEGAR esse mesmo tratamento para quem está chamando também, definindo throws na assinatura e retornando o Objeto da Exception (ex) no bloco catch (Neste caso, não será necessário utilizar new pois o Objeto já existe neste ponto e está vindo no argumento do catch, a não ser que seja outro tipo de Exception, neste caso é necessário criar o Objeto com new).</li>
                                            <li>Blocos try-catch-finally para quando desejamos sempre executar algum bloco de lógica, independentemente se ocorrer lançamentos ou não (Finally).</li>
                                            <li>Capturando múltiplas exceções com uso de Sobrecarga de catchs para tratamentos, sempre começando a tratar as Exceptions mais Especializadas e por final a mais Genérica, pois se inverter ele sempre irá executar a mais Genérica devido ao POLIMORFISMO e irá simplismente ignorar as outras, ou seja, nunca seram executados.</li>
                                            <li>Sintaxe diferente para a mesma ação anterior, porém apenas para Exceptions com fluxo de herança diferentes entre sí e para todos o tratamento é o MESMO (Já que para todos irá executar esse mesmo bloco): Múltiplos catch em linha (utilizando pipe "|" como separador no parâmetro do catch) serve APENAS para Exceptions com fluxo de herança diferentes entre sí (Devido ao POLIMORFISMO), NÃO é possível nem se colocado o parâmetro na ordem do mais Especializado para o mais Genérico! essa sintaxe torna o código mais legível e coeso em alguns casos.</li>
                                            <li>Ao utilizar mútli catch em linha a variável de referência (ex) passada no argumento do catch por segurança é final, não sendo possível atribuir um novo Objeto para ela (Nem mesmo se for algum dos tipos de Exceptions sobrecarregados em linha com o "|" no argumento do catch).</li>
                                            <li>try-with-resources (`try(RecursoCloseble r = new RecursoCloseble) catch{}`) para fechar/liberar recursos sem a necessidade de utilizar .close() explicitamente (APENAS para classes que implementam a interface Closeable ou AutoCloseable devido ao polimorfismo que obriga a concretização/implementação do método .close() presente nestas interfaces), pois a própria JVM se encarrega de executar esse método no final do try. Deixando o código mais legível e coeso sem códigos redundantes.</li>
                                            <li>Diferente de outros usos do try-catch, o try-with-resources não obriga o uso do catch em conjunto do try(), desde que lançado na assinatura do método o throws com as possíveis Exceptions lançadas pelos Recursos do argumento `try(RecursoCloseble r = new RecursoCloseble)` DELEGANDO assim esse tratamento catch para o chamador deste método no passo anterior do workflow na pilha de chamadas.</li>
                                            <li>Ordem de execução do método .close() quando utilizado mais de um Recurso no argumento do `try(RecursoCloseble r1 = new RecursoCloseble; RecursoCloseble2 r2 = new RecursoCloseble2)`, neste caso a ordem de execução para liberar recursos será na ordem INVERSA em que foram declarados, ou seja, do ÚLTIMO argumento até/para o PRIMEIRO.</li>
                                            <li>Isso ocorre pois geralmente quando estamos liberando recursos de banco de dados por exemplo, a pilha de chamadas (Stack) que libera recursos e/ou fecha conexão devem ser executadas na ordem INVERSA da qual foram executadas para abrir o recurso.</li>
                                            <li>Implementando Exceções customizadas com extends em alguma Exception/RuntimeException para cenários especificos em que o java não o faz. Essas também seguem as mesmas regras ditas anteriormente (Checked e Unchecked) e etc...</li>
                                            <li>Regras sobre Override quando esse método lança alguma Exception: Quem está extends (subClasse) não é obrigado a declarar as mesmas Exceptions/RuntimeExceptions que o pai (superClasse) faz, pois, o mesmo pode querer realizar tratamentos diferentes ou lançar Exceptions diferentes da que o pai (superClasse) está lançando, umas vez que a implementação pode ser TOTALMENTE diferente e automaticamente lançar diferentes Exceptions/RuntimeExceptions, ou nem lançar nenhuma, se necessário.</li>
                                            <li>Para o cenário anterior, APENAS não será possível declarar Exceptions/RuntimeExceptions diferentes na assinatura com throws do filho (subClasse) que está Override (extends), se lançado tipos mais GENÉRICOS que o pai (superClasse) está lançando, apenas podemos lançar o mesmo tipo ou subClasses mais Especializadas que o pai (superClasse) está lançando.</li>
                                            <li>EM NENHUM CASO é possível declarar Exceptions (Checked) neste método Override se o pai (superClasse) não estiver declarando.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">[Aulas 106 e 107]</h3>
                                        <h3 class="projects-subtitle">Objetos Wrappers dos Tipos Primitivos: <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula106e107-classesUtilitarias-Wrappers.txt#L40" target="_blank">Clique AQUI!</a></h3>
                                        <ul className="projects-frontend--container">
                                            <li>Encapsula os tipos primitivos em Objetos para contextos que esperam eles alocando memória e tratando eles como se fossem Objetos (Devido a isso, altera o comportamento de passagem por valor dos Primitivos para passagem por referência dos Objetos).</li>
                                            <li>Fornece funcionalidades/métodos estáticos prontos especializado para cada tipo primitivo (Utilitário).</li>
                                            <br/>
                                            <li>Byte: Objeto Wrapper para o Tipo Primitivo int (8bits).</li>
                                            <li>Short: Objeto Wrapper para o Tipo Primitivo int (16bits).</li>
                                            <li>Integer: Objeto Wrapper para o Tipo Primitivo int (32bits).</li>
                                            <li>Long: Objeto Wrapper para o Tipo Primitivo long (64bits).</li>
                                            <li>Float: Objeto Wrapper para o Tipo Primitivo float (32bits).</li>
                                            <li>Double: Objeto Wrapper para o Tipo Primitivo double (64bits).</li>
                                            <li>Character: Objeto Wrapper para o Tipo Primitivo char.</li>
                                            <li>Boolean: Objeto Wrapper para o Tipo Primitivo boolean.</li>
                                            <br/>
                                            <li>Muito utilizado com Listas/Coleções pois as mesmas utilizam a referência do Objeto, logo, não é possível criar as mesmas para Tipos Primitivos (Já que os mesmos não possuem referência), então a solução é criar Listas/Coleções para os Objetos Wrappers.</li>
                                            <li>Além das listas, também é bem utilizado em cenários de concorrência (MultiThreads) aonde para sincronizar com `synchronized` só é possível em Objetos, dentre outros contextos.</li>
                                            <li>A Regra do POLIMORFISMO também se aplica a eles.</li>
                                            <li>Boxing/AutoBoxing: Quando o Java encapsula o Tipo Primitivo em Wrapper (Alocando memória, assim temos a referência e o valor em sí) `Integer intW = 10`.</li>
                                            <li>Unboxing/AutoUnboxing: Quando o Java desencapsula o Tipo Primitivo, ou seja, processo INVERSO do anterior (Removendo a referência e re-alocando o valor em uma variável primitiva comum) `int intP = intW; O java esta desencapsulando, e armazenando em um Tipo Primitivo comum (int)`.</li>
                                            <li>Essa ação do Java sobre os Wrappers é importante, pois em alguns cenários aonde realizamos operações de iterações com somas e etc utilizando os Wrappers, esse processo pode ser CUSTOSO em relação ao desempenho pois a cada iteração o Java aloca e desaloca memória.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">[Aulas 108 até 111]</h3>
                                        <h3 class="projects-subtitle">Mais sobre Strings:  <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula108a111-classesUtilitarias-Strings.txt" target="_blank">Clique AQUI!</a></h3>
                                        <ul className="projects-frontend--container">
                                            <li>Strings no Java são Objetos Imutáveis devido ao Pool de Strings constantes.</li>
                                            <li>Strings constants pool é uma técnica que a JVM faz para otimizar recursos de armazenamento quando trabalhamos com Strings. (Implementação baseada em String Interning que é uma técnica na computação para armazenar apenas uma cópia de cada valor de string distinto).</li>
                                            <li>O Java implementa o conceito acima compartilhando as palavras entre toda aplicação, alocando memória apenas para palavras novas.</li>
                                            <li>Ou seja, antes dele alocar memória para a palavra, ele verifica no pool se ela já existe evitando assim duplicatas (DISTINCT).</li>
                                            <li>PORÉM essa implementação acaba atrapalhando alguns cenários em que é realizado muitas Iterações com concatenação, devido a JVM alocar memória no pool de strings para CADA palavra diferente, em alguns casos aonde não seria preciso. (Mais explicações no TXT de estudos).</li>
                                            <li>StringBuilder e StringBuffer (Chegam para corrigir o problema de cima, e outros cenários que visam performance em Iterações), pois eles manipulam diretamente a memória alocada inicialmente, e não utiliza o pool de strings que fica alocando espaço para cada palavra diferente.</li>
                                            <li>A Diferença deles é que o StringBuffer é desenhado para cenários de MultiThreads e Concorrência.</li>
                                            <li>Se atentar ao tipo de retorno se utilizado essas classes (StringBuilder e StringBuffer) ou outras, quando o tipo de retorno é diferente do Objeto manipulado em memória em sí, quer dizer que a lógica não está alterando o valor real em memória e sim apenas esse retorno em questão.</li>
                                            <li>Sobre o ponto a cima neste contexto, quando utilizamos um StringBuilder e algum método está retornando uma String Wrapper comum, isso quer dizer que a lógica só está sendo aplicada no retorno, e não está alterando o valor real em memória do Objeto. (objBuilderOrBuffer.reverse() retorna um StringBuilder, logo altera o valor real em memória, já .subString() retorna uma String Wrapper comum, logo NÃO está alterando o valor real em memória, está apenas aplicando a lógica no retorno).</li>
                                            <li>Métodos utilitários prontos para manipulação de Strings (replace, substring, trim, charAt, toUpperCase, e etc).</li>
                                            <br/>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">[Aulas 108 até 111]</h3>
                                        <h3 class="projects-subtitle">Manipulação de Datas e Horas (Legado e Novo): <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula112a115e118a129-maipula%C3%A7%C3%A3oData%26Tempo%26formata%C3%A7%C3%A3o" target="_blank">Clique AQUI!</a></h3>
                                        <ul className="projects-frontend--container">
                                            <li>Maneira Legada (Date e Calendar do pacote java.util) porém tem problemas de Internacionalização e Limitações nas possibilidades de representações.</li>
                                            <li>Muitos sistemas ainda utilizam elas! Não é uma boa prática apartir do Java 8.</li>
                                            <li>Date: Representado por um Long que representa os milisegundos de 01/01/1970 até 17/08/292278994 04:12 (valor máximo de um long), mais informações sobre Date: <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula112Date.java" target="_blank">Clique AQUI!</a></li>
                                            <li>Calendar: Devido ao problema inicial de Internacionalização é criado a classe Calendar (Abstrata, ou seja, é necessário uso do método Builder estático para sua criação, o mesmo faz verificações de origem da JVM para obter datas corretas (Internacionalização), ou podemos alterar esse comportamento padrão passando na sobrecarga do construtor um Objeto Locale), mais informações sobre Calendar: <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula113Calendar.java" target="_blank">Clique AQUI!</a></li>
                                            <li>Calendar: utiliza o mesmo long do Date para representar a data (sendo os mesmos milisegundos de 01/01/1970 até 17/08/292278994 04:12).</li>
                                            <li>Calendar: é concretizada/implementada por 3 classes no Java 17: BuddhistCalendar, GregorianCalendar e JapaneseImperialCalendar.</li>
                                            <br/>
                                            <li>DateFormat: Devido a este tipo de representação ser inviável na visualização humana, podemos utilizar a classe DateFormat para melhorar na visibilidade humana formatando esses milis em Strings "22/12/199" (equivalente do -h do Unix Like), mais informações sobre DateFormat: <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula114DateFormat.java" target="_blank">Clique AQUI!</a></li>
                                            <li>DateFormat: Para armazenar em banco de dados podemos utilizar a mesma abordagem de cima, porém no padrão "dd-MM-yyy".</li>
                                            <li>DateFormat: Regra sobre .format() que recebe um Objeto e retorna/converte em uma String, e .parse() que recebe uma String e retorna/converte em um Objeto, essa regra se aplica em várias classes da API Nativa do Java.</li>
                                            <br/>
                                            <li>Locale: é o Objeto que representa a Origem/Localidade da JVM, ou seja, podemos utilizar o POLIMORFISMO aqui para alterar diversos comportamentos de diversas Classes visando a Internacionalização, mais informações sobre Locale: <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula115Locale_Internacionalizacao.java" target="_blank">Clique AQUI!</a></li>
                                            <br/>
                                            <li>Internacionalização de Datas com Locale (Alterando o formato e etc de acordo com o padrão de origem Locale), mais informações: <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/C_formatacao/Aula115Locale_Internacionalizacao.java" target="_blank">Clique AQUI!</a></li>
                                            <li>Internacionalização de Números com Locale (Separadores de milhares e etc diferentes para cada pais "1,200", "1.200,00"), mais informações: <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/C_formatacao/Aula116NumberFormat_Number_Locale.java" target="_blank">Clique AQUI!</a></li>
                                            <li>Internacionalização de Moedas com Locale (Separadores de milhares e etc também são diferentes para cada pais "$10,000.21", "￥10,000", "10.000,21 €"), mais informações: <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/C_formatacao/Aula117NumberFormat_Coin_Locale.java" target="_blank">Clique AQUI!</a></li>
                                            <br/>
                                            <li>SimpleDateFormat: Mesmo contexto da DateFormat porém podemos definir um padrão personalizado por nós (Mesma regra sobre .format() que recebe um Objeto e retorna/converte em uma String, e .parse() que recebe uma String e retorna/converte em um Objeto), mais informações sobre SimpleDateFormat: <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula118SimpleDateFormat.java" target="_blank">Clique AQUI!</a></li>
                                            <li>SimpledateFormat: Porisso devemos nos atentar as possíveis lançadas de RunExceptions por criar um padrão e na hora de converter passar um padrão diferente deste criado anteriormente.</li>
                                            <br/>
                                            <li>Maneira Nova: Com esses problemas de Limitações nas representações (long) possíveis e problemas de Internacionalização apartir do Java 8 é adicionado um pacote completo especializado em datas java.time (Criado por um Brasileiro e adotado pelo Java).</li>
                                            <li>Maneira Nova: Imutável e Representa os milisegundos, suportando até +999999999-12-31 e -999999999-01-01.</li>
                                            <li>LocalDate: Utilizada para representar datas simples "22/12/1999" substituindo Date e Calendar (1999-12-22), mais informações sobre LocalDate: <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula119LocalDate.java" target="_blank">Clique AQUI!</a></li>
                                            <li>LocalTime: Utilizada para representar "horas:minutos:segundos:nanosegundos" (08:30:00), mais informações sobre LocalTime: <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula120LocalTime.java" target="_blank">Clique AQUI!</a></li>
                                            <li>LocalDateTime: Utilizada para representar as duas anteriores, contendo todas as funcionalidades das duas classes anteriores em uma, sendo assim "yyyy-MM-ddThoras:minutos:segundos.nanosegundos" (2022-12-07T23:39:20.813999247), mais informações sobre LocalDateTime: <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula121LocalDateTime.java" target="_blank">Clique AQUI!</a></li>
                                            <li>Instant: Utilizada para representar nano segundos (de 01/01/1970 até 17/08/292278994 04:12), ou seja, a menor unidade/medida de tempo suportada pelo computador, representa um ponto instantâneo dentro de uma linha temporal. A Saída do toString dele é a mesma que do localDateTime porém com um Z no final de Zulu time, mais informações sobre Instant: <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/B_time/Aula122Instant_NanoSeconds.java" target="_blank">Clique AQUI!</a></li>
                                            <li>Zulu time (UTC) é um fuso horário universal, ou seja, quando queremos o horário correto basta converter "zulu time to brazil" e etc...</li>
                                            <li>Instant: Utiliza 2 variáveis para representar Nano e EpochSeconds.</li>
                                            <br/>
                                            <li>Duration: Classe utilitária para pegar intervalos entre datas e horas, NÃO sendo possível utilizar em datas simples "22/12/1999" (Time or DateTime). Exemplo de classes compatíveis: LocalDateTime, LocalTime e Instant, mais informações sobre Duration: <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/B_time/Aula123Duration_Intervalos_Utils.java" target="_blank">Clique AQUI!</a></li>
                                            <li>Period: Classe utilitária com mesmo contexto da anterior, porém para pegar intervalos entre datas simples "22/12/1999" solução para a limitação da anterior (Date). Exemplo de classes compatíveis: LocalDate, mais informações sobre Period: <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula124Period_IntervalosDate_Utils.java" target="_blank">Clique AQUI!</a></li>
                                            <br/>
                                            <li>ChronoUnit: Tudo que é co-relacionado a datas, horas, minutos, segundos e nano segundos utiliza ChronoUnit, que seria tipo a "tipagem" desses tempos, logo, bastante métodos deste contexto utilizam eles como parâmetro e também temos métodos utilitários para cada tipo dessas unidades de tempo. (Exemplo de uso: Periodo entre dias `ChronoUnit.DAY.beetween(tal, tal);`, mais informações sobre ChronoUnit: <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula125ChronoUnit_Utils.java" target="_blank">Clique AQUI!</a></li>
                                            <br/>
                                            <li>TemporalAdjusters: Classe estática, ou seja, 100% utilitária para ajustes no tempo, mais detalhes sobre TemporalAdjusters: <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula126TemporalAdjusters_Utils.java" target="_blank">Clique AQUI!</a></li>
                                            <li>TemporalAdjusters: Classe polimorfica utilizada como parâmetro de várias classes relacionadas ao tempo, podemos assim sobrecrever o método adjustInto() para personalizar regras de negócios, mais detalhes sobre as possibilidades de implementações em src de treino (Exemplo: Pegando o próximo dia útil, considerando de segunda até quinta): <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula127TemporalAdjuster_Impl_ExeComWith.java" target="_blank">Clique AQUI!</a></li>
                                            <li>TemporalAdjusters: Diferenças entre `.with()` e `.plusDays()` é que o with altera sobrescrevendo a data já o plusDays faz a adição nele.</li>
                                            <br/>
                                            <li>Zone: Representa as zonas suportadas pelo Java, essas zonas é compostas por diferentes fuso horários (OffSet), mais informações sobre essas Zonas, OffSet e etc: <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula128Zone_Utils.java" target="_blank">Clique AQUI!</a></li>
                                            <li>ZonedId: Com elá é possível retornar um MAP com as zonas suportadas pelo Java (EAT=Africa/Addis_Ababa, EST=-05:00, PNT=America/Phoenix, PLT=Asia/Karachi, CNT=America/St_Johns, IET=America/Indiana/Indianapolis, VST=Asia/Ho_Chi_Minh, JST=Asia/Tokyo, ART=Africa/Cairo, PST=America/Los_Angeles, BET=America/Sao_Paulo, MIT=Pacific/Apia, CAT=Africa/Harare, AGT=America/Argentina/Buenos_Aires, NET=Asia/Yerevan, CST=America/Chicago, IST=Asia/Kolkata, AET=Australia/Sydney, BST=Asia/Dhaka, ACT=Australia/Darwin, HST=-10:00, NST=Pacific/Auckland, AST=America/Anchorage, MST=-07:00, SST=Pacific/Guadalcanal, CTT=Asia/Shanghai, PRT=America/Puerto_Rico, ECT=Europe/Paris).</li>
                                            <li>Para o horário de brasília temos a seguinte opção: BET=America/Sao_Paulo.</li>
                                            <li>ZonedDateTime: Com ela é ṕossível vizualizar as diferenças de horarios entre as zonas/locais (mostrando a zoneId tbm).</li>
                                            <li>ZoneOffSet: é aonde demonstra as diferenças de horários em sí (Emcapsulando em apenas isto), ou seja não demonstra a zoneId.</li>
                                            <li>OffSetDateTime: é a classe que faz o parsing entre as diferenças e ai podemos vizualizar em formato de data.</li>
                                            <br/>
                                            <li>Em resumo uma representação de uma data completa seria composta por: Data/Hora/MiliSeconds/OffSet/Zona (2022-12-26T19:45:19.447985416+09:00[Asia/Tokyo]).</li>
                                            <br/>
                                            <li>DateTimeFormatter: Classe utilitária utilizada como parâmetro nos métodos das classes de Data e Hora além de outras formatações mais complexas com DateTimeFormatterBuilder, aonde passamos como parâmetro no método `.format();` para transformar um objeto em uma String formatada de acordo com esse padrão definido em `DateTimeFormatter.ALGUM` e o contrário para o `.parse();` no qual transforma uma String em um objeto (se atentar ao padrão definido anteriormente), mais informações sobre DateTimeFormatter: <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula129DateTimeFormatter_Utils.java" target="_blank">Clique AQUI!</a></li>
                                            <li>DateTimeFormatter: Também é possível definir um padrão personalizado, utilizando o método estático `DateTimeFormatter.ofPattern("dd/MM/yyyy");` e passá-lo no método `.format()`.</li>
                                            <li>DateTimeFormatter: Mesma lógica serve para o `.parse();`, para funcionar basta passar essa mesma instância/padrão Pattern dito a cima como segundo parâmetro, sendo assim: `now.parse("22/12/1999", DateTimeFormatter.ofPattern("dd/MM/yyyy"));`.</li>
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
                    <hr/>
                    <article className="projects-single">
                        <div className="projects-right">
                            <div className="projects-title--container">
                                <div>
                                    <h3 className="projects-title">Gerador de Resumos de Vídeos com Inteligência Artificial</h3>
                                    <a href="https://github.com/WelBert-dev/ExtractTranscriptFromVideoAndSummarizingGeneratorUsingGPT/tree/main" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span>Ciência de Dados: Utilizando GPT e Whisper</span>
                                <p>Código do projeto clicando no botão a cima</p>
                            </div>
                            <div>
                                <ul className="projects-description--container">
                                    <li>
                                        <span class="-spanOfLinkAkitaDesbAlgTwitter">Vídeo completo do Youtube e já carregando apartir do Capítulo 07 do exemplo em: <a className="-linkBoldYellow" href="https://www.youtube.com/watch?v=uIflMYQnp8A#t=27m50s" target="_blank">Clique AQUI!</a></span>
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
                                            <li>Arquivo gerado do Google Colab dessas extrações (Basta editar para suas necessidades): <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/ExtractTranscriptFromVideoAndSummarizingGeneratorUsingGPT/blob/main/google_colab/audioToTranscription_withWhisperOpenAI.ipynb" target="_blank">Clique AQUI!</a></li>
                                            <li>Para executar localmente, basta clonar o repositório git e seguir o get started: <a className="-linkBoldYellow" href="https://github.com/openai/whisper/" target="_blank">Clique AQUI!</a></li>
                                            <li>Finalizado o processo, aqui conseguimos extrair o Transcript do áudio localmente ou utilizando processamento em nuvem (Google Colab).</li>
                                            <li>A nível de curiosidade os transcripts que eu gerei estão em: <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/ExtractTranscriptFromVideoAndSummarizingGeneratorUsingGPT/tree/main/transcriptions" target="_blank">Clique AQUI!</a></li>

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
                                            <li>Os prompts que eu fiz estão em: <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/ExtractTranscriptFromVideoAndSummarizingGeneratorUsingGPT/blob/main/promptsList.txt" target="_blank">Clique AQUI!</a></li>
                                            <li>Aonde está "&#x0007B;transcribe&#x0007D;" é aonde colamos o transcript fragmentado.</li>
                                            <li>Pronto, basta integrar o transcript com uma boa pergunta (prompt) para o ChatGPT gerar os resumos desejados! ;D</li>
                                            <li>A nível de curiosidade os resumos que eu gerei estão separados por prompts em: <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/ExtractTranscriptFromVideoAndSummarizingGeneratorUsingGPT/tree/main/summaries_generated" target="_blank">Clique AQUI!</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="projects-subdescription--container">
                                    <h3 class="projects-subtitle">Descrição</h3>
                                    <p>
                                        A Ideia surgiu com o vídeo da rocketseat, aonde o produtor fala sobre estar criando o projeto e explica o overview do fluxograma, e com base nessas informações eu fui atrás da solução completa.
                                        Para obter um resultado mais preciso é recomendável utilizar a API do Whisper na extração do Transcript pois ela possibilita enviar prompts como parâmetros junto com o áudio, assim
                                        a Inteligência Artificial identifica melhor as palavras técnicas ditas no vídeo, pois gerar transcripts de vídeos técnicos é complicado, uma vez que as palavras chaves não existe em dicionários, ou não é muito comum fora do contexto de programação e desenvolvimento de softwares.
                                        Porém como mencionado nas seções a cima, a API do Whisper e do GPT-3 Turbo é um serviço pago, devido a quantidade de entrada de dados exceder o limite Free.
                                        Logo, o sistema que eu desenvolvi é totalmente manual, e devemos executar o passo a passo na mão se queres executar de maneira FREE rsrs, mas como dito nas seções anteriores o fluxograma é até que simples, ja está tudo pronto e basta adaptar pequenos trechos para as suas necessidades.
                                        Seguindo o passo a passo das seções anteriores é possível obter ótimos resultados! Adorei desenvolver essa solução e está sendo bem útil nas pós anotações das vídeos aulas.
                                        Publicação mais completa no facebook: <a className="-linkBoldYellow" href="https://www.facebook.com/photo/?fbid=1289365691663152&set=a.601406970459031" target="_blank">Clique AQUI!</a>
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
                                <p>Código do projeto clicando no botão a cima</p>
                            </div>
                            <div>
                                <img className="projects-logo" src={logoQrCodeGenerator} alt="Amostra Amazon" ></img>
                            </div>
                            <div className="subContainer-bottom">
                                <ul className="projects-description--container">
                                    <li>
                                        <h3 class="projects-subtitle">BackEnd</h3>
                                        <ul>
                                            <li>Mongoose em linguagem C: <a className="-linkBoldYellow" href="https://mongoose.ws/" target="_blank">Clique AQUI!</a></li>
                                            <li>API Rest em Linguagem C (Apenas o método POST).</li>
                                            <li>API Funcional porém desligado do projeto devido ao aumento de complexidade do trabalho!</li>
                                            <li>Escolher a linguagem C não é recomendável para implementar API's pois não existe muito material sobre.</li>
                                            <li>Mas era regras do trabalho implementar algo em C.</li>
                                            <li>Motivo maior: Pouco desenvolvimento útil e maior parte Configurações de ambiente.</li>
                                            <li>Problema de CORS: A Lib Mongoose não possuí documentações boas sobre, mas acabei resolvendo o problema.</li>
                                            <li>Contribuição no Github: O Problema de cima foi desafiador e eu acabei contribuindo com a solução para a comunidade.</li>
                                            <li>Contribuição com a solução do problema de CORS no Mongoose: <a className="-linkBoldYellow" href="https://github.com/cesanta/mongoose/discussions/1860?fbclid=IwAR1M02dj-ifnabqFVUfR9T_RjOS4A73W980kaGBfjPVXDRJsI45HgNZhZjQ#discussioncomment-4156317" target="_blank">Clique AQUI!</a></li>
                                            <li>Publicação no Facebook sobre: <a className="-linkBoldYellow" href="https://www.facebook.com/photo?fbid=1285811385351916&set=a.323462608253470" target="_blank">Clique AQUI!</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">FrontEnd</h3>
                                        <ul className="projects-frontend--container">
                                            <li>Lib para escanear QR Code: react-qr-reader <a className="-linkBoldYellow" href="https://www.npmjs.com/package/react-qr-reader" target="_blank">Clique AQUI!</a></li>
                                            <li>HTML5 e CSS3: Elementos semânticos, CSS Grid, Flexbox.</li>
                                            <li>ReactJs: Componentes, Props, Eventos, Hooks, Router, Axios.</li>
                                            <li>Apesar de utilizar react, grande parte da lógica esta em JS Vanilla.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">QR Code Generator</h3>
                                        <ul>
                                            <li>Libqrencode-dev em linguagem C (Via apt no repositório Ubuntu): <a className="-linkBoldYellow" href="https://packages.ubuntu.com/search?keywords=libqrencode-dev" target="_blank">Clique AQUI!</a></li>
                                            <li>Utilitário em linha de comando qrencode (Porém não utilizado, desenvolvi a solução "na unha" mesmo): <a className="-linkBoldYellow" href="https://manpages.ubuntu.com/manpages/jammy/man1/qrencode.1.html" target="_blank">Clique AQUI!</a></li>
                                            <li>Obs: O Utilitário a cima só é utilizado para testar a camada de apresentação (escanear) pois a solução desenvolvida a nível didático não gera PNG.</li>
                                            <li>Documentação base (em Japonês) para entendimento das camadas do QR Code em relação a Lib mencionada: <a className="-linkBoldYellow" href="https://coolshell.cn/articles/10590.html" target="_blank">Clique AQUI!</a></li>
                                            <li>Repositório Github Oficial da Lib: <a className="-linkBoldYellow" href="https://github.com/fukuchi/libqrencode" target="_blank">Clique AQUI!</a></li>
                                            <li>Documentação ABNT do trabalho: <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/QRCodeReader_SummarizingInvoiceNotes/blob/main/generatedQRCodeWithLibqrencode/apresentacaoFinalDocs/docs/avaliacaoA2-programacao_de_computadores-15-05-2023.pdf?fbclid=IwAR0uV6sGIkihLfhk1kvJxP5B7EsFLLkQFYu2jfAe4UB8rzMgAsDm_EsnlfM" target="_blank">Clique AQUI!</a></li>
                                            <li>Apresentação em PowerPoint: <a className="-linkBoldYellow" href="https://github.com/WelBert-dev/QRCodeReader_SummarizingInvoiceNotes/blob/main/generatedQRCodeWithLibqrencode/apresentacaoFinalDocs/docs/ceunsp_programacao_de_computadores_QRCode_generator_em_C.pptx" target="_blank">Clique AQUI!</a></li>
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
                                <p>Código do projeto clicando no botão a cima</p>
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
                                <p>Código do projeto clicando no botão a cima</p>
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
                            <div className="projects-title--container">
                                <div>
                                    <h3 className="projects-title">Clone Netflix Reactjs consumindo API TMDB</h3>
                                    <a href="https://github.com/WelBert-dev/netflixCloneWeb-NoE2E-react" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span>WEB NoE2E</span>
                                <p>Código do projeto clicando no botão a cima</p>
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
                            <div className="projects-title--container">
                                <div>
                                    <h3 className="projects-title">Interface Clínica AuauMiau sem frameworks (Frontend) Vanilla</h3>
                                    <a href="https://github.com/WelBert-dev/auauMiauWeb-NoFramework" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span>WEB NoE2E (HTML5 + CSS3 + Js PURO)</span>
                                <p>Código do projeto clicando no botão a cima</p>
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
