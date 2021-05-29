import React from 'react'
import {useHistory} from 'react-router-dom'
import './Header.css'
import SearchBar from 'material-ui-search-bar';

export default function Header() { 

    const history = useHistory()
    
    return (
        <div id='header'>
            
            <h2 className='logo'>Logo</h2>  
                
            <SearchBar
                onChange={() => console.log('onChange')}
                onRequestSearch={() => console.log('onRequestSearch')}
                style={{
                    boxShadow: 'none',
                    border: '1px solid #dad7d7',
                    display: 'inline-flex',
                    width: '46vw',
                    margin: '4px auto',
                    height:'38px',
                    marginLeft:'-1rem',
                    marginRight:'0rem'
                }}
                className='searchBar'
            />

            <div className='iconsContainer'>
                <div className='countIcon'>0</div>
                <span className="iconify icons" data-icon="akar-icons:heart" data-inline="false"></span>
                <div class="dropdown" style={{display:'inline-block',marginRight:'-5px'}}>
                    {/* <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> */}
                    <span className="iconify icons dropdown-toggle" id='userDropdown' data-bs-toggle="dropdown" data-icon="ant-design:user-outlined" data-inline="false"></span>
                    {/* </button> */}
                    <ul class="dropdown-menu" aria-labelledby="userDropdown">
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li><a class="dropdown-item" href="#">My Orders</a></li>
                        <li><a class="dropdown-item" style={{cursor:'pointer'}} onClick={()=>history.push('/login')}>Logout</a></li>
                    </ul>
                </div>
                
                <div className='countIcon'>0</div>
                <span className="iconify icons" data-icon="ant-design:shopping-cart-outlined" data-inline="false"></span>
            </div>
            <span className="iconify hamburgerIcon" data-icon="radix-icons:hamburger-menu" data-inline="false"></span>
        </div>  
    )
}
