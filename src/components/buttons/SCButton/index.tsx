//Imports
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledSCButton } from './style';

//Types
type SCButtonProps = {
    name: string;
    route: string;
};

//Component of a feature button in the homepage
export default function SCButton(props: SCButtonProps) {
    const { name, route } = props;

    return (
        <StyledSCButton>
            <Link to={route}>
                <h2 className="text-outlined">{name}</h2>
            </Link>
        </StyledSCButton>
    );
}
