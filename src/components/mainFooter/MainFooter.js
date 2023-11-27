import React from 'react';

import { AiFillGithub } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';

import './MainFooter.css';

export default function MainFooter() {

    return (
        <div>
        <div className='footer-description'>
          <p>Site desenvolvido pelo Wellison Bertelli, código completo no github! ;D</p>
          <p>Redes sociais abaixo, apenas clique no Icon <span>✓</span></p>
        </div>
        <div className='footer-icons'>
          <div className='footer-icons--click'>
            <a href="https://www.github.com/WelBert-dev" target="_blank"><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/wellison-bertelli-2191ba204" target="_blank"><AiFillLinkedin /></a>
            <a href="https://www.instagram.com/lunatic_bertelli/" target="_blank"><AiFillInstagram /></a>
            <a href="https://web.facebook.com/wellison.bertelli.7" target="_blank"><AiFillFacebook /></a>
            <a href="https://api.whatsapp.com/send/?phone=%2B5511942989935&text&type=phone_number&app_absent=0" target="_blank"><IoLogoWhatsapp /></a>
          </div>
        </div>
        <div className='footer-copyright'>
            <h3>Copyright ©2022-present.</h3>
            <h3>by: Wellison Bertelli.</h3>
        </div>
      </div>
    )
};
