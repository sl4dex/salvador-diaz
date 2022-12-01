import styled from 'styled-components'

export const HContentDiv = styled.div`
    margin: 30px 120px 0px 120px; // clockwise top right bottom left
    h2 { 
        font-size: 35px;
        font-weight: 300;
        margin-bottom: 10px;
    }

    a {
        text-decoration: none;
    }
    a:hover { 
        color: #FF621F;
    }

    hr {
        border-top: 1px solid #FF621F;
        margin-left: 10px;
        margin-right: 10px;
    }

    // left padding of bullets
    ul{
        padding-left: 30px;
    }
`