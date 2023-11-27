import { Component } from 'react';

import { Block, ColoredBlock } from '../styledComponents/block';
import { Image } from '../styledComponents/image';
import Line from './line';

class Beans extends Component {
    render() {
        const line = <Line width='60px' color={this.props.color} />;
        return (
            <Block
                width='200px'
                gap='25px'>
                {line}
                <Image src={`./icons/coffee-beans-fill-${this.props.color}.png`} alt='beans' />
                {line}
            </Block>
        )
    }
}

export default Beans;