import React from 'react';

import './SkillsScreen.css';

export default function SkillsScreen() {
    return (
        <section id="main-skills--container">
            <div>
                <h1 className="main-title">&lsaquo;Skills&rsaquo;</h1>
                <div className="wrapper-skills">
                    <article className="skill-tec">
                        <img className="icon" src="data:image/png;base64,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" alt="Logo do Java" ></img>
                        <div className="right">
                            <h3 className="title-skill">Java</h3>
                            <progress className="progress-bar" max="100" value="70">70%</progress>
                        </div>
                    </article>                    
                    <article className="skill-tec">
                        <img className="icon" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png" alt="Logo do JavaScript" ></img>
                        <div className="right">
                            <h3 className="title-skill">JavaScript</h3>
                            <progress className="progress-bar" max="100" value="80">80%</progress>
                        </div>
                    </article>
                    <article className="skill-tec">
                        <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt="Logo do HTML5" ></img>
                        <div className="right">
                            <h3 className="title-skill">HTML5</h3>
                            <progress className="progress-bar" max="100" value="90">90%</progress>
                        </div>
                    </article>
                    <article className="skill-tec">
                        <img className="icon" src="https://logodownload.org/wp-content/uploads/2017/04/css-3-logo.png" alt="Logo do CSS3" ></img>
                        <div className="right">
                            <h3 className="title-skill">CSS3</h3>
                            <progress className="progress-bar" max="100" value="70">70%</progress>
                        </div>
                    </article>
                    <article className="skill-tec">
                        <img className="icon" src="https://gitlab.com/uploads/-/system/project/avatar/14519101/react-256.png" alt="Logo do ReacJs" ></img>
                        <div className="right">
                            <h3 className="title-skill">ReactJs</h3>
                            <progress className="progress-bar" max="100" value="75">75%</progress>
                        </div>
                    </article>
                    <article className="skill-tec">
                        <img className="icon" src="https://cdn.iconscout.com/icon/free/png-256/mysql-3628940-3030165.png" alt="Logo do MySQL" ></img>
                        <div className="right">
                            <h3 className="title-skill">MySQL</h3>
                            <progress className="progress-bar" max="100" value="70">70%</progress>
                        </div>
                    </article>
                    <article className="skill-tec">
                        <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Gnulinux.svg/1200px-Gnulinux.svg.png" alt="Logo do GNU/Linux" ></img>
                        <div className="right">
                            <h3 className="title-skill">GNU/Linux</h3>
                            <progress className="progress-bar" max="100" value="90">90%</progress>
                        </div>
                    </article>
                    <article className="skill-tec">
                        <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTim1Q8F1L5j-MqUTl_J_dHHHHeSFmTSz102sZye0U3iNEUdvLMPevqIYCkLzrNk2KioG4&usqp=CAU" alt="Logo do Git" ></img>
                        <div className="right">
                            <h3 className="title-skill">Git</h3>
                            <progress className="progress-bar" max="100" value="65">65%</progress>
                        </div>
                    </article>
                    <article className="skill-tec">
                        <img className="icon" src="https://camo.githubusercontent.com/c5958aac2c6cd8b680061594f9924e2db27abf2acc4717c207c2687bc693de65/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3235362f312a46454539386957696e6c5a42596b78424147384d76412e706e67" alt="Logo do shell bash" ></img>
                        <div className="right">
                            <h3 className="title-skill">ShellScript Bash</h3>
                            <progress className="progress-bar" max="100" value="30">30%</progress>
                            <span>08/2021 até 10/2021</span>
                        </div>
                    </article>
                    <article className="skill-tec">
                        <img className="icon" src="https://cdn.cdnlogo.com/logos/c/27/c.svg" alt="Logo do C#" ></img>
                        <div className="right">
                            <h3 className="title-skill">C#</h3>
                            <progress className="progress-bar" max="100" value="50">50%</progress>
                            <span>06/2021 até 12/2021</span>
                        </div>
                    </article>
                    <article className="skill-tec">
                        <img className="icon" src="https://miro.medium.com/max/300/1*oPEDLkxFxRbrzSBvDSt72g.png" alt="Logo do AspNetCore" ></img>
                        <div className="right">
                            <h3 className="title-skill">Asp.NetCore</h3>
                            <progress className="progress-bar" max="100" value="30">30%</progress>
                            <span>08/2021 até 12/2021</span>
                        </div>
                    </article>
                    <article className="skill-tec">
                        <img className="icon" src="https://cdn.iconscout.com/icon/free/png-256/python-3521655-2945099.png" alt="Logo do Python" ></img>
                        <div className="right">
                            <h3 className="title-skill">Python</h3>
                            <progress className="progress-bar" max="100" value="50">50%</progress>
                            <span>01/2021 até 06/2021</span>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
};
