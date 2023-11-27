import { Component } from 'react';
import { Fragment } from 'react';
import { BlackRegularText } from '../styledComponents/text';
import { Block } from '../styledComponents/block';
import { VerticalSeparator } from '../styledComponents/block';
import { HorizontalSeparator } from '../styledComponents/block';
import ImageBlock from './common/imageBlock';
import Beans from './common/beans';

class AboutBlock extends Component {
    render() {
        const {text, header, imgSrc, imgAlt} = this.props;

        const textBlock = text.map((p, index, array) => {
            if (index === (array.length - 1)) {
                return (
                    <BlackRegularText key={p} as='p' font_size='14px'>{p}</BlackRegularText>
                )
            }
            return (
                <Fragment key={p}>
                    <BlackRegularText as='p' font_size='14px'>{p}</BlackRegularText>
                    <VerticalSeparator height='20px' />
                </Fragment>
            )
        });

        return (
            <Block
                height='520px'
            >
                {imgSrc && <ImageBlock src={imgSrc} alt={imgAlt} />}
                <HorizontalSeparator width='50px' />
                <Block width='auto' direction='column'>
                    <BlackRegularText font_size='24px'>{header}</BlackRegularText>
                    <VerticalSeparator height='20px' />
                    <Beans color='black' />
                    <VerticalSeparator height='20px' />
                    <Block
                        direction='column'
                    >
                        {textBlock}
                    </Block>
                </Block>
            </Block>
        )
    }
}

export default AboutBlock;