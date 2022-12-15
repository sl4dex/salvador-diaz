import styled from 'styled-components'

// background-color: #FF621F;
export const PageContent = styled.div`
  ${props => props.comments ? `
  padding: 30px 100px 20px 100px;
  ` : `
    padding: 30px 100px 80px 100px;
  `}
  background-color: #FDDDDD;
  
  h1 {
    margin-top: 0px;
  }

  hr { border-top: 1px solid #FF621F;}

  @media (max-width: 485px) {
    ${props => props.comments ? `
      padding: 30px 20px 30px 20px;
      ` : `
        padding: 30px 20px 80px 20px;
      `}
    }
`