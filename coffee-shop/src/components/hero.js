import { Component } from 'react';

import { BoldText } from '../styledComponents/text';
import { AbsoluteBlock, Block } from '../styledComponents/block';
import { Image } from '../styledComponents/image';
class Hero extends Component {
    render() {
        return (
            <Block
                height={this.props.height}
                direction='column'
            >
                <AbsoluteBlock
                    z_index='-1'
                    height={this.props.height}
                >
                    <Image width='100%' height='100%' src='./hero-pictures/main.jpg' />
                </AbsoluteBlock>
                <Block
                    direction='column'
                >
                    <BoldText color='white' font_size='40px'>{this.props.text}</BoldText>
                    {this.props.children}
                </Block>
            </Block>
        )
    }
}

export default Hero;