import styled from 'styled-components'

export const NavDiv = styled.div`
display: flex;
align-items: center;
margin: 15px 100px 10px 100px; // clockwise top right bottom left
padding: 10px;
white-space: nowrap;
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
    transition: 0.6s;
  }
  
  /* Add a color to the active/current link */
  a:active {
    background-color: #FF621F;
    color: white;
  }

  @media (max-width: 485px) {
    justify-content: center;
    margin: 15px 15px 15px 15px;
    padding: 0px;
    a {
        padding: 5px 10px;
    }
  }
`