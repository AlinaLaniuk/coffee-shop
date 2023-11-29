import { Component } from 'react';

import { NavbarLink } from '../../styledComponents/navbarLink';
import { Block } from '../../styledComponents/block';
import { Image } from '../../styledComponents/image';

import blackBeansImg from '../../resources/icons/coffee-beans-empty-black.png';
import whiteBeansImg from '../../resources/icons/coffee-beans-empty-white.png';
class Navbar extends Component {
    render() {
        const {color} = this.props;
        const links = [
            { text: 'Coffee house', picture: color === 'black' ? blackBeansImg : whiteBeansImg, href: '/' },
            { text: 'Our coffee', href: '/our-coffee' },
            { text: 'For your pleasure', href: '/for-your-pleasure' }
        ];

        const linksElements = links.map((link) => {
            if (link.picture) {
                return (
                    <Block
                        width='auto'
                        align_items='flex-end'
                        key={link.text}
                    >
                        <Image src={link.picture} alt={link.text} />
                        <NavbarLink color={this.props.color} to={link.href}>{link.text}</NavbarLink>
                    </Block>
                )
            }
            return (
                <NavbarLink key={link.text} color={this.props.color} to={link.href}>{link.text}</NavbarLink>
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