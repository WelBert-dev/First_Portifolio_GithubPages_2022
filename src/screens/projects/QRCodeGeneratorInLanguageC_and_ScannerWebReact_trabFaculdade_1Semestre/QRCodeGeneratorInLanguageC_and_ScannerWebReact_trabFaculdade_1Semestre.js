import React from 'react';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import logoQrCodeGenerator from '../../../resources/images/logo-qrcodeGeneratorInC.png';

export default function QRCodeGeneratorInLanguageC_and_ScannerWebReact_trabFaculdade_1Semestre() {
    return (
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
    )
};
