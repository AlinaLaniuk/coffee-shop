import styled from 'styled-components';

export const Input = styled.input`
    width: ${props => props.width};
    height: 30px;
    border-radius: 3px;
    border: none;
    padding-left: 5px;
    &::placeholder {
        font-family: 'Merienda', cursive;
        font-size: '14px'
        text-align: center;
        color: rgba(0, 0, 0, .5)
}
`

export const InputWithShadow = styled(Input)`
    box-shadow: 12px 12px 20px 1px rgba(0, 0, 0, .2);
`