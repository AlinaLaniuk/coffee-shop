import { Component } from 'react';

import { ColoredBlock } from '../../styledComponents/block';
import CardContent from './cardContent';

class TransparentBGCard extends Component {
    render() {
        const {src, name, country, price} = this.props;
        return (
            <ColoredBlock
                width='220px'
                height='240px'
                background_color='rgba(255, 255, 255, 0.5)'
                border_radius='8px'
            >
                <CardContent src={src} name={name} country={country} price={price}/>
            </ColoredBlock>
        )
    }
}

export default TransparentBGCard;