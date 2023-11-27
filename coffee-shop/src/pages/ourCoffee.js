import { Component } from 'react';

import Hero from '../components/hero';

const heroText = 'Our Coffee';

class OurCoffee extends Component {
    render() {
        return (
            <>
                <Hero height='260px' text={heroText}/>
            </>
        )
    }
}

export default OurCoffee;