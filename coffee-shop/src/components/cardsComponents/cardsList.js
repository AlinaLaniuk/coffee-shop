import { Component } from 'react';

import { AbsoluteBlock, Block } from '../../styledComponents/block';
import { BlackRegularText } from '../../styledComponents/text';
import { Image } from '../../styledComponents/image';
import { VerticalSeparator } from '../../styledComponents/block';
import Card from './card';

const cardsData = [
    { src: './cards-pictures/1.png', name: 'Solimo Coffee Beans 2 kg', price: 10.73 },
    { src: './cards-pictures/2.png', name: 'Presto Coffee Beans 1 kg', price: 15.99 },
    { src: './cards-pictures/3.png', name: 'AROMISTICO Coffee 1 kg', price: 6.99 },
];

class CardsList extends Component {
    render() {
        const cardsList = cardsData.map((cardData) => <Card src={cardData.src} name={cardData.name} price={cardData.price} />);

        return (
            <Block
                height='495px'
                direction='column'
            >
                <AbsoluteBlock
                    top='0'
                    z_index='-1'
                >
                    <Image width='100%' src='./bg/paper-bg.png' />
                </AbsoluteBlock>
                <BlackRegularText font_size='24px'>Our best</BlackRegularText>
                <VerticalSeparator height='39px' />
                <Block
                    gap='71px'
                >
                    {cardsList}
                </Block>
            </Block>
        )
    }
}

export default CardsList;