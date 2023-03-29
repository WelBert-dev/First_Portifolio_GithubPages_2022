import React, { useEffect, useState } from 'react';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import diplomaTecnicoInformaticaIFSP from '../resources/diploma-tecnicoInformatica-ifsp.png';

import portariaNormativaCeicP01 from '../resources/portariaNormativaCeic-parte01.png';
import portariaNormativaCeicP02 from '../resources/portariaNormativaCeic-parte02.png';

import bolsaEnsinoAmostra from '../resources/amostraBolsaEnsino.png';
import bolsaEnsinoP02Amostra from '../resources/bolsaEnsinoP02.png';
import bolsaEnsinoP03Amostra from '../resources/bolsaEnsinoP03.png';
import bolsaEnsinoRelatorioP01 from '../resources/relatorioMensal01-parte01.png';
import bolsaEnsinoRelatorioP01P02 from '../resources/relatorioMensal01-parte02.png';
import bolsaEnsinoRelatorioP02P01 from '../resources/relatorioMensal02-parte01.png';
import bolsaEnsinoRelatorioP02P03 from '../resources/relatorioMensal02-parte03.png';
import bolsaEnsinoRelatorioP03P01 from '../resources/relatorioMensal03-parte01.png';
import bolsaEnsinoRelatorioP03P02 from '../resources/relatorioMensal03-parte02.png';

import ciscoModule01Amostra from '../resources/ciscoModule01Amostra.png';
import ciscoModule02Amostra from '../resources/ciscoModule02Amostra.png';

import cursoEmVideoPython3Mundo01 from '../resources/Python3Mundo1-40-Horas-Certificado-Curso-em-Video.png';

import workshopTvBoxFlisol from '../resources/flisolTVBox.png';
import workshopLinguagemC from '../resources/flisolLinguagemC.png';

import workshopAutomacaoIndustrialP01 from '../resources/workshopAutomacaoIndustrial-IFCiencia.png';
import workshopAutomacaoIndustrialP02 from '../resources/workshopAutomacaoIndustrial-IFCiencia-parte02.png';

import workshopNodeRed from '../resources/nodeRed-IoT-ifciencia2021-28-10-2021.png';
import relatorioNodeRedP01 from '../resources/relatorioNodeRed2021-parte01.png';
import relatorioNodeRedP02 from '../resources/relatorioNodeRed2021-parte02.png';
import relatorioNodeRedP03 from '../resources/relatorioNodeRed2021-parte03.png';
import relatorioNodeRedP04 from '../resources/relatorioNodeRed2021-parte04.png';

import workshopBolsaValores from '../resources/bolsaDeValores-ifciencia2021-29-10-2021.png';

import cursoFundacBradescJavaDesktop from '../resources/cursoFundacBradesc-JavaDesktop-certificate.png';
import cursoFundacBradescHTMLAvanc from '../resources/cursoFundacBradesc-HTMLAvanc-certificate.png';
import cursoFundacBradescCSS from '../resources/cursoFundacBradesc-CSS3Inova-certificate.png';

import './CertificatesScreen.css';

export default function CertificatesScreen() {

    const [flagCeicBug, setFlagCeicBug] = useState(false);
    const [flagCursoEmVideoBug, setFlagCursoEmVideoBug] = useState(false);

    useEffect(()=>{
        if (window.screen.width >= 810) {
            // seta o scroll da CEIC
            const ceicImageContainer = document.getElementById("ceicInitScroll");
            Number(ceicImageContainer.scrollTop) == Number(0) ? ceicImageContainer.scrollTop = Number(170.285720825195)
            : console.log("Bugou o scroll inicial da CEIC ;-;", ceicImageContainer.scrollTop);
            console.log("Executou", ceicImageContainer.scrollTop.toString());
            if(ceicImageContainer.scrollTop.toString() === '0'){
                ceicImageContainer.scrollTop = Number(170.285720825195);
                setFlagCeicBug(true);
            }

            // seta o scroll do curso em video
            const cursoEmVideoImageContainer = document.getElementById("cursoEmVideoInitScroll");
            Number(cursoEmVideoImageContainer.scrollTop) == Number(0) ? cursoEmVideoImageContainer.scrollTop = Number(130.285720825195)
            : console.log("Bugou o scroll inicial do Curso Em Video ;-;", cursoEmVideoImageContainer.scrollTop);
            console.log("Executou", cursoEmVideoImageContainer.scrollTop.toString());
            if(cursoEmVideoImageContainer.scrollTop.toString() === '0'){
                cursoEmVideoImageContainer.scrollTop = Number(130.285720825195);
                setFlagCursoEmVideoBug(true);
            }
        }
    }, [flagCeicBug, flagCursoEmVideoBug])

    return (
        <section id="main-certificate--container">
            <div>
                
                <h1 className="main-title -complementaryActivities">&lsaquo;Formação Acadêmica Nível Técnico&rsaquo;</h1>
            
                <div>
                <article className="certificate-single -bolsaEnsinoCertficate">
                    <div>
                        <div className="projects-title--container -certificateTitleContainer">
                            <div>
                                <h3 className="projects-title -certificate--title">Técnico em Informática</h3>
                                <a href="https://sistec.mec.gov.br/validadenacional" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                            </div>
                            <span className="-certificate--span">Instituto Federal de Educação, Ciências e Tecnologias de São Paulo - Campús Salto (IFSP)</span>
                            <span className="-certificate--span">C/H: 1234 horas (01/02/2021 - 31/12/2022)</span>
                            <div className="certificates-autenticCode--container">
                                <span className="certificates-autenticCode--span">Verificar autenticidade SISTEC: </span>
                                <span className="certificates-autenticCode--span">sistec.mec.gov.br/validadenacional</span>
                                <span className="certificates-autenticCode--span certificates-autenticCode--spanBorderTopRadius -diplomaTecInformatica">Código de Autenticação:</span>
                                <span className="certificates-autenticCode--span">40901/99502610CM</span>
                            </div>
                            <p>Validação automática clicando no botão a cima.</p>
                        </div>
                        <div id="ceicInitScroll" className="bolsaEnsinoImageWrapper">
                            <img src={diplomaTecnicoInformaticaIFSP}></img>
                        </div>
                        <div className="projects-subdescription--container -bolsaEnsinoCertficate">
                            <h3 className="projects-subtitle -certificateSubtitle">Contextualizando</h3>
                            <p>
                                Formação acadêmica "Técnico em Informática" no Instituto Federal de Educação, Ciências e Tecnologias de São Paulo
                                Campús Salto. Foram dois anos de muito esforço e dedicação na melhor instituição de ensino técnico federal de São Paulo.
                                Ótimos professores docentes e servidores, foi a melhor experiência da minha vida! Entrei com a mentalidade de 
                                absorver ao máximo do conhecimento e por isso participei de todas ações que estavam passíveis ao meu alcanse.
                                Apesar da qualidade de ensino ser bem superior, é um curso de alta desistência aonde iniciaram +40 Alunos e apenas 7 concluíram,
                                isso pois as pessoas entram achando que a proposta é aprender o pacote Office (Word, Excel, PowerPoint e etc...),
                                mas na verdade a stack de tecnologias ensinada é mais superior a isso, como programação e etc.. Portanto ano
                                passado foi tomada uma importante decisão pelo time da CEIC (dentre outros) e aprovado pelo MEC na qual a proposta inicial é tornar 
                                os cursos mais atrativos, repaginando a grade currícular e diminuindo a carga horária.. Mudando assim o nome do curso
                                de "Técnico em Informática" para "Informática para Internet", diminuindo assim a carga horária de 4 Semestres (2 anos), 
                                para 3 Semestres (1 ano e meio) com inicio de vigência apartir de 2023. Fui o aluno do curso que representou os dicentes no time da CEIC,
                                mais informações logo abaixo.  
                            </p>
                        </div>
                    </div>
                </article>  
                <hr/>

                <h1 className="main-title">&lsaquo;Certificados&rsaquo;</h1>

                <article className="certificate-single -bolsaEnsinoCertficate">
                        <div>
                            <div className="projects-title--container -certificateTitleContainer">
                                <div>
                                    <h3 className="projects-title -certificate--title">IFSP CEIC - Aluno representante do curso</h3>
                                    <a href="https://suap.ifsp.edu.br/documento_eletronico/imprimir_documento_pdf/347883/carta/?hash=c70a71e451bbec4c4f11e9f0daf5df06ae0c02eb2d637901ffd435e78f4600a375e066ffb8b2d0ccbd9f11dd47ff6df6e763c69f0d94f82ec0bd3f48af1ce164" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span className="-certificate--span">Portaria Normativa SLT nº0045/IFSP (18/05/2022)</span>
                                <div className="certificates-autenticCode--container">
                                    <span className="certificates-autenticCode--span">Verificar autenticidade manualmente: </span>
                                    <span className="certificates-autenticCode--span">suap.ifsp.edu.br/autenticar-documento/</span>
                                    <span className="certificates-autenticCode--span certificates-autenticCode--spanBorderTopRadius">Código Verificador: </span>
                                    <span className="certificates-autenticCode--span">347883</span>
                                    <hr className="certificates-autenticCode--spanSeparator -widthSpanSeparator" />
                                    <span className="certificates-autenticCode--span">Código de Autenticidade: </span>
                                    <span className="certificates-autenticCode--span">c70a71e451</span>

                                </div>
                                <p>Validação automática clicando no botão a cima.</p>
                            </div>
                            <div id="ceicInitScroll" className="bolsaEnsinoImageWrapper">
                                <img src={portariaNormativaCeicP01}></img>
                                <img src={portariaNormativaCeicP02}></img>
                            </div>
                            <div className="projects-subdescription--container -bolsaEnsinoCertficate">
                                <h3 className="projects-subtitle -certificateSubtitle">Contextualizando</h3>
                                <p>
                                    A CEIC (Comissão de Elaboração e Implementação de Projetos Pedagógicos do Curso Técnico em Informática) é uma comissão interna do IFSP 
                                    responsável por discutir e definir a grade currícular do curso como um todo dentre outras atribuições, e para isto é necessário
                                    a opinião de um aluno para  ajudar nas tomadas de decisões. Esse ano foi bem importante pois foi tomada uma importante decisão e aprovada pelo MEC
                                    aonde a proposta é tornar os cursos mais atrativos devido a grande desistência em geral (No meu contexto de informática, iniciaram +40 alunos e apenas 7 concluíram).
                                    Portanto a decisão foi repaginar a grade currícular e diminuir a carga horária do curso para os próximos anos, mudando assim de "Técnico em informática" para "Informática para a Internet" 
                                    e reduzindo assim de 4 semestres (2 anos) para 3 semestres (1 ano e meio) com início de vigência apartir de 2023.
                                </p>
                            </div>
                        </div>
                    </article>  
                    <hr />
                    <article className="certificate-single -bolsaEnsinoCertficate">
                        <div>
                            <div className="projects-title--container -certificateTitleContainer">
                                <div>
                                    <h3 className="projects-title -certificate--title">IFSP Bolsa Ensino - Programação</h3>
                                    <a href="https://drive.ifsp.edu.br/s/OjG9YuCEPhF3LJt" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span className="-certificate--span">Edital 002/2022 - DRG/SLT (04/2022 até 06/2022)</span>
                                <div className="certificates-autenticCode--container">
                                    <span className="certificates-autenticCode--span">Não possuí cód. de autenticidade, doc oficial no botão a cima</span>
                                </div>
                                <p>Documento oficial clicando no botão a cima.</p>
                            </div>
                            <div className="bolsaEnsinoImageWrapper">
                                <img src={bolsaEnsinoAmostra}></img>
                                <img src={bolsaEnsinoP02Amostra}></img>
                                <img src={bolsaEnsinoP03Amostra}></img>
                                <img src={bolsaEnsinoRelatorioP01}></img>
                                <img src={bolsaEnsinoRelatorioP01P02}></img>
                                <img src={bolsaEnsinoRelatorioP02P01}></img>
                                <img src={bolsaEnsinoRelatorioP02P03}></img>
                                <img src={bolsaEnsinoRelatorioP03P01}></img>
                                <img src={bolsaEnsinoRelatorioP03P02}></img>
                            </div>
                            <div className="projects-subdescription--container -bolsaEnsinoCertficate">
                                <h3 className="projects-subtitle -certificateSubtitle">Contextualizando</h3>
                                <p>
                                    Mais uma das ações que eu participei durante meu curso Tecnico em informática no IFSP (Instituto Federal de Educação, Ciências e Tecnologias de São Paulo) aonde eu me encontrava desempregado e focado 100% nos estudos, e resolvi participar pois é uma ajuda de custo com um valor simbólico de R$400,00 por mês para estudar (No caso eu optei pela grade de programação com a stack frontend (HTML5, CSS3 e JavaScript) pois eram as tecnologias que eu estava estudando naquele contexto/época). Descobri essa ação/bolsa pelo meu professor pois o mesmo se inscreveu com a proposta do projeto no qual eu me inscrevi e fui contemplado. Foram 20 horas semanais durante 3 meses, (80 horas mensais) e o total foi de 240 horas. (Obs: Não gerou certificado mas devido a carga horaria pode ser considerado.. rsrs)
                                </p>
                            </div>
                        </div>
                       
                    </article>  
                    <hr/>


                    <h1 className="main-title -complementaryActivities">&lsaquo;Atividades Complementares para Superior ADS&rsaquo;</h1>

                    <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                        <div>
                            <div className="projects-title--container -certificateTitleContainer">
                                <div>
                                    <h3 className="projects-title -certificate--title">Java Avançado</h3>
                                    <a href="https://www.ev.org.br/validar-certificado" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span className="-certificate--span">Fundação Bradesco</span>
                                <span className="-certificate--span">C/H: 16 horas - CEUNSP (06/03/2023)</span>
                                <div className="certificates-autenticCode--container">
                                    <span className="certificates-autenticCode--span">Código de Autenticidade: </span>
                                    <span className="certificates-autenticCode--span">5E4882C8-BA82-455F-BACB-4C2BFB14BE94</span>
                                </div>
                                <p>Valide o código de autenticidade clicando no botão a cima</p>
                            </div>
                            <div className="bolsaEnsinoImageWrapper">
                                <img src={cursoFundacBradescJavaDesktop}></img>
                            </div>
                            <div className="projects-subdescription--container -bolsaEnsinoCertficate">
                                <h3 className="projects-subtitle -certificateSubtitle">Contextualizando</h3>
                                <p>
                                    Curso realizado para o Superior em "Análise e Desenvolvimento de Sistemas",
                                    pois faz parte de uma fração da carga horária necessária para a conclusão do curso.
                                    Optei pelos cursos da "Fundação Bradesco" pois além de gratuíto é bem reconhecido 
                                    no mercado de T.I devido a qualidade e integridade do certificado de conclusão gerado.
                                    Confesso não ter sentido dificuldades na execução das atividades pois já estudo Java e 
                                    Orientação a Objetos a muito tempo então foi "sem novidades" no aprendizado. 
                                    Não desconsiderando a qualidade do curso, que realmente é otima MÁS faltou contextualizar 
                                    melhor a descrição e nome para o curso, pois o conteúdo não é de nível avançado,
                                    e poderiam informar melhor na introdução dizendo que o conteúdo abordado é sobre "Java Desktop",
                                    não sendo generalista mas talvez quem está procurando por "Java Avançado" espera-se aprender
                                    sobre os utilitários da API NATIVA do Java (serialização, io, new io, colections, paralelismo...) 
                                    pois é oque da a entender para "Java Avançado", o mais ideal seria "Java Desktop - Intermediário".
                                </p>

                            </div>
                        </div>
                    </article>
                    <hr/>
                    <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                        <div>
                            <div className="projects-title--container -certificateTitleContainer">
                                <div>
                                    <h3 className="projects-title -certificate--title">HTML5 Avançado</h3>
                                    <a href="https://www.ev.org.br/validar-certificado" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span className="-certificate--span">Fundação Bradesco</span>
                                <span className="-certificate--span">C/H: 6 horas - CEUNSP (07/03/2023)</span>
                                <div className="certificates-autenticCode--container">
                                    <span className="certificates-autenticCode--span">Código de Autenticidade: </span>
                                    <span className="certificates-autenticCode--span">DA64D586-173B-4AB9-B837-B0DE372802C3</span>
                                </div>
                                <p>Valide o código de autenticidade clicando no botão a cima</p>
                            </div>
                            <div className="bolsaEnsinoImageWrapper">
                                <img src={cursoFundacBradescHTMLAvanc}></img>
                            </div>
                        </div>
                    </article>
                    <hr/>
                    <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                        <div>
                            <div className="projects-title--container -certificateTitleContainer">
                                <div>
                                    <h3 className="projects-title -certificate--title">Inovando com CSS</h3>
                                    <a href="https://www.ev.org.br/validar-certificado" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span className="-certificate--span">Fundação Bradesco</span>
                                <span className="-certificate--span">C/H: 26 horas - CEUNSP (08 até 10/03/2023)</span>
                                <div className="certificates-autenticCode--container">
                                    <span className="certificates-autenticCode--span">Código de Autenticidade: </span>
                                    <span className="certificates-autenticCode--span">BB8AD7E2-7F03-4898-A5A1-61DE77B5E688</span>
                                </div>
                                <p>Valide o código de autenticidade clicando no botão a cima</p>
                            </div>
                            <div className="bolsaEnsinoImageWrapper">
                                <img src={cursoFundacBradescCSS}></img>
                            </div>
                        </div>
                    </article>
                    <hr />


                    <h1 className="main-title -complementaryActivities">&lsaquo;Atividades Complementares para Técnico em Informática&rsaquo;</h1>

                    <article className="certificate-single -bolsaEnsinoCertficate">
                        <div>
                            <div className="projects-title--container -certificateTitleContainer">
                                <div>
                                    <h3 className="projects-title -certificate--title">Cybersecurity Essentials Módulo 01 - Cisco</h3>
                                    <a href="https://www.netacad.com/portal/user/1040281088/learning-transcript" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span className="-certificate--span">Plataforma NetAcad (07/2022 até 10/2022)</span>
                                <div className="certificates-autenticCode--container">
                                    <span className="certificates-autenticCode--span">Não possuí cód. de autenticidade, DOWNLOAD do doc. oficial no botão a cima</span>
                                </div>
                                <p>DOWNLOAD da declaração oficial clicando no botão a cima.</p>
                            </div>
                            <div className="bolsaEnsinoImageWrapper">
                                <img src={ciscoModule01Amostra}></img>
                            </div>
                            <div className="projects-subdescription--container -bolsaEnsinoCertficate">
                                <h3 className="projects-subtitle -certificateSubtitle">Contextualizando</h3>
                                <p>
                                    Curso da Cisco realizado na plataforma Netacad devido a disciplina GSG (Gerenciamento e Segurança de Dados) do IFSP, aonde o professor tomou a abordagem de instruir os alunos e utilizar como material base pois a Cisco tem um grande reconhecimento no mercado de segurança da informação, e por gerar o certificado com reconhecimento Oficial ele deduziu que seria bom para a carreira dos alunos. Esse certificado é referênte ao primeiro módulo (de dois) aonde ele introduziu as boas práticas de segurança, o pilar da segurança da informação (confidencialidade, integridade e disponibilidade), tipos de atacantes (white hat, gray hat e black hat), tipos de ataque, mercado de trabalho e de penteste, tipos de criptografias e seus devidos usos (hash's), e também alguns termos e ferramentas utilizados pelos hackers.
                                </p>
                            </div>
                        </div>
                   
                    </article>  
                    <hr />
                    <article className="certificate-single -bolsaEnsinoCertficate">
                        <div>
                            <div className="projects-title--container -certificateTitleContainer">
                                <div>
                                    <h3 className="projects-title -certificate--title">Cybersecurity Essentials Módulo 02 - Cisco</h3>
                                    <a href="https://www.netacad.com/portal/user/1040281088/learning-transcript" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span className="-certificate--span">Plataforma NetAcad (10/2022 até 12/2022)</span>
                                <div className="certificates-autenticCode--container">
                                    <span className="certificates-autenticCode--span">Não possuí cód. de autenticidade, DOWNLOAD do doc. oficial a cima</span>
                                </div>
                                <p>DOWNLOAD da declaração oficial clicando no botão a cima.</p>
                            </div>
                            <div className="bolsaEnsinoImageWrapper">
                                <img src={ciscoModule02Amostra}></img>
                            </div>
                            <div className="projects-subdescription--container -bolsaEnsinoCertficate">
                                <h3 className="projects-subtitle -certificateSubtitle">Contextualizando</h3>
                                <p>
                                    Continuação do curso da Cisco realizado na plataforma Netacad devido a disciplina GSG (Gerenciamento e Segurança de Dados) do IFSP,
                                    neste módulo foi reforçado o conhecimento obtido no primeiro e também o aprofundamento do mesmo, re-lembrando e reforçando alguns termos e ferramentas, e técnicas de ataques e de mitigação, reforçou também o pilar da segurança da informação (confidencialidade, integridade e disponibilidade), as leis em volto da cybersegurança (LGPD) dentre outras.
                                </p>
                            </div>
                        </div>
                   
                    </article>  
                    <hr />
                    <article className="certificate-single -bolsaEnsinoCertficate">
                        <div>
                            <div className="projects-title--container -certificateTitleContainer">
                                <div>
                                    <h3 className="projects-title -certificate--title">Python3 Mundo01 (Módulo 01) - Curso Em Video</h3>
                                    <a href="https://www.cursoemvideo.com/validacao-de-certificado/?codigo=38645-66E2-9" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span className="-certificate--span">Plataforma Curso Em Video (05/2021)</span>
                                <div className="certificates-autenticCode--container">
                                    <span className="certificates-autenticCode--span">Verificar autenticidade manualmente: </span>
                                    <span className="certificates-autenticCode--span">cursoemvideo.com/validacao-de-certificado/</span>
                                    <span className="certificates-autenticCode--span certificates-autenticCode--spanBorderTopRadius -curoEmVideo">Código de Autenticidade: </span>
                                    <span className="certificates-autenticCode--span">38645-66E2-9</span>
                                </div>
                                <p>Validação automática clicando no botão a cima.</p>
                            </div>
                            <div id="cursoEmVideoInitScroll" className="bolsaEnsinoImageWrapper">
                                <img src={cursoEmVideoPython3Mundo01}></img>
                            </div>
                            <div className="projects-subdescription--container -bolsaEnsinoCertficate">
                                <h3 className="projects-subtitle -certificateSubtitle">Contextualizando</h3>
                                <p>
                                    Curso realizado quando eu estava aprendendo lógica de programação, escolhi python3 pois foi a linguagem adotada pelo professor no incio do meu curso técnico, e resolvi reforçar o conhecimento com as videos aulas do Gustavo Guanabara (Youtuber e CEO da plataforma "Curso em Video", muito reconhecido pela didática simples para quem esta iniciando) pois ele não utiliza muito jargão técnico, fiz o curso até a metade pelo Youtube e descobri que o mesmo possuía uma plataforma dedicada e por ela era possivel gerar um certificado de conclusão ao final de cada módulo (mundo), e por segurança e integridade do certificado, não é possível realizar a prova final em casos de não assistido todos os vídeos, e não obtido a nota superior a 70%. Além deste módulo (mundo) também estudei o segundo módulo e fiz a prova final, porém a geração do certificado é um serviço pago, valor simbólico de R$25,00 na época devido ao curso ser gratuito para ajudar a mante-lo e promover suporte aos usuários (é aquele ditado "Não existe cerveja grátis".. rsrs). Não gerei ainda pois estou desempregado e não é mais o meu contexto (Estou estudando outras tecnologias, no caso atual é Java) além disto o mesmo serviço hoje custa R$45,00.
                                </p>
                            </div>
                        </div>
                   
                    </article>  
                    <hr />


                    <h1 className="main-title">&lsaquo;WorkShops&rsaquo;</h1>

                    <article className="certificate-single -bolsaEnsinoCertficate">
                        <div>
                            <div className="projects-title--container -certificateTitleContainer">
                                <div>
                                    <h3 className="projects-title -certificate--title">Descaracterização TVBOX - IFSP FLISoL 2022</h3>
                                    <a href="https://sistemas.slt.ifsp.edu.br/certificado/?cod=d79ccad1" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span className="-certificate--span">Palestra e Oficina (23/04/2022)</span>
                                <div className="certificates-autenticCode--container">
                                    <span className="certificates-autenticCode--span">Não possuí cód. de autenticidade, doc oficial no botão a cima</span>
                                </div>
                                <p>Documento oficial clicando no botão a cima.</p>
                            </div>
                            <div className="bolsaEnsinoImageWrapper">
                                <img src={workshopTvBoxFlisol}></img>
                            </div>
                            <div className="projects-subdescription--container -bolsaEnsinoCertficate">
                                <h3 className="projects-subtitle -certificateSubtitle">Contextualizando o FLISoL</h3>
                                <p>
                                    Mais uma das ações que eu participei no IFSP, desde o incio entrei com a mentalidade de absorver ao máximo possível do conhecimento, então participei de todas atividades que estavam passíveis ao meu alcance. FLISoL (Festival Latino-Americano de Instalação de Software Livre), para quem é entusiasta GNU sabe bem o que é esse evento (Mundial) com objetivo de promover e propagar o ideal de Software Livre realizado no quarto (4o) sábado de abril de cada ano desde 2008 (com iniciativas em 2005), não devemos confundir "Livre" com "Free beer" ou seja "Cerveja grátis", essa ideia esta co-relacionada ao código fonte dos Softwares, e não a precificação deles.. Não confundir também "Software Livre" com "Open Source", ambos são bem parecidos porém com focos diferentes, sendo um relacionado a qualidade do software (Open source) e o outro relacionado a liberdade do usuário (Software Livre), o assunto é um pouco mais profundo. 
                                    Um dos exemplos de licença que prega esses ideias é a GPL (General Public License).
                                    <ul className="projects-description--container">
                                        <li>
                                            <h3 className="projects-subtitle -certificateSubtitle">Liberdades da GPL</h3>
                                            <ul>
                                                <li>0 - A liberdade de executar o programa, para qualquer propósito.</li>
                                                <li>1 - A liberdade de estudar como o programa funciona e adaptá-lo para as suas necessidades. O acesso ao código-fonte é um pré-requisito para esta liberdade.</li>
                                                <li>2 - A liberdade de redistribuir cópias de modo que você possa ajudar ao seu próximo.</li>
                                                <li>3 -  A liberdade de aperfeiçoar o programa, e liberar os seus aperfeiçoamentos, de modo que toda a comunidade se beneficie deles. O acesso ao código-fonte é um pré-requisito para esta liberdade.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h3 className="projects-subtitle -certificateSubtitle">Fontes interessantes</h3>
                                            <ul>
                                                <li><a target="_blank" href="https://www.youtube.com/watch?v=N0NNnq0Wyww&t=250s">Clique aqui para mais informações (Open Source X Software Livre).</a></li>
                                                <li><a target="_blank" href="https://www.youtube.com/watch?v=JbXGpDlu3l4">Clique aqui para mais informações (FLISOL) Largue de uma vez o Ruindows e vem para o Lindux.</a></li>
                                                <li><a target="_blank" href="https://www.youtube.com/watch?v=SZMIL87CyVE&list=PLuf64C8sPVT9L452PqdyYCNslctvCMs_n">Curso completo de GNU/Linux.</a></li>
                                                <li><a target="_blank" href="https://www.youtube.com/watch?v=Hu8ViS9q8QU">Palestra completa do FLISOL2022 do IFSP.</a></li>
                                                
                                            </ul>
                                        </li>
                                    </ul>
                                </p>

                                <h3 className="projects-subtitle -certificateSubtitle -minimalFont">Contextualizando o Projeto TV Box</h3>
                                <p>
                                    Sem mais delongas, o projeto referênte a este certificado de participação foi a realização de uma descaracterização de equipamentos piratas fruto de contrabando apreendidos pela PF (Policia Federal), esses equipamentos eram hardwares simples (estilo Raspberry Pi) com S.O personalizado (possivelmente uma distribuição GNU/Linux) no qual realizava uma burlação e promovia acesso gratuíto a canais e serviços de streaming pagos (Telecine, HBO, dentre outros), a descaracterização se deu pela remoção deste S.O e substituição por uma distro GNU/Linux Leve sem interface gráfica e também por um Android. Anteriormente, esses equipamentos iriam ser destruídos e descartados, porém resolveram doá-los para as instituições públicas utiliza-los como material de estudos.
                                </p>
                            </div>
                        </div>
                   
                    </article>  
                    <hr/>
                    <article className="certificate-single -bolsaEnsinoCertficate">
                        <div>
                            <div className="projects-title--container -certificateTitleContainer">
                                <div>
                                    <h3 className="projects-title -certificate--title">Introdução á Linguagem C - IFSP FLISoL 2022</h3>
                                    <a href="https://sistemas.slt.ifsp.edu.br/certificado/?cod=6ddf3b8b14" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span className="-certificate--span">Palestra e Oficina (23/04/2022)</span>
                                <div className="certificates-autenticCode--container">
                                    <span className="certificates-autenticCode--span">Não possuí cód. de autenticidade, doc oficial no botão a cima</span>
                                </div>
                                <p>Documento oficial clicando no botão a cima.</p>
                            </div>
                            <div className="bolsaEnsinoImageWrapper">
                                <img src={workshopLinguagemC}></img>
                            </div>
                            <div className="projects-subdescription--container -bolsaEnsinoCertficate">
                                <h3 className="projects-subtitle -certificateSubtitle">Contextualizando</h3>
                                <p>
                                    Introdução e noções básicas da linguagem C (Pode ser considerada "Pai" de muitas outras linguagens modernas as quais parseiam e transformam o seu código fonte em C "por debaixo dos panos"), muitos dos sistemas operacionais em sí são escritos em C.. me fez despertar um grande interesse por ela, porém atualmente estou focado em Java e não quero me sobrecarregar e acabar não aprendendo nada da maneira correta, foi definido uma meta e até eu não atingi-lá não irei descansar rsrs.. a meta é tirar a certificação Java da oracle antes do final do ano que vem (2023).
                                </p>

                            </div>
                        </div>
                   
                    </article> 
                    <hr/>
                    <article className="certificate-single -bolsaEnsinoCertficate">
                        <div>
                            <div className="projects-title--container -certificateTitleContainer">
                                <div>
                                    <h3 className="projects-title -certificate--title">Automação industrial (Processos e Programação) - IFSP IFCiência 2022</h3>
                                    <a href="https://suap.ifsp.edu.br/eventos/baixar_certificad
o/?hash=024eada9d26dc7e7" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span className="-certificate--span">Palestra (27/10/2022)</span>
                                <div className="certificates-autenticCode--container">
                                    <span className="certificates-autenticCode--span">Não possuí cód. de autenticidade, DOWNLOAD do doc. oficial no botão a cima</span>
                                </div>
                                <p>DOWNLOAD do documento oficial clicando no botão a cima.</p>
                            </div>
                            <div className="bolsaEnsinoImageWrapper">
                                <img src={workshopAutomacaoIndustrialP01}></img>
                                <img src={workshopAutomacaoIndustrialP02}></img>
                            </div>
                            <div className="projects-subdescription--container -bolsaEnsinoCertficate">
                                <h3 className="projects-subtitle -certificateSubtitle">Contextualizando</h3>
                                <p>
                                    Optei por participar deste workshop pois era o único mais próximo do meu contexto (desenvolvimento) se comparado as outras opções, foi necessário participar pois a professora de uma das disciplinas considerou uma fração da nota dedicada a um dos projetos do IFCiência, então tivemos que escolher "obrigatóriamente" alguma coisa rsrs..
                                </p>

                            </div>
                        </div>
                   
                    </article> 
                    <hr/>
                    <article className="certificate-single -bolsaEnsinoCertficate">
                        <div>
                            <div className="projects-title--container -certificateTitleContainer">
                                <div>
                                    <h3 className="projects-title -certificate--title">NodeRed: Uma Jornada IoT - IFSP IFCiência 2021</h3>
                                    <a href="https://drive.google.com/file/d/154osECaHFdjOHc3wWM4VbnbU4lUDbdhq/view?usp=sharing" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span className="-certificate--span">Palestra (28/10/2021)</span>
                                <div className="certificates-autenticCode--container">
                                    <span className="certificates-autenticCode--span">Não possuí cód. de autenticidade, doc oficial no botão a cima</span>
                                </div>
                                <p>Documento oficial clicando no botão a cima.</p>
                            </div>
                            <div className="bolsaEnsinoImageWrapper">
                                <img src={workshopNodeRed}></img>
                                <img src={relatorioNodeRedP01}></img>
                                <img src={relatorioNodeRedP02}></img>
                                <img src={relatorioNodeRedP03}></img>
                                <img src={relatorioNodeRedP04}></img>
                            </div>
                            <div className="projects-subdescription--container -bolsaEnsinoCertficate">
                                <h3 className="projects-subtitle -certificateSubtitle">Contextualizando</h3>
                                <p>
                                    Mais uma das ações promovidas pelo IFSP, o primeiro IFCiência que eu participei em 2021 no qual me despertou interesse por "Internet das coisas" na época, mas é por que eu estava me encontrando ainda.. o mundo de Tecnologia é imenso e cheio de ramos/oportunidades mas com toda certeza é aqui o meu lugar...
                                    Foi explicado e introduzido como é a interação entre micro-controladores e a programação (No caso ele utilizou o NodeRed) que é basicamente uma abstração gráfica (Like windows) estilo KNIME aonde temos componentes e por meio deles podemos realizar as lógicas porém de uma maneira mais visual e automaticamente mais simples de se programar.
                                    Este workshop também foi considerado uma fração da nota na disciplina por alguns professores, abaixo do certificado se encontra o relatório que eu fiz.  
                                </p>

                            </div>
                        </div>
                   
                    </article> 
                    <hr/>
                    <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                        <div>
                            <div className="projects-title--container -certificateTitleContainer">
                                <div>
                                    <h3 className="projects-title -certificate--title">Bolsa de Valores B3 - IFSP IFCiência 2021</h3>
                                    <a href="https://drive.google.com/file/d/1sLqKc5vPhkTZzXWYyWarRrH2yg9lnsRh/view?usp=sharing" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span className="-certificate--span">Palestra (29/10/2021)</span>
                                <div className="certificates-autenticCode--container">
                                    <span className="certificates-autenticCode--span">Não possuí cód. de autenticidade, doc oficial no botão a cima</span>
                                </div>
                                <p>Documento oficial clicando no botão a cima.</p>
                            </div>
                            <div className="bolsaEnsinoImageWrapper">
                                <img src={workshopBolsaValores}></img>
                            </div>
                            <div className="projects-subdescription--container -bolsaEnsinoCertficate">
                                <h3 className="projects-subtitle -certificateSubtitle">Contextualizando</h3>
                                <p>
                                    Resolvi participar deste workshop pois eu tenho interesses em investimentos antes mesmo de conhecer minha paixão no T.I
                                    porém só via alguns poucos vídeos sobre.. então resolvi participar para entender como é o contexto, 
                                    me fez abrir a mente sobre e um dia pretendo aprender ao menos o básico, porém é um jogo para quem possuí uma boa verba não sendo o meu caso atual.. rsrs então fica pra próxima. e.e
                                </p>

                            </div>
                        </div>
                   
                    </article> 
                </div>             
            </div>
        </section>
    )
};
