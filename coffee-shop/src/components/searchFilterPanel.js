import { Component, Fragment } from 'react';

import { Block } from '../styledComponents/block';
import { InputWithShadow } from '../styledComponents/input';
import { WhiteButtonWithShadow } from '../styledComponents/buttons';
import { BlackRegularText } from '../styledComponents/text';
import { HorizontalSeparator } from '../styledComponents/block';

const buttonsText = ['All', 'Brazil', 'Kenya', 'Columbia'];

class SearchFilterPanel extends Component {
    render() {
        const {onFilter} = this.props;
        const buttons = buttonsText.map((buttonText, index, array) => {
            if (index === (array.length - 1)) {
                return (
                    <WhiteButtonWithShadow onClick={() => onFilter(buttonText)} key={buttonText + index}><BlackRegularText font_size='14px'>{buttonText}</BlackRegularText></WhiteButtonWithShadow>
                )
            }
            return (
                <Fragment key={buttonText + index}>
                    <WhiteButtonWithShadow onClick={() => onFilter(buttonText)}><BlackRegularText font_size='14px'>{buttonText}</BlackRegularText></WhiteButtonWithShadow>
                    <HorizontalSeparator width='5px' />
                </Fragment>
            )

        });

        return (
            <Block width='110%'>
                <Block>
                    <BlackRegularText font_size='14px'>Looking for</BlackRegularText>
                    <HorizontalSeparator width='19px' />
                    <InputWithShadow placeholder='start typing here...' width='180px' />
                </Block>
                <HorizontalSeparator width='83px' />
                <Block>
                    <BlackRegularText white_space='nowrap' font_size='14px'>Or filter</BlackRegularText>
                    <HorizontalSeparator width='35px' />
                    {buttons}
                </Block>
            </Block>
        )
    }
}

export default SearchFilterPanel;