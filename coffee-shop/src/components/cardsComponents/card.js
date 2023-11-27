import { Component } from 'react';

import { Block, ColoredBlock } from '../../styledComponents/block';
import { Image } from '../../styledComponents/image';
import { BlackRegularText, BlackBoldText } from '../../styledComponents/text';
import { VerticalSeparator } from '../../styledComponents/block';

class Card extends Component {
    render() {
        return (
            <ColoredBlock
                width='220px'
                height='240px'
                background_color='rgba(255, 255, 255, 0.5)'
                border_radius='8px'
            >
                <Block
                    direction='column'
                >
                    <VerticalSeparator height='7px' />
                    <Image src={this.props.src} />
                    <VerticalSeparator height='14px' />
                    <Block
                        width='auto'
                        direction='column'
                        align_items='flex-end'
                    >
                        <BlackRegularText font_size='14px'>{this.props.name}</BlackRegularText>
                        <VerticalSeparator height='10px' />
                        <BlackBoldText font_size='14px' text-align='end'>{this.props.price}$</BlackBoldText>
                    </Block>
                </Block>
            </ColoredBlock>
        )
    }
}

export default Card;