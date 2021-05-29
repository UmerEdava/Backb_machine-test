import React from 'react'
import './Header.css'
import SearchBar from 'material-ui-search-bar';

export default function Header() { 

    const style = {
  
    //   // Adding media querry..
    //   '@media (max-width: 500px)': {
    //     display: 'none',
    //   },
        
              

    };
    
    return (
        <div id='header'>
            
            <h2 className='logo'>Logo</h2>  
                
            <SearchBar
                onChange={() => console.log('onChange')}
                onRequestSearch={() => console.log('onRequestSearch')}
                style={{
                    margin: '4px auto', 
                    width: '30rem',
                    display: 'inline-flex',
                    border: '1px solid #dad7d7',
                    boxShadow: 'none',
                    height:'38px',
                    marginLeft:'-3rem',
                    marginRight:'-5rem'
                }}
                id='searchBar'
            />

            <div className='iconsContainer'>
                <span className="iconify icons" data-icon="akar-icons:heart" data-inline="false"></span>
                <span className="iconify icons" data-icon="ant-design:user-outlined" data-inline="false"></span>
                <span className="iconify icons" data-icon="ant-design:shopping-cart-outlined" data-inline="false"></span>
            </div>
            <span className="iconify hamburgerIcon" data-icon="radix-icons:hamburger-menu" data-inline="false"></span>
        