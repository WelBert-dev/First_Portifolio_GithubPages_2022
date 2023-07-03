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
                                    <h3 className="projects-title">Bíblia do Java (Avançado)<br/><br/>Maratona Java - DevDojo<br/><br/>EM DESENVOLVIMENTO!<br/>(Testando Layouts).</h3>
                                    <a href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span>Criei esse projeto durante meus estudos para servir como um "Dicionário" de consultas.</span>
                                <span>Curso mais completo do Youtube sobre desenvolvimento com Java do canal @DevDojoBrasil.</span>
                                <span>Documentei o curso completo desde Fundamentos até a API Nativa, com Total de 285 Aulas.</span>
                                <span>Porém eu não fiz o curso desde o inicio pois eu já estudei POO com a linguagem C# no IFSP.</span>
                                <span>Repositório git criado no formato de "RoadMap" para cada Módulo e seus tópicos abordados.</span>
                                <span>Processo todo documentado e informações faltantes adicionadas utilizando ChatGPT.</span>
                                <span>Dividido em duas partes/pacotes: Documentação em Anotações e SRC de estudos práticos.</span>
                                <span>Para cada Módulo um pacote separado em SRC, e um arquivo txt com o Overview geral sobre.</span>
                                <span>Devido a complexidade, aqui contém resumos para cada tópico abordado em cada Módulo.</span>
                                <span>Links amarelos para mais informações sobre cada tópico redirecionam para o repositório git.</span>
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
                                        <h3 class="projects-subtitle">Informações Importantes</h3>
                                        <ul>
                                            <li>Obs: NÃO fiz o curso desde o inicio pois eu já estudei Orientação a Objetos com a linguagem C# no IFSP.</li>
                                            <li>Logo, só documentei informações especificas da linguagem Java sobre, porisso o Módulo/Seção abaixo (OverView geral sobre POO) contém menos nível de profundidade nas informações se comparado com os próximos.</li>
                                            <li>Além de que na época em que eu comecei esse curso do @DevDojoBrasil ainda não existia a interface web para a I.A GPT-3 (ChatGPT) apesar de a comunidade Dev já utilizar ele a bastante tempo antes do Hype deste ano, eu não utilizava, portanto para esses Módulos iniciais (OverView geral sobre POO, Errors, Exceptions, e RuntimeExceptions, Wrappers dos Tipos Primitivos, Strings) não existe informações complementares faltantes das vídeos aulas adicionado utilizando o ChatGPT iguais aos próximos.</li>
                                            <li>Também não existem pacotes em src de estudos práticos para eles no repositório git do projeto devido ao meu nível de instrução técnica adquirido no IFSP, porisso para eles só existe o arquivo txt com o OverView geral.</li>
                                            <li>Portanto, esse projeto só será útil para quem já possuí a base sobre POO pois ele é de nível Intermediário até o Avançado sobre a linguagem.</li>
                                            <br/>
                                            <li>Informações sobre a navegação entre esse Portifólio (Site pesssoal) e o repositório git correspontente deste projeto, para melhor usufruir do aprendizado:</li>
                                            <li>Links em amarelo: Redirecionam o tópico/assunto para o correspondente do repositório git do projeto, que contém maiores informações sobre, ou seja, NÃO redirecionam para a vídeo aula do Youtube.</li>
                                            <li>Os estudos estão dividos em dois (2) pacotes no repositório git, portanto existem dois (2) tipos de links em amarelo: Sendo um para o src de estudos práticos, ou seja, implementação/código .java em sí. Outro para o arquivo txt com Overview geral sobre o módulo que fica na raiz do projeto em /anotacoes.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">Módulos Abordados</h3>
                                        <ul>
                                            <li ><code className="-main-moduleTitleLi token_reservada">OverView geral sobre POO:</code> Menor nível de informações se comparado a outros módulos abaixo pois eu já estudei POO com C# no IFSP, logo, documentei apenas informações especificas de como o Java lida.</li>
                                            <br/>
                                            <li><code className="-main-moduleTitleLi token_reservada">Errors, Exceptions, e RuntimeExceptions:</code> 
                                                <ul className="-nestedInnerUl">
                                                    <li>Tratamento de erros;</li>
                                                    <li>Estrutura hierárquica (tudo no Java é Objeto, logo as Exeções também possuem herança, todos extends de Throwable);</li>
                                                    <li>Diferenças entre Error e Exception;</li>
                                                    <li>Tipos Checked para herdeiros de Exception e Unchecked para herdeiros de RuntimeException;</li>
                                                    <li>Liberando recursos automáticamente de maneira implicita para classes que implements Closeable e/ou AutoCloseable com try-with-resourses;</li>
                                                    <li>Sobrecarga de catchs para tratamentos partindo do mais Genérico para o mais Especializado;</li>
                                                    <li>Múlti catch in line com pipe `|`;</li>    
                                                    <li>Dentre outras informações mais completas na seção especifica dele...</li>
                                                </ul>
                                            </li>
                                            <br/>
                                            <li><code className="-main-moduleTitleLi token_reservada">Wrappers dos Tipos Primitivos:</code> 
                                                <ul className="-nestedInnerUl">
                                                    <li>Adapter que encapsula os valores dos Tipos Primitivos em forma de Objetos para contextos que esperam eles, alocando memória para a referência e o valor, alterando assim o comportamento de passagem por valor dos primitivos para passagem por referẽncia dos Objetos;</li>
                                                    <li>Também explica mais sobre essa ação que é conhecida como "AutoBoxing/Boxing" e o processo inverso em que desencapsulamos esses Objetos retornando eles para variáveis primitivas comum é conhecido como "AutoUnboxing/Unboxing";</li>
                                                    <li>É importante conhecer esses processos pois em alguns cenários de múltiplas iterações com somas e etc utilizando eles pode ser computacionalmente CUSTOSO devido a JVM ficar encapsulando e desencapsulando, alocando e re-alocando memória, além de outros processamentos necessários para a construção de objetos;</li>
                                                    <li>Fornecem também funcionalidades prontas para cada tipo primitivo (Utilitários);</li>
                                                    <li>Dentre outras informações mais completas na seção especifica dele...</li>
                                                </ul>
                                            </li>
                                            <br/>
                                            <li><code className="-main-moduleTitleLi token_reservada">Strings:</code> 
                                                <ul className="-nestedInnerUl">
                                                    <li>Aqui não é explicado "O que é uma String" e sim como o Java lida com elas na implementação em baixo nível;</li>
                                                    <li>String Constants Pool (Implementação da técnica String Interning no Java) técnica implementada na JVM para otimizar recursos de armazenamento quando utilizado Strings Literais (Regra NÃO se aplica para Strings alocadas manualmente com `new`);</li>
                                                    <li>Também explicamos pontos a se considerar devido a essa implementação que visa otimizar recursos de armazenamento porém em alguns cenários de múltiplas iterações de concatenação pode ser computacionalmente CUSTOSO;</li>
                                                    <li>Então a solução é utilizar outras classes de Strings especializadas para lidar com esse problema (StringBuilder Não Thread-Safe e StringBuffer Thread-Safe);</li>
                                                    <li>Dentre outras informações mais completas na seção especifica dele...</li>
                                                </ul>
                                            </li>
                                            <br/>
                                            <li><code className="-main-moduleTitleLi token_reservada">Manipulação de Data e Hora (Maneira Legada e Nova):</code> 
                                                <ul className="-nestedInnerUl">
                                                    <li>Maneira Legada: </li>
                                                    <li>Representação em baixo nível por um long que representa os milissegundos de 01/01/1970 com limitação até 17/08/292278994 04:12 (valor máximo de um long), essa representação com máscara de data e tempo é uma camada de alto nível adicionada aos Objetos temporais quando utilizamos classes de formatação, podendo assim representar os millisegundos 54548484158 computacionalmente entendível em Strings com máscaras de data e hora humanamente entendível;</li>
                                                    <li>Principais classes legadas Temporais: Date e Calendar;</li>
                                                    <li>Principais classes utilitárias legadas para formatação: DateFormat e SimpleDateFormat;</li>
                                                    <li>Internacionalização de Datas com a classe Locale (Obs: Mais informações especificas sobre Internacionalização no Módulo especifico para isto);</li>
                                                    <br/>
                                                    <li>Maneira Nova: </li>
                                                    <li>Devido a problemas de limitações da representação em baixo nível utilizando o long e a problemas de internacionalização, apartir do Java 8 é adicionado um pacote inteiro especializado em Data e Tempo java.time, com maior coesão entre as classes centralizando e especializando cada tipo de representação em uma classe especifica (Porisso de duas (2) classes principais Temporais, agora são quatro (4)), e também melhor lida com concorrência em ambientes multiThreads e paralelismo, criado por um Brasileiro e adotado pelo Java;</li>
                                                    <li>Agora a representação em baixo nível ainda é em millisegundos, porém é suportando até "+999999999-12-31" e "-999999999-01-01";</li>
                                                    <li>Principais classes novas Temporais: LocalDate, LocalTime, LocalDateTime, e Instant;</li>
                                                    <li>Principal classe utilitária novas para formatação: DateTimeFormatter (Substitui a DateFormat quando utilizado classes Temporais de Data e Tempo);</li>
                                                    <li>Principal classe (TemporalAdjusters) e interface (TemporalAdjuster) utilitária de ajuste no tempo, a interface é utilizada como parâmetro de vários métodos presentes nas classes Temporais ditas anteriormente, podemos então personalizar regras de negocios implementando essa interface, ou utilizar funcionalidades prontas na classe que serve como um Factory de objetos TemporalAdjuster, alguns métodos interessantes incluem (Obter o próximo dia útil da semana, Último dia do mês, Primeiro dia do mês, e etc...);</li>
                                                    <li>Classes utilitárias para pegar intervalos entre duas Datas ou dois Tempos: Duration (apenas para datas e horas em conjunto na mesma classe (neste caso a LocalDateTime) ou APENAS horas cruas, SEM DATAS SIMPLES) e Period (apenas para datas simples, SEM HORAS (neste caso a LocalDate) chega para suprir o que a Duration não consegue);</li>
                                                    <li>Classe ChronoUnit que é tipo uma tipagem para Dia, Mes, Ano, Horas, Minutos, Segundos, e etc (Podemos também realizar algums operações como pegar intervalos entre dois dias com ChronoUnit.DAY.beetween(talDia, talDia));</li>
                                                    <li>Também abordamos outras classes relacionados a zona (diferenças entre fusos horários e etc) sendo elas: OffSet, ZonedId, ZonedDateTime, ZoneOffSet, OffSetDateTime;</li>
                                                    <li>Em resumo uma representação completa em alto nível (String) seria composta por: Data/THora:Minuto:Segundo.Milissegundos/+OffSet/[Zona] (Exemplo: "2022-12-26T19:45:19.447985416+09:00[Asia/Tokyo]");</li>
                                                    <li>Dentre outras informações mais completas na seção especifica dele...</li>
                                                </ul>            
                                            </li>
                                            <br/>
                                            <li><code className="-main-moduleTitleLi token_reservada">Internacionalização:</code> 
                                                <ul className="-nestedInnerUl">
                                                    <li>Polimorfisando e adequando o mesmo sistema para diversos paises de acordo com a classe Locale que representa os paises e internacionaliza várias outras classes da API Nativa do Java em geral.</li>
                                                    <li>Internacionalização de Datas com Locale: A representação da máscara de formatação em alto nível (String) é diferente entre os diversos paises, como por exemplo nos EUA a máscara de datas é no padrão "yyyy/mm/dd", diferente do Brasil que é no padrão "dd/mm/yyyy", então utilizamos a classe Locale para formatar a representação em alto nível, adequando assim o sistema para suportar diferentes paises utilizando praticamente a mesma implementação, alterando apenas a instância do Objeto Locale;</li>
                                                    <li>Internacionalização de Números com Locale e NumberFormat.getInstance(Locale.JAPAN): A representação da máscara dos números também são diferentes entre os diversos paises, como por exemplo o ponto flutuante "." que é o separador de milhares no Brasil, porém nos EUA é a vírgula ",", então utilizamos a classe Locale para formatar essa representação, adequando assim o sistema para suportar diferentes paises utilizando praticamente a mesma implementação, alterando apenas a instância do Objeto Locale;</li>
                                                    <li>Internacionalização de Moedas com Locale e NumberFormat.getCurrencyInstance(Locale.ITALY): A representação da máscara das Moedas também é diferentes entre os diversos paises, como por exemplo o mesmo separador de milhares ditos anteriormente, e também o simbolo das Moedas, para o Japão a representação é algo parecido com "￥10,000" (Observamos que o separador de milhares do Japão é vírgula "," ao invés de ponto flutuante ".", além disto lá também não existe valores fracionários, eles são redondos), que é totalmente diferente do Brasil "R$10,000.21", então utilizamos a classe Locale para formatar essa representação, adequando assim o sistema para suportar diferentes paises utilizando praticamente a mesma implementação, alterando apenas a instância do Objeto Locale; (Obs IMPORTANTE: A internacionalização das moedas utilizando esse processo aqui descrito NÃO faz conversões de câmbio (câmbio de moeda, ou também taxa de câmbio) entre elas, apenas adéqua a máscara (Separadores de milhares e etc ",", ".") e símbolos (R$, U$, ￥));</li>
                                                    <li>Dicionário para traduções automáticas de acordo com Locale, dentre outras possibilidades utilizando ResourceBundle;</li>
                                                    <li>Dentre outras informações mais completas na seção especifica dele...</li>
                                                </ul>
                                            </li>
                                            <br/>
                                            <li><code className="-main-moduleTitleLi token_reservada">Regex (Expressões Regulares) ou também Regexp (Regular Expression):</code> 
                                                <ul className="-nestedInnerUl">
                                                    <li>"Sublinguagem" utilizada para encontrar padrões em textos, os conceitos e representações dos caracteres especiais de configuração (meta caracteres) servem não apenas para o Java como é praticamente universal;</li>
                                                    <li>Em particular no Java utilizamos duas (2) classes especializadas para este contexto sendo elas o Pattern que representa o padrão/máscara em search utilizando esses caracteres especiais de configuração e o Matcher para realizar a busca e comparação match em sí da expressão no texto;</li>
                                                    <li>Um exemplo de utilidade para elas é identificar URL's "http://www.wubalubadubdub.rick.morty.com" aonde toda URL tem essa máscara "(www|http:|https:)+[^\s]+[\w]", essa expressão regex é a mais simples para URL's não sendo ideal para ambiente de produção;</li>
                                                    
                                                    <li>Meta caracteres (Caracteres de configuração sobre o padrão em busca); Existem vários; (Exemplo: `\d`, `\D`, `\w`, `\W`);</li>
                                                    <li>Range (Intervalo) de valores com `[]`; (Exemplo: `[1-9]`, `[a-zA-Z]`);</li>
                                                    <li>Quantificadores quando desejamos retornar vários valores do range `([])*`; Existem: `?`, `*`, `+`, `&#123;n-min, n-max&#125;`, `()`, `|`, `$`; (Exemplo: `([1-9])*`);</li>
                                                    <li>Ancor `^` que possibilita duas funcionalidades distintas a depender do contexto aonde está inserido (`[^\w]` que indica que queremos EXATAMENTE a expressão do interválo, ou `^[\w]` utilizando por fora do range que funciona como negação `!`, ou seja, Tudo menos os valores retornados pela expressão do interválo);</li>
                                                    <li>Também falamos um pouco sobre a classe Scanner, não é relacionado diretamente com Regex, porém o parâmetro delimitador que faz o split no texto e transforma em lista é uma expressão regular;</li>
                                                    <li>Dentre outras informações mais completas na seção especifica dele...</li>
                                                </ul>
                                            
                                            </li>
                                            <br/>
                                            <li><code className="-main-moduleTitleLi token_reservada">I/O (Input/Output) Maneira Legada:</code> 
                                                <ul className="-nestedInnerUl">
                                                    <li>Como lidar com entrada e saída, por exemplo salvar arquivos em HD e depois recupera-los;</li>
                                                    <li>Principal classe que representa o arquivo ou diretório em sí em forma de Objeto: File;</li>
                                                    <li>Escrever em arquivos com a classe FileWriter (Obs: Precisamos de uma instância de File para criar ela, passando no construtor ele);</li>
                                                    <li>Ler informações e recuperá-las em formato de Objeto com a classe FileReader (Obs: Também precisamos de uma instância de File para criar ela, passando no construtor ele);</li>
                                                    <li>Devido as classes de leitura e escrita trabalharem em baixo nível de maneira não otimizada, temos as equivalentes BufferedWriter e BufferedReader que é mais performática, pois primeiro elas trabalham em memória RAM e só no final da operação é realizado a escritura ou leitura no HD (Obs: Mesmo assim ainda é necessário uma instância de FileReader ou FileWriter para essas criações também);</li>
                                                    <li>Visualizar e modificar meta informações como data de criação, ultimas modificações ou também ir além como modificar ou ler permissões dos usuários e grupos;</li>    
                                                    <li>Navegar em diretórios e realizar algumas operações neles;</li>    
                                                    <li>Dentre outras informações mais completas na seção especifica dele (OBS: AINDA ESTÁ EM PROCESSO DE DESENVOLVIMENTO)...</li>
                                                </ul>
                                            
                                            </li>
                                            <br/>
                                            <li><code className="-main-moduleTitleLi token_reservada">New I/O (Input/Output) Maneira Nova:</code> 
                                                <ul className="-nestedInnerUl">
                                                    <li>Nova maneira mais coesa de lidar com as mesmas operações anteriores, porém com maior coerência entre as classes, melhor performance e ajusta alguns erros que poderiam ocorrer se utilizar as legadas;</li>
                                                    <li>Adiciona também a internacionalização de paths de acordo com diferentes tipos de Sistemas Operacionais pois cada um segue suas próprias convenções sobre as variáveis de ambiente, ou também utilizam diferentes tipos de sistemas de arquivos;</li>
                                                    <li>Principal classe que representa o arquivo ou diretório é alterado o nome pois em relação a coesão, como a representação não é bem o Arquivo em sí que é mais genérico, aqui é representado como Path pois é basicamente isso que o File representava na maneira legada.</li>
                                                    <li>Todos os métodos de instância da antiga classe File, sobre criar arquivos, copiar, modificar datas e etc agora é estático presente na classe utilitária Files;</li>
                                                    <li>Classes que representam os meta dados dos arquivos são criados pelo utilitário Files e retornam implementações das Interfaces: BasicFileAttributes que é a mais genérica e basica de todos, NÃO podemos realizar modificações (write) com ela, apenas visualizar (read) esses meta dados; Para realizar modificações (write) nesses meta dados utilizamos as equivalentes com final "View", ou seja, para esta o equivalente seria o BasicFileAttributesView;</li>
                                                    <li>Sobre o ponto anterior, também temos as equivalentes porém mais especializadas para os diferentes tipos de Sistemas Operacionais: DosFileAttributes para ambientes DOS (Windows-Like) e o equivalente para modificações dela DosFileAttributesView; PosixFileAttributes para ambientes POSIX (Unix-Like) e o equivalente para modificações dela PosixFileAttributesView;</li>
                                                    <li>Operações de normalize dos paths: Método que substitui os caracteres curingas de um path relacionadas as variáveis de ambientes e convenções gerais sobre, deixando o path "limpo" completo, sem esses caracteres, esse processo é importante para manter compatibilidade com diferentes tipos de Sistemas Operacionais ou sistemas de arquivos. (Exemplo: "/home/welbert/Documentos/github/MaratonaJava-DevDojo/../../arquivo.txt" resolvido ele fica assim: "/home/welbert/Documentos/arquivo.txt");</li>
                                                    <li>Operações de resolve dos paths: Ele toma um caminho relativo como entrada e o combina com o caminho atual para produzir um caminho absoluto. (Exemplo: Caminho atual ("/var/log") combinado com o Caminho relativo ("messages") temos que o caminho absoluto será ("/var/log/messages"));</li>
                                                    <li>Operações de relativize dos paths: Usado para calcular o caminho relativo entre dois caminhos, ou seja, determina como poderiamos navegar entre um diretório para o outro. (Exemplo: Origem ("/home/irineu/inemEu") para o Destino ("/home/welbert/dev") resultado tomando como partida apartir da Origem ("../../welbert/dev"), resultado tomando como ponto de partida apartir do Destino ("../../irineu/inemEu"));</li>
                                                    <li>Iterando e navegando sobre diretórios em primeiro nível da hierarquia com DirectoryStream;</li>
                                                    <li>Iterando e navegando sobre diretórios em nível all da hierarquia de maneira recursiva com SimpleFileVisitor;</li>
                                                    <li>Comparando padrões de correspondência nos diretórios com PathMatcher em conjunto com a classe FileSystem para permitir a busca de arquivos em um sistema de arquivos com base em um padrão de correspondência.</li>
                                                    <li>Dentre outras informações mais completas na seção especifica dele (OBS: AINDA ESTÁ EM PROCESSO DE DESENVOLVIMENTO)...</li>
                                                </ul>
                                            </li>
                                            <br/>
                                            <li><code className="-main-moduleTitleLi token_reservada">Serialization:</code> 
                                                <ul className="-nestedInnerUl">
                                                    <li>A serialização é o processo de converter um objeto numa sequência de bytes, para que possa ser armazenado num arquivo, transmitido através de uma rede ou armazenado num banco de dados;</li>
                                                    <li>Para serializar um Objeto ele deve implementar a interface `Serializable` ou também é válido para a `Externalizable`;</li>
                                                    <li>Explica soluções para quando temos classes aninhadas a outras como atributos e essas mesmas não implementem essas interfaces, como lidar com isso;</li>
                                                    <li>Ou indo além e como podemos serializar classes de API's terceiras fora de nosso controle e essas mesmas não implementem também? Solução é uso de classes Adapters que encapsulam essas classes e realiza lógicas para contornar esse problema;</li>
                                                    <li>Explica os possíveis problemas que podem ocorrer se tentar deserializar Objetos que as suas classes sofreram mudanças estruturais ao longo do tempo, tornando o Objeto antigo serializado agora incompatível com a classe dele;</li>
                                                    <li>Porisso temos o serialVersionUID que é um ID gerado automáticamente pelas IDE's e servem para manter um versionamento da classe, valor que se altera quando modificado a mesma, assim evita o problema descrito anteriormente sobre as possiveis incompatibilidades de Objetos serializados de classes que sofreu mudanças estruturais ao longo do tempo;</li>
                                                    <li>Explica a token `transient` que é utilizada em atributos para indicar a JVM que esse campo não deve ser serializado, ou seja, não deve considerar o valor deste campo no processo, assim quando deserializado esse campo é carregado com o valor padrão definido na classe deste objeto em questão e assim podemos inicializar com outros valores mais tarde.</li>
                                                    <li>Dentre outras informações mais completas na seção especifica dele (OBS: AINDA ESTÁ EM PROCESSO DE DESENVOLVIMENTO)...</li>
                                                </ul>
                                            </li>
                                            <br/>
                                            <li><code className="-main-moduleTitleLi token_reservada">Collections (Estrutura de Dados):</code> 
                                                <ul className="-nestedInnerUl">
                                                    <li>Maior parte dos estudos;</li>
                                                    <li>Demonstra tabelas relacionadas ao calculo de complexidade Big-O para cada classe da API de coleções, esses calculos é relacionado as quantidades de iterações necessárias para alcansar diferentes objetivos como por exemplo quais as melhores estruturas de dados para inserção e remoção de elementos, quais as melhores para pegar valores get ou para verificar se contains algum elemento x;</li>
                                                    <li>Explica a importância sobre a devida implementação dos métodos `.equals()` e `.hashCode()` presentes em todos Objetos (Pois são métodos definidos na raiz de todos o Object) que trabalham em conjunto e devem estar linearmente coesos entre sí, eles são necessários pois as listas e coleções utilizam esses métodos dos objetos para realizar comparações de igualdade e armazena-los corretamente. (Porém devem ser sobrescrito e modificado de acordo com as necessidades especificas de cada classe, necessidades essas que indicam quais campos devem ser considerados na comparação de igualdade `==` entre dois Objetos, ou seja, quais atributos desse objeto devem ser iguais para que os mesmos sejam considerados iguais? PORÉM devemos nos atentar sobre a escolha desses atributos, pois os mesmos NÃO devem ser dinâmicos, ou seja, esses campos não devem sofrer muitas mudanças no ciclo de vida da aplicação, pois se sofrerem mudanças o hash gerado seram diferentes durante esse ciclo de vida, logo, possiveis inconsistência vão ocorrer, por exemplo na hora de realizar buscas em coleções que utilizam o hash dos Objetos para indexar (melhorando assim a velocidade de busca por elementos) que é o caso do HashSet, ao tentar realizar buscas constantes por elementos durante o ciclo de vida da aplicação e os mesmos possuirem atributos dinâmicos, a comparação entre o mesmo Objeto vai mudar devido a isso);</li>
                                                    <li>Programação orientada a interface devido todas as classes relacionadas as coleções (Estrutura de dados) implementarem interfaces genéricas feitas para contextos especificos (List, Set, SortedSet, NavigableSet, Map (Não é bem uma coleção, mais detalhes no módulo));</li>
                                                    <li>Interfaces Comparable e Comparator utilizadas por métodos que precisam realizar comparações (&#60;, &#62;, &#60;=, &#62;=, ==) entre Objetos (Obs: Diferente de `.equals()`), elas são necessárias para definir a regra sobre como saber quando um Objeto é maios que outro e etc;</li>
                                                    <li>Organizando listas em ASC ou DESC (Obs: Os objetos em ordenação devem implementar a interface Comparable que define a ordenação natural dos elementos, ou então devemos fornecer um Comparator caso esse Objeto não implemente a interface);</li>
                                                    <li>Busca binária que é um método otimizado para buscas em listas ou coleções ordenadas (ASC ou DESC) no qual particiona ela no meio a cada iteração, mais informações sobre como isso é implementado no módulo;</li>
                                                    <li>Convertendo List to Array e visi versa;</li>
                                                    <li>Classe que faz verificações antes de modificar (remover e etc) elementos durante o processo de iteração evitando CurrentModificationException, além disto todas as coleções utilizam ele "por debaixo dos panos" quando iteramos em listas ou coleções em geral, sendo ele o Iterator;</li>
                                                    <li>Interface List define um contrato mais básico de todas as coleções, sendo uma coleção de elementos ordenados (sorting) pois os métodos otimizados dela utilizam lógicas que performam bem em coleções ordenadas como por exemplo o algoritmo de Busca Binária (Binary Search), e também possibilita acesso por index;</li>
                                                    <li>Interface Set define um contrato aonde todos elementos são únicos, ou seja, DISTINCT não permite duplicatas, ele utiliza o método `.equals()` para garantir isso, a depender da implementação se ela possuir Hash na nomeclatura isso quer dizer que o acesso aos elementos se da pelo hashcode deles (Gerados pelo método `.hashCode()`, além de que por utilizar o hashcode a maneira como a lista é organizada quando inserido os elementos, NÃO é pela ordem em que adicionamos eles e sim pelo hashCode, ou seja, eles não garantem a ordenação inicial de inserção dos elementos, a solução para isto é a classe LinkedHashSet que garante a posição inicial de inserção dos elementos);</li>
                                                    <li>Interface Map define um dicionário Key-Value, ou seja, obtemos os valores apartir das chaves correspondentes deles, os mapas não são consideradas coleções, ou seja, Não podemos utilizar o Polimorfismo que espera no contexto classes que implementam a interface Collection, Também não é possível utilizar os métodos da classe utilitária Collections;</li>
                                                    <li>Implementações de List: ArrayList, e LinkedList;</li>
                                                    <li>Implementações de Set: HashSet, e LinkedHashSet;</li>
                                                    <li>Implementações de SortingSet e NavigableSet: TreeSet;</li>
                                                    <li>Obs sobre TreeSet: Essa coleção em árvore falha no contrato da interface Set pois o mesmo NÃO utiliza o método `.equals()` para evitar duplicatas na coleção (NOT DISTINCT);</li>
                                                    <li>Implementações de Map: HashMap, e LinkedHashMap;</li>
                                                    <li>Por fim falamos sobre Queue e PriorityQueue;</li>
                                                    <br/>
                                                    <li>Obs: NÃO estudamos sobre Estrutura de Dados aqui, ou seja, não é explicado como é implementado "por debaixo dos panos" essas coleções, eu fiz outro curso da Loiane Groner relacionado a isso e os estudos estão no diretório "/ZA_estuturaDados" neste mesmo projeto Maratona Java no repositório git, lá abordei as Estruturas de Dados: ArrayList (Implementação que utiliza Arrays nativos em baixo nível), LinkedList (Listas ligadas são implementações não indexadas pois os elementos de cada nó faz referência ao próximo elemento e ao elemento anterior (Como se fosse um trem aonde cada elemento é um vagão (nó) ligado em outro), portanto, para obtermos os elementos devemos navegar nela até encontra-lo (Não permite acesso aleatório por index como as coleções baseadas em arrays nativos), devido a isso ela possui maior performance para modificações como adições ou remoções de elementos, porém não performa bem em algoritmos de buscas), Queue (Filas possuem comportamento FIFO (First in first out), aonde o primeiro elemento a entrar é o primeiro a sair) e PriorityQueue (Filas com prioridades, ou seja, os elementos são organizados no momento de inserção de novos elementos de maneria a ir adequando e re-alocando os elementos deixando como primeiro os elementos de maior prioridade), Stack (Pilhas possuem comportamento LIFO (Last in first out), aonde o último elemento a entrar é o primeiro a sair (Ao contrário das Queue));</li>
                                                    <li>Dentre outras informações mais completas na seção especifica dele (OBS: AINDA ESTÁ EM PROCESSO DE DESENVOLVIMENTO)...</li>
                                                </ul>
                                            </li>
                                            <br/>
                                            <li><code className="-main-moduleTitleLi token_reservada">Generics:</code> 
                                                <ul className="-nestedInnerUl">
                                                    <li>Substitui contextos aonde se utilizava a Classe raíz de todas Object na Maneira Legada (Devido ao polimorfismo aonde tudo é Object), porém a maneira legada utilizando Object ocorriam vários erros por quebrar o principio de tipos únicos em coleções por exemplo, então surge Generics para corrigir esse e outros problemas apartir do Java 5;</li>
                                                    <li>Porém deve-se atentar pois Generics serve apenas para tempo de desenvolvimento pois ao compilar ocorre um processo chamado Type Erasure aonde os &#60;T&#62; (Diamond Operator) são substituidos por Object, isso ocorre para manter compatibilidade com JRE anteriores a esta versão 5 do Java;</li>
                                                    <li>Podemos utilizar a Reflexão para contornar essa implementação e Obter as informações genéricas &#60;T&#62; apagadas em tempo de compilação, não sendo muito recomendado pois o uso de reflexão fere alguns principios de encapsulamento e também é um processo computacionalmente custoso;</li>
                                                    <li>Explica sintaxe para criação de classes genéricas e métodos genéricos;</li>
                                                    <li>Obs: NÃO é necessário tornar a classe como um todo genérica com a assinatura a nível de classe &#60;T&#62; para quando precisa apenas dos métodos genéricos, basta utilizar a sintaxe correta na assinatura deste método em questão para torna-lo genérico. (Vai ser adicionado apenas mais um token nesta assinatura dele, mais explicações no módulo completo sobre Generics);</li>
                                                    <li>Uso de Wildcards para permitir que uma classe ou método trabalhe com qualquer tipo, ou um subtipo específico (Existem dois tipos de wildcards: `?` (Unbonded, ou seja, Ilimitado) e `? extends Type` (bounded, ou seja, Limitado) aonde `extends` pode ser `extends` ou `super`) Exemplo: public void meuMetodo(List&#60;? extends Number&#62; lista) ou seja, apenas vai aceitar listas que são subclasses de Number (Integer, Long, Double...);</li>
                                                    <li>Inferência de tipo adicionado no Java 7 para construtores e métodos genéricos, o que permite que o tipo de objeto retornado ou o tipo de argumentos de entrada sejam inferidos pelo compilador sem a necessidade de especificação manual, tornando mais fácil escrever código genérico sem precisar especificar os tipos explicitamente;</li>
                                                    <li>Dentre outras informações mais completas na seção especifica dele (OBS: AINDA ESTÁ EM PROCESSO DE DESENVOLVIMENTO)...</li>
                                                </ul>
                                            </li>
                                            <br/>
                                            <li><code className="-main-moduleTitleLi token_reservada">Nested Inner Class:</code> 
                                                <ul className="-nestedInnerUl">
                                                    <li>Classes internas aninhadas a outras, forte acoplamento entre elas, utilizar apenas quando esta Inner Class não possuir dependências de uso externas desta classe na qual ela esta aninhada/definida;</li>
                                                    <li>Elas possuem acesso a QUALQUER membro definido na classe Pai dela (Até mesmo membros privados);</li>
                                                    <li>Elas podem ser acessadas apenas por meio de uma instância da classe externa (pai);</li>
                                                    <li>Se a classe interna for declarada estática, ela pode ser acessada diretamente, sem precisar de uma instância da classe externa (pai);</li>
                                                    <li>Elas são sub divididas em quatro (4) tipos a depender do contexto aonde elas estão definidas neste aninhamento: </li>
                                                    <li>Static nested class: É uma classe estática que é definida dentro de outra classe. Ela pode ser acessada sem a necessidade de criar uma instância da classe externa (pai);</li>
                                                    <li>Inner class: É uma classe não estática que é definida dentro de outra classe. Ela tem acesso aos membros não estáticos da classe externa (pai) e pode ser instanciada apenas por meio de uma instância da classe externa (pai);</li>
                                                    <li>Local class: É uma classe definida dentro de um método ou bloco de código. Ela tem acesso aos membros da classe externa (pai) e pode ser usada para implementar funcionalidades que são específicas para um método ou bloco;</li>
                                                    <li>Anonymous class: É uma classe sem nome que é definida e instanciada em uma única etapa. Ela é usada para implementar uma classe que é usada apenas uma vez e não precisa de um nome ou tipo específico;</li>
                                                    <li>Dentre outras informações mais completas na seção especifica dele (OBS: AINDA ESTÁ EM PROCESSO DE DESENVOLVIMENTO)...</li>
                                                </ul>                                
                                            </li>
                                            <br/>
                                            <li><code className="-main-moduleTitleLi token_reservada">Introdução a Programação Funcional - Parametrizando Comportamentos:</code> 
                                                <ul className="-nestedInnerUl">
                                                    <li>Delegamos as responsabilidades sobre as regras de comparações ou outros comportamentos desejados em algum método para o chamador definir de acordo com as suas necessidades especificas, realizando assim uma inversão de controle pois agora quem define a regra sobre o comportamento esperado de um método é quem o utiliza, desta forma tornamos esse método mais genérico (Por exemplo `findByName()` que pode facilmente ser copiado e colado como `findByOutroAtributo()` percebemos que a única mudança nesta implementação será as comparações do `if` logo podemos extrair em um método mais genérico `find(Predicate predicate)` aonde Predicate é uma interface funcional que representa um predicado, sendo ele uma função que recebe um argumento e retorna um valor booleano, ou seja, é exatamente o que precisamos para implementar algoritmos de filtragens `x -&#62; x.getAge() &#62;= 18`, observamos que esse corpo da Lambda respeita a assinatura do método ÚNICO do predicado (Recebe apenas UM argumento `x` e retorna um valor booleano `x.getAge() &#62;= 18`);</li>
                                                    <li>Além desta Interface Funcional também possuem outras com diferentes Target Types e Functional Descriptor (Mais explicações abaixo ou no módulo mais completo sobre Funções Lambdas, basicamente é a assinatura do método ÚNICO desta Interface Funcional, ou seja, isto se refere aos tipos de entradas e retorno deste método em questão, isso é importante pois devido a sintaxe dos corpos das Lambdas não precisar explicitar os tipos de dados que estamos trabalhando, então para que essa sintaxe seja possível, devemos respeitar a assinatura do método ÚNICO em questão definido nesta Interface Funcional (Ou também serve para outras classes ou interfaces comuns, desde que respeitado todas essas regras impostas) que é o parâmetro aonde estamos aplicando essa função Lambda, para que a JVM possa executar sem a necessidade de especificar manualmente esses tipos de entradas e retornos neste corpo da Lambda).</li>
                                                    <li>E é graças a esses Target Types e Functional Descriptors ditos anteriormente, que podemos aplicar a sintaxe das Funções Lambdas em praticamente qualquer classe ou interface (Mesmo não sendo anotadas com @FunctionalInterface) desde que elas possuam métodos ÚNICOS definidos, e desde que respeitemos a assinatura deste método em questão sobre os tipos de entradas e retorno no corpo da Lambda, na hora da chamada deste método (Isso é o Target Type (Tipo alvo é o tipo de dado esperado em um contexto onde uma expressão lambda, uma referência a método ou uma classe anônima são usados.) e o Functional Descriptor (Que é um termo usado para descrever a assinatura de um método funcional, ou seja, a lista de argumentos e o tipo de retorno do método.)); Um exemplo famoso sobre aplicar funções Lambdas em contextos não funcionais porém que respeitam essas regras aqui impostas é a possibilidade de aplicar a sintaxe Lambda em métodos que recebem como argumento a interface Runnable, pois ela possui apenas UM único método definido `run()` logo o corpo da Lambda compatível (Se NÃO utilizado parâmetros de entrada) na chamada é o equivalente da Interface Funcional Consumer que define um contrato em que não existem parâmetros de entrada e também não existem retornos (Void), logo a sintaxe do corpo da Lambda compatível seria algo como `Executors.newScheduledThreadPool(1)<br/>.scheduleWithFixedDelay(<code className="token_reservada">Runnable() -&#62; &#123;...&#125;</code>, 1, 5, TimeUnit.SECONDS);`</li>
                                                    <li>É importante conhecer o conceito dita anteriormente sobre Interfaces Funcionais, Target Types e Functional Descriptor pois graças a esses mecanismos conseguimos aplicar programação funcional no Java (Além do POO), pois inicialmente o Java não foi desenhado para esse paradigma, então essa funcionalidade do Java moderno é meio que uma gambiarra ou macete para contornar e conseguirmos utilizar o melhor dos dois mundos, pois utilizar programação funcional em conjunto com programação orientada a objetos trás bastante simplicidade e maior coesão, tornando algumas implementações mais legíveis.</li>
                                                    <li>Em resumo, aqui neste módulo é explicado as vantagens de se utilizar Programação Funcional em conjunto de POO.</li>
                                                </ul>
                                            </li>
                                            <br/>
                                            <li><code className="-main-moduleTitleLi token_reservada">Programação Funcional - Funções Lambdas:</code> 
                                                <ul className="-nestedInnerUl">
                                                    <li>Interfaces Funcionais são interfaces que possuem apenas UM método e anotados com @FunctionalInterface, porisso é possível utilizar proramação funcional no Java, pois como só existe UM único método é ele quem será encontrado e executado pela JVM, só devido a isso é possivel utilizar essa sintaxe, uma vez que se tivesse mais métodos neste contrato ou classe como a JVM saberia qual é o método correto correspondente a esse corpo da Lambda já que não explicitamos essa informação?</li>
                                                    <li>O que é um "Target Type" e "Functional Descriptor", esses conceitos são relevantes pois eles nos possibilita utilizar Lambdas também com Interfaces ou Classes que NÃO são Interfaces Funcionais desde que as mesmas respeitem essas regras impostas nessas interfaces, ou seja, desde que esses contextos tenham definidos apenas UM método e na chamada o corpo da Lambda deve respeitar a assinatura deste método unico em questão (Tipo de entrada dos argumentos, e tipos de retornos);</li>
                                                    <li>Existem vários tipos de Interfaces Funcionais já implementados para problemas comuns, a diferença entre elas é a assinatura do método ÚNICO, ou seja, O tipo de entrada dos argumentos (Quando existe) e o tipo de retorno esperado (Quando existe), as mais comuns incluem:</li>
                                                    <li>Predicate: É uma interface que representa um predicado, uma função que recebe um argumento e retorna um valor booleano. Obs: Quando precisamos de mais argumentos de entrada utilizamos BiPredicate, TriPredicate (O java não fornece após o Bi, mas basta copiar o método e realizar as modificações necessárias paar aceitar mais argumentos) (Exemplo: o método `.filter()` dos fluxos Streams ou outras operações de filtragens);</li>
                                                    <li>Consumer: É uma interface que representa um consumidor, ou seja, uma função que recebe um argumento e não retorna nada. É comumente usada para realizar operações em objetos. (Exemplo: o método `forEach()` de todas as coleções.);</li>
                                                    <li>Function: É uma interface que representa uma função que recebe um argumento e retorna um resultado (Porisso "Function" pois é basicamente o que uma função normal faz). Pode ser usada para transformar objetos de um tipo em outro. (Exemplo: o método `.map()` dos fluxos Stream.)</li>
                                                    <li>Supplier: É uma interface que representa um fornecedor, ou seja, uma função que não recebe argumentos e retorna um resultado. É frequentemente usada para gerar valores preguiçosamente. (Exemplo: métodos que retornam objetos e os mesmos NÃO possuem parâmetros no construtor (Ou seja, o construtor padrão empty deve estar definido) `Collections.nCopies()`);</li>
                                                    <li>Dentre outras informações mais completas na seção especifica dele (OBS: AINDA ESTÁ EM PROCESSO DE DESENVOLVIMENTO)...</li>
                                                </ul>
                                            </li>
                                            <br/>
                                            <li><code className="-main-moduleTitleLi token_reservada">Programação Funcional - Method Reference:</code> 
                                                <ul className="-nestedInnerUl">
                                                    <li>Substitui alguns contextos Lambdas para maior coesão, com uma sintaxe mais limpa `::`. Alguns contextos pois essa sintaxe só funciona quando o método que iremos executar NÃO possuir parâmetros de entrada devido a sintaxe. Se o mesmo possuir esses parâmetros de entrada então devemos substituir por Lambdas mesmo;</li>
                                                    <li>Essa sintaxe serve apenas para o alto nível (A nível de código) e coesão pois "por debaixo dos panos" essa referência vai surtir o mesmo resultado em relação a processamentos, pois vai gerar as mesmas instruções que seriam geradas se utilizado funções Lambdas.</li>
                                                    <li>Existem quatro (4) tipos de referências a métodos para cada tipo de cenário, sendo eles:</li>
                                                    <li>Referência a métodos estáticos: `MyClass::staticMethod;`;</li>
                                                    <li>Referência a métodos de instância em um objeto particular: `obj::instanceMethod;`;</li>
                                                    <li>Referência a método de instância de um tipo de objeto arbitrário: `String::length;` Obs: Esse parece meio confuso, mas é simples, ele é utilizado quando vamos executar esse referência em objetos que ainda não existem porisso "arbitrário", mas irão ser criados em algum momento futuro;</li>
                                                    <li>Referência a um construtor: `ArrayList::new;`;</li>
                                                    <li>Dentre outras informações mais completas na seção especifica dele (OBS: AINDA ESTÁ EM PROCESSO DE DESENVOLVIMENTO)...</li>
                                                </ul>
                                            </li>
                                            <br/>
                                            <li><code className="-main-moduleTitleLi token_reservada">Classe Optional:</code> 
                                                <ul className="-nestedInnerUl">
                                                    <li>Introduzido no Java 8, utilizado para evitar/tratar NullPointerExceptions, minimizando retornos `null`, "", `0`, `false`;</li>
                                                    <li>Bastante utilizado com fluxos Streams.</li>
                                                    <li>Por se tratar de um Adapter que encapsula objetos que podem ser inexistentes não podemos utilizar esse tipo como parâmetro de entrada de métodos, nem tipo de atributos de classe, ou algo do tipo, apenas podemos utilizá-los como tipo de retorno;</li>
                                                    <li>Possuem métodos úteis que podem realizar operações se o objeto existir ou outros que podem criar esse objeto caso ele não exista, ou também lançar exceções;</li>
                                                    <li>Dentre outras informações mais completas na seção especifica dele (OBS: AINDA ESTÁ EM PROCESSO DE DESENVOLVIMENTO)...</li>
                                                </ul>
                                            </li>
                                            <br/>
                                            <li><code className="-main-moduleTitleLi token_reservada">Programação Funcional - Streams (Fluxo de dados):</code> 
                                                <ul className="-nestedInnerUl">
                                                    <li>Introduzido no Java 8, utilizado para iterar e processar coleções de objetos como listas, conjuntos, mapas, arrays, e etc... com maior performance e de maneira mais concisa, eles possibilitam essas operações SEM a necessidade de ALTERAR a coleção original, com métodos prontos, e maior coesão tornando o código mais limpo;</li>
                                                    <li>Stremas no Java são as classes meus baixo nível low level pois geralmente elas trabalham com fluxos de bytes e etc e esses fluxos geralmente transitam entre camadas (Por exemplo leituras em HD ou outros periféricos, fluxos de bytes que irão ser trafegados pela rede, dentre outras transferências entre camadas);</li>
                                                    <li>Muitas das operações que podemos fazer com SQL como Agrupamentos, Agrupamentos com funções de agregação (Max, Min, AVG, Count, Sum), Operações de Conjuntos (União, Intereção, e Diferença), Junções (Produto Cartesiano, Junção Interna, e etc), filtragens, Transformações como Map-reduce e etc, limit e offset... podemos fazer com esses fluxos.</li>
                                                    <li>Também explicamos as diferenças entre os métodos de transformação <code className="token_reservada">.map()</code> e <code className="token_reservada">.flatMap()</code> que realizam a mesma função, porém o <code className="token_reservada">.flatMap()</code> é utilizado quando temos coleções multidimensionais aninhadas umas as outras, esse tipo de coleção gera Streams de Streams (<code className="outputResult">`Stream&#60;Stream&#60;Stream&#60;String&#62;&#62;&#62;`</code>) deixando a operação mais complexa então devemos "desachatar" manualmente se utilizado o <code className="token_reservada">.map()</code> comum aumentando o número de operações/passos neste fluxo para esta correção, diferente do <code className="token_reservada">.flatMap()</code> que já o faz para nós, a implementação em baixo nível dele basicamente desaninha combinando assim os Streams em apenas um na saída, já retornando apenas um fluxo contendo todos os elementos que eram aninhados neste mesmo fluxo de saída (<code className="outputResult">Stream&#60;String&#62;</code>); 
                                                        <ul className="main-implementFullBlock--container">
                                                            - Exemplo de fluxo bidimensional (que gera Streams aninhados) para a lista:
                                                            <code className="implementFullBlock">
                                                            <span className="-tokenComment"># 2 dimensões (Matriz), a lista interna representa os diferentes setores desta empresa</span><br/>
                                                                <code className="-tokenClassEntity">List&#60;List&#60;String&#62;&#62;</code> empresa = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">ArrayList&#60;&#62;</code>();<br/><br/>
                                                                
                                                                empresa.<code className="-tokenMethod">add</code>(<code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">ArrayList&#60;&#62;</code>(<br/>
                                                                    <code className="-nestedInnerCode"><code className="-tokenClassEntity">List</code>.<code className="-tokenMethod">of</code>(<code className="-tokenString">"Wellison"</code>, <code className="-tokenString">"Pedro"</code>, <code className="-tokenString">"Matheus"</code>, <code className="-tokenString">"Rafa"</code>)</code><br/>
                                                                ));<br/>

                                                                empresa.<code className="-tokenMethod">add</code>(<code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">ArrayList&#60;&#62;</code>(<br/>
                                                                    <code className="-nestedInnerCode"><code className="-tokenClassEntity">List</code>.<code className="-tokenMethod">of</code>(<code className="-tokenString">"Danielle"</code>, <code className="-tokenString">"Caio"</code>, <code className="-tokenString">"Micael"</code>, <code className="-tokenString">"Tainara"</code>)</code><br/>                                                                 
                                                                ));<br/>
                                                            </code>
                                                        </ul>
                                                        <ul className="main-implementFullBlock--container">

                                                            <p>- Utilizando transformação com <code className="token_reservada">.map()</code> normal, que não desaninha Streams, logo, devemos realizar mais operações:</p>
                                                            
                                                            <code className="implementFullBlock">
                                                                <span className="-tokenComment"># Observe o aninhamento de fluxos em `Stream&#60;Stream&#60;String&#62;&#62;`</span><br/>
                                                                <code className="-tokenClassEntity">Stream&#60;Stream&#60;String&#62;&#62;</code> streamStream = empresa.<code className="-tokenMethod">stream</code>()<br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">map</code>(setor -&#62; setor.<code className="-tokenMethod">stream</code>());</code><br/><br/>

                                                                streamStream.<code className="-tokenMethod">forEach</code>(setor -&#62;<br/> 
                                                                    <code className="-nestedInnerCode">setor.<code className="-tokenMethod">forEach</code>(<code className="-tokenClassEntity">System</code>.out::<code className="-tokenMethod">println</code>));</code>
                                                            </code>
                                                        </ul>
                                                         <ul className="main-implementFullBlock--container">

                                                            <p>- Agora utilizando transformação com <code className="token_reservada">.flatMap()</code>, que "achata" e desaninha Streams, logo, não precisamos realizar mais operações para percorrer as coleções internas aninhadas (que neste caso é os dois(2) <code className="token_reservada">.forEach()</code> utilizados na operação anterior), PORÉM vale lembrar que fazer isto irá unir as listas internas no mesmo fluxo, ou seja, só devemos realizar esse tipo de operação quando queremos tratar todos os dados IGUALMENTE nesta lógica que vamos aplicar, aqui é válido pois vamos tratar todos funcionários igualmente, independentemente do setor dele, então faz sentido aplicar esse "achatamento", se fossemos tratar os funcionários de maneiras diferentes para cada setor, <code className="token_reservada">NÃO</code> deveriamos aplicar esse achatamento que une as listas internas aninhadas em um único fluxo, já que as regras aplicadas seriam diferentes para cada setor, o que não é o nosso caso!</p>
                                                            
                                                            <code className="implementFullBlock">
                                                                <span className="-tokenComment"># Quando o tipo do Stream é uma List (Ou seja, Objeto) utilizamos `Collection::stream`</span><br/>
                                                                <code className="-tokenClassEntity">Stream&#60;String&#62;</code> stringStreamNonNested = empresa.<code className="-tokenMethod">stream</code>()<br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">flatMap</code>(<code className="-tokenClassEntity">Collection</code>::<code className="-tokenMethod">stream</code>);</code><br/><br/>
                                                                stringStream.<code className="-tokenMethod">forEach</code>(<code className="-tokenClassEntity">System</code>.out::<code className="-tokenMethod">println</code>);<br/><br/>
                                                                
                                                                <span className="-tokenComment"># Quando o tipo do Stream é um array nativo String[] utilizamos `Arrays::stream`</span><br/>
                                                                <code className="-tokenClassEntity">Stream&#60;String&#62;</code> stringStreamNonNested = empresa.<code className="-tokenMethod">stream</code>()<br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">flatMap</code>(<code className="-tokenClassEntity">Arrays</code>::<code className="-tokenMethod">stream</code>);</code><br/><br/>
                                                                    stringStream.<code className="-tokenMethod">forEach</code>(<code className="-tokenClassEntity">System</code>.out::<code className="-tokenMethod">println</code>);<br/>
                                                            </code>
                                                        </ul>
                                                    </li>

                                                    <li>Operações de filtragens: <code className="token_reservada">.filter(Predicate predicate)</code> que retorna todos elementos que corresponderem ao predicado, ou seja, todos elementos que retornar true na comparação da função Lambda;</li>
                                                    <li>Desafio proposto para o ponto acima: Retrieve the first 3 titles LightNovels with price less than &#60; 4.0 (Retornar os 3 primeiros titulos de LightNovels cujo preço é menor que 4.0):
                                                        <ul className="main-implementFullBlock--container">
                                                        
                                                            <p>- Exemplo de filtragem <code className="token_reservada">SEM</code> utilizar Streams, e em seguida <code className="token_reservada">UTILIZANDO</code>, ambos para a seguinte lista:</p>
                                                            
                                                            <code className="implementFullBlock">
                                                                <code className="-tokenKeyword">private static</code> <code className="-tokenClassEntity">List&#60;LightNovelModel&#62;</code> listOfLightNovels = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">ArrayList&#60;&#62;</code>(<br/>
                                                                    <code className="-nestedInnerCode"><code className="-tokenClassEntity">List</code>.<code className="-tokenMethod">of</code>(<br/>
                                                                        <code className="-nestedInnerCode --2Identation"><code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">LightNovelModel</code>(<code className="-tokenString">"Tokyo Ghoul"</code>, <code className="-tokenKeyConstant">2.0</code>),</code><br/>
                                                                        <code className="-nestedInnerCode --2Identation"><code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">LightNovelModel</code>(<code className="-tokenString">"KissXSis"</code>, <code className="-tokenKeyConstant">3.2</code>),</code><br/>
                                                                        <code className="-nestedInnerCode --2Identation"><code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">LightNovelModel</code>(<code className="-tokenString">"Dragon Ball"</code>, <code className="-tokenKeyConstant">5.2</code>),</code><br/>
                                                                        <code className="-nestedInnerCode --2Identation"><code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">LightNovelModel</code>(<code className="-tokenString">"Danielle"</code>, <code className="-tokenKeyConstant">3.2</code>),</code><br/>
                                                                        <code className="-nestedInnerCode --2Identation"><code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">LightNovelModel</code>(<code className="-tokenString">"Linus Torvalds"</code>, <code className="-tokenKeyConstant">4.2</code>)</code><br/>
                                                                    <code className="-nestedInnerCode">)</code></code><br/>
                                                                );
                                                            </code>
                                                        </ul>

                                                        <ul className="main-implementFullBlock--container">
                                                        
                                                            <p>- <code className="token_reservada">SEM</code> utilizar Streams temos que instânciar uma nova lista auxiliar, para ir adicionando elementos:</p>
                                                            
                                                            <code className="implementFullBlock">
                                                                <span className="-tokenComment"># 1 - Order LightNovels by title</span><br/>
                                                                listOfLightNovels.<code className="-tokenMethod">sort</code>(<code className="-tokenClassEntity">Comparator</code><br/><code className="-nestedInnerCode">.<code className="-tokenMethod">comparing</code>(<code className="-tokenClassEntity">LightNovelModel</code>::<code className="-tokenMethod">getTitle</code>));</code><br/><br/>
                                                                
                                                                <span className="-tokenComment"># 2 - Retrieve the first 3 titles LightNovels with price less than &#60; 4.0</span><br/>
                                                                <code className="-tokenClassEntity">List&#60;String&#62;</code> titlesList = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">ArrayList&#60;&#62;</code>();<br/>
                                                                <code className="-tokenKeyword">for</code> (<code className="-tokenClassEntity">LightNovelModel</code> novel : listOfLightNovels) &#123;<br/>
                                                                    <code className="-nestedInnerCode"><code className="-tokenKeyword">if</code> (novel.<code className="-tokenMethod">getPrice</code>() &#60; <code className="-tokenKeyConstant">4</code>) &#123;</code><br/>
                                                                        <code className="-nestedInnerCode --2Identation">titlesList.<code className="-tokenMethod">add</code>(novel.<code className="-tokenMethod">getTitle</code>());</code><br/>
                                                                    <code className="-nestedInnerCode">&#125;</code><br/>

                                                                    <br/>
                                                                    <span className="-tokenComment -nestedInnerCode"># Se 3 elementos passarem na verificação acima quebra loop</span><br/>
                                                                    <code className="-nestedInnerCode"><code className="-tokenKeyword">if</code> (titlesList.<code className="-tokenMethod">size</code>() &#60;= <code className="-tokenKeyConstant">3</code>) &#123;</code><br/>
                                                                        <code className="-nestedInnerCode --2Identation"><code className="-tokenKeyword">break</code>;</code><br/>
                                                                    <code className="-nestedInnerCode">&#125;</code><br/>
                                                                &#125;<br/><br/>
                                                                <span className="-tokenComment"># Output `titlesList`: [Danielle, KissXSis, Tokyo Ghoul]</span>
                                                            </code>
                                                        </ul>

                                                        <ul className="main-implementFullBlock--container">
                                                        
                                                            <p>- <code className="token_reservada">UTILIZANDO</code> Streams, muito mais simples e coeso e sem precisar de listas auxiliares:</p>
                                                            
                                                            <code className="implementFullBlock">
                                                                <span className="-tokenComment"># Equivale a toda operação anterior, porém em uma tacada</span><br/>
                                                                <code className="-tokenClassEntity">List&#60;String&#62;</code> collectLightNovelsTitlesList = listOfLightNovels.<code className="-tokenMethod">stream</code>()<br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">filter</code>(novel -&#62; novel.<code className="-tokenMethod">getPrice</code>() &#60; <code className="-tokenKeyConstant">4</code>)</code><br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">sorted</code>(<code className="-tokenClassEntity">Comparator</code>.<code className="-tokenMethod">comparing</code>(<code className="-tokenClassEntity">LightNovelModel</code>::<code className="-tokenMethod">getTitle</code>))</code><br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">limit</code>(<code className="-tokenKeyConstant">3</code>)</code><br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">map</code>(<code className="-tokenClassEntity">LightNovelModel</code>::<code className="-tokenMethod">getTitle</code>)</code><br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod"><code className="-tokenMethod"></code>collect</code>(<code className="-tokenClassEntity">Collectors</code>.<code className="-tokenMethod">toList</code>());</code><br/>
                                                                <br/>
                                                                <span className="-tokenComment"># Output `collectLightNovelsTitlesList`: [Danielle, KissXSis, Tokyo Ghoul]</span>    
                                                            </code>
                                                        </ul>
                                                    </li>
                                                    <li>Operações de finding e matching (Busca por elementos): <code className="token_reservada">.findFirst()</code> que retorna o primeiro elemento do fluxo, ou seja, o head; <code className="token_reservada">.findAny()</code> que Retorna QUALQUER elemento da sequência (<code className="token_reservada">NÃO Determinístico</code>); <code className="token_reservada">.anyMatch(Predicate predicate)</code> Retorna true se PELOMENOS um elemento do fluxo atenda a condição imposta pelo predicado; <code className="token_reservada">.allMatch(Predicate predicate)</code> Retorna true se TODOS os elementos deste fluxo atenderem a condição imposta pelo predicado; <code className="token_reservada">.noneMatch(Predicate predicate)</code> Retorna true se NENHUM dos elementos do fluxo atenderem a condição imposta pelo predicado;

                                                        <ul className="main-implementFullBlock--container">
                                                            
                                                            <p> - Fazendo match no fluxo que passar pela filtragem com retornos Optional (<code className="token_reservada">.findFirst()</code> e <code className="token_reservada">.findAny()</code>):</p>
                                                            
                                                            <code className="implementFullBlock">
                                                                <span className="-tokenComment"># `findFirst()`: Retornando o primeiro elemento do fluxo (que passar pela filtragem)</span><br/>
                                                                <code className="-tokenClassEntity">Optional&#60;Integer&#62;</code> firstEvenElement = <code className="-tokenClassEntity">Stream</code>.<code className="-tokenMethod">of</code>(<code className="-tokenKeyConstant">1</code>, <code className="-tokenKeyConstant">2</code>, <code className="-tokenKeyConstant">3</code>, <code className="-tokenKeyConstant">4</code>, <code className="-tokenKeyConstant">5</code>)<br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">filter</code>(n -&#62; n % <code className="-tokenKeyConstant">2</code>)</code><br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">findFirst</code>();</code><br/>
                                                                    
                                                                <br/>
                                                                <span className="-tokenComment"># Output `firstEvenElement`: Optional[2] (Primeiro número par)</span><br/><br/>
                                                                <span className="-tokenComment"># Obs: Por se tratar de um Objeto Optional, podemos realizar vários tratamentos <br/>se o valor for null (Evitando NullPointerException's)</span>
                                                            </code>
                                                        </ul>

                                                        <ul className="main-implementFullBlock--container">
                                                            <code className="implementFullBlock">
                                                                <span className="-tokenComment"># `findAny()`: Retornando QUALQUER elemento (NÃO determinístico) do fluxo (que passar pela filtragem)</span><br/>
                                                                <code className="-tokenClassEntity">Optional&#60;Integer&#62;</code> anyEvenElement = <code className="-tokenClassEntity">Stream</code>.<code className="-tokenMethod">of</code>(<code className="-tokenKeyConstant">1</code>, <code className="-tokenKeyConstant">2</code>, <code className="-tokenKeyConstant">3</code>, <code className="-tokenKeyConstant">4</code>, <code className="-tokenKeyConstant">5</code>)<br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">filter</code>(n -&#62; n % <code className="-tokenKeyConstant">2</code>)</code><br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">findAny</code>();</code><br/>
                                                                    
                                                                <br/>
                                                                <span className="-tokenComment"># Output `anyEvenElement`: Optional[2 Ou 4 Não Determinístico] (QUALQUER número par)</span><br/><br/>
                                                                <span className="-tokenComment"># Obs: NÃO Determinístico quer dizer que pode apresentar diferentes resultados, <br/>independentemente da quantidade de execuções com as mesmas entradas de dados</span>
                                                            </code>
                                                        </ul>

                                                        <br/>
                                                        <ul className="main-implementFullBlock--container">
                                                            
                                                            <p> - Fazendo match no fluxo inteiro (Sem pré-filtragens) e com retornos booleanos (<code className="token_reservada">.anyMatch()</code>, <code className="token_reservada">.allMatch()</code>, e <code className="token_reservada">.noneMatch()</code>):</p>
                                                            
                                                            <code className="implementFullBlock">
                                                                <span className="-tokenComment"># `anyMatch()`: Retorna true se PELOMENOS UM elemento faz match no predicado</span><br/>
                                                                <code className="-tokenKeyword">boolean</code> anyMatch_bool = <code className="-tokenClassEntity">Stream</code>.<code className="-tokenMethod">of</code>(<code className="-tokenString">"apple"</code>, <code className="-tokenString">"banana"</code>, <code className="-tokenString">"cherry"</code>, <code className="-tokenString">"date"</code>)<br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">anyMatch</code>(fruit -&#62; fruit.<code className="-tokenMethod">startsWith</code>(<code className="-tokenString">"b"</code>));</code><br/>
                                                                
                                                                <br/>
                                                                <span className="-tokenComment"># Output `anyMatch_bool`: true (Na segunda iteração, banana começa com "b")</span>
                                                            </code>
                                                        </ul>
                                                        <ul className="main-implementFullBlock--container">   
                                                            <code className="implementFullBlock">
                                                                <span className="-tokenComment"># `allMatch()`: Retorna true se TODOS elementos faz match no predicado</span><br/>
                                                                <code className="-tokenKeyword">boolean</code> allMatch_bool = <code className="-tokenClassEntity">Stream</code>.<code className="-tokenMethod">of</code>(<code className="-tokenString">"apple"</code>, <code className="-tokenString">"banana"</code>, <code className="-tokenString">"cherry"</code>, <code className="-tokenString">"date"</code>)<br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">allMatch</code>(fruit -&#62; fruit.<code className="-tokenMethod">length</code>() &#62; <code className="-tokenKeyConstant">3</code>);</code><br/>
                                                                
                                                                <br/>
                                                                <span className="-tokenComment"># Output `allMatch_bool`: true (TODOS tem mais de 3 caracteres)</span>
                                                            </code>
                                                        </ul>
                                                        <ul className="main-implementFullBlock--container">   
                                                            <code className="implementFullBlock">
                                                                <span className="-tokenComment"># `noneMatch()`: Retorna true se NENHUM elemento faz match no predicado</span><br/>
                                                                <code className="-tokenKeyword">boolean</code> noneMatch_bool = <code className="-tokenClassEntity">Stream</code>.<code className="-tokenMethod">of</code>(<code className="-tokenString">"apple"</code>, <code className="-tokenString">"banana"</code>, <code className="-tokenString">"cherry"</code>, <code className="-tokenString">"date"</code>)<br/>
                                                                <code className="-nestedInnerCode">.<code className="-tokenMethod">noneMatch</code>(fruit -&#62; fruit.<code className="-tokenMethod">startsWith</code>(<code className="-tokenString">"z"</code>));</code><br/>
                                                                
                                                                <br/>
                                                                <span className="-tokenComment"># Output `noneMatch_bool`: true (NENHUM elemento começa com "z")</span>
                                                            </code>
                                                        </ul>

                                                    </li>
                                                    <li>Operações de redução com <code className="token_reservada">.reduce(BinaryOperator&#60;T&#62; accumulator)</code>: Aplicando regras que transformam o fluxo todo de elementos em apenas um elemento no final, utilizando operação associativa neles, operações associativas na matematica são operações nas quais os resultados devem ser os mesmos independentemente da ordem na qual esses dois elementos (Operandos) são processados, esse conceito é aplicado pelo Interface BinaryOperator&#60;T&#62; que é o parâmetro do método de redução em questão, esse conceito é importante pois a implementação em baixo nível dessa operação aplica as regras no elemento corrente e no elemento anterior, porisso essa ordem dita nas operações associativas é relevante, pois independentemente da ordem dos dois elementos (Operandos) em operação NÃO devem alterar resultado final, eles devem ser o mesmo (Estilo a famosa frase "A ordem dos fatores (Operandos) não altera o produto (Resultado)", NÃO levar ao pé da letra isso pois se aplicar em strings a ordem altera sim o produto rsrs), essas regras são aplicadas somente a operações de somas e multiplicações pois essas operações são associativas;
                                                        <ul className="main-implementFullBlock--container">
                                                            
                                                            <p> - Somando todos elementos entre si (acumulando a soma+=) <code className="-token_reservada">COM</code> a sobrecarga do <code className="token_reservada">identity</code> (Esse parâmetro indica o valor inicial que apartir dele será acumulado) e <code className="token_reservada">SEM</code>, a seguinte lista é utilizado em todas operações:</p>
                                                            
                                                            <code className="implementFullBlock">
                                                                <code className="-tokenClassEntity">List&#60;Integer&#62;</code> numbersList = <code className="-tokenClassEntity">Arrays</code>.<code className="-tokenMethod">asList</code>(<code className="-tokenKeyConstant">1</code>, <code className="-tokenKeyConstant">2</code>, <code className="-tokenKeyConstant">3</code>, <code className="-tokenKeyConstant">4</code>, <code className="-tokenKeyConstant">5</code>);<br/>
                                                            </code>
                                                        </ul>
                                                        <ul className="main-implementFullBlock--container">
                                                            <code className="implementFullBlock">
                                                                <span className="-tokenComment"># COM a sobrecarga do identity o retorno será um primitivo comum:</span><br/>
                                                                <code className="-tokenKeyword">int</code> sum_int = numbersList.<code className="-tokenMethod">stream</code>()<br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">reduce</code>(<code className="-tokenKeyConstant">0</code>, (x, y) -&#62; x + y);</code><br/>
                                                                <br/>
                                                                <span className="-tokenComment"># Output `sum_int`: 15</span>
                                                            </code>     
                                                        </ul>
                                                        <ul className="main-implementFullBlock--container">
                                                            <code className="implementFullBlock">
                                                                <span className="-tokenComment"># Com method reference e sem a sobrecarga do identity, o retorno será Optional do Wrapper</span><br/>
                                                                <code className="-tokenClassEntity">Optional&#60;Integer&#62;</code> sum_opt_integer = numbersList.<code className="-tokenMethod">stream</code>()<br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">reduce</code>(<code className="-tokenClassEntity">Integer</code>::<code className="-tokenMethod">sum</code>);</code><br/>
                                                                <br/>
                                                                <span className="-tokenComment"># Output `sum_opt_integer`: Optional[15]</span>
                                                            </code>   
                                                        </ul>
                                                        <ul className="main-implementFullBlock--container">
                                                            <code className="implementFullBlock">
                                                                <span className="-tokenComment"># Com method reference e COM a sobrecarga do identity, o retorno será Wrapper</span><br/>
                                                                <code className="-tokenClassEntity">Integer</code> sum_integer = numbersList.<code className="-tokenMethod">stream</code>()<br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">reduce</code>(<code className="-tokenKeyConstant">0</code>, <code className="-tokenClassEntity">Integer</code>::<code className="-tokenMethod">sum</code>);</code><br/>
                                                                <br/>
                                                                <span className="-tokenComment"># Output `sum_integer`: Wrapper[15]</span>
                                                            </code>   
                                                        </ul>
                                                    
                                                    </li>
                                                    <li>Streams especializados para trabalhar com tipos primitivos numéricos, evita <code className="token_reservada">problemas de boxing e unboxing dos Wrappers</code>, ganhando mais performance, utilizando a transformação com o método <code className="token_reservada">.mapToDouble(ClassEntity::getDoubleAttribute)</code> apartir da Stream genérica: Também abordamos o problema dos Wrappers dos Tipos primitivos sobre encapsular e desencapsular a cada iteração, alocando e re-alocando memória quando utilizado o Stream genérico (<code className="outputResult">Stream&#60;Double&#62;</code>), tornando esse processo computacionalmente custoso, então é utilizado as classes especializadas para trabalhar com fluxos de dados relacionados aos Tipos primitivos e Wrappers deles (Exemplo: <code className="outputResult">DoubleStream</code>) que evitam esse problema, sendo eles: <code className="token_reservada">IntStream</code>, <code className="token_reservada">DoubleStream</code>, e <code className="token_reservada">LongStream</code>;
                                                         <ul className="main-implementFullBlock--container">
                                                            
                                                            <p> - Computacionalmente CUSTOSO: SEM o Stream especializado, que ocorre o problema dos Wrappers sobre boxing e unboxing: </p>
                                                            
                                                            <code className="implementFullBlock">
                                                                <span className="-tokenComment"># SEM Stream especializado o retorno será um Optional:</span><br/>
                                                                <code className="-tokenClassEntity">Optional&#60;Double&#62;</code> sum_opt_double = listOfLightNovels.<code className="-tokenMethod">stream</code>()<br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">filter</code>(novel -&#62; novel.<code className="-tokenMethod">getPrice</code>() &#62; <code className="-tokenKeyConstant">3</code>)</code><br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">map</code>(<code className="-tokenClassEntity">LightNovelModel</code>::<code className="-tokenMethod">getPrice</code>)<span className="-tokenComment">// Stream&#60;Double&#62; (Problema)</span></code><br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">reduce</code>(<code className="-tokenClassEntity">Double</code>::<code className="-tokenMethod">sum</code>);</code><br/>
                                                                <br/>
                                                                <span className="-tokenComment"># Output `sum_opt_double`: Optional[15.8]</span>
                                                            </code>
                                                        </ul>
                                                        <ul className="main-implementFullBlock--container">
                                                            
                                                            <p> - SOLUÇÃO: Stream especializado, evita problema de Boxing e Unboxing dos Wrappers: </p>
                                                            
                                                            <code className="implementFullBlock">
                                                                <span className="-tokenComment"># COM Stream especializado o retorno será o tipo primitivo comum:</span><br/>
                                                                <code className="-tokenKeyword">double</code> sum_native_double = listOfLightNovels.<code className="-tokenMethod">stream</code>()<br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">mapToDouble</code>(<code className="-tokenClassEntity">LightNovelModel</code>::<code className="-tokenMethod">getPrice</code>)<span className="-tokenComment">// DoubleStream (Solução)</span></code><br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">filter</code>(novel_price -&#62; novel_price &#62; <code className="-tokenKeyConstant">3</code>)<span className="-tokenComment">// descartou o obj, então não executamos .getPrice()</span></code><br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">sum</code>();<span className="-tokenComment">// já temos apenas o atributo price no fluxo, logo, não precisamos do `.reduce()`</span></code><br/>
                                                                <br/>
                                                                <span className="-tokenComment"># Output `sum_native_double`: 15.8 (Msm result, porém MAIS performatico)</span>
                                                            </code>
                                                        </ul>                                                
                                                    </li>
                                                    <li>Sobre o ponto anterior, também é possível fazer o processo <code className="token_reservada">reverso/inverso</code> e re-encapsular o Stream especializado (<code className="outputResult">DoubleStream</code>) retornando uma Stream genérica do mesmo (<code className="outputResult">Stream&#60;Double&#62;</code>) utilizando o método <code className="token_reservada">.boxed()</code>, Util quando as próximas operações (métodos) do fluxo espera no contexto dele Objetos ao invés de primitivos comuns;
                                                        <ul className="main-implementFullBlock--container">
                                                            
                                                            <p> - Convertendo DoubleStream (Streams Especializados) para Stream&#60;Double&#62; (Genérico) quando o contexto seguinte do fluxo espera um Objeto Wrapper ao invés do primitivo, neste caso o passo <code className="token_reservada">.collect(Collector.toList())</code> espera receber Objetos ao invés de primitivos comuns: </p>
                                                            
                                                            <code className="implementFullBlock">
                                                                <span className="-tokenComment"># Exemplo: Para executar o coletor que retorna uma List (Espera-se objetos):</span><br/>
                                                                <code className="-tokenClassEntity">List&#60;Double&#62;</code> listOfPricesGreatThan3 = listOfLightNovels.<code className="-tokenMethod">stream</code>()<br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">mapToDouble</code>(<code className="-tokenClassEntity">LightNovelModel</code>::<code className="-tokenMethod">getPrice</code>)<span className="-tokenComment">// DoubleStream </span></code><br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">filter</code>(novel_price -&#62; novel_price &#62; <code className="-tokenKeyConstant">3</code>)<span className="-tokenComment">// descartou o obj, então não executamos .getPrice()</span></code><br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">boxed</code>();<span className="-tokenComment">// encapsula o primitivo em wrapper novamente</span></code><br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">collect</code>(<code className="-tokenClassEntity">Collectors.<code className="-tokenMethod">toList</code>()</code>);<span className="-tokenComment">// contexto que espera Objetos ao invés de primitivos</span></code><br/>
                                                                <br/>
                                                                <span className="-tokenComment"># Output `listOfPricesGreatThan3`: [3.2, 5.2, 3.2, 4.2]</span>
                                                            </code>
                                                        </ul>
                                                    </li>
                                                    <li>Gerando fluxos Streams apartir das classes Streams especializadas ditas anteriormente: Também é possivel realizar essa operação utilizando os Streams especializados com o método estático <code className="token_reservada">IntStream.range(inicio, final)</code>; Para gerar o alfabéto com Stream de chars, existe uma macete utilizando mapeamento da tabela ASCII relacionada ao Inteiro gerado apartir do mesmo método anterior, mais detalhes no módulo especifico com maiores detalhes; Para gerar Streams de qualquer outro Objeto <code className="token_reservada">Stream.of("Wellison","wesley", "Irineu", "InemEu")</code>; Para gerar Streams apartir de arrays nativos <code className="token_reservada">Arrays.stream(new int[]&#123;1, 2, 3, 4, 5&#125;)</code>; Para gerar Streams apartir de arquivos, lendo linha a linha, ou lendo palavra por palavra <code className="token_reservada">Stream&#60;String&#62; lines = Files.lines(Paths.get("/home"))</code>;
                                                        <ul className="main-implementFullBlock--container">
                                                            
                                                            <p> - Gerando Streams de valores Inteiros: </p>
                                                            
                                                            <code className="implementFullBlock">
                                                                <span className="-tokenComment">#`.range()` considera do inicio até final - 1 (Ou seja, não incluí o número final do range):</span><br/>
                                                                <code className="-tokenClassEntity">IntStream</code>.<code className="-tokenMethod">range</code>(<code className="-tokenKeyConstant">0</code>, <code className="-tokenKeyConstant">21</code>)<span className="-tokenComment">// de 0 a 20 </span><br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">filter</code>(n -&#62; n % <code className="-tokenKeyConstant">2</code> == <code className="-tokenKeyConstant">0</code>)<span className="-tokenComment">// pares</span></code><br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">forEach</code>(n -&#62; <code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">print</code>(n + <code className="-tokenString">", "</code>));</code><br/>   
                                                                <br/>
                                                                <span className="-tokenComment"># Output: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20,</span>
                                                            </code>
                                                        </ul>
                                                        <ul className="main-implementFullBlock--container">
                                                            <code className="implementFullBlock">
                                                                <span className="-tokenComment">#`.rangeClosed()` considera do inicio até final (Incluí o número final do range, ao contrário do anterior):</span><br/>
                                                                <code className="-tokenClassEntity">IntStream</code>.<code className="-tokenMethod">rangeClosed</code>(<code className="-tokenKeyConstant">0</code>, <code className="-tokenKeyConstant">22</code>)<span className="-tokenComment">// de 0 a 22 </span><br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">filter</code>(n -&#62; n % <code className="-tokenKeyConstant">2</code> == <code className="-tokenKeyConstant">0</code>)<span className="-tokenComment">// pares</span></code><br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">forEach</code>(n -&#62; <code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">print</code>(n + <code className="-tokenString">", "</code>));</code><br/>   
                                                                <br/>
                                                                <span className="-tokenComment"># Output: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, &#60;- considerou o range até o final passado no argumento</span>
                                                            </code>
                                                        </ul>

                                                        <ul className="main-implementFullBlock--container">
                                                            
                                                            <p> - Gerando Streams de valores Strings (Ou qualquer outro Objeto): </p>
                                                            
                                                            <code className="implementFullBlock">
                                                                <span className="-tokenComment"># Gerando Streams de qualquer Objeto</span><br/>
                                                                <code className="-tokenClassEntity">Stream</code>.<code className="-tokenMethod">of</code>(<code className="-tokenString">"Wellison"</code>, <code className="-tokenString">"wesley"</code>, <code className="-tokenString">"Irineu"</code>, <code className="-tokenString">"InemEu"</code>);<br/>
                                                            </code>
                                                        </ul>
                                                        <ul className="main-implementFullBlock--container">
                                                            <code className="implementFullBlock">
                                                                <span className="-tokenComment"># Macete: Gerando Streams do alfabeto mapeando os caracteres da tabela ASCII</span><br/>
                                                                <code className="-tokenClassEntity">IntStream</code>.<code className="-tokenMethod">range</code>(<code className="-tokenString">'a'</code>, <code className="-tokenString">'z'+<code className="-tokenKeyConstant">1</code></code>)<span className="-tokenComment">// z+1 pois o valor final é desconsiderado </span><br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">mapToObj</code>(<code className="-tokenClassEntity">Character</code>::<code className="-tokenMethod">toString</code>)<span className="-tokenComment">// Faz o mapeamento da tabela</span></code><br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">forEach</code>(letra -&#62; <code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">print</code>(letra + <code className="-tokenString">", "</code>));</code><br/>   
                                                                <br/>
                                                                <span className="-tokenComment"># Output: a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z,</span>
                                                            </code>
                                                        </ul>

                                                        <ul className="main-implementFullBlock--container">
                                                            
                                                            <p> - Gerando Streams apartir de Arrays nativos: </p>
                                                            
                                                            <code className="implementFullBlock">
                                                                <code className="-tokenKeyword">int</code>[] numbersArrayNativo = &#123;<code className="-tokenKeyConstant">1</code>, <code className="-tokenKeyConstant">2</code>, <code className="-tokenKeyConstant">3</code>, <code className="-tokenKeyConstant">4</code>, <code className="-tokenKeyConstant">5</code>&#125;;<br/>
                                                                <code className="-tokenClassEntity">Optional&#60;Double&#62;</code> avg_double_opt = <code className="-tokenClassEntity">Arrays</code>.<code className="-tokenMethod">stream</code>(numbersArrayNativo)<br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">average</code>();</code><br/>
                                                                
                                                                <br/>
                                                                <span className="-tokenComment"># Output `avg_double_opt`: Optional[3.5]</span>
                                                            </code>
                                                        </ul>

                                                        <ul className="main-implementFullBlock--container">
                                                            
                                                            <p> - Gerando Streams apartir de conteúdos de arquivos: </p>
                                                            
                                                            <code className="implementFullBlock">
                                                               <code className="-tokenKeyword">try</code>(<code className="-tokenClassEntity">Stream&#60;String&#62;</code> lines = <code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">lines</code>(<code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(<code className="-tokenString">"/home/arquivo.txt"</code>))) &#123;<br/>
                                                                    <code className="-nestedInnerCode">lines.<code className="-tokenMethod">filter</code>(line -&#62; line.<code className="-tokenMethod">startsWith</code>(<code className="-tokenString">"R"</code>))</code><br/>
                                                                        <code className="-nestedInnerCode --2Identation">.<code className="-tokenMethod">forEach</code>(<code className="-tokenClassEntity">System</code>.out::<code className="-tokenMethod">println</code>);</code><br/>
                                                                &#125; <code className="-tokenKeyword">catch</code> (<code className="-tokenClassEntity">IOException</code> ex) &#123;<br/>
                                                                    <code className="-nestedInnerCode">ex.<code className="-tokenMethod">printStackTrace</code>();</code><br/>
                                                                &#125;
                                                                
                                                                <br/><br/>
                                                                <span className="-tokenComment"># Output: Rick and Morty S06E10 WEB-DL 1080p DUAL 5.1.mkv</span><br/>
                                                                <span className="-tokenComment"># Output: Rick.and.Morty.S06E09.1080p.WEB-DL.DUAL.5.1.mkv</span><br/>    
                                                                <span className="-tokenComment"># Output: Rick.and.Morty.S06E08.1080p.WEB-DL.DUAL.5.1.mkv</span><br/>    
                                                                <span className="-tokenComment"># Output: Rick.and.Morty.S06E07.1080p.WEB-DL.DUAL.mkv</span><br/>    
                                                            </code>
                                                        </ul>
                                                    </li>
                                                    <li>Gerando fluxos Streams infinitos, em exemplo implementamos a sequência de Fibonacci, com <code className="token_reservada">Stream.iterate(new int[]&#123;0, 1&#125;, n -&#62; new int[]&#123;n[1], n[0] + n[1]&#125;).limit(10)</code>; Obs: Devemos utilizar o <code className="token_reservada">.limit(10)</code> pois se não iria ficar eternamente;
                                                        <ul className="main-implementFullBlock--container">
                                                            
                                                            <p> - Gerando Streams infinitos, 10 primiros da sequência de Fibonacci: </p>
                                                            
                                                            <code className="implementFullBlock">
                                                                <code className="-tokenClassEntity">Stream</code>.<code className="-tokenMethod">iterate</code>(<code className="-tokenKeyword">new int</code>[]&#123;<code className="-tokenKeyConstant">0</code>, <code className="-tokenKeyConstant">1</code>&#125;, n -&#62; <code className="-tokenKeyword">new int</code>[]&#123;n[<code className="-tokenKeyConstant">1</code>], n[<code className="-tokenKeyConstant">0</code>] + n[<code className="-tokenKeyConstant">1</code>]&#125;)<br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">limit</code>(<code className="-tokenKeyConstant">10</code>)</code><br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">forEach</code>(element -&#62; <code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">print</code>(<code className="-tokenClassEntity">Arrays</code>.<code className="-tokenMethod">toString</code>(element) + <code className="-tokenString">" "</code>));</code><br/>
                                                                    
                                                                    <br/>
                                                                    <span className="-tokenComment"># Output: [0, 1] [1, 1] [1, 2] [2, 3] [3, 5] [5, 8] [8, 13] [13, 21] [21, 34] [34, 55]</span>
                                                            </code>
                                                        </ul>
                                                        <ul className="main-implementFullBlock--container">
                                                            <code className="implementFullBlock">
                                                                <span className="-tokenComment"># Mesma coisa porém retornando apenas os valores da sequência:</span><br/>
                                                                <code className="-tokenClassEntity">Stream</code>.<code className="-tokenMethod">iterate</code>(<code className="-tokenKeyword">new int</code>[]&#123;<code className="-tokenKeyConstant">0</code>, <code className="-tokenKeyConstant">1</code>&#125;, n -&#62; <code className="-tokenKeyword">new int</code>[]&#123;n[<code className="-tokenKeyConstant">1</code>], n[<code className="-tokenKeyConstant">0</code>] + n[<code className="-tokenKeyConstant">1</code>]&#125;)<br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">limit</code>(<code className="-tokenKeyConstant">10</code>)</code><br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">map</code>(element -&#62; element[<code className="-tokenKeyConstant">0</code>])</code><br/>
                                                                    <code className="-nestedInnerCode">.<code className="-tokenMethod">forEach</code>(value -&#62; <code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">print</code>(value + <code className="-tokenString">", "</code>));</code><br/>
                                                                    
                                                                    <br/>
                                                                    <span className="-tokenComment"># Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,</span>
                                                            </code>
                                                        </ul>
                                                    </li>
                                                    <br/>
                                                    <li>Operações finais com o Framework Collectors que define uma serie de métodos estáticos para coletar os elementos do fluxo Stream retornando eles em coleções, listas, mapas, além disto, ele também fornece métodos de Agrupamentos (Mesma lógica dos agrupamentos em DB SQL GROUP BY), aonde conseguimos agrupar elementos em mapas de acordo com algum critério e realizar também funções de agregação (Min, Max, AVG, Count, Sum) em cima dos grupos gerados, o retorno será um mapa aonde a chave é o critéro do agrupamento e o valor são os elementos que fazem match neste critério:</li>
                                                    <li>Gerando resumos (Sumários) retornando em apenas um Objeto o resultado de todas funções de agregação de uma só vez com o método `listOfLightNovels.stream()<br/>.collect(Collectors.summarizingDouble(LightNovelModel::getPrice));`, neste contexto estamos gerando o resumo do atributo preço dos novels, o retorno será o Objeto `DoubleSummaryStatistics&#123;count=5, sum=17,800000, min=2,000000, average=3,560000, max=5,200000&#125;`, as informações retiradas aqui são: Existem 5 elementos ao total no fluxo; A soma total entre eles é igual a R$17,80; O novel mais barato custa R$2,00; A média entre todos os preços de todos elementos do fluxo é igual a R$3,56; O novel mais caro custa R$5,20;</li>
                                                    <li>Obs sobre o ponto anterior summarizing: Podemos também realizar cada uma dessas funções de agregação isoladamente (Min, Max, AVG, Count, Sum), e para isto existem duas sintaxes diferentes que geram o mesmo resultado, uma utilizando o Framework Collectors e outra utilizando os métodos prontos dos próprios Streams: </li>
                                                    <li>Aplicando a função de agregação `Min` (Minimo) em isolado: SEM Collectors: `listOfLightNovels.stream()<br/>.min(Comparator.comparing(LightNovelModel::getPrice))<br/>.ifPresent(System.out::println);`, COM Collectors: `listOfLightNovels.stream()<br/>.collect(Collectors.minBy(Comparator.comparing(LightNovelModel::getPrice)))<br/>.ifPresent(System.out::println);`, O Resultado gerado pelas duas operações será `LightNovelModel&#123;title='Tokyo Ghoul', price=2.0&#125;`;</li>
                                                    <li>Aplicando a função de agregação `Max` (Máximo) em isolado: SEM Collectors: `listOfLightNovels.stream()<br/>.max(Comparator.comparing(LightNovelModel::getPrice))<br/>.ifPresent(System.out::println);`, COM Collectors: `listOfLightNovels.stream()<br/>.collect(Collectors.maxBy(Comparator.comparing(LightNovelModel::getPrice)))<br/>.ifPresent(System.out::println);`, O Resultado gerado pelas duas operações será `LightNovelModel&#123;title='Dragon Ball', price=5.2&#125;`;</li>
                                                    <li>Aplicando a função de agregação `AVG (Average, Média)` em isolado: SEM Collectors: `listOfLightNovels.stream()<br/>.mapToDouble(LightNovelModel::getPrice).average()<br/>.ifPresent(System.out::println);`, COM Collectors: `listOfLightNovels.stream()<br/>.collect(Collectors.averagingDouble(LightNovelModel::getPrice));`, O Resultado gerado pelas duas operações será `3.56`; Obs: podemos notar que por se tratar de uma operação que será aplicada em um valor primitivo para cada elemento do fluxo, para assim gerar a média dos valores dos atributos Double deles, é utilizado o Stream especializado em valores Double gerado no passo `.mapToDouble(LightNovelModel::getPrice)` da primeira operação aqui descrita SEM Collectors, isto é feito para evitar o problema de boxing e unboxing dos Wrappers;</li>
                                                    <li>Aplicando a função de agregação `Count` (Contagem de ocorrências) em isolado: SEM Collectors: `listOfLightNovels.stream().count();`, COM Collectors: `listOfLightNovels.stream()<br/>.collect(Collectors.counting());`, O Resultado gerado pelas duas operações será `5`;</li>
                                                    <li>Aplicando a função de agregação `Sum` (Soma elemento a elemento) em isolado: SEM Collectors: `listOfLightNovels.stream()<br/>.mapToDouble(LightNovelModel::getPrice).sum();`, COM Collectors: `listOfLightNovels.stream()<br/>.collect(Collectors.summingDouble(LightNovelModel::getPrice));`, O Resultado gerado pelas duas operações seŕa `17.8`;</li>
                                                    <br/>
                                                    <li>Agrupando elementos do fluxo de acordo com algum atributo do Objeto elemento (Enum), retornando um mapa aonde a chave é o Enumerador e o valor é uma lista de elementos que possuem esse Enumerador co-relacionados: <code className="token_reservada">listOfLightNovels.stream()<br/>.collect(Collectors.groupingBy(LightNovelModel::getCategory));</code>, <br/><br/>O Resultado gerado desta operação será: <br/><br/><code className="outputResult">`&#123;<code className="token_reservada">ADVENTURE</code>=[LightNovelModel&#123;title='Welzika', price=4.2, category=ADVENTURE&#125;], <br/><code className="token_reservada">FANTASY</code>=[LightNovelModel&#123;title='Tokyo Ghoul', price=2.0, category=FANTASY&#125;, LightNovelModel&#123;title='Dragon Ball', price=5.2, category=FANTASY&#125;], <br/><code className="token_reservada">ECCHI</code>=[LightNovelModel&#123;title='KissXSis', price=3.2, category=ECCHI&#125;], <br/><code className="token_reservada">DRAMA</code>=[LightNovelModel&#123;title='Danielle', price=3.2, category=DRAMA&#125;]&#125;`</code></li>
                                                    <li>Agrupando elementos do fluxo de acordo com regras personalizadas na chamada, em exemplo iremos agrupar os novels de acordo com promoção ou não (Se o price dele for menor que 3.0 então `PromotionEnum.UNDER_PROMOTION`, se for maior então `PromotionEnum.NORMAL_PRICE`), Ou seja, o resultado gerado será <code className="outputResult">`Map&#60;PromotionEnum, List&#60;LightNovelModel&#62;&#62;`</code>: <code className="token_reservada">listOfLightNovels.stream()<br/>.collect(Collectors.groupingBy(novel -&#62; novel.getPrice() &#62; 3 ? PromotionEnum.UNDER_PROMOTION : PromotionEnum.NORMAL_PRICE));</code>, <br/><br/>O Resultado gerado desta operação será: <br/><br/><code className="outputResult">`&#123;<code className="token_reservada">UNDER_PROMOTION</code>=[LightNovelModel&#123;title='Tokyo Ghoul', price=2.0, category=FANTASY&#125;], <br/><code className="token_reservada">NORMAL_PRICE</code>=[LightNovelModel&#123;title='KissXKiss', price=3.2, category=ECCHI&#125;, LightNovelModel&#123;title='Dragon Ball', price=5.2, category=FANTASY&#125;, LightNovelModel&#123;title='Danielle', price=3.2, category=DRAMA&#125;, LightNovelModel&#123;title='Welzika', price=4.2, category=ADVENTURE&#125;]&#125;`</code></li>
                                                    <li>Agrupamento mais complexo, agrupamentos aninhados, ou seja, agrupamentos de agrupamentos, neste contexto iremos realizar a junção dos dois agrupamentos anteriores, com a chave do mapa sendo a categoria e o valor é outro mapa aninhado contendo o mesmo agrupamento anteior (promoção), ou seja, agrupando os elementos do fluxo com regras personalizadas na chamada (Se o price dele for menor que 3.0 então `PromotionEnum.UNDER_PROMOTION`, se for maior então `PromotionEnum.NORMAL_PRICE`) e depois realiza outro agrupamento separando os elementos agrupados anteriormente por promoção, agora agrupa também por categoria, então por fim teremos os elementos agrupados por categoria e o valor é a lista de novels agrupados por promoções, Ou seja, o resultado gerado será <code className="outputResult">`Map&#60;CategoryEnum, Map&#60;PromotionEnum, List&#60;LightNovelModel&#62;&#62;`</code>: <code className="token_reservada">listOfLightNovels.stream()<br/>.collect(Collectors.groupingBy(LightNovelModel::getCategory, Collectors.groupingBy(novel -&#62; novel.getPrice() &#62; 3 ? PromotionEnum.UNDER_PROMOTION : PromotionEnum.NORMAL_PRICE)));</code>, <br/><br/>O Resultado gerado desta operação será: <br/><br/><code className="outputResult">`&#123;<code className="token_reservada">FANTASY</code>=&#123;UNDER_PROMOTION=[LightNovelModel&#123;title='Tokyo Ghoul', price=2.0, category=FANTASY&#125;], NORMAL_PRICE=[LightNovelModel&#123;title='Dragon Ball', price=5.2, category=FANTASY&#125;]&#125;, <br/><code className="token_reservada">DRAMA</code>=&#123;NORMAL_PRICE=[LightNovelModel&#123;title='Danielle', price=3.2, category=DRAMA&#125;]&#125;, <br/><code className="token_reservada">ECCHI</code>=&#123;NORMAL_PRICE=[LightNovelModel&#123;title='KissXKiss', price=3.2, category=ECCHI&#125;]&#125;, <br/><code className="token_reservada">ADVENTURE</code>=&#123;NORMAL_PRICE=[LightNovelModel&#123;title='Welzika', price=4.2, category=ADVENTURE&#125;]&#125;&#125;`</code></li>
                                                </ul>
                                            </li>
                                            <li><code className="-main-moduleTitleLi token_reservada">Threads:</code> Aqui é abordado a maneira mais baixo nível de lidar criando e configurando MANUALMENTE todo o processo, porisso "baixo nível", em alguns casos não é necessário realizar toda essa configuração manual pois existem classes mais modernas que adicionam uma camada a mais de abstração tornando esse processo mais facil, como por exemplo a classe ExecutorService ou ScheduledExecutorService (Para agendamentos de tarefas que devem ser executadas de tempos em tempos), que além de facilitar na criação das threads e limitação na quantidade de threads que seram criadas no `pool de threads`, também facilita nos tratamentos de concorrência por recursos entre elas. Como criar por meio de herança extends na classe Thread (Não muito recomendado) ou implementando implements a Interface Runnable (Mais indicado). Estado das threads (state of threads) `New` para quando criamos mas não iniciamos ainda com o método `.start()`, `Runnable` para quando damos `.start()` nelas indicando que pretendemos essa execução (Não executa ainda pois quem decide isso é o Scheduler do Sistema Operacional), `Blocked` para quando uma thread aguarda o Lock de um recurso e ela espera para adquirir o monitor do objeto, ou seja, isso geralmente ocorre quando esse recurso já está sendo acessado por outra thread e a mesma está segurando o Lock, `Waiting` para quando uma thread está aguardando indefinidamente por notificações de outras para assim poder continuar sua execução, `Time Waiting` ou  também `Waiting Blocked` para quando uma thread está aguardando porém com um tempo limite definido (Como por exemplo quando uma thread aguarda resposta de rede, ela não fica esperando infinitamente, ela aguarda dar time out, se não iria ocorrer um `DeadLock` mais explicações no módulo X), e finalmente `Terminated` para quando uma tarefa é concluída ou interrompida por algum motivo. OBS: A Thread pode executar e parar, e depois voltar a executar apartir do ponto em que ela parou, várias vezes, quem decide quando e qual thread será executada é o Scheduler, podemos apenas definir níveis de prioridade maiores para algumas, porém mesmo assim quem decide é o Scheduler. Existem dois (2) tipos de Threads sendo elas as de usuário `User` que são criadas por nós desenvolvedores e as do sistema `Daemon` que são criadas pela JVM (Ou também podemos criar esse tipo definindo `.setDaemon(true)`, esse tipo é útil para execuções de limpesas ou liberação de recursos em geral, tarefas nas quais não exigem prioridade e as mesmas podem ser finalizadas a qualquer momento) como por exemplo o garbage collector que sai varrendo e limpando a memória, a principal diferença entre elas duas (Daemon e User) é que o programa só finaliza quando termina a execução das threads de usuário User, e quando isso ocorre o programa é finalizado mesmo se ainda existir threads do tipo `Daemon` em execução, além disto as Threads do tipo `User` também tem maior prioridade de execução na hora de ser escalonada pelo Scheduler do Sistema Operacional. Métodos que alteram o fluxo de execução das threads, como se unir a outras (Aguardar que outra thread finalize sua tarefa definida no método sobrescrito `.run()` com `objOutraThread.join()` nela, e após essa finalização ela (thread corrente que executou `objOutraThread.join()`) continua a executar apartir dali, Ou também parar (dar dicas que quer parar) a execução da thread corrente tornando ela `Runnable` para quando a thread corrente já finalizou sua tarefa e pode deixar outras serem executadas, com o método estático `Thread.yield()`.</li>
                                            <li><code className="-main-moduleTitleLi token_reservada">Threads - Synchronization (MultiThreads):</code> Aqui é abordado a maneira mais baixo nível de lidar (Não tão baixo nível pois aqui não precisamos trabalhar diretamente com os Objetos implementados da interface Lock como a classe ReentrantLock, essas classes são utilizadas para implementar MANUALMENTE as regras de bloqueios de recursos, aumenta a complexidade porém possibilita maiores controles sobre sincronismo, abordado no módulo abaixo), bloqueando e sincronizando os Objetos "na unha". Sincronismo em threads é o processo no qual definimos regras sobre quando e quem pode acessar algum bloco de código, tornando o mesmo sincronizado com a token `synchronized` assim apenas uma thread por vez pode executar esse bloco de maneira "atômica", ou seja, a thread pega o Lock do Objeto recurso e executa esse bloco por completo sem que outra possa entrar e realizar mudanças nas variáveis por exemplo, atrapalhando umas as outras. Esse processo é a solução a nível de implementação necessário para tratar a concorrência por um recurso entre as threads, bloqueando um recurso para outras threads quando ele está sendo executado por outra, o token `synchronized` implementa isso tornando as threads de fora do bloco `waiting` até que esse recurso seja executado por completo pela thread que entrou no bloco e está segurando o Lock. DeadLock, também abordamos o problema que pode ocorrer se utilizado a sincronização com `synchronized` de maneira errada, aonde um recurso é bloqueado por uma thread (otherThread) e essa mesma thread (otherThread) solicite algum outro recurso que também está bloqueado e esta sendo executado por outra thread (currentThread), e essa outra thread (currentThread) está solicitando neste bloco dela o recurso que está bloqueado pela outra thread (otherThread) que está esperando ela (currentThread), ou seja, bloqueio cruzado em X, aonde elas aguardam enternamente pelo recurso que a outra está segurando o Lock. Tomar cuidados ao utilizar o sincronismo com o `synchronized` em blocos inteiros, ou em várias partes que não precisariam serem sincronizados pois sincronizar blocos inteiros é praticamente tornar a execução do mesmo assincrona, ou seja, perder todas as vatagens do paralelismo, uma vez que esse bloco será executado da maneira comum lógicamente falando (Ou seja, vai surtir o mesmo efeito que se não o tivera), a única diferença é que ao invés da thread `main` executa-lo, vão ser diferentes threads, porém ainda sim da mesma maneira assincrona, em resumo, se esse bloco inteiro deve ser sincronizado, então não deveriamos estar aplicando paralelismo nele. Ou seja, devemos sincronizar apenas pontos especificos do código, como verificações de if's, atribuições em variáveis, ou qualquer outra funcionalidade que corre riscos de serem alterados por alguma thread enquanto a outra tenta acessar ou utilizar esse mesmo recurso. O que são classes Thread-Safe, são classes que possuem seus métodos sincronizados. Porém devemos nos atentar aos escopos no qual essas classes Thread-Safes estão sendo utilizadas, pois se esse escopo não for sincronizado também, não vai adiantar. Comunicação entre threads, também abordamos os métodos presentes em todas as classes pois eles são herdados extends de Object, os métodos `.wait()`, `.notify()` e `.notifyAll()` que são ferramentas para sincronização de threads e permitem que as threads cooperem entre si para executar tarefas de forma sincronizada e sem interferência, deixando elas em espera até que outras notifiquem indicando que elas podem continuar a executar. Um exemplo de utilidade famoso é a abordagem produto-consumidor aonde uma thread produtora cria objetos e notificam outras que são responsáveis por processar esses mesmos objetos (Em exemplo implementamos um sistema em que uma thread (produtora) é responsável por adicionar emails em uma pilha Stack lidos do usuário por uma janela gráfica, e quando ela adiciona ela faz a notificação para todas as threads (consumidoras) que são responsáveis por acessar essa mesma pilha e enviar esses emails, o sistema fica em looping, as threads responsáveis por enviar os emails ficam em estado de espera, até que o usuário digite um novo email, no qual será interceptado pela thread produtora que também está em estado de espera, após ler e adicionar na stack, a thread produtora notifica todas as threads consumidoras que estão em espera). Conceito de monitor de objetos e Objetos burros Lock.</li>
                                            <li><code className="-main-moduleTitleLi token_reservada">Threads - Concurrency (MultiThreads):</code> Aqui é abordado as formas de lidar com a concorrência das threads ao acessar o mesmo recurso (Thread-Safe) utilizando classes do pacote com esse mesmo namespace (java.util.concurrent), classes essas que já lidam internamente com a concorrência realizando as operações de sincronização ditas nos módulos anteriores, adicionando assim mais uma camada de abstração para facilitar a vida dos desenvolvedores. Abordamos as classes atômicas (AtomicInteger, AtomicLong, AtomicBoolean, AtomicReference) que possuem métodos atômicos, o conceito de "atômico" é por conta da maneira em que os blocos dos métodos delas são executados, eles executam atomicamente, isto é, de uma só vez, geralmente esses métodos são duas ou mais operações em uma, como por exemplo `.getAndIncrement()` das classes AtomicInteger e AtomicLong, ou seja, o equivalente ao `return i++` porém executado como se fosse as duas funcionalidades de uma só vez, deixando de correr o risco de outra thread modificar esse recurso (enquanto a outra thread utiliza ele) antes da outra finalizar sua tarefa. Configurando e Sincronizando manualmente blocos de código com a classe ReentrantLock (Uma das implementações da Interface Lock), definindo regras personalizadas para o bloqueio e desbloqueio desses escopos/recursos, maneira mais complexa do equivalente primitivo `synchronized`. Classe Condition que fornece métodos aos equivalentes (em alternativa para) `.wait()`, `.notify()` e `.notifyAll()` do primitivo `synchronized`, porém para os Locks configurados manualmente com ReentrentLock (Ou outras implementações da Interface Lock), sendo eles `objCondition.await()`, `objCondition.signal()` e `objCondition.signalAll()`. Abordamos também a implementação da Interface Lock especializado ReentrantReadWriteLock em Leituras simultâneas de threads porém bloqueio apenas para escritas, ou seja, enquanto um recurso não for acessado para escritas ele permanece liberado para TODAS as threads que forem realizar a leitura, bloqueando para TODOS apenas quando alguma thread acessa esse recurso no modo escrita, garantindo assim a consistência dos dados. Também abordamos algumas classes de coleções Thread-Safe como a CopyOnWriteArrayList que não utiliza sincronismo na implementação, porém ainda sim é seguro para usos em ambientes multiThreads devido a forma como é implementada em baixo nível, utilizando um array comum porém para cada inserção e/ou remoção é re-alocado um novo array e é mantido a coleção original (porisso é Thread-Safe), ou seja, não é muito performática se for realizar muitas inserções ou remoções, só é util para muitas leituras e poucas gravações. Também abordamos a classe ArrayBlockingQueue que é uma das implementação da Interface BlockingQueue, responsáveis por definir filas que suportam operações de bloqueio e desbloqueio, isso é possível de acordo com a capacidade inicial definida ao criar essa fila (Ou seja, devemos saber qual será o tamanho dela na hora da criação), pois de acordo com essa initial capacity a thread que está bloqueada (em espera waiting) identifica se pode acessar o recurso ou não, pois se a capacidade não foi atingida então é possivel adicionar mais elementos a essa fila, logo, a thread fica em espera até que libere espaço para ela entrar e adicionar mais elementos por exemplo. Também abordamos a classe LinkedTransferQueue que é uma das implementação da Interface TransferQueue (E reune métodos de 3 outras classes em uma sendo elas as classes ConcurrentLinkedQueue, SynchronousQueue e LinkedBlockingQueue) que é uma extensão da Interface BlockingQueue, que adiciona um método adicional chamado `transfer()` que permite que uma thread coloque um elemento na fila e bloqueie até que outro thread retire esse elemento da fila (O método `transfer()` é diferente do método `put()` da interface BlockingQueue, pois ele bloqueia a thread produtora até que o elemento seja retirado da fila por outra thread consumidora, enquanto o método `put()` bloqueia a thread produtora apenas quando a fila está cheia), Também explicamos as diferenças entre os métodos que realizam as mesmas operações de inserir e remover elementos porém com diferentes formas de bloqueio e desbloqueios, isso pois como são as junções das 3 classes ditas no inicio, vários métodos são aparentemente iguais porém com diferenças em relação ao sincronismo e bloqueio. Também abordamos as classes que abstraem as criações e gerenciamento de Threads sendo ele os Executors e ExecutorService facilitando essas operações, as threads gerenciadas por eles vão para o pool de threads, também podemos definir limites na quantidade de threads a serem criadas para executar alguma tarefa. Também abordamos a Interface ScheduledExecutorService que é uma extensão da Interface ExecutorService, especializada para agendamentos de tarefas que devem ser executadas em momentos especificos ou com intervalos regulares de tempos (De tempo em tempo), por se tratar de um escalonador de tarefas então possibilita a execução de tarefas em segundo plano enquanto continua a realizar outras tarefas. Também abordamos sobre a Interface Callable que é o equivalente da Interface Runnable, poŕem com retorno no final da sua execução, diferente da Runnable que o retorno é Void. Devido a essa funcionalidade do Callable sobre retornar valores no final da tarefa, a currentThread ficará em espera await até que a tarefa definida no Callable seja finalizada e retorne o resultado para ela dar continuidade (Obs: Sempre é bom definir um time out de espera para operações deste tipo, pois a currentThread ficará em espera await infinitamente até que o recurso esteja disponível, possibilitando DeadLocks). Devido ao ponto anterior, utilizamos a classe Future que é a promessa de um valor que será retornado em algum momento futuro, em operações com uso do Callable. Também abordamos o uso do CompletableFuture que é o equivalente do Future porém em contextos em que não queremos utilizar o pool de threads dos Executors em baixo nível e sim o ForkJoinPool que é mais performático em alguns casos devido a natureza de particionar/dividir para então conquistar. ForkJoinPool é uma funcionalidade introduzida no java 7, a principal diferença entre ela e o pool de threads comum é a forma como ela é implementada e resolve alguns problemas especificos relacionados quando uma operação em paralelo possuí dependências com passos anteriores, isto é, o maior problema quando se tenta paralelisar tarefas em que as operações futuras dependem de processamentos anteriores a este passo, como por exemplo o cálculo de Fibonacci, ele é um exemplo classo sobre esse problema quando se tenta paralelisar esses tipos de tarefas que dependem de processamentos anteriores ao passo corrente, pois para calcular o novo número é necessário (dependência) os dois números anteriores deste passo na iteração, ou seja, se desejamos paralelisar essa tarefa como resolver isso? não é possível várias threads executarem essa tarefa em paralelo pois elas precisam do processamento umas das outras. O ForkJoinPool é uma irmã da ThreadPoolExecutor porém é utilizada em funções recursivas que possuem flags indicativas sobre o final da iteração (Só assim é possível ela resolver o problema de Fibonacci anterior) pois é preciso saber esse valor limite para poder dividir corretamente a tarefa entre as threads e ao final de cada processamento fragmentado os resultados são re-arranjados no final (estilo map-reduce), porisso "Particionar para então conquistar", o objetivo é conseguir dividir um problema em tarefas menores e executá-las independentemente, sem uso de sincronização (synchronized).</li>
                                            <li><code className="-main-moduleTitleLi token_reservada">Design Patterns (Gang Of Four GoF):</code> Soluções prontas e reutilizáveis para problemas comuns na POO, propostas pelos 4 amigos (Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides) livro bem reconhecido pela comunidade Dev. (Obs: Não é abordado TODOS os Padrões pois são muitos 23 no Total).</li>
                                            <li><code className="-main-moduleTitleLi token_reservada">JDBC:</code> Plugando o Java com banco de dados, aonde o Java fornecendo Interfaces que as ORM's Implementam e faz essa conexão ocorrer, refletindo automáticamente as mudaças da aplicação no banco e devido a utilizar programação orientada a interface podemos facilmente alternar entre diversos banco de dados diferentes (MySQL, MariaDB, Oracle DB,  Microsoft SQL Server, PostgreSQL...)</li>
                                        </ul>
                                    </li>
                                    <li>
                                        {/* <h3 class="projects-subtitle">[Aulas 75 até 94]</h3> */}
                                        <h3 class="projects-subtitle">OverView geral sobre POO</h3>
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
                                        <h3 class="projects-subtitle">Errors, Exceptions, e RuntimeExceptions</h3>
                                        <ul className="projects-frontend--container">
                                            <li>Estrutura Hierárquica do fluxo de herança, Herdeiros de <code className="token_reservada">Exception</code> são <code className="token_reservada">Checked</code> e Herdeiros de <code className="token_reservada">RuntimeException</code> são <code className="token_reservada">Unchecked</code>, quando lançar <code className="token_reservada">throws</code> na assinatura e quando tratar em blocos <code className="token_reservada">try-catch</code>.</li>
                                            <li>Estrutura Hierarquica do fluxo de herança pois tudo no java é  <code className="token_reservada">Object</code>, logo, as exceções também possuem superClasses e subClasses (<code className="token_reservada">Checked</code> para herdeiros de <code className="token_reservada">Exception</code> e <code className="token_reservada">Unchecked</code> para herdeiros de <code className="token_reservada">RuntimeException</code>).</li>
                                            <li>Todos são herdeiros de <code className="token_reservada">Throwable</code> que é a raiz da hierarquia de exceções, porisso é possível lançar, porém existem diferenças nos tipos de exceções e a forma como é tratado (<code className="token_reservada">Error</code>, <code className="token_reservada">Exception</code> (<code className="token_reservada">Checked</code>) e <code className="token_reservada">RuntimeException</code> (<code className="token_reservada">Unchecked</code>)).</li>
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
                                            <li>Dica sobre o ponto acima: Análisar qual é o nível de privacidade do <code className="token_reservada">modificador de acesso</code> deste método que lança, quanto mais ABERTO (Exemplo: <code className="token_reservada">public</code>) ele for quer dizer que vários outros irão utiliza-lo, logo, é ideal DELEGAR esse tratamento para eles.</li>
                                            <li>Tratamento em mão dupla, tratando com <code className="token_reservada">try-catch</code> no fluxo regular corrente de execução e re-lançando a <code className="token_reservada">Exception</code> para o chamador: Podemos também capturar a <code className="token_reservada">Exception</code> lançada em blocos <code className="token_reservada">try-catch</code> e mesmo assim DELEGAR esse mesmo tratamento para quem está chamando também, definindo <code className="token_reservada">throws</code> na assinatura do método e retornando o objeto da <code className="token_reservada">Exception</code> (<code className="token_reservada">`ex`</code>) no bloco <code className="token_reservada">catch</code> (Neste caso, não será necessário utilizar <code className="token_reservada">new</code> pois o objeto já existe neste ponto e está vindo no argumento do <code className="token_reservada">catch(Exception ex)</code>, a não ser que deseja lançar outro tipo de <code className="token_reservada">Exception</code>, neste caso é necessário criar o objeto com <code className="token_reservada">new</code>).</li>
                                            <li>Blocos <code className="token_reservada">try-catch-finally</code> para quando desejamos sempre executar algum bloco de lógica, independentemente se ocorrer lançamentos ou não (Definindo essa lógica que sempre será executada no bloco <code className="token_reservada">finally</code>).</li>
                                            <li>Capturando múltiplas exceções com uso de <code className="token_reservada">Sobrecarga de catchs</code> para tratamentos, sempre começando a tratar as Exceções mais Especializadas e por final a mais Genérica, pois se inverter ele sempre irá executar a mais Genérica devido ao polimorfismo e irá simplismente ignorar as outras, ou seja, nunca seram executados.</li>
                                            <li><code className="token_reservada">Múltiplos catch em linha</code> (utilizando pipe <code className="token_reservada">`|`</code> como separador no parâmetro do <code className="token_reservada">catch(BlablaException | WubalubaException | DubDubException ex)&#123;&#125;</code>) serve APENAS para Exceções com fluxo de herança diferentes entre sí (Devido ao polimorfismo), NÃO é possível nem se colocado o parâmetro na ordem do mais Especializado para o mais Genérico! Sintaxe diferente para a mesma ação anterior, porém apenas para Exceções com fluxo de herança diferentes entre sí e para todos o tratamento é o MESMO (Já que para todos irão executar esse mesmo bloco <code className="token_reservada">catch</code>), essa sintaxe torna o código mais legível e coeso em alguns casos.</li>
                                            <li>Ao utilizar <code className="token_reservada">mútiplos catch em linha</code> a variável de referência <code className="token_reservada">`ex`</code> (<code className="token_reservada">catch(BlablaException | WubalubaException | DubDubException ex)</code>) passada no argumento do <code className="token_reservada">catch</code> por segurança é <code className="token_reservada">final</code>, não sendo possível atribuir um novo objeto para ela (Nem mesmo se for algum dos tipos de <code className="token_reservada">Exception</code>'s sobrecarregados em linha com o <code className="token_reservada">`|`</code> no argumento do <code className="token_reservada">catch</code>).</li>
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
                                        <h3 class="projects-subtitle">Wrappers dos Tipos Primitivos</h3>
                                        <ul className="projects-frontend--container">
                                            <li>Encapsula os <code className="token_reservada">Tipos Primitivos</code> em objetos para contextos que esperam eles alocando memória e tratando eles como se fossem objetos (Devido a isso, altera o comportamento de <code className="token_reservada">passagem por valor</code> dos Primitivos para <code className="token_reservada">passagem por referência</code> dos objetos).</li>
                                            <li>Fornece funcionalidades/métodos estáticos prontos especializado para cada tipo primitivo (Utilitário).</li>
                                            <br/>
                                            <li><code className="token_reservada">Byte</code>: Objeto Wrapper para Tipo Primitivo int (8bits).</li>
                                            <li><code className="token_reservada">Short</code>: Objeto Wrapper para Tipo Primitivo int (16bits).</li>
                                            <li><code className="token_reservada">Integer</code>: Objeto Wrapper para Tipo Primitivo int (32bits).</li>
                                            <li><code className="token_reservada">Long</code>: Objeto Wrapper para Tipo Primitivo long (64bits).</li>
                                            <li><code className="token_reservada">Float</code>: Objeto Wrapper para Tipo Primitivo float (32bits).</li>
                                            <li><code className="token_reservada">Double</code>: Objeto Wrapper para Tipo Primitivo double (64bits).</li>
                                            <li><code className="token_reservada">Character</code>: Objeto Wrapper para Tipo Primitivo char.</li>
                                            <li><code className="token_reservada">Boolean</code>: Objeto Wrapper para Tipo Primitivo boolean.</li>
                                            <br/>
                                            <li>Muito utilizado com <code className="token_reservada">Listas</code> ou <code className="token_reservada">Coleções</code> em geral pois as mesmas utilizam a <code className="token_reservada">referência do objeto</code>, logo, não é possível criar elas para os <code className="token_reservada">Tipos Primitivos</code> (Já que os mesmos não possuem referência), então a solução é criar <code className="token_reservada">Listas</code> ou <code className="token_reservada">Coleções</code> para os <code className="token_reservada">Objetos Wrappers</code>.</li>
                                            <li>Além das listas, também é bem utilizado em cenários de concorrência <code className="token_reservada">concurrency</code> (MultiThreads) aonde para sincronizar com o token <code className="token_reservada">synchronized</code> só é possível em objetos, dentre outros contextos.</li>
                                            <li>A regra do polimorfismo também se aplica a eles.</li>
                                            <br/>
                                            <li><code className="token_reservada">Boxing/AutoBoxing</code>: Processo no qual a JVM encapsula o valor do <code className="token_reservada">Tipo Primitivo</code> em um objeto <code className="token_reservada">Wrapper</code> (Alocando memória, assim temos a referência e o valor em sí) Exemplo: <code className="token_reservada">Integer intW = 10;</code>.</li>
                                            <li><code className="token_reservada">Unboxing/AutoUnboxing</code>: Processo inverso, no qual a JVM desencapsula o <code className="token_reservada">Tipo Primitivo</code> retirando o valor encapsulado no objeto <code className="token_reservada">Wrapper</code>, ou seja, processo INVERSO do anterior (Removendo a referência e re-alocando o valor em uma <code className="token_reservada">variável primitiva</code> comum) Exemplo: <code className="token_reservada">int intP = intW;</code>.</li>
                                            <br/>
                                            <li>É importante conhecer essa ação do Java implementado na JVM sobre os <code className="token_reservada">Wrappers</code>, pois em alguns cenários aonde realizamos operações de múltiplas iterações com somas e etc utilizando os objetos <code className="token_reservada">Wrappers</code>, esse processo pode ser computacionalmente CUSTOSO em relação ao desempenho pois a cada iteração a JVM aloca e desaloca memória, para encapsular e desencapsular o valor do primitivo, além disto, também devemos considerar o custo computacional de outros processamentos necessários para a construção de objetos. Ou seja, utilizar sempre que possível os <code className="token_reservada">Tipos Primitivos</code> comuns em contextos que não exigem objetos.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        {/* <h3 class="projects-subtitle">[Aulas 108 até 111]</h3> */}
                                        <h3 class="projects-subtitle">Strings</h3>
                                        <ul className="projects-frontend--container">
                                            <li>Não são consideradas <code className="token_reservada">Wrappers</code> pois elas já são objetos normalmente e não existe <code className="token_reservada">Tipo Primitivo</code> para elas (Como ocorre em linguagens de mais alto nível como python por exemplo).</li>
                                            <li><code className="token_reservada">Strings literais</code> (<code className="token_reservada">String b = "Wubalubadubdub";</code>) no Java são objetos Imutáveis devido ao <code className="token_reservada">Pool de Strings constantes</code>.</li>
                                            <li><code className="token_reservada">Strings constants pool</code> é uma técnica que a JVM faz para otimizar recursos de armazenamento quando trabalhamos com <code className="token_reservada">Strings literais</code>. (Implementação baseada em <code className="token_reservada">String Interning</code> que é uma técnica na computação para armazenar apenas uma cópia de cada valor de string distinto), vídeo aula com explicação mais completa: <a className="-linkBoldYellowProjects" href="https://www.youtube.com/watch?v=vH7izlkNewI&list=PL62G310vn6nFIsOCC0H-C2infYgwm8SWW&index=109" target="_blank">Clique AQUI!</a></li>
                                            <li>A JVM implementa o conceito acima compartilhando as palavras entre toda aplicação, alocando memória no pool apenas para palavras novas, porisso é necessário a Imutabilidade delas já que esses valores do pool em memória seram compartilhados entre todas as referências da aplicação que apontam para a mesma <code className="token_reservada">Strings literal</code>, essa regra <code className="token_reservada">NÃO</code> se aplica para as <code className="token_reservada">Strings</code> alocados manualmente com <code className="token_reservada">new</code>.</li>
                                            <li>Ou seja, antes dele alocar memória para a palavra, ele verifica no <code className="token_reservada">pool de Strings constantes</code> se ela já existe evitando assim duplicatas (<code className="token_reservada">DISTINCT</code>).</li>
                                            <li>PORÉM essa implementação acaba atrapalhando alguns cenários em que é realizado muitas Iterações com concatenação, devido a JVM alocar memória no <code className="token_reservada">pool de Strings constantes</code> para CADA palavra diferente, logo, a cada iteração será alocado memória no pool. (Mais explicações no TXT de estudos), vídeo aula com explicação mais completa: <a className="-linkBoldYellowProjects" href="https://www.youtube.com/watch?v=5hfftQx_S8Q&list=PL62G310vn6nFIsOCC0H-C2infYgwm8SWW&index=110&pp=iAQB" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">StringBuilder</code> e <code className="token_reservada">StringBuffer</code> (Chegam para corrigir o problema de cima, e outros cenários que visam performance em Iterações), pois eles manipulam diretamente a memória alocada inicialmente, e não utiliza o <code className="token_reservada">pool de Strings constantes</code> que fica alocando espaço para cada palavra diferente.</li>
                                            <li>A Diferença deles é que o <code className="token_reservada">StringBuffer</code> é desenhado para cenários de <code className="token_reservada">MultiThreads</code> e Concorrência <code className="token_reservada">Concurrency</code>.</li>
                                            <li>Se atentar ao tipo de retorno se utilizado essas classes (<code className="token_reservada">StringBuilder</code> e <code className="token_reservada">StringBuffer</code>) ou outras, quando o tipo de retorno é diferente do objeto manipulado em memória em sí, quer dizer que a lógica não está alterando o valor real em memória e sim apenas esse retorno em questão.</li>
                                            <li>Sobre o ponto acima neste contexto, quando utilizamos um <code className="token_reservada">StringBuilder</code> e algum método está retornando uma <code className="token_reservada">String</code> comum, isso quer dizer que a lógica só está sendo aplicada no retorno, e não está alterando o valor real em memória do objeto. (<code className="token_reservada">objBuilderOrBuffer.reverse()</code> retorna um <code className="token_reservada">StringBuilder</code>, logo altera o valor real em memória, já <code className="token_reservada">.subString(startIndex, endIndex)</code> retorna uma <code className="token_reservada">String</code> comum, logo NÃO está alterando o valor real em memória, está apenas aplicando a lógica no retorno).</li>
                                            <li>Métodos utilitários prontos para manipulação de <code className="token_reservada">Strings</code> (<code className="token_reservada">.replace(thisValue, fromThisValue)</code>, <code className="token_reservada">.substring(startIndex, endIndex)</code>, <code className="token_reservada">.trim()</code>, <code className="token_reservada">.charAt()</code>, <code className="token_reservada">.toUpperCase()</code>, e etc).</li>
                                            <br/>
                                            <li>Obs sobre o método <code className="token_reservada">.replace(thisValue, fromThisValue)</code>: Diferente do Javascript que substitui apenas a primeira ocorrência, no Java TODAS as ocorrências são substituidas.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        {/* <h3 class="projects-subtitle">[Aulas 112 até 129]</h3> */}
                                        <h3 class="projects-subtitle">Manipulação de Data e Hora</h3>
                                        <ul className="projects-frontend--container">
                                            <li><code className="token_reservada">Maneira Legada</code> (<code className="token_reservada">Date</code> e <code className="token_reservada">Calendar</code> do pacote <code className="token_reservada">java.util</code>) porém tem problemas de <code className="token_reservada">Internacionalização</code> e Limitações nas possibilidades de representações, mais informações sobre <code className="token_reservada">Internacionalização</code> na seção logo abaixo desta!</li>
                                            <li>Muitos sistemas ainda utilizam elas! Não é uma boa prática apartir do Java 8.</li>
                                            <br/>
                                            <li>Principais Classes <code className="token_reservada">Temporais</code> deste pacote <code className="token_reservada">legado</code>:</li>
                                            <li><code className="token_reservada">Date</code>: Representado em baixo nível por um <code className="token_reservada">long</code> que representa os milissegundos de 01/01/1970 com limitação até 17/08/292278994 04:12 (valor máximo de um <code className="token_reservada">long</code>), mais informações sobre <code className="token_reservada">Date</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula112Date.java" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">Calendar</code>: Devido ao problema inicial de Internacionalização é criado a classe <code className="token_reservada">Calendar</code> (Abstrata, ou seja, é necessário uso do método <code className="token_reservada">builder</code> estático para sua criação, o mesmo faz verificações de origem da JVM para obter datas corretas (Internacionalização), ou podemos alterar esse comportamento padrão passando na <code className="token_reservada">sobrecarga do construtor</code> um objeto <code className="token_reservada">Locale</code>), mais informações sobre <code className="token_reservada">Calendar</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula113Calendar.java" target="_blank">Clique AQUI!</a></li>
                                            <li>Utiliza em baixo nível o mesmo <code className="token_reservada">long</code> do <code className="token_reservada">Date</code> para representar a data (sendo os mesmos milissegundos de 01/01/1970 com limitação até 17/08/292278994 04:12).</li>
                                            <li>É concretizada/implementada por 3 classes no Java 17: <code className="token_reservada">BuddhistCalendar</code>, <code className="token_reservada">GregorianCalendar</code> e <code className="token_reservada">JapaneseImperialCalendar</code>.</li>
                                            <br/>
                                            <li>Principais Classes <code className="token_reservada">Utilitárias</code> deste pacote <code className="token_reservada">legado</code>:</li>
                                            <li><code className="token_reservada">DateFormat</code>: Surge devido a este tipo de representação em baixo nível utilizando <code className="token_reservada">long</code> ser inviável na visualização e compreensão humana, uma vez que as representações são números enormes que parecem não fazer sentido para quem não conhece, podemos utilizar a classe <code className="token_reservada">DateFormat</code> para melhorar na visibilidade humana formatando e adicionando uma camada de mais alto nível nesses milissegundos, e representando eles em <code className="token_reservada">Strings</code> com máscaras de Datas simples "22/12/1999" ou também máscaras escrito por extenso "quarta feira, 22 de dezembro de 1999" (equivalente do argumento <code className="token_reservada">`-h`</code> que significa "Human", ou também <code className="token_reservada">`--human-readable`</code> dos programas executados pelo terminal shell de Sistemas Operacionais Unix-Like, ou seja, melhora para a visualização humana tornando os resultados dos processamentos na saída do <code className="token_reservada">stdout</code> mais legível), mais informações sobre <code className="token_reservada">DateFormat</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula114DateFormat.java" target="_blank">Clique AQUI!</a></li>
                                            <li>Para armazenar em <code className="token_reservada">banco de dados</code> podemos utilizar a mesma abordagem de cima, porém deve-se definir um padrão da máscara suportado pelo banco (Para o DB MySQL: "yyyy-mm-dd").</li>
                                            <li>As conversões do valor <code className="token_reservada">long</code> em baixo nível para <code className="token_reservada">Strings</code> em alto nível que converte e adiciona máscara de Datas melhorando na compreensão humana, seguem a mesma convenção sobre <code className="token_reservada">parsings</code> em geral para várias outras classes da <code className="token_reservada">API Nativa do Java</code>: Regra sobre <code className="token_reservada">.format()</code> que recebe um objeto e retorna/converte em uma <code className="token_reservada">String</code>, e <code className="token_reservada">.parse()</code> que recebe uma <code className="token_reservada">String</code> e retorna/converte em um objeto (Mais explicações sobre esses <code className="token_reservada">parsings</code> e <code className="token_reservada">formats</code> logo abaixo na classe <code className="token_reservada">DateTimeFormatter</code>).</li>
                                            <li><code className="token_reservada">DateFormat</code> em conjunto com <code className="token_reservada">Locale</code> para <code className="token_reservada">Internacionalização</code>: Podemos também polimorfisar as formatações dos objetos <code className="token_reservada">Temporal</code> utilizando uma instância do <code className="token_reservada">Locale</code> de acordo com a origem desejada, traduzindo assim as datas no padrão de máscara correspondentes aos formatos adotados pelos diferentes paises, ou também traduzir a máscara escrito por extenso "quarta feira, 22 de dezembro de 1999" para a linguagem equivalente ao <code className="token_reservada">Locale</code> (Exemplo de saída utilizando a formatação para a instância de <code className="token_reservada">Locale.JAPANESE</code>: "1999年12月22日水曜日"). A mesma regra serve para outras Classes que possuem representações de máscaras ou padrões diferentes entre os paises como valores de moedas e etc, mais informações sobre <code className="token_reservada">Internacionalização</code> na seção logo abaixo desta!</li>
                                            <br/>
                                            <li><code className="token_reservada">Locale</code>: é o objeto que representa a Origem/Localidade da JVM, ou seja, podemos utilizar o polimorfismo aqui para alterar diversos comportamentos de diversas Classes visando a <code className="token_reservada">Internacionalização</code>, mais informações sobre <code className="token_reservada">Locale</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula115Locale_Internacionalizacao.java" target="_blank">Clique AQUI!</a></li>
                                            <br/>
                                            <li><code className="token_reservada">Internacionalização de Datas</code> com <code className="token_reservada">Locale</code>: Polimorfisando o sistema e alterando o formato da máscara e etc dos objetos <code className="token_reservada">Temporais</code> (Data-Hora) de acordo com o padrão dos paises com o <code className="token_reservada">Locale</code>, mais informações: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/C_formatacao/Aula115Locale_Internacionalizacao.java" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">Internacionalização de Números</code> com <code className="token_reservada">Locale</code> e <code className="token_reservada">NumberFormat.getInstance(Locale.JAPAN)</code>: Polimorfisando o sistema e alterando o formato da máscara que representa os números aonde os separadores de milhares e etc é diferentes para cada pais ("1,200", "1.200,00"...), mais informações: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/C_formatacao/Aula116NumberFormat_Number_Locale.java" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">Internacionalização de Moedas</code> com <code className="token_reservada">Locale</code> e <code className="token_reservada">NumberFormat.getCurrencyInstance(Locale.ITALY)</code>: Polimorfisando o sistema e alterando o formato da máscara que representa as moedas aonde os separadores de milhares, simbolo da moeda e etc também são diferentes para cada pais ("$10,000.21", "￥10,000", "10.000,21 €"...), (Obs IMPORTANTE: A internacionalização das moedas utilizando esse processo aqui descrito NÃO faz conversões de câmbio (câmbio de moeda, ou também taxa de câmbio) entre elas, apenas adéqua a máscara (Separadores de milhares e etc ",", ".") e símbolos (R$, U$, ￥)), mais informações: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/C_formatacao/Aula117NumberFormat_Coin_Locale.java" target="_blank">Clique AQUI!</a></li>
                                            <br/>
                                            <li><code className="token_reservada">SimpleDateFormat</code>: Mesmo contexto da <code className="token_reservada">DateFormat</code> porém podemos definir um padrão de máscara personalizado por nós (Mesma regra sobre <code className="token_reservada">.format()</code> que recebe um objeto e retorna/converte em uma <code className="token_reservada">String</code>, e <code className="token_reservada">.parse()</code> que recebe uma <code className="token_reservada">String</code> e retorna/converte em um objeto, mais explicações sobre esses <code className="token_reservada">parsings</code> e <code className="token_reservada">formats</code> logo abaixo na classe <code className="token_reservada">DateTimeFormatter</code>), mais informações sobre <code className="token_reservada">SimpleDateFormat</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula118SimpleDateFormat.java" target="_blank">Clique AQUI!</a></li>
                                            <li>Porisso devemos nos atentar as possíveis lançadas de <code className="token_reservada">RuntimeExceptions</code> por criar um padrão de máscara e na hora de converter passar um padrão diferente deste criado anteriormente.</li>
                                            <br/>
                                            <br/>
                                            <li><code className="token_reservada">Maneira Nova</code>: Com esses problemas de Limitações nas representações (<code className="token_reservada">long</code>) possíveis e problemas de Internacionalização apartir do Java 8 é adicionado um pacote completo especializado em datas <code className="token_reservada">java.time</code> (Criado por um Brasileiro e adotado pelo Java).</li>
                                            <li>Os novos objetos <code className="token_reservada">Temporais</code> descritos abaixo são <code className="token_reservada">Imutáveis</code> e também são representados em baixo nível pelos milissegundos, portanto também devemos formatar eles para melhorar na visualização humana, porém desta vez suportando até "+999999999-12-31" e "-999999999-01-01".</li>
                                            <br/>
                                            <li>Principais Classes <code className="token_reservada">Temporais</code> do novo pacote:</li>
                                            <li><code className="token_reservada">LocalDate</code>: Utilizada para representar datas simples "22/12/1999" substituindo <code className="token_reservada">Date</code> e <code className="token_reservada">Calendar</code> (Saída do <code className="token_reservada">.toString()</code>: "1999-12-22"), mais informações sobre <code className="token_reservada">LocalDate</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula119LocalDate.java" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">LocalTime</code>: Utilizada para representar tempos "horas:minutos:segundos:milissegundos" (Saída do <code className="token_reservada">.toString()</code>: "08:30:00"), mais informações sobre <code className="token_reservada">LocalTime</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula120LocalTime.java" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">LocalDateTime</code>: Utilizada para representar as duas anteriores, mais completas compostas por data e tempo, contendo todas as funcionalidades das duas classes anteriores em uma, sendo assim "yyyy-MM-ddThoras:minutos:segundos.milissegundos" (Saída do <code className="token_reservada">.toString()</code>: "2022-12-07T23:39:20.813999247"), mais informações sobre <code className="token_reservada">LocalDateTime</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula121LocalDateTime.java" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">Instant</code>: Utilizada para representar nano segundos (de 01/01/1970 até 17/08/292278994 04:12), ou seja, a menor unidade/medida de tempo suportada pelo computador, representa um ponto instantâneo dentro de uma linha temporal. A Saída do <code className="token_reservada">.toString()</code> ("2022-12-09T00:20:37.073909679Z") dele é a mesma que do <code className="token_reservada">LocalDateTime</code> porém com um <code className="token_reservada">`Z`</code> no final de <code className="token_reservada">Zulu time (UTC)</code>, mais informações sobre <code className="token_reservada">Instant</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/B_time/Aula122Instant_NanoSeconds.java" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">Zulu time (UTC)</code> é um fuso horário universal, ou seja, quando queremos o horário correto basta converter "Zulu time to brazil" e etc...</li>
                                            <li><code className="token_reservada">Instant</code>: Utiliza 2 variáveis para representar <code className="token_reservada">Nano</code> e <code className="token_reservada">EpochSeconds</code>.</li>
                                            <br/>
                                            <li>Principais Classes <code className="token_reservada">Utilitárias</code> do novo pacote:</li>
                                            <li><code className="token_reservada">Duration</code>: Classe utilitária para pegar intervalos entre <code className="token_reservada">datas e horas ou APENAS horas</code>, NÃO sendo possível utilizar em datas simples "22/12/1999" (<code className="token_reservada">Compatível: Time or DateTime</code>). Exemplo de classes compatíveis: <code className="token_reservada">LocalDateTime</code>, <code className="token_reservada">LocalTime</code> e <code className="token_reservada">Instant</code>, mais informações sobre <code className="token_reservada">Duration</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/B_time/Aula123Duration_Intervalos_Utils.java" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">Period</code>: Classe utilitária com mesmo contexto da anterior, porém para pegar intervalos entre <code className="token_reservada">datas simples</code> "22/12/1999" solução para a limitação da anterior (<code className="token_reservada">Compatível: Date</code>). Exemplo de classes compatíveis: <code className="token_reservada">LocalDate</code>, mais informações sobre <code className="token_reservada">Period</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula124Period_IntervalosDate_Utils.java" target="_blank">Clique AQUI!</a></li>
                                            <br/>
                                            <li><code className="token_reservada">ChronoUnit</code>: Tudo que é co-relacionado a datas, horas, minutos, segundos, milissegundos e nano segundos utiliza <code className="token_reservada">ChronoUnit</code>, que seria tipo a "tipagem" desses tempos, logo, bastante métodos deste contexto utilizam eles como parâmetro e também temos métodos utilitários para cada tipo dessas unidades de tempo. (Exemplo de uso: Periodo entre dias <code className="token_reservada">ChronoUnit.DAY.beetween(talDia, talDia);</code>, mais informações sobre <code className="token_reservada">ChronoUnit</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula125ChronoUnit_Utils.java" target="_blank">Clique AQUI!</a></li>
                                            <br/>
                                            <li><code className="token_reservada">TemporalAdjusters (Classe)</code>: Existe uma Classe estática e também uma Interface, ou seja, 100% utilitária para ajustar objetos do tipo <code className="token_reservada">Temporal</code>, como <code className="token_reservada">LocalDate</code>, <code className="token_reservada">LocalTime</code> e <code className="token_reservada">LocalDateTime</code>. Ela fornece métodos estáticos para realizar ajustes em datas e horários, mais detalhes sobre <code className="token_reservada">TemporalAdjusters</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula126TemporalAdjusters_Utils.java" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">TemporalAdjusters (Interface)</code>: A Interface é polimorfica, utilizada como parâmetro de várias classes relacionadas ao tempo, podemos assim sobrecrever <code className="token_reservada">@Override</code> o método <code className="token_reservada">public Temporal adjustInto(Temporal temporal)</code> para personalizar regras de negócios, mais detalhes sobre as possibilidades de implementações em <code className="token_reservada">src</code> de treino no repositório git (Exemplo: Pegando o próximo dia útil, considerando de segunda até quinta): <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula127TemporalAdjuster_Impl_ExeComWith.java" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">TemporalAdjusters (Classe)</code>: Obs: A diferença entre <code className="token_reservada">.with()</code> e <code className="token_reservada">.plusDays()</code> é que o <code className="token_reservada">.with()</code> altera sobrescrevendo a data (Equivalente ao <code className="token_reservada">`=`</code>), já o <code className="token_reservada">.plusDays()</code> faz a adição nele (Equivalente ao <code className="token_reservada">`+=`</code>).</li>
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
                                            <li><code className="token_reservada">ZoneOffSet</code>: É aonde demonstra as diferenças de horários em sí (Encapsulando em apenas isto), ou seja, não demonstra a <code className="token_reservada">ZoneId</code>.</li>
                                            <li><code className="token_reservada">OffSetDateTime</code>: É a classe que faz o <code className="token_reservada">parsing</code> entre as diferenças e ai podemos visualizar em formato de data.</li>
                                            <br/>
                                            <li>Em resumo uma representação de uma data completa seria composta por: <code className="token_reservada">Data/THora:Minuto:Segundo.Milissegundos/+OffSet/[Zona]</code> ("2022-12-26T19:45:19.447985416+09:00[Asia/Tokyo]").</li>
                                            <br/>
                                            <li><code className="token_reservada">DateTimeFormatter</code>: Classe utilitária com o mesmo contexto da <code className="token_reservada">DateFormat</code> legada (do pacote <code className="token_reservada">java.util</code>) porém a diferença é que ela é mais moderna do novo pacote especializado para manipulação dos objetos <code className="token_reservada">Temporal</code> (<code className="token_reservada">java.time</code>) e <code className="token_reservada">Thread-Safe</code> para ambientes de paralelismo e concorrência <code className="token_reservada">concurrency</code>, diferente da <code className="token_reservada">DateFormat</code> do pacote legado que é <code className="token_reservada">Não Thread-Safe</code>. Utilizada como parâmetro nos métodos das classes de Data e Hora para formatar e alterar os padrões de representação delas (Podemos representar com números "dd/mm/yyyy", também podemos representar escrito por extenso "22 de dezembro de 1999", dentre outros...) além de outras formatações mais complexas com <code className="token_reservada">DateTimeFormatterBuilder</code>, mais informações sobre <code className="token_reservada">DateTimeFormatter</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula129DateTimeFormatter_Utils.java" target="_blank">Clique AQUI!</a></li>
                                            <br/>
                                            <li>Regra sobre <code className="token_reservada">parsings</code> e <code className="token_reservada">formats</code> (Válido para várias classes do Java): Convertendo apartir de um objeto <code className="token_reservada">Temporal</code> de data ou tempo (Cuja representação em baixo nível é o <code className="token_reservada">long</code> dos milissegundos computacionalmente entendível, porém humanamente estranho) em uma <code className="token_reservada">String</code> que adiciona uma camada de mais alto nível de representação convertendo esses milissegundos do <code className="token_reservada">long</code> em datas e tempo humanamente entendível de acordo com a máscara de formatação desejada, e convertendo/retornando apartir desta mesma <code className="token_reservada">String</code> gerada anteriormente em um objeto <code className="token_reservada">Temporal</code> de data ou tempo, e vise versa: Devemos nos atentar ao utilizar esses dois métodos devido a representação em baixo nível ser o <code className="token_reservada">long</code> a JVM precisa saber qual é o padrão de máscara utilizado na representação em alto nível da <code className="token_reservada">String</code> que está sendo parseada para saber lidar e converter corretamente essa <code className="token_reservada">String</code> em um dos objetos <code className="token_reservada">Temporais</code>, ou seja, para conseguirmos realizar a operação de <code className="token_reservada">parsing</code> desta <code className="token_reservada">String</code> em um dos objetos <code className="token_reservada">Temporais</code> devemos utilizar o mesmo padrão de máscara que foi utilizado para dar origem a essa <code className="token_reservada">String</code> na sobrecarga do método estático <code className="token_reservada">.parse()</code> das classes <code className="token_reservada">Temporais</code>, se não um <code className="token_reservada">DateTimeParseException</code> será lançado.</li>
                                            <li>Exemplo no estilo <code className="token_reservada">Show me the code</code> para melhor entender o ponto acima: </li>
                                            <li><code className="token_reservada">LocalDate nowLocalDate = LocalDate.now();</code> Cria o objeto temporal para datas simples "2023-06-23"</li>
                                            <li><code className="token_reservada">String format = nowLocalDate.format(DateTimeFormatter.BASIC_ISO_DATE);</code> Formata ela adicionando a camada de mais alto nível "20230623"</li>
                                            <li><code className="token_reservada">LocalDate parse = LocalDate.parse(format, DateTimeFormatter.BASIC_ISO_DATE);</code> Utiliza a mesma máscara do padrão que deu origem a String anteriormente "2023-06-23"</li>
                                            <li>Observe que foi necessário utilizar a sobrecarga do método estático <code className="token_reservada">.parse()</code> indicando qual foi o padrão utilizado para dar origem a essa <code className="token_reservada">String</code> em questão pois se não o tivesse passado também como argumento a JVM iria aplicar a lógica utilizando a máscara padrão "2023-06-23" porém o valor real é <code className="token_reservada">BASIC_ISO_DATE</code> que remove os <code className="token_reservada">`-`</code> deixando assim no final "20230623".</li>
                                            <li><code className="token_reservada">LEMBRANDO</code> que a saída no console para os objetos executa implicitamente o método <code className="token_reservada">.toString()</code> porisso temos a primeira representação "2023-06-23" para o <code className="token_reservada">LocalDate</code>, exatamente porisso ocorre a <code className="token_reservada">DateTimeParseException</code> se não passar na sobrecarga do método estático <code className="token_reservada">.parse()</code> o argumento informando o padrão de máscara que deu origem a <code className="token_reservada">String</code> em questão, pois ele iria utilizar o <code className="token_reservada">default</code> que é exatamente a mesma lógica de máscara aplicada no método <code className="token_reservada">.toString()</code>.</li>
                                            <br/>
                                            <li>Também é possível definir um padrão personalizado por nós, utilizando o método estático <code className="token_reservada">DateTimeFormatter.ofPattern("dd/MM/yyyy");</code> e passá-lo no método <code className="token_reservada">.format()</code>.</li>
                                            <li>Sobre o ponto acima, segue a mesma regra sobre <code className="token_reservada">parsings</code> e <code className="token_reservada">formats</code>, aonde para o <code className="token_reservada">.parse()</code> funcionar basta passar essa mesma instância do padrão de máscara <code className="token_reservada">Pattern</code> personalizado dito acima como segundo argumento na sobrecarga do método estático, sendo assim: <code className="token_reservada">LocalDate.parse("22/12/1999", DateTimeFormatter.ofPattern("dd/MM/yyyy"));</code> Observe que ambas as máscaras estão linearmente consistentes entre sí.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        {/* <h3 class="projects-subtitle">[Aulas 108 até 111]</h3> */}
                                        <h3 class="projects-subtitle">Internacionalização</h3>
                                        <ul className="projects-frontend--container">
                                            <li>Internacionalizar é polimorfisar o sistema de acordo com o <code className="token_reservada">Locale</code> (Região/Origem), adequando o sistema para diversos paises utilizando a mesma implementação, bastando alterar a instância do objeto <code className="token_reservada">Locale</code> para oferecer suporte a outros paises/origem.</li>
                                            <li><code className="token_reservada">Locale</code>: é o objeto que representa a Origem/Localidade da JVM, ou seja, podemos utilizar o polimorfismo aqui para alterar diversos comportamentos de diversas Classes visando a Internacionalização, mais informações sobre <code className="token_reservada">Locale</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula115Locale_Internacionalizacao.java" target="_blank">Clique AQUI!</a></li>
                                            <br/>
                                            <li><code className="token_reservada">Internacionalização de Datas</code> com <code className="token_reservada">Locale</code>: Polimorfisando o sistema e alterando o formato da máscara e etc dos objetos <code className="token_reservada">Temporais</code> (Data-Hora) de acordo com o padrão dos paises com o <code className="token_reservada">Locale</code>, mais informações: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/C_formatacao/Aula115Locale_Internacionalizacao.java" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">Internacionalização de Números</code> com <code className="token_reservada">Locale</code> e <code className="token_reservada">NumberFormat.getInstance(Locale.JAPAN)</code>: Polimorfisando o sistema e alterando o formato da máscara que representa os números aonde os separadores de milhares e etc é diferentes para cada pais ("1,200", "1.200,00"...), mais informações: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/C_formatacao/Aula116NumberFormat_Number_Locale.java" target="_blank">Clique AQUI!</a></li>
                                            <li><code className="token_reservada">Internacionalização de Moedas</code> com <code className="token_reservada">Locale</code> e <code className="token_reservada">NumberFormat.getCurrencyInstance(Locale.ITALY)</code>: Polimorfisando o sistema e alterando o formato da máscara que representa as moedas aonde os separadores de milhares, simbolo da moeda e etc também são diferentes para cada pais ("$10,000.21", "￥10,000", "10.000,21 €"), (Obs IMPORTANTE: A internacionalização das moedas utilizando esse processo aqui descrito NÃO faz conversões de câmbio (câmbio de moeda, ou também taxa de câmbio) entre elas, apenas adéqua a máscara (Separadores de milhares e etc ",", ".") e símbolos (R$, U$, ￥)), mais informações: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/C_formatacao/Aula117NumberFormat_Coin_Locale.java" target="_blank">Clique AQUI!</a></li>
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
                                        <h3 class="projects-subtitle">Regex</h3>
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
                                            <li><code className="token_reservada">Scanner</code>: <code className="token_reservada">NÃO</code> é uma classe relacionada a <code className="token_reservada">regex</code>, mas podemos utilizar ela em conjunto e realizar algumas operações interessantes (Ela vai além de escanear as entradas do usuário pelo console com <code className="token_reservada">Scanner scan = new Scanner(System.in);</code> rsrs), utilizamos ela também para iterar em arquivos textos e etc, podendo assim fragmentar em tokens de acordo com alguma lógica/padrão e receber esses valores dos elementos (tokens) em variáveis corretas a depender de seus <code className="token_reservada">Tipos Primitivos</code> sem precisar fazer <code className="token_reservada">casts</code> explícitos pois o default é considerar todos tokens como <code className="token_reservada">String</code>. Para realizar essa operação basta apenas instânciar um objeto <code className="token_reservada">Scanner</code> passando no construtor qual será o recurso texto que desejamos iterar e pegar esses valores (<code className="token_reservada">Scanner scann = new Scanner(texto_str);</code>), após instânciado o objeto <code className="token_reservada">`scann`</code> podemos alterar o <code className="token_reservada">delimitador</code> que faz o <code className="token_reservada">.split()</code> em sí, esse parâmetro dele é uma <code className="token_reservada">regex</code> portanto podemos personalizar a regra que irá fragmentar esse texto em tokens no qual iremos iterar (<code className="token_reservada">scann.useDelimiter(", ");</code>), após isso basta utilizarmos um looping (<code className="token_reservada">while(scanner.hasNext())&#123;&#125;</code>) e neste bloco realizar verificações com <code className="token_reservada">if</code> qual é o <code className="token_reservada">Tipo Primitivo</code> do próximo elemento em iteração (<code className="token_reservada">if(scanner.hasNextInt())&#123;&#125;</code>), assim bastando recebe-los em variáveis correspondentes, mais informações sobre <code className="token_reservada">Scanner</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/E_regex/Aula137Scanner_Utils.java" target="_blank">Clique AQUI!</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">I/O</h3>
                                        <ul className="projects-frontend--container">
                                            <li>Em desenvolvimento... (Qualquer coisa o material está completo no meu perfil do Github.)</li>
                                            <br/>
                                            <li>Pacote completo <code className="token_reservada">src</code> de treinos, informações e etc sobre esse módulo no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/F_io" target="_blank">Clique AQUI!</a></li>
                                            <li>Arquivo <code className="token_reservada">txt</code> completo contendo o OverView geral sobre esse módulo em especifico, resumos, informações, em formato de <code className="token_reservada">Documentação</code> no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula138a143-io_oldVersionIO_manipulaArquivos" target="_blank">Clique AQUI!</a></li>
                                            <br/>
                                            <li><code className="token_reservada">File</code>: Representação de arquivos em forma de objetos, porém é uma <code className="token_reservada">Classe legada</code> devendo ser substituída pelo <code className="token_reservada">Path</code> do novo pacote <code className="token_reservada">java.nio</code>, pois é basicamente o caminho path do arquivo que essa Classe representa, logo, o novo pacote trás maior coesão sobre.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">New I/O</h3>
                                        <ul className="projects-frontend--container">
                                            <li>Em desenvolvimento... (Qualquer coisa o material está completo no meu perfil do Github.)</li>
                                            <br/>
                                            <li>Pacote completo <code className="token_reservada">src</code> de treinos, informações e etc sobre esse módulo no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/G_nio" target="_blank">Clique AQUI!</a></li>
                                            <li>Arquivo <code className="token_reservada">txt</code> completo contendo o OverView geral sobre esse módulo em especifico, resumos, informações, em formato de <code className="token_reservada">Documentação</code> no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula144a158-nio_NewVersionIO_manipulaArquivos" target="_blank">Clique AQUI!</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">Serialization</h3>
                                        <ul className="projects-frontend--container">
                                            <li>Em desenvolvimento... (Qualquer coisa o material está completo no meu perfil do Github.)</li>
                                            <br/>
                                            <li>Pacote completo <code className="token_reservada">src</code> de treinos, informações e etc sobre esse módulo no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/H_serializacao" target="_blank">Clique AQUI!</a></li>
                                            <li>Arquivo <code className="token_reservada">txt</code> completo contendo o OverView geral sobre esse módulo em especifico, resumos, informações, em formato de <code className="token_reservada">Documentação</code> no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula159e160-serializa%C3%A7%C3%A3o.txt" target="_blank">Clique AQUI!</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">Collections (Estrutura de Dados)</h3>
                                        <ul className="projects-frontend--container">
                                            <li>Em desenvolvimento... (Qualquer coisa o material está completo no meu perfil do Github.)</li>
                                            <br/>
                                            <li>Pacote completo <code className="token_reservada">src</code> de treinos, informações e etc sobre esse módulo no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/I_collections" target="_blank">Clique AQUI!</a></li>
                                            <li>Arquivo <code className="token_reservada">txt</code> completo contendo o OverView geral sobre esse módulo em especifico, resumos, informações, em formato de <code className="token_reservada">Documentação</code> no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula161a182-collections.txt" target="_blank">Clique AQUI!</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">Generics</h3>
                                        <ul className="projects-frontend--container">
                                            <li>Em desenvolvimento... (Qualquer coisa o material está completo no meu perfil do Github.)</li>
                                            <br/>
                                            <li>Pacote completo <code className="token_reservada">src</code> de treinos, informações e etc sobre esse módulo no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/J_generics" target="_blank">Clique AQUI!</a></li>
                                            <li>Arquivo <code className="token_reservada">txt</code> completo contendo o OverView geral sobre esse módulo em especifico, resumos, informações, em formato de <code className="token_reservada">Documentação</code> no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula183a188-generics.txt" target="_blank">Clique AQUI!</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">Nested Inner Class</h3>
                                        <ul className="projects-frontend--container">
                                            <li>Em desenvolvimento... (Qualquer coisa o material está completo no meu perfil do Github.)</li>
                                            <br/>
                                            <li>Pacote completo <code className="token_reservada">src</code> de treinos, informações e etc sobre esse módulo no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/K_classesInternas" target="_blank">Clique AQUI!</a></li>
                                            <li>Arquivo <code className="token_reservada">txt</code> completo contendo o OverView geral sobre esse módulo em especifico, resumos, informações, em formato de <code className="token_reservada">Documentação</code> no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula189e190-innerClass_ClassesInternas.txt" target="_blank">Clique AQUI!</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">Parametrizando Comportamentos</h3>
                                        <ul className="projects-frontend--container">
                                            <li>Em desenvolvimento... (Qualquer coisa o material está completo no meu perfil do Github.)</li>
                                            <br/>
                                            <li>Pacote completo <code className="token_reservada">src</code> de treinos, informações e etc sobre esse módulo no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/L_parametrizandoComportamentos" target="_blank">Clique AQUI!</a></li>
                                            <li>Arquivo <code className="token_reservada">txt</code> completo contendo o OverView geral sobre esse módulo em especifico (Também contendo sobre o módulo abaixo <code className="token_reservada">Lambdas</code> em conjunto no mesmo arquivo, pois parametrizar comportamentos é basicamente a implementação das Lambdas), resumos, informações, em formato de <code className="token_reservada">Documentação</code> no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula193a197-lambdas_parametrizandoComportamentos.txt" target="_blank">Clique AQUI!</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">Lambdas</h3>
                                        <ul className="projects-frontend--container">
                                            <li>Em desenvolvimento... (Qualquer coisa o material está completo no meu perfil do Github.)</li>
                                            <br/>
                                            <li>Pacote completo <code className="token_reservada">src</code> de treinos, informações e etc sobre esse módulo no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/M_lambdas" target="_blank">Clique AQUI!</a></li>
                                            <li>Arquivo <code className="token_reservada">txt</code> completo contendo o OverView geral sobre esse módulo em especifico (Também contendo sobre o módulo acima <code className="token_reservada">Parametrizando Comportamentos</code> em conjunto no mesmo arquivo, pois parametrizar comportamentos é basicamente a implementação das Lambdas), resumos, informações, em formato de <code className="token_reservada">Documentação</code> no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula193a197-lambdas_parametrizandoComportamentos.txt" target="_blank">Clique AQUI!</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">Method Reference</h3>
                                        <ul className="projects-frontend--container">
                                           <li>Em desenvolvimento... (Qualquer coisa o material está completo no meu perfil do Github.)</li>
                                           <br/>
                                           <li>Pacote completo <code className="token_reservada">src</code> de treinos, informações e etc sobre esse módulo no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/N_methodReference" target="_blank">Clique AQUI!</a></li>
                                           <li>Arquivo <code className="token_reservada">txt</code> completo contendo o OverView geral sobre esse módulo em especifico, resumos, informações, em formato de <code className="token_reservada">Documentação</code> no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula198a200-methodReference_substituiLambdasParaMaisCoesao.txt" target="_blank">Clique AQUI!</a></li>                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">Objeto Optional (Null Pointer Handling)</h3>
                                        <ul className="projects-frontend--container">
                                           <li>Em desenvolvimento... (Qualquer coisa o material está completo no meu perfil do Github.)</li>
                                           <br/>
                                           <li>Pacote completo <code className="token_reservada">src</code> de treinos, informações e etc sobre esse módulo no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/O_optional" target="_blank">Clique AQUI!</a></li>
                                           <li>Arquivo <code className="token_reservada">txt</code> completo contendo o OverView geral sobre esse módulo em especifico, resumos, informações, em formato de <code className="token_reservada">Documentação</code> no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula201e202-Optional_evitaNullPointer.txt" target="_blank">Clique AQUI!</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">Streams</h3>
                                        <ul className="projects-frontend--container">
                                           <li>Em desenvolvimento... (Qualquer coisa o material está completo no meu perfil do Github.)</li>
                                           <br/>
                                           <li>Pacote completo <code className="token_reservada">src</code> de treinos, informações e etc sobre esse módulo no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/P_streams" target="_blank">Clique AQUI!</a></li>
                                           <li>Arquivo <code className="token_reservada">txt</code> completo contendo o OverView geral sobre esse módulo em especifico, resumos, informações, em formato de <code className="token_reservada">Documentação</code> no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula203a219-streams_fluxoDeDados.txt" target="_blank">Clique AQUI!</a></li>                                                                                                               <li>Arquivo <code className="token_reservada">txt</code> completo contendo o OverView geral sobre esse módulo em especifico, resumos, informações, em formato de <code className="token_reservada">Documentação</code> no meu repositório git: <a className="-linkBoldYellowProjects" href="" target="_blank">Clique AQUI!</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">Threads</h3>
                                        <ul className="projects-frontend--container">
                                           <li>Em desenvolvimento... (Qualquer coisa o material está completo no meu perfil do Github.)</li>
                                           <br/>
                                           <li>Pacote completo <code className="token_reservada">src</code> de treinos, informações e etc sobre esse módulo no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/Q_threads" target="_blank">Clique AQUI!</a></li>
                                           <li>Arquivo <code className="token_reservada">txt</code> completo contendo o OverView geral sobre esse módulo em especifico (Também contendo sobre o módulo abaixo <code className="token_reservada">Synchronization</code> em conjunto no mesmo arquivo), resumos, informações, em formato de <code className="token_reservada">Documentação</code> no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula220a228-threads_and_synchronized_lowLevel.txt" target="_blank">Clique AQUI!</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">Synchronization (MultiThreads)</h3>
                                        <ul className="projects-frontend--container">
                                           <li>Em desenvolvimento... (Qualquer coisa o material está completo no meu perfil do Github.)</li>
                                           <br/>
                                           <li>Pacote completo <code className="token_reservada">src</code> de treinos, informações e etc sobre esse módulo no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/Q_threads/sincronismo" target="_blank">Clique AQUI!</a></li>
                                           <li>Arquivo <code className="token_reservada">txt</code> completo contendo o OverView geral sobre esse módulo em especifico (Também contendo sobre o módulo acima <code className="token_reservada">Threads</code> em conjunto no mesmo arquivo), resumos, informações, em formato de <code className="token_reservada">Documentação</code> no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula220a228-threads_and_synchronized_lowLevel.txt" target="_blank">Clique AQUI!</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">Concurrency (MultiThreads)</h3>
                                        <ul className="projects-frontend--container">
                                           <li>Em desenvolvimento... (Qualquer coisa o material está completo no meu perfil do Github.)</li>
                                           <br/>
                                           <li>Pacote completo <code className="token_reservada">src</code> de treinos, informações e etc sobre esse módulo no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/R_concurrent" target="_blank">Clique AQUI!</a></li>
                                           {/* <li>Arquivo <code className="token_reservada">txt</code> completo contendo o OverView geral sobre esse módulo em especifico, resumos, informações, em formato de <code className="token_reservada">Documentação</code> no meu repositório git: <a className="-linkBoldYellowProjects" href="" target="_blank">Clique AQUI!</a></li> */}
                                           <li>Faltando documentar os estudos no arquivo <code className="token_reservada">txt</code> de OverView, não o fiz ainda pois eu utilizo a técnica de esperar um tempo, pois assim faz o cérebro consolidar melhor o conhecimento (Ele entende que é algo "símilar" e já possuí memória sobre, assim ele entende que é algo importante e deve ser armazenado em memória de longo prazo. Macetes rsrs)</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">Design Patterns (Gang Of Four GoF)</h3>
                                        <ul className="projects-frontend--container">
                                           <li>Em desenvolvimento... (Qualquer coisa o material está completo no meu perfil do Github.)</li>
                                           <br/>
                                           <li>Pacote completo <code className="token_reservada">src</code> de treinos, informações e etc sobre esse módulo no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/S_designPatterns" target="_blank">Clique AQUI!</a></li>
                                           {/* <li>Arquivo <code className="token_reservada">txt</code> completo contendo o OverView geral sobre esse módulo em especifico, resumos, informações, em formato de <code className="token_reservada">Documentação</code> no meu repositório git: <a className="-linkBoldYellowProjects" href="" target="_blank">Clique AQUI!</a></li> */}
                                           <li>Faltando documentar os estudos no arquivo <code className="token_reservada">txt</code> de OverView, não o fiz ainda pois eu utilizo a técnica de esperar um tempo, pois assim faz o cérebro consolidar melhor o conhecimento (Ele entende que é algo "símilar" e já possuí memória sobre, assim ele entende que é algo importante e deve ser armazenado em memória de longo prazo. Macetes rsrs)</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 class="projects-subtitle">JDBC</h3>
                                        <ul className="projects-frontend--container">
                                           <li>Em desenvolvimento... (Qualquer coisa o material está completo no meu perfil do Github.)</li>
                                           <br/>
                                           <li>Pacote completo <code className="token_reservada">src</code> de treinos, informações e etc sobre esse módulo no meu repositório git: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/T_jdbc" target="_blank">Clique AQUI!</a></li>
                                           {/* <li>Arquivo <code className="token_reservada">txt</code> completo contendo o OverView geral sobre esse módulo em especifico, resumos, informações, em formato de <code className="token_reservada">Documentação</code> no meu repositório git: <a className="-linkBoldYellowProjects" href="" target="_blank">Clique AQUI!</a></li> */}
                                           <li>Faltando documentar os estudos no arquivo <code className="token_reservada">txt</code> de OverView, não o fiz ainda pois eu utilizo a técnica de esperar um tempo, pois assim faz o cérebro consolidar melhor o conhecimento (Ele entende que é algo "símilar" e já possuí memória sobre, assim ele entende que é algo importante e deve ser armazenado em memória de longo prazo. Macetes rsrs)</li>
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
                                    <ul className="projects-description--container">
                                        <li>
                                            <h3 class="projects-subtitle">Descrição</h3>
                                        </li>
                                    </ul>
                                    <p>
                                        Trabalho final de semestre da disciplina LG3 (Linguagem e Técnicas de Programação) aonde tomei a abordagem de separar as
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
                                    <ul className="projects-description--container">
                                        <li>
                                            <h3 class="projects-subtitle">Descrição</h3>
                                        </li>
                                    </ul>
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
