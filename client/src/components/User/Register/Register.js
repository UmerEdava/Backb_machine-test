import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom'
import server from '../../../Server'
import ShoppingIcon from '../../../images/shopping-bg.png'
import SignUpShoppingIcon from '../../../images/signup-shopping4.png'
// npm install --save-dev @iconify/react @iconify-icons/grommet-icons

import './Register.css'

export default function Register() { 

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

    const [registerDetails,setRegisterDetails] = useState()

    const changeHandler = (e) => {
        setRegisterDetails({
            ...registerDetails,
            [e.target.name]: e.target.value
        })
    }

    function submitSignup (e) {
        e.preventDefault()
        console.log('sending',registerDetails)
        let pass = document.getElementById('password').target.value
        let cPass = document.getElementById('cPassword').target.value
        if(pass == cPass){
            axios.post(server+'/register',registerDetails).then((response) => {
                console.log(response)
                if(response.data.userRegistered){
                    localStorage.setItem('backBtoken',response.data.token)
                    localStorage.setItem('backBuserId', response.data.userId)
                    history.push('/')
                }else if(response.data.existingUser){
                    document.getElementById('signupError').textContent = 'User already exists'
                }
            })
        }else{
            document.getElementById('signupError').textContent = "Both passwords doesn't match"
        }
        
    }

    

    const [notConfirm,setNotConfirm] = useState(false)

    // function confirmPassword (e) {
    //     let password = document.getElementById('password').target.value
    //     console.log('two',e.target.value,password)
    //     if(e.target.value != password){
    //         setNotConfirm(true)
    //     }else{
    //         setNotConfirm(false)
    //     }        
    // }
    
    return (
        <>
        <div className='formContainer'>
            <div className='formBox text-left p-4' style={{height:'38rem'}}> 
                <h4 onClick={()=>history.push('/')} style={{cursor:'pointer'}}>BackB Store</h4>
                <p style={{display: 'inline-block'}}>Already a user?</p><Link to='/login'> Log in</Link>
            
                <form onSubmit={submitSignup}>
                <div style={{marginBottom:'1rem'}}>
                    <label for='email' className='loginLabel' style={{marginBottom:'0rem'}}>Full Name</label><br/>
                    <input className='loginInput' name='name' onChange={changeHandler} id='name' type='text' placeholder='Your good name' required='true'/><br/>
                </div>
                <div style={{marginBottom:'1rem'}}>
                    <label for='email' className='loginLabel' style={{marginBottom:'0rem'}}>Email Address</label><br/>
                    <input className='loginInput' name='email' onChange={changeHandler} id='email' type='email' placeholder='you@example.com' required='true'/><br/>
                </div>
                <div style={{marginBottom:'1rem'}}>
                    <label for='password' className='loginLabel' style={{marginBottom:'0rem'}}>Password</label><br/>
                    <input className='loginInput' name='password' onChange={changeHandler} id='password' type='password' placeholder='Enter 6 characters or more' required='true' minLength='6'/><br/>
                </div> 
                <div style={{marginBottom:'1rem'}}>
                    <label for='cPassword' className='loginLabel' style={{marginBottom:'0rem'}}>Confirm Password</label><br/>
                    <input className='loginInput' id='cPassword' type='password' placeholder='Re-enter above password' required='true' minLength='6'/><br/>
                    {notConfirm ? <p>Both passwords are not equal</p> : null}
                </div>                

                <div style={{marginBottom:'1rem'}}>
                    <input style={{marginRight:'5px'}} id='remember' type='checkbox'/>
                    <label className='rememberLabel' for='remember'>Remember me</label>
                </div>

                <p id='signupError' className='text-center' style={{color:'red',marginTop: '-1rem'}}></p>

                <button className='loginButton' type='submit'>Sign Up</button>
                </form>
                <hr/>

                <div id='socialMediaButtons' className='text-center'>
                    <button className='socialMediaButton' style={{border: '1px solid #e10000',color:'#e10000'}}>Google</button>
                    <button className='socialMediaButton' style={{border: '1px solid rgb(72 74 200)',color:'rgb(72 74 200)'}}>Facebook</button>
                </div>
                
            </div>
            <img className='shoppingImage img-fluid' style={{height:'26vw',marginTop:'-34rem'}} src={SignUpShoppingIcon}/>
        </div> 
        </>
    )
}
 