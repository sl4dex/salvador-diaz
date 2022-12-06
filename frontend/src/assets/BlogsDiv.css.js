import styled from 'styled-components'

export const BlogsDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  grid-row-gap: 3rem;
  grd-auto-rows: minmax(100px, auto);
  
  div {
    background-color: #FF621F;
    color: white;
    padding: 0px 1rem;
  }

`