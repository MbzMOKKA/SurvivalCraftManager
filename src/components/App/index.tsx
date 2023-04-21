//Imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { StyledAppContainer } from './style';
import Nav from '../other/Nav';
import BgGrid from '../other/background/BgGrid';
import Home from '../pages/Home';
import ErrorNotFound from '../pages/ErrorNotFound';

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
