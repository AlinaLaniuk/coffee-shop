import { Component } from 'react';
import Navbar from './common/navbar';
import { AbsoluteBlock } from '../styledComponents/block';
import { HorizontalSeparator } from '../styledComponents/block';

class Header extends Component {
    render() {
        return (
            <AbsoluteBlock
                top='0'
                height='70px'
                justify_content='flex-start'
            >
                <HorizontalSeparator width='149px' />
                <Navbar color='white' />
            </AbsoluteBlock>
        )
    }
}

export default Header;