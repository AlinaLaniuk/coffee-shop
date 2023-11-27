import { Component } from 'react';

import Hero from '../../components/hero';
import AboutBlock from '../../components/about-block';
import SearchFilterPanel from '../../components/searchFilterPanel';
import { Block, VerticalSeparator } from '../../styledComponents/block';
import CardsList from '../../components/cardsComponents/cardsList';
import Line from '../../components/common/line';
import { heroText, aboutUsBlockContent, cardsData, cardType } from './ourCoffeePageData';

class OurCoffee extends Component {
    render() {
        const { text, header, imgSrc, imgAlt } = aboutUsBlockContent;
        return (
            <>
                <Hero height='260px' text={heroText} />
                <Block direction='column' width='60%'>
                    <AboutBlock text={text} header={header} imgSrc={imgSrc} imgAlt={imgAlt} />
                    <Line width='240px' color='black'/>
                    <VerticalSeparator height='60px'/>
                    <SearchFilterPanel />
                    <VerticalSeparator height='60px'/>
                    <CardsList cardsData={cardsData} cardType={cardType}/>
                    <VerticalSeparator height='60px'/>
                </Block>
            </>
        )
    }
}

export default OurCoffee;