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
        /* background-color: #F3F8FF; */
    }

    ul {
        list-style: none;
    }

    @media only screen and (max-width: 800px) {
        body::before {
            content: 'Ҳозирча бизда мабил варсия мавжуд эмас 😊';
            position: fixed;
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
