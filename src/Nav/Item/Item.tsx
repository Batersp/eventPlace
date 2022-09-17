import React from 'react';
import style from './Item.module.css'

type PropsType = {
    name: string
    description: string
}

export const Item: React.FC<PropsType> = ({name,description}) => {
    return (
        <div className={style.container}>
            <div className={style.name}>{name}</div>
            <div className={style.description}>{description}</div>

        </div>
    );
};

