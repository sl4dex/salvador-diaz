import styled from 'styled-components'

// hace que los elementos hijos se alineen en una fila (en este caso la imagen y el h1)
export const OrangeWelcome = styled.div`
    display: flex;

    img {
        margin: 0px 30px 0px 100px;
        width: 200px;
    }

    .title-and-links { 
        padding: 20px 0px 0px 0px;
        a {
            color: white;
            padding: 0px 10px;
        }
        a:hover { 
            color: black;
            transition: 0.6s;
        }
    }

    padding: 15px 0px 30px; // clockwise top right bottom left
    background-color: #FF621F;    
    color: white;
    // h1 has by default an unwanted top margin
    h1 {
        margin: 0px 0px 15px 0px;
        font-size: 50px;
    }
`