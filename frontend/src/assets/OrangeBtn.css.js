import styled from 'styled-components'

export const OrangeBtn = styled.button`
    background-color: #FF621F;
    color: white;
    font-size: 20px;
    padding: 10px;
    border: 1px solid #e44400;
    border-radius: 8px;
    :hover { 
        background-color: #e44400;
        transition: 0.6s;
    }
    :active {
        background-color: #fe8a58;
        transition: 0.1s;
    }
`

export const SmallOrangeBtn = styled.button`
    background-color: #FF621F;
    color: white;
    font-size: 15px;
    padding: 6px;
    border: 1px solid #e44400;
    border-radius: 4px;
    :hover { 
        background-color: #e44400;
        transition: 0.6s;
    }
    :active {
        background-color: #fe8a58;
        transition: 0.1s;
    }
`
export const SmallerOrangeBtn = styled.button`
    background-color: #FF621F;
    color: white;
    border: 1px solid #e44400;
    :hover { 
        background-color: #e44400;
        transition: 0.6s;
    }
    :active {
        background-color: #fe8a58;
        transition: 0.1s;
    }
`