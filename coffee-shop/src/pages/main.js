import { Component } from 'react';

import Hero from '../components/hero';
import { VerticalSeparator } from '../styledComponents/block';
import Beans from '../components/beans';
import { BoldText, Text } from '../styledComponents/text';
import { EmptyButton } from '../styledComponents/buttons';

const mainHeroContent = <>
    <VerticalSeparator height='20px' />
    <Beans color='white' />
    <VerticalSeparator height='35px' />
    <BoldText color='white' font_size='24px'>We makes every day full of energy and taste</BoldText>
    <VerticalSeparator height='20px' />
    <BoldText color='white' font_size='24px'>Want to try our beans?</BoldText>
    <VerticalSeparator height='18px' />
    <EmptyButton><Text color='white'>More</Text></EmptyButton>
</>;

const heroText = 'Everything You Love About Coffee';

class Main extends Component {
    render() {
        return (
            <>
                <Hero height='640px' text={heroText} children={mainHeroContent}/>
            </>
        )
    }
}

export default Main;