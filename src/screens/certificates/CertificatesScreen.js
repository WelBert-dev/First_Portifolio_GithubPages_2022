import React, { useEffect, useState } from 'react';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import diplomaTecnicoInformaticaIFSP from '../../resources/images/certificates/diploma-tecnicoInformatica-ifsp.png';

import portariaNormativaCeicP01 from '../../resources/images/certificates/portariaNormativaCeic-parte01.png';
import portariaNormativaCeicP02 from '../../resources/images/certificates/portariaNormativaCeic-parte02.png';

import bolsaEnsinoAmostra from '../../resources/images/certificates/amostraBolsaEnsino.png';
import bolsaEnsinoP02Amostra from '../../resources/images/certificates/bolsaEnsinoP02.png';
import bolsaEnsinoP03Amostra from '../../resources/images/certificates/bolsaEnsinoP03.png';

import ciscoModule01Amostra from '../../resources/images/certificates/ciscoModule01Amostra.png';
import ciscoModule02Amostra from '../../resources/images/certificates/ciscoModule02Amostra.png';

import cursoEmVideoPython3Mundo01 from '../../resources/images/certificates/Python3Mundo1-40-Horas-Certificado-Curso-em-Video.png';

import workshopTvBoxFlisol from '../../resources/images/certificates/flisolTVBox.png';
import workshopLinguagemC from '../../resources/images/certificates/flisolLinguagemC.png';

import workshopAutomacaoIndustrialP01 from '../../resources/images/certificates/workshopAutomacaoIndustrial-IFCiencia.png';
import workshopAutomacaoIndustrialP02 from '../../resources/images/certificates/workshopAutomacaoIndustrial-IFCiencia-parte02.png';

import workshopNodeRed from '../../resources/images/certificates/nodeRed-IoT-ifciencia2021-28-10-2021.png';

import workshopBolsaValores from '../../resources/images/certificates/bolsaDeValores-ifciencia2021-29-10-2021.png';

import cursoFundacBradescJavaDesktop from '../../resources/images/certificates/cursoFundacBradesc-JavaDesktop-certificate.png';
import cursoFundacBradescHTMLAvanc from '../../resources/images/certificates/cursoFundacBradesc-HTMLAvanc-certificate.png';
import cursoFundacBradescCSS from '../../resources/images/certificates/cursoFundacBradesc-CSS3Inova-certificate.png';

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

            <h1 className="main-title -complementaryActivities">&lsaquo;Atividades Complementares para Superior ADS&rsaquo;</h1>

            <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                <div>
                    <div className="projects-title--container -certificateTitleContainer">
                        <div>
                            <h3 className="projects-title -certificate--title">Java Avançado</h3>
                            <a href="https://www.ev.org.br/validar-certificado" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                        </div>
                        <span className="-certificate--span">Fundação Bradesco</span>
                        <div className="certificates-autenticCode--container">
                            <span className="certificates-autenticCode--span">Código de Autenticidade: </span>
                            <span className="certificates-autenticCode--span">5E4882C8-BA82-455F-BACB-4C2BFB14BE94</span>
                        </div>
                        <p>Valide o código de autenticidade clicando no botão a cima</p>
                    </div>
                    <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                        <img src={cursoFundacBradescJavaDesktop}></img>
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
                        <div className="certificates-autenticCode--container">
                            <span className="certificates-autenticCode--span">Código de Autenticidade: </span>
                            <span className="certificates-autenticCode--span">DA64D586-173B-4AB9-B837-B0DE372802C3</span>
                        </div>
                        <p>Valide o código de autenticidade clicando no botão a cima</p>
                    </div>
                    <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
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
                        <div className="certificates-autenticCode--container">
                            <span className="certificates-autenticCode--span">Código de Autenticidade: </span>
                            <span className="certificates-autenticCode--span">BB8AD7E2-7F03-4898-A5A1-61DE77B5E688</span>
                        </div>
                        <p>Valide o código de autenticidade clicando no botão a cima</p>
                    </div>
                    <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                        <img src={cursoFundacBradescCSS}></img>
                    </div>
                </div>
            </article>
            <hr />
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
                        <div className="certificates-autenticCode--container">
                            <span className="certificates-autenticCode--span">Verificar autenticidade SISTEC: </span>
                            <span className="certificates-autenticCode--span">sistec.mec.gov.br/validadenacional</span>
                            <span className="certificates-autenticCode--span certificates-autenticCode--spanBorderTopRadius -diplomaTecInformatica">Código de Autenticação:</span>
                            <span className="certificates-autenticCode--span">40901/99502610CM</span>
                        </div>
                        <p>Validação automática clicando no botão a cima.</p>
                    </div>
                    <div id="ceicInitScroll" className="bolsaEnsinoImageWrapper -maxHeigthNone">
                        <img src={diplomaTecnicoInformaticaIFSP}></img>
                    </div>
                </div>
            </article>  
            <hr/>
            <h1 className="main-title -complementaryActivities">&lsaquo;Participei da Comissão na Instituição Federal&rsaquo;</h1>
            <article className="certificate-single -bolsaEnsinoCertficate">
                    <div>
                        <div className="projects-title--container -certificateTitleContainer">
                            <div>
                                <h3 className="projects-title -certificate--title">IFSP CEIC - Membro</h3>
                                <a href="https://suap.ifsp.edu.br/documento_eletronico/imprimir_documento_pdf/347883/carta/?hash=c70a71e451bbec4c4f11e9f0daf5df06ae0c02eb2d637901ffd435e78f4600a375e066ffb8b2d0ccbd9f11dd47ff6df6e763c69f0d94f82ec0bd3f48af1ce164" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                            </div>
                            <span className="-certificate--span">Instituto Federal de Educação, Ciências e Tecnologias de São Paulo - Campús Salto (IFSP)</span>
                            <span className="-certificate--span">Portaria Normativa SLT nº0045/IFSP</span>
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
                    </div>
                </article>  
                <hr />
                <h1 className="main-title -complementaryActivities">&lsaquo;Ganhei Bolsa Ensino na Instituição Federal&rsaquo;</h1> 
                <article className="certificate-single -bolsaEnsinoCertficate">
                    <div>
                        <div className="projects-title--container -certificateTitleContainer">
                            <div>
                                <h3 className="projects-title -certificate--title">Programação de Computadores</h3>
                                <a href="https://drive.ifsp.edu.br/s/OjG9YuCEPhF3LJt" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                            </div>
                            <span className="-certificate--span">Instituto Federal de Educação, Ciências e Tecnologias de São Paulo - Campús Salto (IFSP)</span>
                            <span className="-certificate--span">Edital 002/2022 - DRG/SLT</span>
                            <div className="certificates-autenticCode--container">
                                <span className="certificates-autenticCode--span">Verifique a autenticidade no botão acima</span>
                            </div>
                            <p>Documento oficial clicando no botão acima.</p>
                        </div>
                        <div className="bolsaEnsinoImageWrapper">
                            <img src={bolsaEnsinoAmostra}></img>
                            <img src={bolsaEnsinoP02Amostra}></img>
                            <img src={bolsaEnsinoP03Amostra}></img>
                        </div>
                    </div>
                </article>  
                <hr/>
                <h1 className="main-title -complementaryActivities">&lsaquo;Atividades Complementares para Técnico em Informática&rsaquo;</h1>
                <article className="certificate-single -bolsaEnsinoCertficate">
                    <div>
                        <div className="projects-title--container -certificateTitleContainer">
                            <div>
                                <h3 className="projects-title -certificate--title">Cybersecurity Essentials Módulo 01</h3>
                                <a href="https://www.netacad.com/portal/user/1040281088/learning-transcript" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                            </div>
                            <span className="-certificate--span">Cisco Systems</span>
                            <span className="-certificate--span">Plataforma NetAcad</span>
                            <div className="certificates-autenticCode--container">
                                <span className="certificates-autenticCode--span">Verifique a autenticidade no botão acima</span>
                            </div>
                            <p>DOWNLOAD da declaração oficial clicando no botão a cima.</p>
                        </div>
                        <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                            <img src={ciscoModule01Amostra}></img>
                        </div>
                    </div>
                </article>  
                <hr />
                <article className="certificate-single -bolsaEnsinoCertficate">
                    <div>
                        <div className="projects-title--container -certificateTitleContainer">
                            <div>
                                <h3 className="projects-title -certificate--title">Cybersecurity Essentials Módulo 02</h3>
                                <a href="https://www.netacad.com/portal/user/1040281088/learning-transcript" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                            </div>
                            <span className="-certificate--span">Cisco Systems</span>
                            <span className="-certificate--span">Plataforma NetAcad</span>
                            <div className="certificates-autenticCode--container">
                                <span className="certificates-autenticCode--span">Verifique a autenticidade no botão acima</span>
                            </div>
                            <p>DOWNLOAD da declaração oficial clicando no botão a cima.</p>
                        </div>
                        <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                            <img src={ciscoModule02Amostra}></img>
                        </div>
                    </div>
                </article>  
                <hr />
                <article className="certificate-single -bolsaEnsinoCertficate">
                    <div>
                        <div className="projects-title--container -certificateTitleContainer">
                            <div>
                                <h3 className="projects-title -certificate--title">Python3 Mundo01 (Módulo 01)</h3>
                                <a href="https://www.cursoemvideo.com/validacao-de-certificado/?codigo=38645-66E2-9" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                            </div>
                            <span className="-certificate--span">Curso em Vídeo - Gustavo Guanabara</span>
                            <span className="-certificate--span">Plataforma Curso Em Video</span>
                            <div className="certificates-autenticCode--container">
                                <span className="certificates-autenticCode--span">Verificar autenticidade manualmente: </span>
                                <span className="certificates-autenticCode--span">cursoemvideo.com/validacao-de-certificado/</span>
                                <span className="certificates-autenticCode--span certificates-autenticCode--spanBorderTopRadius -curoEmVideo">Código de Autenticidade: </span>
                                <span className="certificates-autenticCode--span">38645-66E2-9</span>
                            </div>
                            <p>Validação automática clicando no botão a cima.</p>
                        </div>
                        <div id="cursoEmVideoInitScroll" className="bolsaEnsinoImageWrapper -maxHeigthNone">
                            <img src={cursoEmVideoPython3Mundo01}></img>
                        </div>
                    </div>
                </article>  
                <hr />
                <h1 className="main-title">&lsaquo;WorkShops&rsaquo;</h1>
                <article className="certificate-single -bolsaEnsinoCertficate">
                    <div>
                        <div className="projects-title--container -certificateTitleContainer">
                            <div>
                                <h3 className="projects-title -certificate--title">Descaracterização TVBOX</h3>
                                <a href="https://sistemas.slt.ifsp.edu.br/certificado/?cod=d79ccad1" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                            </div>
                            <span className="-certificate--span">Instituto Federal de Educação, Ciências e Tecnologias de São Paulo - Campús Salto (IFSP)</span>
                            <span className="-certificate--span">IFSP FLISoL 2022</span>
                            <div className="certificates-autenticCode--container">
                                <span className="certificates-autenticCode--span">Verifique a autenticidade no botão acima</span>
                            </div>
                            <p>Documento oficial clicando no botão acima.</p>
                        </div>
                        <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                            <img src={workshopTvBoxFlisol}></img>
                        </div>
                    </div>
                </article>  
                <hr/>
                <article className="certificate-single -bolsaEnsinoCertficate">
                    <div>
                        <div className="projects-title--container -certificateTitleContainer">
                            <div>
                                <h3 className="projects-title -certificate--title">Introdução á Linguagem C</h3>
                                <a href="https://sistemas.slt.ifsp.edu.br/certificado/?cod=6ddf3b8b14" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                            </div>
                            <span className="-certificate--span">Instituto Federal de Educação, Ciências e Tecnologias de São Paulo - Campús Salto (IFSP)</span>
                            <span className="-certificate--span">IFSP FLISoL 2022</span>
                            <div className="certificates-autenticCode--container">
                                <span className="certificates-autenticCode--span">Verifique a autenticidade no botão acima</span>
                            </div>
                            <p>Documento oficial clicando no botão acima.</p>
                        </div>
                        <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                            <img src={workshopLinguagemC}></img>
                        </div>
                    </div>
                </article> 
                <hr/>
                <article className="certificate-single -bolsaEnsinoCertficate">
                    <div>
                        <div className="projects-title--container -certificateTitleContainer">
                            <div>
                                <h3 className="projects-title -certificate--title">Automação industrial (Processos e Programação)</h3>
                                <a href="https://suap.ifsp.edu.br/eventos/baixar_certificado/?hash=024eada9d26dc7e7" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                            </div>
                            <span className="-certificate--span">Instituto Federal de Educação, Ciências e Tecnologias de São Paulo - Campús Salto (IFSP)</span>
                            <span className="-certificate--span">IFSP IFCiência 2022</span>
                            <div className="certificates-autenticCode--container">
                                <span className="certificates-autenticCode--span">Verifique a autenticidade no botão acima</span>
                            </div>
                            <p>DOWNLOAD do Documento oficial clicando no botão acima.</p>
                        </div>
                        <div className="bolsaEnsinoImageWrapper">
                            <img src={workshopAutomacaoIndustrialP01}></img>
                            <img src={workshopAutomacaoIndustrialP02}></img>
                        </div>
                    </div>
                </article> 
                <hr/>
                <article className="certificate-single -bolsaEnsinoCertficate">
                    <div>
                        <div className="projects-title--container -certificateTitleContainer">
                            <div>
                                <h3 className="projects-title -certificate--title">NodeRed: Uma Jornada IoT</h3>
                                <a href="https://drive.google.com/file/d/154osECaHFdjOHc3wWM4VbnbU4lUDbdhq/view?usp=sharing" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                            </div>
                            <span className="-certificate--span">Instituto Federal de Educação, Ciências e Tecnologias de São Paulo - Campús Salto (IFSP)</span>
                            <span className="-certificate--span">IFSP IFCiência 2021</span>
                            <div className="certificates-autenticCode--container">
                                <span className="certificates-autenticCode--span">Verifique a autenticidade no botão acima</span>
                            </div>
                            <p>Documento oficial clicando no botão acima.</p>
                        </div>
                        <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                            <img src={workshopNodeRed}></img>
                        </div>
                    </div>
                </article> 
                <hr/>
                <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                    <div>
                        <div className="projects-title--container -certificateTitleContainer">
                            <div>
                                <h3 className="projects-title -certificate--title">Bolsa de Valores B3</h3>
                                <a href="https://drive.google.com/file/d/1sLqKc5vPhkTZzXWYyWarRrH2yg9lnsRh/view?usp=sharing" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                            </div>
                            <span className="-certificate--span">Instituto Federal de Educação, Ciências e Tecnologias de São Paulo - Campús Salto (IFSP)</span>
                            <span className="-certificate--span">IFSP IFCiência 2021</span>
                            <div className="certificates-autenticCode--container">
                                <span className="certificates-autenticCode--span">Verifique a autenticidade no botão acima</span>
                            </div>
                            <p>Documento oficial clicando no botão acima.</p>
                        </div>
                        <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                            <img src={workshopBolsaValores}></img>
                        </div>
                    </div>
                </article> 
            </div>             
        </div>
    </section>
    )
};
