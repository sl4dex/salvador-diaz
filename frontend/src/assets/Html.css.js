import { createGlobalStyle} from 'styled-components'

const Html = createGlobalStyle`
    html {
        font-family: 'Archivo Narrow', sans-serif;
        h1, h2, h3, h4, h5, h6 {
            font-weight: 450;
        }
    }

    // body has by default an unwanted margin of 8px
    body { 
        margin: 0px;
    }
`

export default Html