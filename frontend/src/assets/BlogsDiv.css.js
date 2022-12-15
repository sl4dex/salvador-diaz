import styled from 'styled-components'

export const BlogsDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  grid-row-gap: 3rem;
  grd-auto-rows: minmax(100px, auto);
  
  h3 {
    margin: 0px 0px 5px 0px;
  }

  div {
    position: relative;
    padding: 1rem;
    background-color: #FF621F;
    color: white;
    p {
      margin: 0px 0px 8px 0px;
    }
    p:nth-child(3) {
      margin-bottom: 30px;
    }
    button { 
      position: absolute;
      bottom: 10px;
      right: 30px;
    }
  }

  @media (max-width: 485px) { 
    grid-template-columns: 1fr;
  }
`