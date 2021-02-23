import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory-menu.styles.scss'
// we need the state here because the list of the items is a state and the items sit in the directory component

class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
            sections : [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                } 
            ]
        }
    }

    render(){
        return (
            <div className = 'directory-menu'>
                {
                    this.state.sections.map(({id, ...otherProps})=>(
                        <MenuItem key={id} {...otherProps}/>
                    ))
                }
            </div>
        )
    }
}
export default Directory;