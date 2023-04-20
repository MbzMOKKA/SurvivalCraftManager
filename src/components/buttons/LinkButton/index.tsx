//Imports
import React from 'react';
import ActionButton from '../ActionButton';
import { useNavigate } from 'react-router-dom';

//Types
type LinkButtonProps = {
    children: any;
    route: string;
    replace?: boolean;
};

//Component of a feature button in the homepage
export default function LinkButton(props: LinkButtonProps) {
    const { children, route, replace = false } = props;
    const navTo = useNavigate();

    return (
        <ActionButton
            onClick={() => {
                navTo(route, { replace });
            }}
        >
            {children}
        </ActionButton>
    );
}
