import styled from 'styled-components'

export const BlogFormDiv = styled.div`
  label {
    display: block;
    margin-left: 5px;
  }

  input {
    display: block;
    margin: 5px 0px 10px 0px;
    width: 45%;
  }

  textarea { 
    width: 70%;
    height: 15rem;
    padding: 10px;
    margin: 5px 0px 10px 0px;
  }
  
  div:first-child {
    input {
      padding: 5px;
    }
  }
  
  hr { margin: 0px;}
  
  button { 
    margin-bottom: 20px;
    margin-right: 5px;
  }

  @media (max-width: 485px) {
    input, textarea { 
      width: 95%;
    }
  }
`