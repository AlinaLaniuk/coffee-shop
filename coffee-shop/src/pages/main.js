import { Component } from 'react';

import Hero from '../components/hero';
import AboutBlock from '../components/about-block';
import { VerticalSeparator } from '../styledComponents/block';
import Beans from '../components/common/beans';
import { WhiteBoldText } from '../styledComponents/text';
import { EmptyButton } from '../styledComponents/buttons';
import CardsList from '../components/cardsComponents/cardsList';

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

const aboutUsBlockContent = {
 text: ['Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intentionso questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face', 'Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved farrecommend. Did even but nor are most gave hope. Secure active living depend sonrepair day ladies now.'],
 header: 'About us',
 imgSrc: '',
 imgAlt: '',
 height: '520px'
};

class Main extends Component {
    render() {
        return (
            <>
                <Hero height='640px' text={heroText} children={mainHeroContent} />
                <AboutBlock props={aboutUsBlockContent}/>
                <CardsList />
            </>
        )
    }
}

export default Main;