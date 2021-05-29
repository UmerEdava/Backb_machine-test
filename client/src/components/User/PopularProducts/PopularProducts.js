import React from 'react'
import './PopularProducts.css'
import image from '../../../images/sonyBravia-banner.jpg'

export default function PopularProducts() {
    
    return (
        <div id='popularProducts'>
            
            <div className='sectionHeader'>
                <h2 className='sectionHead'>Popular Products</h2>
                <p className='viewMore'>VIEW MORE</p>  
            </div>
            <div className='productsRow' id='scrollingContainer'> 
                <div className='productCard'>

                </div>
                <div className='productCard'>

                </div>
                <div className='productCard'>

                </div>
                <div className='productCard'>

                </div>
                <div className='productCard'>

                </div>
                <div className='productCard'>

                </div>
                <div className='productCard'>

                </div>
                <div className='productCard'>

                </div>

            </div>
            
        </div>
    )
}
