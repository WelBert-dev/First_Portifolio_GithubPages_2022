import React from 'react';

import './ProjectsScreen.css';

import VideoUpscaler_with_AI_Real_ESRGAN from './videoUpscaler_with_AI_Real_ESRGAN/VideoUpscaler_with_AI_Real_ESRGAN';
import AudioSummarizingGenerator_with_AI_WebGPT_and_Whisper from './audioSummarizingGenerator_with_AI_WebGPT_and_Whisper/AudioSummarizingGenerator_with_AI_WebGPT_and_Whisper';
import QRCodeGeneratorInLanguageC_and_ScannerWebReact_trabFaculdade_1Semestre from './QRCodeGeneratorInLanguageC_and_ScannerWebReact_trabFaculdade_1Semestre/QRCodeGeneratorInLanguageC_and_ScannerWebReact_trabFaculdade_1Semestre';
import RestauranteIFSP_with_springBoot_and_reactJs_authenticationAndAuthorization from './restauranteIFSP_with_springBoot_and_reactJs_authenticationAndAuthorization/RestauranteIFSP_with_springBoot_and_reactJs_authenticationAndAuthorization';
import CloneAmazon_with_reactJs_and_aspNetCore from './cloneAmazon_with_reactJs_and_aspNetCore/CloneAmazon_with_reactJs_and_aspNetCore';
import CloneNetflix_reactJs_consuming_API_TMDB_B7Web from './cloneNetflix_reactJs_consuming_API_TMDB_B7Web/CloneNetflix_reactJs_ consuming_API_TMDB_B7Web';
import ClinicaAuauMiau_nonFramework_frontendVanilla from './clinicaAuauMiau_nonFramework_frontendVanilla/ClinicaAuauMiau_nonFramework_frontendVanilla';


export default function ProjectsScreen() {

    return (
    <section id="main-projects--container">
        <div>
            <h1 className="main-title">&lsaquo;Projetos&rsaquo;</h1>
            <div className="wrapper-projects">

                <VideoUpscaler_with_AI_Real_ESRGAN/>
                <hr />

                {/* 
                    Primeiro projeto com IA (OpenAI) GPT (Pelo prompt Web) e Whisper (Extrator de áudio em texto "Transcript") 
                    Desenvolvido com base no fluxograma de implementação fornecido pelo canal Rocket Seat no dia 18/05/2023.
                */}
                <AudioSummarizingGenerator_with_AI_WebGPT_and_Whisper/>
                <hr />

                {/*
                    Trabalho da faculdade (ADS) de conclusão da disciplina Programação aonde o principal requisito era desenvolver
                    algo utilizando a linguagem C (Que estavamos estudando), então eu escolhi entender todas camadas as 8 camadas
                    que compreendem um código QR com Libqrencode-dev, além disto também desenvolvi uma API Rest também com C 
                    (Utilizando Mongoose.ws), porém devido ao aumento da complexidade do trabalho resolvi desligar. 
                    Também desenvolvi a camada de apresentação para visualizar a consistência dos resultados utilizando a biblioteca 
                    react-qrcode-reader, porém como não foi possível converter o código QR gerado inicalmente em ASCII para PNG, 
                    essa camada foi utilizada para escanear códigos gerados manualmente em linha de comando utilizando o utilitário 
                    qrencode. Projeto desenvolvido em 05/05/2023.
                */}
                <QRCodeGeneratorInLanguageC_and_ScannerWebReact_trabFaculdade_1Semestre/>
                <hr />

                {/*
                    Trabalho do curso técnico em Informática (IFSP) de conclusão da disciplina de Linguagem e Técnicas de Programação
                    aonde estavamos estudando PHP (Porém eu estava focado em outras tecnologias, então desenvolvi utilizando Spring e 
                    reactJs. O principal requisito era implementar Autenticação e Autorização de usuários, então eu resolvi explicar
                    mais a fundo sobre como a camada de apresentação (react) lída, demonstrando a Autenticação e Autorização a nível 
                    de rota e a nível de componente. Como eu estava aprendendo Spring, não fiz algo tão grandioso no backend rsrs...
                    Projeto desenvolvido em 12/10/2022.
                */}
                <RestauranteIFSP_with_springBoot_and_reactJs_authenticationAndAuthorization/>
                <hr />

                {/*
                    Projeto desenvolvido quando eu estava praticando as tecnologias Web (HTML, CSS e JS) no IFSP, e também ReactJS.
                    Vídeo aula gringa de 9 Horas, também tem Redux na implementação. Apesar de ser API de Mircroservices, foi apenas 2.
                    Projeto desenvolvido em 15/08/2022.
                */}
                <CloneAmazon_with_reactJs_and_aspNetCore/>
                <hr />
                
                {/*
                    Projeto desenvolvido de acordo com a vídeo aula do Bonieky do canal B7Web, apenas Frontend (ReactJs) consumindo
                    a API do TMDB (Que é uma plataforma de ranking de filmes parecido com o IMDB da amazon, aonde é possivel obter várias
                    informações de filmes, como genero, sinopse e até mesmo imagem de capas).
                */}
                <CloneNetflix_reactJs_consuming_API_TMDB_B7Web/>
                <hr />

                {/*
                    Projeto 100% Vanilla sem frameworks, foi trabalho do IFSP aonde eu realizei um paring do semestre anterior, esse
                    projeto anterior foi desenvolvido em Windows Forms (C#) e eu reaproveitei as documentações e requisitos para 
                    mudar essa camada de apresentação, agora utilizando as tecnologias Web (HTML, CSS, JS). 
                    Primeiras animações e uso de persistência client-side LocalStorage.
                */}
                <ClinicaAuauMiau_nonFramework_frontendVanilla/>
            </div>
        </div>
    </section>
    )
};
