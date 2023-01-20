import styled from 'styled-components'

// checks props passed from the component and applies the corresponding css
export const NotificationDiv = styled.div`
  position: fixed;
  padding: 10px;
  margin-left: 100px;
  width: fit-content;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.3);
  ${props => props.type === null && `
    display: none;
  `}
  ${props => props.type === 'success' && `
    background-color: aquamarine;
    color: seagreen;
    border: 1.5px solid seagreen;
    animation: fadeIn 1s;
  `}
  ${props => props.type === 'error' && `
    background-color: lightpink;
    color: red;
    border: 1.5px solid red;
    animation: fadeIn 1s;
  `}
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`