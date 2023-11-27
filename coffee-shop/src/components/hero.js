import { Component } from 'react';

import { WhiteBoldText } from '../styledComponents/text';
import { AbsoluteBlock, Block } from '../styledComponents/block';
import { Image } from '../styledComponents/image';

class Hero extends Component {
    render() {
        const {height, imgSrc} = this.props;
        return (
            <Block
                height={height}
                direction='column'
            >
                <AbsoluteBlock
                    z_index='-1'
                    height={this.props.height}
                >
                    <Image width='100%' height='100%' src={imgSrc} />
                </AbsoluteBlock>
                <Block
                    direction='column'
                >
                    <WhiteBoldText color='white' font_size='40px'>{this.props.text}</WhiteBoldText>
                    {this.props.children}
                </Block>
            </Block>
        )
    }
}

export default Hero;