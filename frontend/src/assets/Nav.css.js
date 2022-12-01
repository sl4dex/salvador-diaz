import styled from 'styled-components'

export const NavDiv = styled.div`
margin: 15px 0px 10px 100px; // clockwise top right bottom left
padding: 10px;
a {
    color: black;
    text-align: center;
    padding: 15px 15px; // top right bottom left
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
  }
  
  /* Change the color of links on hover */
  a:hover {
    color: #FF621F;
  }
  
  /* Add a color to the active/current link */
  a:active {
    background-color: #FF621F;
    color: white;
  }
`