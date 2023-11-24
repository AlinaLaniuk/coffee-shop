import { Component } from 'react';
import { BlackRegularText } from '../styledComponents/text';
import { Block } from '../styledComponents/block';
import { VerticalSeparator } from '../styledComponents/block';
import Beans from './beans';

const p1 = 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intentionso questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face';
const p2 = 'Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved farrecommend. Did even but nor are most gave hope. Secure active living depend sonrepair day ladies now.';

class AboutUs extends Component {
    render() {
        return (
            <Block
                height='520px'
                direction='column'
            >
                <BlackRegularText font_size='24px'>About Us</BlackRegularText>
                <VerticalSeparator height='20px' />
                <Beans color='black' />
                <VerticalSeparator height='40px' />
                <Block
                    width='40%'
                    direction='column'
                >
                    <BlackRegularText as='p' font_size='14px'>{p1}</BlackRegularText>
                    <VerticalSeparator height='20px' />
                    <BlackRegularText as='p' font_size='14px'>{p2}</BlackRegularText>
                </Block>
            </Block>
        )
    }
}

export default AboutUs;