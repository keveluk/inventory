import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Clients from './Pages/Clients/index.js';
// import Products from './Pages/Products/index.js';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Clients}/>
            </Switch>
        </BrowserRouter>
    )
}