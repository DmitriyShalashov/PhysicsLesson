import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Question from './Question';
import Questions from './Questions';

function AppRouter() {
    return ( 
            <Routes>
                <Route path='/' Component={Questions}></Route>
                <Route path='/:id' Component={Question}></Route>
            </Routes>    
    );
}

export default AppRouter;