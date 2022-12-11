import styled from 'styled-components'

export const CommentsDiv = styled.div`
  padding: 20px 100px 80px 100px;
  background-color: white;
  h2 {
    margin-top: 0px;
  }

  form {
    margin-bottom: 15px;
    
    textarea {
      width: 50%;
      height: 2rem;
      resize: none;
    }
    button {
      margin-top: 5px;
      display: block;
    }
  }

  div {
    padding: 15px 0px;
    border-bottom: 1px solid lightgrey;
    width: 50%;
    
    p:nth-child(1) {
      margin: 0px 0px 8px 0px;
    }
    p:nth-child(2) {
      margin: 0px;
    }
  }
`