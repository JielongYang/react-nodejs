import React from 'react';
import { Route } from 'react-router-dom';
import HelloSSR from './components/HelloSSR';
import List from './components/List';

export default (
    <div>
        <Route path='/' exact component={HelloSSR}></Route>
        <Route path='/list' exact component={List}></Route>
    </div>
)