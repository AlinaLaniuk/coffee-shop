import { Component } from 'react';

import { Image } from '../styledComponents/image';
import { Block } from '../styledComponents/block';

class ImageBlock extends Component {
    render() {
        return (
            <Block
            >
                <Image src={this.props.src} alt={this.props.alt} />
            </Block>
        )
    }
}

export default ImageBlock;