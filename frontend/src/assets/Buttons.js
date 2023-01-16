import styled from 'styled-components'

export const OrangeBtn = styled.button`
    background-color: #FF621F;
    color: white;
    cursor: pointer;
    font-size: 20px;
    padding: 10px;
    border: 1px solid #e44400;
    border-radius: 8px;
    transition: 0.5s;
    :hover { 
        background-color: #e44400;
        transition: 0.5s;
    }
    :active {
        background-color: #fe8a58;
        transition: 0.1s;
    }
`

export const SmallOrangeBtn = styled.button`
    background-color: #FF621F;
    color: white;
    cursor: pointer;
    font-size: 15px;
    padding: 6px;
    border: 1px solid #e44400;
    transition: 0.5s;
    border-radius: 4px;
    :hover { 
        background-color: #e44400;
        transition: 0.5s;
    }
    :active {
        background-color: #fe8a58;
        transition: 0.1s;
    }
`
export const SmallerOrangeBtn = styled.button`
    transition: 0.5s;
    cursor: pointer;
    border: 1px solid #e44400;
    ${props => props.white ? `
        background-color: white;
        color: #FF621F;
        :hover { 
            background-color: #e8e8e8;
            transition: 0.5s;
        }
        :active {
            color: black;
            transition: 0.1s;
        }
    `: `
        background-color: #FF621F;
        color: white;
        :hover { 
            background-color: #e44400;
            transition: 0.5s;
        }
        :active {
            background-color: #fe8a58;
            transition: 0.1s;
        }
    `}
`