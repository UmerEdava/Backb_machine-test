import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home/Home'

export default function User() {
    return (
        
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
            </Switch>                              
       
    )
}