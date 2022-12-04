import styled from 'styled-components'

// checks props passed from the component and applies the corresponding css
export const NotificationDiv = styled.div`
  ${props => props.type === null && `
    display: none;
  `}

  ${props => props.type === 'success' && `
    background-color: aquamarine;
    color: seagreen;
    border: 1.5px solid seagreen;
  `}
  ${props => props.type === 'error' && `
    background-color: lightpink;
    color: red;
    border: 1.5px solid red;
  `}
  padding: 10px;
  margin-left: 100px;
  width: fit-content;
`