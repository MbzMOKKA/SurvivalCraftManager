//Imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import ErrorNotFound from '../../pages/ErrorNotFound';
import { StyledAppContainer } from './style';
import Header from '../Header';
import Footer from '../Footer';

//Component of the web application
export default function App() {
    return (
        <StyledAppContainer>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="*" element={<ErrorNotFound />}></Route>
            </Routes>
            <Footer />
        </StyledAppContainer>
    );
}
