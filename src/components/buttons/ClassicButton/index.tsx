//Imports
import React from 'react';
import { StyledClassicButton } from './style';

//Types
type ClassicButtonProps = {
    className?: any;
    name: string;
    route: string;
};

//Component of a feature button in the homepage
export default function ClassicButton(props: ClassicButtonProps) {
    const { className, name, route } = props;

    return (
        <StyledClassicButton className={className} route={route}>
            <h2 className="text-outlined">{name}</h2>
        </StyledClassicButton>
    );
}
