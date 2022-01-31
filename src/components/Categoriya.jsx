import React from 'react';

import AirPods from '../img/AirPods.png'
import Naushniki from '../img/Наушники.png'
import Smartphon from '../img/Смартфоны.png'
import Watch from '../img/Часы.png'
import SmartWatch from '../img/Смарт часы.png'
import PowerBank from '../img/Повер банк.png'
import Bag from '../img/Сумки.png'
import Laptop from '../img/Ноутбуки.png'
import Camera from '../img/камеры.png'

const Categoriya = () => {
    return (
        <div className='cate'>
            <div className="categor">
               <img src={AirPods} alt="" />
               <p>AirPods</p>
            </div>
            <div className="categor">
               <img src={Naushniki} alt="" />
               <p>Наушники</p>
            </div>
            <div className="categor">
               <img src={Smartphon} alt="" />
               <p>Смартфоны</p>
            </div>
            <div className="categor">
               <img src={Watch} alt="" />
               <p>Часы</p>
            </div>
            
            <div className="categor">
               <img src={SmartWatch} alt="" />
               <p>Смарт часы</p>
            </div>
            <div className="categor">
               <img src={PowerBank} alt="" />
               <p>Повер банк</p>
            </div>
            <div className="categor">
               <img src={Bag} alt="" />
               <p>Сумки</p>
            </div>
            <div className="categor">
               <img src={Laptop} alt="" />
               <p>Ноутбуки</p>
            </div>
            <div className="categor">
               <img src={Camera} alt="" />
               <p>Камеры</p>
            </div>
            
        </div>
    );
};

export default Categoriya;