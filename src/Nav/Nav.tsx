import React from 'react';
import style from './Nav.module.css'
import {Item} from "./Item/Item";
import logoSearch from '../assets/images/search.png'

export const Nav = () => {
    return (
        <div className={style.container}>
            <div className={style.itemContainer}>
                <Item name='Тип события' description='Выберете своё мероприятие'/>
                <Item name='Начало' description='Когда?'/>
                <Item name='Конец' description='Когда?'/>
                <Item name='Количество гостей' description='Кто приедет?'/>
            </div>
            <div className={style.search}>
                <img src={logoSearch} alt=""/>
            </div>
        </div>
    );
};

