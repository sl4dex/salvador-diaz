import styled from 'styled-components'

export const MyHeader = styled.header`
  display: flex;
  align-items: center;

  @media(max-width: 485px) {
    flex-direction: column;
    justify-content: center;
    padding-bottom: 1rem;
  }
  @media(min-width: 486px) {
    div {margin-left: auto;}
    margin-right: 1rem;
  }
`