import { Component } from 'react';

import Hero from '../../components/hero';
import { Block, VerticalSeparator } from '../../styledComponents/block';
import { BlackBoldText, BlackRegularText } from '../../styledComponents/text';
import ImageBlock from '../../components/common/imageBlock';
import { HorizontalSeparator } from '../../styledComponents/block';
import Beans from '../../components/common/beans';

//убрать отсюда отрисовку главного экрана после того, как будет написана логика роутинга
const heroImgSrc = './bg/our-coffee.png';

const heroText = 'Our Coffee';

class ProductPage extends Component {
    render() {
        const { productInfo } = this.props;
        const { name, imgSrc, text, imgAlt, country, description, price } = productInfo;
        return (
            <>
                <Hero height='260px' text={heroText} imgSrc={heroImgSrc} />
                <Block direction='column' width='60%'>
                    <Block
                        height='520px'
                    >
                        <ImageBlock src={imgSrc} alt={imgAlt} />
                        <HorizontalSeparator width='50px' />
                        <Block width='auto' direction='column'>
                            <BlackRegularText font_size='24px'>{name}</BlackRegularText>
                            <VerticalSeparator height='20px' />
                            <Beans color='black' />
                            <VerticalSeparator height='20px' />
                            <Block
                                direction='column'
                            >
                                <Block justify_content='flex-start'><BlackBoldText font_size='14px'>Country: </BlackBoldText><BlackRegularText font_size='14px'>{country}</BlackRegularText></Block>
                                <VerticalSeparator height='16px' />
                                <Block display='block'><BlackBoldText font_size='14px'>Description: </BlackBoldText><BlackRegularText font_size='14px'>{description}</BlackRegularText></Block>
                                <VerticalSeparator height='16px' />
                                <Block justify_content='flex-start'><BlackBoldText font_size='14px'>Price: </BlackBoldText><BlackRegularText font_size='24px'>{price}$</BlackRegularText></Block>
                            </Block>
                        </Block>
                    </Block>
                </Block>
            </>
        )
    }
}

export default ProductPage;