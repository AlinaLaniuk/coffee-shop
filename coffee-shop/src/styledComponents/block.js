import styled from 'styled-components';

export const Block = styled.div`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || 'auto'};
    display: flex;
    position: relative;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify_content || 'center'};
    align-items: ${props => props.align_items || 'center'};
    gap: ${props => props.gap};
`;
export const AbsoluteBlock = styled(Block)`
    position: absolute;
    top: ${props => props.top || '0'};
    left: ${props => props.left || '0'};
    right: ${props => props.right || '0'};
    bottom: ${props => props.bottom || '0'};
    z-index: ${props => props.z_index};
`;

export const ColoredBlock = styled(Block)`
    background-color: ${props => props.background_color};
    border-radius: ${props => props.border_radius};
`;

export const VerticalSeparator = styled(Block)`
    width: 1px;
`;

export const HorizontalSeparator = styled(Block)`
    height: 1px;
`;