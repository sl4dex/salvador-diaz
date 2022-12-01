import { createGlobalStyle} from 'styled-components'

const Html = createGlobalStyle`
    html {
        margin-bottom: 80px;
        font-family: 'Archivo Narrow', sans-serif;
        h1 {
            font-weight: 450;
        }
    }

    // body has by default an unwanted margin of 8px
    body { 
        margin: 0px;
    }
`

export default Html