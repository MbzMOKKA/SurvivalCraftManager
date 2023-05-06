//Imports
import React, { useEffect, useState } from "react";
import BgSquare from "../BgSquare";
import { StyledGrid } from "./style";
import { bgSquareSize } from "../../../../utils";

//Component of the grid in the background
export default function BgGrid() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const numberOfRows = Math.ceil(windowSize.height / bgSquareSize);
    const numberOfColumns = Math.ceil(windowSize.width / bgSquareSize);
    const numberOfSquares = numberOfRows * numberOfColumns;

    return (
        <StyledGrid>
            {Array.from({ length: numberOfSquares }, (square, index) => {
                const initialDelay = Math.random() * 3;
                return <BgSquare key={index} initialDelay={initialDelay} />;
            })}
        </StyledGrid>
    );
}
