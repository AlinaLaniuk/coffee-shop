import { Component } from 'react';

import { Block } from '../../styledComponents/block';
import { Image } from '../../styledComponents/image';
import Line from './line';

import blackBeans from '../../resources/icons/coffee-beans-fill-black.png';
import whiteBeans from '../../resources/icons/coffee-beans-fill-white.png';
class Beans extends Component {
    render() {
        const {color} = this.props;
        const line = <Line width='60px' color={color} />;
        const beansImg = color === 'black' ? blackBeans : whiteBeans;
        return (
            <Block
                width='200px'
                gap='25px'>
                {line}
                <Image src={beansImg} alt='beans' />
                {line}
            </Block>
        )
    }
}

export default Beans;