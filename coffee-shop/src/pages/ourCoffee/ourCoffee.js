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
        this.state = {
            filteredData: productsData,
            inputValue: ''
        }
    }

    onChange = (event) => {
        this.setState((prevState) => {
            const currentInputValue = event.target.value;
            return {...prevState, inputValue: currentInputValue }
        });
    }

    onFilter = (filter) => {
        if(filter === 'All'){
            this.setState({inputValue: '', filteredData: productsData});
            return;
        }
        const newFilteredData = productsData.filter((productInfo) => productInfo.country === filter);
        this.setState((prevState) => {return {...prevState, filteredData: newFilteredData}});
    }

    onSearch = () => {
        const {inputValue} = this.state;
        if(inputValue === ''){
            return this.state.filteredData;
        }
        const dataFitSearch = this.state.filteredData.filter((productInfo) => productInfo.name.indexOf(inputValue) > -1);
        return dataFitSearch;
    }

    render() {
        const { text, header, imgSrc, imgAlt } = aboutUsBlockContent;
        const visualData = this.onSearch()
        return (
            <>
                <Hero imgSrc={heroImgSrc} height='260px' text={heroText} />
                <Block direction='column' width='60%'>
                    <AboutBlock text={text} header={header} imgSrc={imgSrc} imgAlt={imgAlt} />
                    <Line width='240px' color='black'/>
                    <VerticalSeparator height='60px'/>
                    <SearchFilterPanel inputValue={this.state.inputValue} onChange={this.onChange} onFilter={this.onFilter}/>
                    <VerticalSeparator height='60px'/>
                    <CardsList cardsData={visualData} cardType={cardType}/>
                    <VerticalSeparator height='60px'/>
                </Block>
            </>
        )
    }
}

export default OurCoffee;