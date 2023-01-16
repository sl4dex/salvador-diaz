import { createGlobalStyle} from 'styled-components'

const Html = createGlobalStyle`
    html {
        font-family: 'Inter';
        h1 {
            font-weight: 700;
        }
        h2 {font-weight: 500;} 
        h3, h4, h5, h6 {
            font-weight: 450;
        }
        a {
            text-decoration: none;
            transition: 0.5s;
        }
        a:hover { 
            color: #FF621F;
            transition: 0.5s;
        }
    }

    // body has by default an unwanted margin of 8px
    body { 
        margin: 0px;
    }

    @media (max-width: 485px) {
        html { 
            font-size: 14px;
        }
    }
`

export default Html