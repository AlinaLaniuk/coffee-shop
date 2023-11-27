import { Component } from 'react';

import { Text } from '../../styledComponents/text';
import { Block } from '../../styledComponents/block';
import { Image } from '../../styledComponents/image';

class Navbar extends Component {
    render() {
        const links = [
            { text: 'Coffee house', picture: `./icons/coffee-beans-empty-${this.props.color}.png` },
            { text: 'Our coffee' },
            { text: 'For your pleasure' }
        ];

        const linksElements = links.map((link) => {
            if (link.picture) {
                return (
                    <Block
                        width='auto'
                        align_items='flex-end'
                    >
                        <Image src={link.picture} alt={link.text} />
                        <Text color={this.props.color} as='a'>{link.text}</Text>
                    </Block>
                )
            }
            return (
                <Text color={this.props.color} as='a'>{link.text}</Text>
            )
        })

        return (
            <Block
                width='auto'
                gap='40px'
                align_items='flex-end'
            >
                {linksElements}
            </Block>
        )
    }
}

export default Navbar;