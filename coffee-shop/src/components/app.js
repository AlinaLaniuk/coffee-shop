import { Component } from 'react';
import { Outlet } from 'react-router-dom';

import CommonLayout from './commonLayout';
import { Block } from '../styledComponents/block';

// убрать после того, как будет написана логика роутинга
const productInfo = {
    name: 'Coffee name',
    imgSrc: './products-pictures/1.jpg',
    country: 'Brasil',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: '16.99',
    imgAlt: 'Coffee'
}
class App extends Component {
    render() {
        return (
            <Block
                direction='column'
            >
                <CommonLayout>
                    <Outlet />
                </ CommonLayout>
            </Block>
        )
    }
}

export default App;