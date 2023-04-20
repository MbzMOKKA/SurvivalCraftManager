//Imports
import React from 'react';
import { StyledGenericButton } from './style';

//Types
type SCButtonProps = {
    children: any;
};

//Component of a feature button in the homepage
export default function GenericButton(props: SCButtonProps) {
    const { children } = props;

    return <StyledGenericButton>{children}</StyledGenericButton>;
}
