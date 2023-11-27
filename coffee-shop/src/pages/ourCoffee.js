import { Component } from 'react';

import Hero from '../components/hero';
import AboutBlock from '../components/about-block';
import SearchFilterPanel from '../components/searchFilterPanel';
import { Block, VerticalSeparator } from '../styledComponents/block';
import Line from '../components/line';

const heroText = 'Our Coffee';

const aboutUsBlockContent = {
    text: ['Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.', 'Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.'],
    header: 'About our beans',
    imgSrc: './articles-pictures/girl-with-cup.png',
    imgAlt: 'girl with cup',
};

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
                </Block>
            </>
        )
    }
}

export default OurCoffee;