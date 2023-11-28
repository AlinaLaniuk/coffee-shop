import { Component } from 'react';

import Hero from '../../components/hero';
import AboutBlock from '../../components/about-block';
import SearchFilterPanel from '../../components/searchFilterPanel';
import { Block, VerticalSeparator } from '../../styledComponents/block';
import CardsList from '../../components/cardsComponents/cardsList';
import Line from '../../components/common/line';
import { heroImgSrc, heroText, aboutUsBlockContent, cardType } from './ourCoffeePageData';
import { productsData } from '../productsData/productsData';
class OurCoffee extends Component {
    constructor(){
        super();
        this.state = {visualData: productsData}
    }

    onFilter = (filter) => {
        const currentVisualData = productsData.filter((productInfo) => productInfo.country === filter);
        this.setState({visualData: currentVisualData});
    }

    render() {
        const { text, header, imgSrc, imgAlt } = aboutUsBlockContent;
        return (
            <>
                <Hero imgSrc={heroImgSrc} height='260px' text={heroText} />
                <Block direction='column' width='60%'>
                    <AboutBlock text={text} header={header} imgSrc={imgSrc} imgAlt={imgAlt} />
                    <Line width='240px' color='black'/>
                    <VerticalSeparator height='60px'/>
                    <SearchFilterPanel onFilter={this.onFilter}/>
                    <VerticalSeparator height='60px'/>
                    <CardsList cardsData={this.state.visualData} cardType={cardType}/>
                    <VerticalSeparator height='60px'/>
                </Block>
            </>
        )
    }
}

export default OurCoffee;