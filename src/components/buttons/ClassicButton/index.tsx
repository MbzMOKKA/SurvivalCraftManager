//Imports
import React from 'react';
import LinkButton from '../LinkButton';

//Types
type ClassicButtonProps = {
    name: string;
    route: string;
};

//Component of a feature button in the homepage
export default function ClassicButton(props: ClassicButtonProps) {
    const { name, route } = props;

    return (
        <LinkButton route={route}>
            <h2 className="text-outlined">{name}</h2>
        </LinkButton>
    );
}
