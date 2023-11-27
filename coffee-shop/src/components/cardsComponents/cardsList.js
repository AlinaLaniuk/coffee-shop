import { Component } from 'react';

import { AbsoluteBlock, Block } from '../../styledComponents/block';
import { BlackRegularText } from '../../styledComponents/text';
import { Image } from '../../styledComponents/image';
import { VerticalSeparator } from '../../styledComponents/block';
import WhiteBGShadowCard from './whiteBGShadowCard';
import TransparentBGCard from './transparentBGCard';

class CardsList extends Component {
    render() {
        const { cardType, cardsData } = this.props;
        const CurrentCardComponent = cardType === 'transparentBG' ? TransparentBGCard : WhiteBGShadowCard;
        const cardsList = cardsData.map((cardData) => <CurrentCardComponent key={cardData.id} src={cardData.src} name={cardData.name} price={cardData.price} country={cardData.country}/>);

        return (
            <Block
                direction='column'
            >
                <Block
                    gap='71px'
                    flex_wrap='wrap'
                >
                    {cardsList}
                </Block>
            </Block>
        )
    }
}

export default CardsList;