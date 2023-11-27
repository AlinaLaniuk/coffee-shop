import { Component } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

class CommonLayout extends Component {
    render() {
        return (
            <>
                <Header />
                {this.props.children}
                <Footer />
            </>
        )
    }
}

export default CommonLayout;