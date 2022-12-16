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
      width: 60%;
      height: 2rem;
      resize: none;
    }
    button {
      margin-top: 5px;
      display: block;
    }
  }

  div {
    padding: 15px 0px 10px 0px;
    border-bottom: 1px solid lightgrey;
    width: 60%;
    overflow: auto;
    p:nth-child(1) {
      margin: 0px 0px 8px 5px;
    }
    p:nth-child(2) {
      margin: 0px 0px 0px 10px;
    }
    button {
      float: right;
      margin-right: 10px;
    }
  }
  
  @media (max-width: 485px) {
    padding: 30px 20px 80px 20px;
    form { 
      textarea {
        width: 100%;
      }
    }
    div {
      width: 100%;
    }
  }
`