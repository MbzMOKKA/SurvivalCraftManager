//Imports
import React from 'react';
import logo from '../../../assets/images/Survivalcraft2-logo.webp';
import { StyledFeatures, StyledTitle, StyledMain } from './style';
import ClassicButton from '../../buttons/FeatureButton';

//Component of the homepage
export default function Home() {
    return (
        <StyledMain>
            <StyledTitle>
                <img src={logo} alt="Survivalcraft2 logo" />
                <h1>Manager</h1>
            </StyledTitle>
            <StyledFeatures>
                <ClassicButton name="Worlds" route="/worlds" />
                <ClassicButton name="Skins" route="/skins" />
                <ClassicButton name="Texture packs" route="/textures" />
                <ClassicButton name="Furniture packs" route="/furnitures" />
                <ClassicButton name="Settings" route="/settings" />
                <ClassicButton name="Logs" route="/logs" />
            </StyledFeatures>
        </StyledMain>
    );
}
