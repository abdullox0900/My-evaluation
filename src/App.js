import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: #F3F8FF;
    }

    ul {
        list-style: none;
    }

    @media only screen and (max-width: 1200px) {
        body::before {
            content: 'Ҳозирча бизда мабил варсия мавжуд эмас 😊';
            position: fixed;
            /* top: 0;
            left: 0;
            right: 0;
            bottom: 0; */
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100vh;
            background-color: #fff;
            z-index: 1111;
        }
    }
`
export default GlobalStyle
