import { Component } from 'react';

import { Text, BoldText } from '../styledComponents/text';
import { AbsoluteBlock, Block, VerticalSeparator } from '../styledComponents/block';
import { Image } from '../styledComponents/image';
import { EmptyButton } from '../styledComponents/buttons';

import Beans from './beans';

const mainHeroContent = <>
    <VerticalSeparator height='20px' />
    <Beans color='white' />
    <VerticalSeparator height='35px' />
    <BoldText color='white' font_size='24px'>We makes every day full of energy and taste</BoldText>
    <VerticalSeparator height='20px' />
    <BoldText color='white' font_size='24px'>Want to try our beans?</BoldText>
    <VerticalSeparator height='18px' />
    <EmptyButton><Text color='white'>More</Text></EmptyButton>
</>

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
                    <BoldText color='white' font_size='40px'>Everything You Love About Coffee</BoldText>
                </Block>
            </Block>
        )
    }
}

export default Hero;