import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';
import server from '../../../Server'
import ShoppingIcon from '../../../images/shopping-bg.png'
import { Icon, InlineIcon } from '@iconify/react';
import googleIcon from '@iconify-icons/grommet-icons/google';
import bxlFacebook from '@iconify-icons/bx/bxl-facebook';
import './Login.css'   

export default function Login() { 
    const history = useHistory()

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
                    history.push('/')
                }
            })
        } 

        document.body.style.backgroundImage = "url('https://media.istockphoto.com/vectors/abstract-uneven-backbrond-vector-id1145351600?k=6&m=1145351600&s=612x612&w=0&h=u7RqYXxnZc_Xu1gVLmHDM5S2J5wan8BAjTSZmHYpWIU=')";
        let body = document.body
        body.style.backgroundRepeat = 'no-repeat'
        body.style.backgroundSize = 'cover'
        return () => {
        document.body.style.backgroundImage = "url('')";
        }
    }, [])

    const [loginDetails,setLoginDetails] = useState({
            email:'',
            password:''
        }
    )

    const changeHandler = (e) => {
        setLoginDetails({
            ...loginDetails,
            [e.target.name]: e.target.value
        })
    }

    function loginSubmit (e) {
        e.preventDefault()

        console.log(loginDetails)

        if(loginDetails.email != '' && loginDetails.password != ''){

            axios.post(server+'/login',loginDetails).then((response) => {
                console.log(response)
                if(response.data.validUser){
                    localStorage.setItem('backBtoken',response.data.token)
                    localStorage.setItem('backBuserId',response.data.userId)
                    history.push('/')
                }else if(response.data.incorrect){
                    document.getElementById('loginError').textContent = 'Sorry, invalid credentials'
                    
                }else if(response.data.notUser){
                    document.getElementById('loginError').textContent = "User doesn't exist"
                }
            })

        }else{
            document.getElementById('loginError').textContent = "Please fill the credentials" 
        }
        
    }
    
    return (
        <>
        <div className='formContainer'>
            <div className='formBox text-left p-4' style={{height:'29rem'}}> 
                <h4 onClick={()=>history.push('/')} style={{cursor:'pointer'}}>BackB Store</h4>
                <p style={{display: 'inline-block'}}>Doesn't have an accoun yet?</p><Link to='/register'> Sign Up</Link>
            
                <form onSubmit={loginSubmit}>
                <div style={{marginBottom:'1rem'}}>
                    <label for='email' className='loginLabel' style={{marginBottom:'0rem'}}>Email Address</label><br/>
                    <input className='loginInput' name='email' onChange={changeHandler} id='email' type='email' placeholder='you@example.com'/><br/>
                </div>
                <div style={{marginBottom:'1rem'}}>
                    <label for='password' className='loginLabel' style={{marginBottom:'0rem'}}>Password</label><br/>
                    <input className='loginInput' name='password' onChange={changeHandler} id='password' type='password' placeholder='Enter 6 characters or more'/><br/>
                </div>                

                <div style={{marginBottom:'1rem'}}>
                    <input style={{marginRight:'5px'}} id='remember' type='checkbox'/>
                    <label className='rememberLabel' for='remember'>Remember me</label>
                </div>

                <p id='loginError' className='text-center' style={{color:'red',marginTop: '-1rem'}}></p>

                <button className='loginButton' type='submit'>LOGIN</button>
                </form>
                <hr style={{marginBottom:'0'}}/>
                <p style={{fontSize: '12px',
                           color: '#3f3f3f',
                           textAlign: 'center'
                           }}>or contiue with</p>

                <div id='socialMediaButtons' className='text-center'>
                    <button className='socialMediaButton' style={{border: '1px solid #e10000',color:'#e10000'}}><Icon icon={googleIcon} /> Google</button>
                    <button className='socialMediaButton' style={{border: '1px solid rgb(72 74 200)',color:'rgb(72 74 200)'}}><Icon icon={bxlFacebook} /> Facebook</button>
                </div>
                
            </div>
            <img className='shoppingImage ' src={ShoppingIcon}/>
        </div> 
        </>
    )
}
 