import styled from 'styled-components';

export const Text = styled.span`
    font-family: 'Merienda', cursive;
    color: ${props => props.color};
    font-size: ${props => props.fontSize || '12px'}; 
`