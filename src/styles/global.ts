import { createGlobalStyle } from "styled-components";

 export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100vh;
    }

    body {
        background-color: #000000;
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .container {
        width: 90vw;
        max-width: 700px;
    }

    @media (min-width: 700px) {
        #root {
            font-size: 62.5%;
        }
    }

 `;
