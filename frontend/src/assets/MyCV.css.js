import styled from 'styled-components'

export const MyCVDiv = styled.div`
  img {
      display: block;
  }

  @media (max-width: 485px) {
    h2 { 
      margin-top: 10px;
      margin-bottom: 20px;
    }
  }
`

export const SectionDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  li {
      margin-bottom: 8px;
  }
  li:last-child { 
      margin-bottom: 0px;
  }

  @media (max-width: 485px) {
      flex-direction: column;
      gap: 10px;
      margin-bottom: 20px;
      ul {
          padding-left: 0px;
          list-style-type: none;
      }
      li {
        text-align: justify;
      }
  }
`
