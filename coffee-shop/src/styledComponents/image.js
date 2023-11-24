import styled from 'styled-components';

export const Image = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    src: ${props => props.src};
    alt: ${props => props.alt};
    object-fit: cover
`