import React, { useState,useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import './Header.css'
import SearchBar from 'material-ui-search-bar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios'
import server from '../../../Server'

export default function Header() { 

    const history = useHistory()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {

        const userToken = localStorage.getItem('backBtoken')
        if(userToken){
            axios.get(server+'/userVerification',{
                headers:{
                    "x-access-token":userToken
                }
            }).then((response) => {
                console.log('for verification',response)
                if(response.data.verified){
                    console.log('change')
                    setIsLoggedIn(true)
                }
            })
        } 
        
    }, [])

    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorEl2, setAnchorEl2] = useState(null);
    
    const handleClick = (event) => {
        console.log('hai')
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleClick2 = (event) => {
        console.log('hai')
      setAnchorEl2(event.currentTarget);
    };
  
    const handleClose2 = () => {
      setAnchorEl2(null);
    };

    function logout () {
        localStorage.removeItem('backBtoken')
        localStorage.removeItem('backBtokenUserId')
        history.push('/login')
    }
    
    return (
        <div id='header'>
            
            <h2 className='logo' onClick={()=>history.push('/')} style={{cursor:'pointer'}}>Logo</h2>  
                
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

            {isLoggedIn == true ? 
            <div style={{display: 'inline-block',float: 'right'}}>
            <div className='iconsContainer'>
                <div className='countIcon'>0</div>
                <span className="iconify icons" data-icon="akar-icons:heart" data-inline="false"></span>
                
                <button onClick={handleClick} className='userButton' id='userButton'>
                    <span className="iconify icons" id='userDropdown' data-icon="ant-design:user-outlined" data-inline="false"></span>
                </button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Orders</MenuItem>
                    <MenuItem onClick={handleClose}>My Account</MenuItem>
                    <MenuItem onClick={logout}>logout</MenuItem>
                        
                </Menu>    
                
                <div className='countIcon'>0</div>
                <span className="iconify icons" data-icon="ant-design:shopping-cart-outlined" data-inline="false"></span>
            </div>
            </div>
            :<div style={{display: 'inline-block',float: 'right'}}><button id='loginButton' onClick={()=>history.push('/login')}>Register / Login</button></div>
            }
            <button className='userButton' style={{float:'right'}} onClick={handleClick2}>
                <span className="iconify hamburgerIcon" data-icon="radix-icons:hamburger-menu" data-inline="false"></span>
            </button>
            
            <Menu
                    id="simple-menu"
                    anchorEl={anchorEl2}
                    keepMounted
                    open={Boolean(anchorEl2)}
                    onClose={handleClose}
                >
                    {isLoggedIn ? 
                    <>
                    <MenuItem onClick={handleClose2}>Orders</MenuItem>
                    <MenuItem onClick={handleClose2}>My Account</MenuItem>
                    <MenuItem onClick={logout}>logout</MenuItem>
                    </>:
                    <>
                    <MenuItem onClick={()=>history.push('/register')}>Register</MenuItem>
                    <MenuItem onClick={()=>history.push('/login')}>Login</MenuItem>
                    </>
                }
                        
            </Menu>  
        </div>  
    )
}
