import styled from 'styled-components';

export const Button = styled.button`
    height: 30px;
    border-radius: 3px;
`

export const EmptyButton = styled(Button)`
    width: 120px;
    border: 1px solid white;
`

export const WhiteButtonWithShadow = styled(Button)`
    width: 120px;
    background-color: white;
    box-shadow: 12px 12px 20px 1px rgba(0, 0, 0, .2);
`