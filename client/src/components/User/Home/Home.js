import React from 'react'
import Header from '../Header/Header'
import CategoriesBanner from '../Categories-Banner/CategoriesBanner'
import MainBanner from '../Main-Banner/MainBanner'
import PopularProducts from '../PopularProducts/PopularProducts'
import poster from '../../../images/67743d405e56cb1d41a9c41c60afcbcd.png'
import miLedAd1 from '../../../images/Mi-TV-4A-Banner.png'
import miLedAd2 from '../../../images/Xiaomi-Mi-TV-4-Buy-Online.png'
import './Home.css'

export default function Home() {
    return (    
        <div id='home'>
            <Header/>
            <CategoriesBanner/> 
            <MainBanner/>
            <PopularProducts/>
            <div className='adContainer'>
                <img src={poster} className='img-fluid ads'></img>
                <img src={miLedAd1} className='img-fluid ads'></img>
                <img src={miLedAd2} className='img-fluid ads'></img>
                <img src={miLedAd1} className='img-fluid ads'></img>
            </div>
        </div>
    )
}