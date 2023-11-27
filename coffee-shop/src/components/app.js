import { Component } from 'react';

import Main from '../pages/main';
import OurCoffee from '../pages/ourCoffee';
import CommonLayout from './commonLayout';
import { Block } from '../styledComponents/block';

class App extends Component {
    render() {
        return (
            <Block
                direction='column'
            >
                <CommonLayout>
                    <OurCoffee />
                </CommonLayout>
            </Block>
        )
    }
}

export default App;