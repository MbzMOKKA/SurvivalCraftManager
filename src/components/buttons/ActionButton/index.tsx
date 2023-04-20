//Imports
import React from 'react';
import GenericButton from '../GenericButton';

//Types
type LinkButtonProps = {
    children: any;
    onClick: () => void;
};

//Component of a feature button in the homepage
export default function LinkButton(props: LinkButtonProps) {
    const { children, onClick } = props;

    return (
        <GenericButton>
            <button onClick={onClick}>{children}</button>
        </GenericButton>
    );
}
