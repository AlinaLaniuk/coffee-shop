import { Link } from "react-router-dom";
import styled from 'styled-components';

export const NavbarLink = styled(Link)`
font-family: 'Merienda', cursive;
font-size: 12px; 
text-align: center;
color: ${props => props.color}; 
white-space: ${props => props.white_space || ''};
&:hover,
&:focus{
   transform: scale(1.2);
}
&:active{
   color: grey;
}`;