import styled from 'styled-components'

export const MyNav = styled.nav`
${props => props.dropdown ? `
  margin-top: 10px;
  margin-bottom: 10px;
  button{
    position: relative;
    background-color: white;
    background-image: url("https://img.icons8.com/ios/50/null/top-menu.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    height: 30px;
    width: 30px;
  }
  ul{
    transition: 0.5s;
    position: absolute;
    margin: 5px 0px 0px 0px;
    padding: 10px 10px;
    list-style-type: none;
    background-color: #FF621F;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.3);
  }
  li {padding-bottom: 5px;}
  li:last-child {padding-bottom: 0px;}
  a {
    color: white;
    font-size: 1.25rem;
  }
  a:hover, a:active {
    color: black;
  }
`: `
  display: flex;
  align-items: center;
  
  ::before, ::after {
    display: inline-block;
    content: '';
    width: 100px;
    max-width: 100px;
  }
  
  padding: 10px;
  white-space: nowrap;

  li {
    display: inline-block;
  }

  a {
    color: black;
    text-align: center;
    padding: 15px 15px; // top right bottom left
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
  }
  
  a:hover {
    color: #FF621F;
    transition: 0.6s;
  }
  
  a:active {
    background-color: #FF621F;
    color: white;
  }
  ul {padding 0px}
`
}`