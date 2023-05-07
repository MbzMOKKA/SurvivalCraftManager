//Imports
import React, { useEffect, useState } from "react";
import { StyledContainer } from "./style";
import LoadingDot from "../LoadingDot";

//Types
type LoadingDotsProps = {
    className?: any;
};

//Component of loading dots
export default function LoadingDots(props: LoadingDotsProps) {
    const { className } = props;
    const [activeDot, setActiveDot] = useState(0);
    const dots = [0, 1, 2, 3, 4];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveDot((prev) => (prev + 1 >= dots.length ? 0 : prev + 1));
        }, 250);
        return () => {
            clearInterval(interval);
        };
    }, [dots.length]);

    return (
        <StyledContainer className={className}>
            {dots.map((dot, index) => {
                return <LoadingDot active={index === activeDot} />;
            })}
        </StyledContainer>
    );
}
