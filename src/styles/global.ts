import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --blue: #0F52BA;
        --white: #FFFFFF;
        --gray-1: #F9F9F9;
        --gray-2: #EEEEEE;
        --gray-3: #BFBFBF;
        --gray-4: #373737;
        --gray-5: #2C2C2C;
        --black: #000000;
    }

    body {
        background-color: var(--grey-1);
        color: var(--black);
        font-family: 'Montserrat', sans-serif;
    }

    button {
        cursor: pointer;
        border: none;
    }

    a {
        text-decoration: none;
    }

`;
