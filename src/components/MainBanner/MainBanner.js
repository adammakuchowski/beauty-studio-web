import React from 'react';
import './MainBanner.css'
import mainLogo from '../../images/mainLogo.png'

const MainBanner = () => {
    console.log(process.env)

    return (
        <section className='mainBanner'>
            <img src={mainLogo} alt="main logo" className='mainLogo'></img>
            <div className='companyDetails'>
                <h1>{process.env.REACT_APP_MAIN_BANNER_TEST}</h1>
                <p>{process.env.REACT_APP_MAIN_BANNER_SLOGAN}</p>
                <div className='mainBannerBtn'>
                    <a href='#'><span></span>About Me</a>
                    <a href='#'><span></span>My Offer</a>
                </div>
            </div>

        </section>
    )
}

export default MainBanner
