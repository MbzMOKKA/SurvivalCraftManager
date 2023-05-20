//Imports
import { createGlobalStyle } from "styled-components";
import { colors, navWidth } from "..";

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
    h3 {
        font-size: 20px;
        font-weight: normal;
    }
    main{
        padding: 20px;
        padding-left: calc(${navWidth * 100}vw + 20px);
        min-height: 100vh;
        display: flex;
    }
    .sc-box {
        background-color: rgba(0, 0, 0, 0.85);
        border-width: 2px;
        border-color: ${colors.bordered.gray.background};
        border-style: solid;
        padding: 10px;
    }
    .scrollable {
        overflow-x: hidden;
        overflow-y: scroll;
    }
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${colors.bordered.gray.background};
    }
    ::-webkit-scrollbar-thumb:hover {
        background: white;
    }
`;
