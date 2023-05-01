//Imports
import React from "react";
import { Routes, Route } from "react-router-dom";
import { StyledAppContainer } from "./style";
import Nav from "../other/Nav";
import BgGrid from "../other/background/BgGrid";
import Home from "../../pages/Home";
import ErrorNotFound from "../../pages/ErrorNotFound";
import Settings from "../../pages/Settings";

//Component of the web application
export default function App() {
    return (
        <StyledAppContainer>
            <BgGrid />
            <Nav />
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
                <Route path="*" element={<ErrorNotFound />} />
            </Routes>
        </StyledAppContainer>
    );
}
