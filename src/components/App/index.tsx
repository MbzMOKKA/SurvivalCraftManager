//Imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import ErrorNotFound from '../../pages/ErrorNotFound';
import { StyledAppContainer } from './style';
import Nav from '../Nav';
import BgGrid from '../background/BgGrid';

//Component of the web application
export default function App() {
    return (
        <StyledAppContainer>
            <BgGrid />
            <Nav />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="*" element={<ErrorNotFound />}></Route>
            </Routes>
        </StyledAppContainer>
    );
}
