import styled from 'styled-components'
// this css is mobile first, because it assumes is mobile, then checks if the screen is bigger than 485px
export const MemesDiv = styled.div`
  img {
    width: 100%;
    margin-bottom: 20px;
  }

  @media (min-width: 485px) {
    display: block;
    margin-top: 40px;
  }
`