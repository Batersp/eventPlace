import React from 'react';
import style from './Header.module.css'
import logo from '../assets/images/лого 2.png'
import logo1 from '../assets/images/лого3.png'
import profile from '../assets/images/profile.png'

export const Header = () => {
    return (
        <div className={style.container}>
            <img className={style.logo} src={logo} alt=""/>
            <div className={style.places}>
                <div className={style.allPlaces}>Все площадки Краснодара</div>
                <div className={style.addPlaces}>+ Добавить площадку</div>
            </div>
            <div className={style.item}>
                <img src={logo1} alt=""/>
                <div className={style.profile}>
                    <div className={style.profileContent}>
                        <div className={style.lines}>
                            <div className={style.line}></div>
                            <div className={style.line}></div>
                            <div className={style.line}></div>
                        </div>
                        <img src={profile} alt=""/>
                    </div>
                </div>
            </div>

        </div>
    );
};

