import React from 'react'
import Image from '../../../images/Mask.png'
import iphoneImage from '../../../images/iphone_12_PNG22.png'
import macAdvertisement from '../../../images/mac-air-advertisement.png'
import sonyBraviaBanner from '../../../images/sonyBravia-banner.png'
import iphoneBanner from '../../../images/banner.png'
import buyIcon from '../../../images/buyIcon.png'
import './Main-Banner.css'

export default function MainBanner() {
    return (
        <div>
            {/* <img id='bannerImage' src={Image}></img>
            <div className="content-left">
             <h1>GET THE NEW IPHONE 12</h1>
            </div> */}
                
                <div id="carouselExampleCaptions" class="carousel slide carousel-fade mainBanner" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={iphoneBanner} class="d-block w-100 bannerImage img-fluid" alt="..."/>
                            <div class="carousel-caption text-left d-none d-md-block" style={{left:'8%',top:'5rem'}}>
                                <button className='btn btn-warning btn-lg buyButton' style={{color: '#0302FE'}}>Buy Now 
                                <img src={buyIcon} style={{marginLeft:'10px'}}></img></button>
                                {/* <h1 className='bannerCaption'>GET THE NEW IPHONE 12 PRO</h1> */}
                                {/* <p className='captionDescription'>A transportive triple-camera system that adds tons of capability without<br/> complexity.</p> */}
                            </div>
                            {/* <div className='productImages'>
                                <img src={iphoneImage}></img>
                            </div> */}
                        </div>
                        <div class="carousel-item">
                            <img src={macAdvertisement} className="d-block w-100 bannerImage img-fluid" alt="..."/>
                            
                        </div>
                        <div class="carousel-item">
                            <img src={sonyBraviaBanner} className="d-block w-100 bannerImage img-fluid" alt="..."/>
                            
                        </div> 
                    </div>
                    
                </div>
                        
        </div>
    )
}
