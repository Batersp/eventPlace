import React from 'react';
import {Header} from "../Header/Header";
import {Main} from "../Main/Main";
import {Footer} from "../Footer/Footer";

export const ContentContainer = () => {
    return (
        <div className='contentContainer'>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
};
