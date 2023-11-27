import { Component } from 'react';
import Navbar from './common/navbar';
import { Block } from '../styledComponents/block';
import Beans from './common/beans';
import { VerticalSeparator } from '../styledComponents/block';

class Footer extends Component {
    render() {
        return (
            <Block
                direction='column'
                height='150px'
            >
                <Navbar color='black' />
                <VerticalSeparator height='30px'/>
                <Beans color='black' />
            </Block>
        )
    }
}

export default Footer;