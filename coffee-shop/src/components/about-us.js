import { Component } from 'react';
import { BlackRegularText } from '../styledComponents/text';
import { Block } from '../styledComponents/block';


class AboutUs extends Component{
    render(){
        return (
            <Block
                height='520px'
            >
                <BlackRegularText font_size='24px'>About Us</BlackRegularText>

            </Block>
        )
    }
}

export default AboutUs;