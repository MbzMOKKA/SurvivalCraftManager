//Imports
import React from 'react';
import { StyledBackButton, StyledNav } from './style';

//Component of the navigation on the left
export default function Nav() {
    return (
        <StyledNav>
            <StyledBackButton route="back">
                <p>Back</p>
            </StyledBackButton>
        </StyledNav>
    );
}
