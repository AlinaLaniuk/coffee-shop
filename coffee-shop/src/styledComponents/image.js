import styled from 'styled-components';

export const Image = styled.img`
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    src: ${props => props.src};
    alt: ${props => props.alt};
`