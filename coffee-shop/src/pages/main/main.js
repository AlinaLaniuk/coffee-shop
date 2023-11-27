import { Component } from 'react';

import Hero from '../../components/hero';
import AboutBlock from '../../components/about-block';
import OurBestBlock from './ourBesrBlock';
import MainHeroContent from './mainHeroContent';

import { heroImgSrc, heroText, aboutUsBlockContent, cardsData, cardType } from './mainPageData';
class Main extends Component {
    render() {
        const { text, header, imgSrc, imgAlt } = aboutUsBlockContent;
        return (
            <>
                <Hero height='640px' imgSrc={heroImgSrc} text={heroText} children={<MainHeroContent />} />
                <AboutBlock text={text} header={header} imgSrc={imgSrc} imgAlt={imgAlt} />
                <OurBestBlock cardsData={cardsData} cardType={cardType}/>
            </>
        )
    }
}

export default Main;