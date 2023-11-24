import { Component } from 'react';

import { Block, ColoredBlock } from '../styledComponents/block';
import { Image } from '../styledComponents/image';

class Beans extends Component {
    render() {
        const line = <ColoredBlock width='60px' height='2px' background_color={this.props.color} />;
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