import React from 'react'
import './CategoriesBanner.css'
import mobileImage from '../../../images/image-1.png'
import laptopImage from '../../../images/image-2.png'
import tvImage from '../../../images/image -3.png'
import beautyToysImage from '../../../images/image-4.png'
import homeKitchenImage from '../../../images/image-5.png'
import allCategories from '../../../images/allCategories.png'

export default function CategoriesBanner() {
    return (
        <div id='categories'>
            <div className='box'>
                <div className='circle'>
                    <img src={mobileImage} style={{height: '44px',marginTop: '8px'}} className='categoryImages'></img>
                </div>
                <p className='categoryName'>Mobiles & tablets</p>
            </div>
            <div className='box'>
                <div className='circle'>
                    <img src={laptopImage} className='categoryImages'></img>
                </div>
                <p className='categoryName'>Electronics & accessories</p>
            </div>   
            <div className='box'>
                <div className='circle'>
                    <img src={tvImage} className='categoryImages'></img>
                </div>
                <p className='categoryName'>TVs & appliances</p>
            </div>
            <div className='box'>
                <div className='circle'>
                    <img src={beautyToysImage} style={{height: '44px',marginTop: '8px'}} className='categoryImages'></img>
                </div>
                <p className='categoryName'>Beauty, Toys & more</p>
            </div>
            <div className='box'>
                <div className='circle'>
                    <img src={homeKitchenImage} style={{height: '49px',marginTop: '2px'}} className='categoryImages'></img>
                </div>
                <p className='categoryName'>Home & Kitchen</p>
            </div>
            <div className='box'>
                <div className='circle'>
                    <img src={mobileImage} style={{height: '44px',marginTop: '8px'}} className='categoryImages'></img>
                </div>
                <p className='categoryName'>Mobiles & tablets</p>
            </div>
            <div className='box'>
                <div className='circle'>
                    <img src={laptopImage} className='categoryImages'></img>
                </div>
                <p className='categoryName'>Electronics & accessories</p>
            </div>   
            <div className='box'>
                <div className='circle'>
                    <img src={tvImage} className='categoryImages'></img>
                </div>
                <p className='categoryName'>TVs & appliances</p>
            </div>
            <div className='box'>
                <div className='circle'>
                    <img src={allCategories} className='categoryImages'></img>
                </div>
                <p className='categoryName'>Mobiles & tablets</p>
            </div>                     
        </div>
    )
}
