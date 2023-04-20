//Imports
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledLinkButton } from './style';

//Types
type LinkButtonProps = {
    className?: any;
    children: any;
    route: string;
    replace?: boolean;
};

//Component of a feature button in the homepage
export default function LinkButton(props: LinkButtonProps) {
    const { className, children, route, replace = false } = props;
    const navTo = useNavigate();

    return (
        <StyledLinkButton
            className={className}
            onClick={() => {
                route === 'back' ? navTo(-1) : navTo(route, { replace });
            }}
        >
            {children}
        </StyledLinkButton>
    );
}
