import { Component } from 'react';

import { Block, ColoredBlock } from '../../styledComponents/block';
import { Image } from '../../styledComponents/image';
import { BlackRegularText, BlackBoldText } from '../../styledComponents/text';
import { VerticalSeparator } from '../../styledComponents/block';

class CardContent extends Component {
    render() {
        const {src, name, country, price} = this.props;
        return (
            <Block
                direction='column'
            >
                <VerticalSeparator height='7px' />
                <Image src={src} />
                <VerticalSeparator height='14px' />
                <Block
                    width='auto'
                    direction='column'
                    align_items='flex-end'
                >
                    <BlackRegularText font_size='14px'>{name}</BlackRegularText>
                    <VerticalSeparator height='10px' />
                    {country && <BlackRegularText font_size='14px'>{country}</BlackRegularText>}
                    <VerticalSeparator height='10px' />
                    <BlackBoldText font_size='14px' text-align='end'>{price}$</BlackBoldText>
                </Block>
            </Block>
        )
    }
}

export default CardContent;