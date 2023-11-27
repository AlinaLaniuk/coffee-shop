import { Component } from 'react';

import Hero from '../../components/hero';
import AboutBlock from '../../components/about-block';
import { VerticalSeparator } from '../../styledComponents/block';
import Beans from '../../components/common/beans';
import { WhiteBoldText } from '../../styledComponents/text';
import { EmptyButton } from '../../styledComponents/buttons';
import CardsList from '../../components/cardsComponents/cardsList';
import { AbsoluteBlock } from '../../styledComponents/block';
import { Image } from '../../styledComponents/image';
import { Block } from '../../styledComponents/block';
import { BlackRegularText } from '../../styledComponents/text';

class OurBestBlock extends Component {
    render() {
        const { cardsData, cardType } = this.props;
        return (
            <Block
            height='495px'
            >
                <AbsoluteBlock
                    top='0'
                    z_index='-1'
                >
                    <Image width='100%' src='./bg/paper-bg.png' />
                </AbsoluteBlock>
                <Block
                    direction='column'
                >
                    <BlackRegularText font_size='24px'>Our best</BlackRegularText>
                    <VerticalSeparator height='39px' />
                    <CardsList cardsData={cardsData} cardType={cardType} />
                </Block>
            </Block>
        )
    }
}

export default OurBestBlock;