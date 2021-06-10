import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home/Home'
import Login from './Login/Login'
import Register from './Register/Register'
import Stores from './Stores/Stores'

export default function User() {
    return (
        
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/stores">
                    <Stores/>
                </Route>
            </Switch>                              
       
    )
}