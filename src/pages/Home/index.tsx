//Imports
import React from 'react';
import SCButton from '../../components/buttons/SCButton';
import logo from '../../assets/images/Survivalcraft2-logo.webp';
import { StyledFeatures, StyledTitle, StyledMain } from './style';

//Component of the homepage
export default function Home() {
    return (
        <StyledMain>
            <StyledTitle>
                <img src={logo} alt="Survivalcraft2 logo" />
                <h1>Manager</h1>
            </StyledTitle>
            <StyledFeatures>
                <SCButton name="Worlds" route="/worlds" />
                <SCButton name="Skins" route="/skins" />
                <SCButton name="Texture packs" route="/textures" />
                <SCButton name="Furniture packs" route="/furnitures" />
                <SCButton name="Settings" route="/settings" />
                <SCButton name="Logs" route="/logs" />
            </StyledFeatures>
        </StyledMain>
    );
}
