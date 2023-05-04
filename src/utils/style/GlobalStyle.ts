//Imports
import { createGlobalStyle } from "styled-components";
import { navWidth } from "..";

//Global styles
export default createGlobalStyle`
    * {
        font-family: 'LithosPro', Arial, sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: white;
    }
    .text-outlined {
        color: white;
        text-shadow:
            -1px -1px 0 #000,
            1px -1px 0 #000,
            -1px  1px 0 #000,
            1px  1px 0 #000;
    }
    a {
        text-decoration: none;
    }
    h1 {
        font-size: 64px;
        text-shadow:
            -2px -2px 0 #000,
            2px -2px 0 #000,
            -2px  2px 0 #000,
            2px  2px 0 #000,
            0px 0px 10px #000;
    }
    h2 {
        font-size: 38px;
        margin: 8px 0px;
    }
    main{
        padding-left: ${navWidth * 100}vw;
        min-height: 100vh;
        display: flex;
    }
`;
