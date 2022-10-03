import React from 'react';
import logo from '../../assets/image/mainBlock.svg'
import logoVideo from '../../assets/image/video.svg'

export const Main = () => {
    return (
        <main className='main'>
            <section className='get-started'>
                <div className='get-started__container contentContainer'>
                    <div className='get-started__content'>
                        <div className='get-started__block-text block-text'>

                            <h1 className='block-text__title block-text__title_blue'>Take care of yours family’s <span>health</span>.</h1>
                            <div className='block-text__text'>All in one destination for COVID-19 health queries.  Consult 10,000+ health workers about your concerns.</div>
                            <a href='' className='block-text__button button'>GET STARTED</a>

                        </div>
                        <a href='' className='get-started__video video-get-started'>
                            <div className='video-get-started__icon'>
                                <img src={logoVideo} alt=""/>
                            </div>
                        </a>
                    </div>
                    <div className='get-started__image'>
                        <img src={logo} alt="main image"/>
                    </div>
                </div>
            </section>
        </main>
    );
};

