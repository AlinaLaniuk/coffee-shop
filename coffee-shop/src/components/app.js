import { Component } from 'react';

import Main from '../pages/main';
import OurCoffee from '../pages/ourCoffee';
import CommonLayout from './commonLayout';

class App extends Component {
    render() {
        return (
            <CommonLayout>
                <OurCoffee />
            </CommonLayout>
        )
    }
}

export default App;