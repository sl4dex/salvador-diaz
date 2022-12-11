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
    ${props => props.white ? `
        background-color: white;
        color: #FF621F;
        :hover { 
            background-color: #e8e8e8;
            transition: 0.6s;
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
            transition: 0.6s;
        }
        :active {
            background-color: #fe8a58;
            transition: 0.1s;
        }
    `}
    border: 1px solid #e44400;
    }
`