import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    body {
        width: 600px;
        height: 700px;
        border: 1px solid #b2bec3;
        margin: 0 auto;
        margin-top: 100px;
    }
    
`;

export default GlobalStyle;