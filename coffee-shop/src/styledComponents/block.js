import styled from 'styled-components';

export const Block = styled.div`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || 'auto'};
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'center'};
    gap: ${props => props.gap};
`