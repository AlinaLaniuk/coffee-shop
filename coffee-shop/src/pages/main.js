import { Component } from 'react';

import Hero from '../components/hero';
import AboutUs from '../components/about-us';
import { VerticalSeparator } from '../styledComponents/block';
import Beans from '../components/beans';
import { WhiteBoldText } from '../styledComponents/text';
import { EmptyButton } from '../styledComponents/buttons';
import CardsList from '../components/cardsList';

const mainHeroContent = <>
    <VerticalSeparator height='20px' />
    <Beans color='white' />
    <VerticalSeparator height='35px' />
    <WhiteBoldText color='white' font_size='24px'>We makes every day full of energy and taste</WhiteBoldText>
    <VerticalSeparator height='20px' />
    <WhiteBoldText color='white' font_size='24px'>Want to try our beans?</WhiteBoldText>
    <VerticalSeparator height='18px' />
    <EmptyButton><WhiteBoldText color='white'>More</WhiteBoldText></EmptyButton>
</>;

const heroText = 'Everything You Love About Coffee';

class Main extends Component {
    render() {
        return (
            <>
                <Hero height='640px' text={heroText} children={mainHeroContent} />
                <AboutUs />
                <CardsList />
            </>
        )
    }
}

export default Main;