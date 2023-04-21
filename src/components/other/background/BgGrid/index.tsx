//Imports
import React from 'react';
import BgSquare from '../BgSquare';
import { StyledGrid } from './style';
import { bgSquareSize } from '../../../../utils/globalConstants';

//Component of the grid in the background
export default function BgGrid() {
    const numberOfRows = Math.ceil(window.innerHeight / bgSquareSize);
    const numberOfColumns = Math.ceil(window.innerWidth / bgSquareSize);
    const numberOfSquares = numberOfRows * numberOfColumns;

    const squares = Array.from({ length: numberOfSquares }, (_, i) => {
        const initialDelay = Math.random() * 3;
        return <BgSquare key={i} initialDelay={initialDelay} />;
    });

    return <StyledGrid>{squares}</StyledGrid>;
}
