import styled from 'styled-components';

export const Text = styled.span`
    font-family: 'Merienda', cursive;
    color: ${props => props.color};
    font-size: ${props => props.font_size || '12px'}; 
`

export const BoldText = styled(Text)`
    font-weight: 700
`