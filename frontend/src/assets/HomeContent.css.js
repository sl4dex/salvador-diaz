import styled from 'styled-components'

export const HContentDiv = styled.div`
    margin: 30px 120px 0px 120px; // clockwise top right bottom left
    padding 0px 0px 80px 0px;
    
    h1 { 
        font-size: 40px;
    }
    h2 { 
        font-size: 35px;
        font-weight: 300;
        margin-bottom: 10px;
    }

    .homeOrangeButtons { 
        display: flex;
        gap: 10px;
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

    @media (max-width: 485px) { 
        margin: 30px 20px 0px 20px;
        .homeOrangeButtons {
            justify-content: center;
            margin-bottom: 25px;
    }
`