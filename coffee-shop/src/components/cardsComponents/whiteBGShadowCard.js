import { Component } from 'react';

import { ColoredBlock } from '../../styledComponents/block';
import CardContent from './cardContent';

class WhiteBGShadowCard extends Component {
    render() {
        const {src, name, country, price} = this.props;
        return (
            <ColoredBlock
                width='220px'
                height='240px'
                background_color='white'
                border_radius='8px'
                box_shadow='12px 12px 20px 1px rgba(0, 0, 0, .2);'
            >
                <CardContent src={src} name={name} country={country} price={price}/>
            </ColoredBlock>
        )
    }
}

export default WhiteBGShadowCard;