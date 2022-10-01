import React from 'react';
import logo from '../../assets/image/Group 2.svg'

export const Header = () => {
    return (
        <div className='header'>
            <div className={'header__container contentContainer'}>
                <a href='' className='header__logo'>
                    <img src={logo} alt="logo"/>
                </a>
                <nav className='header__menu menu'>
                    <ul className='menu__list'>
                        <li className='menu__item'>
                            <a href="" className='menu__link'>HOME</a>
                        </li>
                        <li className='menu__item'>
                            <a href="" className='menu__link'>FEATURES</a>
                        </li>
                        <li className='menu__item'>
                            <a href="" className='menu__link'>SUPPORT</a>
                        </li>
                        <li className='menu__item'>
                            <a href="" className='menu__link'>CONTACT US</a>
                        </li>
                    </ul>

                </nav>
                <div className='header__button'>
                    <a href="" className='button button_blue'>DOWNLOAD</a>
                </div>
            </div>

        </div>
    );
};
