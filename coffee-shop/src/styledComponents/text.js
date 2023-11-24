import styled from 'styled-components';

export const Text = styled.span`
    font-family: 'Merienda', cursive;
    font-size: ${props => props.font_size || '12px'}; 
`;

export const BoldText = styled(Text)`
    font-weight: 700
`;

export const BlackRegularText = styled(Text)`
    color: black;
`;

export const BlackBoldText = styled(BoldText)`
    color: black;
`;

export const WhiteRegularText = styled(Text)`
    color: white;
`;

export const WhiteBoldText = styled(BoldText)`
    color: white;
`;