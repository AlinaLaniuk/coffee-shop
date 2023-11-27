import { Component } from 'react';

import { VerticalSeparator } from "../../styledComponents/block";
import Beans from "../../components/common/beans";
import { WhiteBoldText } from "../../styledComponents/text";
import { EmptyButton } from "../../styledComponents/buttons";

class MainHeroContent extends Component {
    render() {
        return (
            <>
                <VerticalSeparator height='20px' />
                <Beans color='white' />
                <VerticalSeparator height='35px' />
                <WhiteBoldText color='white' font_size='24px'>We makes every day full of energy and taste</WhiteBoldText>
                <VerticalSeparator height='20px' />
                <WhiteBoldText color='white' font_size='24px'>Want to try our beans?</WhiteBoldText>
                <VerticalSeparator height='18px' />
                <EmptyButton><WhiteBoldText color='white'>More</WhiteBoldText></EmptyButton>
            </>
        )
    }
}

export default MainHeroContent;