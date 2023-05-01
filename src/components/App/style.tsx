//Imports
import styled from "styled-components";
import background from "../../assets/images/background.jpg";

//Local styles
export const StyledAppContainer = styled.div`
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    ::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(${background});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        animation: animBgImg 40s infinite ease-in-out;
        z-index: -10;
    }
`;
