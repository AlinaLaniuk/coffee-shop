import { Component } from 'react';

import { ColoredBlock } from '../../styledComponents/block';

class Line extends Component {
    render() {
        const {width, color} = this.props;
        return <ColoredBlock width={width} height='2px' background_color={color} />;
    }
}

export default Line;