import React from 'react';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import './VideoUpscaler_with_AI_Real_ESRGAN.css';

import video_one_piece_before from '../../../resources/videos/one_piece_upscale_antes.mp4';
import video_one_piece_after from '../../../resources/videos/one_piece_upscale_depois.mp4';
import video_naruto_shippuden_beforeAndAfter from '../../../resources/videos/naruto_shippuden_upscale.mp4'

export default function VideoUpscaler_with_AI_Real_ESRGAN() {
    return (
    <article className="projects-single">
        <div className="projects-right">
            <div className="projects-title--container">
                <div>
                    <h3 className="projects-title">Otimizador de Vídeos com Inteligência Artificial</h3>
                    <a href="https://colab.research.google.com/github/yuvraj108c/4k-video-upscaler-colab/blob/main/4k_Video_Upscaler_Colab_(Real_ESRGAN).ipynb" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                </div>
                <span>O CÓDIGO NÃO É DE MINHA AUTORIA, NÃO É NECESSÁRIO REINVENTAR A RODA</span>
                <p>CÓDIGO DO PROJETO NÃO É DE MINHA AUTORIA, POIS JÁ É PROBLEMA RESOLVIDO</p>
            </div>
            <video className="video-naruto_shippuden_beforeAndAfter-demo-upscale" src={video_naruto_shippuden_beforeAndAfter} type="video/mp4" preload="true" controls></video>
            <div className="video-one-piece-demo-upscale-container">
                <div>
                    <h3 class="projects-subtitle">Vídeo ANTES:</h3>
                    <video src={video_one_piece_before} type="video/mp4" preload="true" controls></video>
                </div>
               <div>
                    <h3 class="projects-subtitle">Vídeo DEPOIS: </h3>
                    <video src={video_one_piece_after} type="video/mp4" preload="true" controls></video>
               </div>
            </div>
            <div className="subContainer-bottom">
                <ul className="projects-description--container">
                    <li>
                        <h3 class="projects-subtitle">Overview</h3>
                        <ul className="projects-frontend--container">
                            <li>ATENÇÃO: Parece complicado, mas tudo isso já está feito. Basta adequar o código fornecido abaixo para as suas necessidades.</li>
                            <li>Não existe uma ferramenta específica para otimizar vídeos, mas existe um macete.</li>
                            <li>O Real-ESRGAN é um modelo utilizado para aprimorar a resolução de imagens, tornando-a mais nítida e detalhada.</li>
                            <li>A entrada dele é imagens, logo, deve-se fragmentar os frames do vídeo que queremos otimizar.</li>
                            <li>Após fragmentar, basta aplicar o upscale do Real-ESRGAN frame a frame do vídeo.</li>
                            <li>Depois de finalizar, devemos remontar o vídeo e o áudio.</li>
                            <br/>
                            <li>BÔNUS: Essa ténica também pode ser aplicada em sprites de games clássicos, melhorando assim a qualidade de imagens dos personagens ou objetos.</li>
                        </ul>
                    </li>
                    <li>
                        <h3 class="projects-subtitle">Adendo</h3>
                        <ul className="projects-frontend--container">
                            <li>Vale lembrar que ele apenas aumenta a escala, ou seja, NÃO adiciona objetos que não existem no quadro.</li>
                            <li>Caso queira preencher esse espaço com detalhes ou objetos a mais, deve-se utilizar outra Inteligência Artificial, como o DALL-E, Midjourney ou Seaart.</li>
                            <li>MAS, saiba que esse processo será MUITO mais custoso computacionalmente, e talvez inviável.</li>
                        </ul>
                    </li>
                    <li>
                        <h3 class="projects-subtitle">Tutorial Mastigado</h3>
                        <ul className="projects-frontend--container">
                            <li>Open Source, ou seja, podemos instalar e executar em ambiente local.</li>
                            <li>Apesar disto, executar em ambiente local exige boa capacidade de hardware.</li>
                            <li>O que não é o meu caso, logo, podemos utilizar as máquinas em nuvem do Google para essa tarefa.</li>
                            <li>Com os hardwares do plano gratuíto, demora-se em média 40 minutos para otimizar 3 minutos de vídeo (360p para 1080p).</li>
                            <li>SIM, é bem demorado, pois estamos otimizando frame a frame.</li>
                            <li>Um vídeo simples tem 30 frames por segundo, logo 30 x 60 x 3 = 5400 imagens em um vídeo simples de 3 minutos.</li>
                            <br/>
                            <li>Passo a Passo (Utilizando computadores em nuvem do google gratuítamente):</li>
                            <li>No link do google colab abaixo, basta enviar o vídeo pelo ícone: pasta em baixo da chave &#62; upload &#62; escolhe o `arquivo.mp4`.</li>
                            <li>Copiar o caminho path do diretório ("content/meu_video.mp4"): após carregar o envio do `arquivo.mp4` &#62; botão direito do mouse nele &#62; `copiar caminho`.</li>
                            <li>Substituí o caminho que está no passo "2. Upscale video", pelo caminho do seu arquivo copiado ("content/meu_video.mp4").</li>
                            <li>Execute os passos em sequência clicando no ícone de play (▶).</li>
                            <li>Obs: Deve-se esperar o passo anterior finalizar, antes de clicar nos próximos plays!</li>
                            <li>Depois que todos os passos finalizar, basta clicar no ícone de atualizar refresh.</li>
                            <li>Pronto, seu arquivo otimizado vai aparecer na listagem, algo como "arquivo_upscaled_1920_1080.mp4".</li>
                            <br/>
                            <li>Execute esses passos no seguinte link: <a className="-linkBoldYellowProjects" href="https://colab.research.google.com/github/yuvraj108c/4k-video-upscaler-colab/blob/main/4k_Video_Upscaler_Colab_(Real_ESRGAN).ipynb" target="_blank">Clique AQUI!</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </article>
    )
};
