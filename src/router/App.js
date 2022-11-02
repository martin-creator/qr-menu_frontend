import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from 'react';

import Home from '../pages/Home'
import Login from "../pages/Home";


function App(){
    return(
        <BrowserRouter>
        <Switch>
           <Route exact path="/">
            <Home />
           </Route> 
           <Route path="/login">
            <Login />
           </Route> 
        </Switch>
        </BrowserRouter>
    )
}

export default App;