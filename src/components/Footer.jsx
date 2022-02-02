import React from 'react';
import {Container} from '@mui/material'
import {Link} from '@mui/material';
import GooglePlay from '../img/Google play.png';
import AppStore from '../img/app store.png';
import Facebook from '../img/иконка фейсбоок.png'
import Telegram from '../img/иконка телеграма.png'
import Instagram from '../img/иконка инстаграма.png'
const Footer = () => {
    return (
        <div className="footer">
            <Container>
              <div className="footer-in">
              <div className="footer-nav">
                
                        <a href="#">
                            Обратная связь
                        </a>
                        <a href="#">
                        О нас
                        </a>
                        <a href="#">
                        Пользовательское соглашение 
                        </a>
                        <a href="#">
                        Помощь
                        </a>
                        <a href="#">
                        Реклама на Sapar.kg
                        </a>
                                    
              </div>
              <div className="saits">
                  <div className="sait">
                      <a href="#">
                          <img src={GooglePlay} alt="" />
                      </a>
                      <a href="#">
                          <img src={AppStore} alt="" />
                      </a>
                      <div className="main-saits">
                          <a href="https://www.facebook.com/">
                              <img src={Facebook} alt="" />
                          </a>
                          <a href="https://www.telegram.com/">
                              <img src={Telegram} alt="" />
                          </a>
                          <a href="https://www.instagram.com/">
                              <img src={Instagram} alt="" />
                          </a>
                      </div>
                  </div>
                      <div className="footer-text">
                          <p>Sapar.kg - бул товарлар, кызматтар, вакансиялар жана жарыялар боюнча акысыз 
                          жайгаштыруу үчүн заманбап онлайн кызматы. Sapar.kg- бул ыңгайлуу классификациясы, жарыяларды
                           берүү үчүн интуитивдик жана ыңгайлуу формасы, акылдуу издөө,
                           колдонуучулардын чексиз аудиториясы бар онлайн-базар.Sapar.kg- сатып алуу, сатуу, оңой.</p>
                      </div>
              </div>
              </div>
            </Container>
        </div>
    );
};

export default Footer;