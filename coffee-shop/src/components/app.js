import { Component } from 'react';

import Navbar from './navbar';
import Hero from './hero';

class App extends Component {
    render() {
        return (
            <>
                {/* <Navbar /> */}
                <Hero height='640px'/>
            </>
        )
    }
}

export default App;