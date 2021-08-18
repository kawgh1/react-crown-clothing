import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

// Since Directory needs to have State, it needs to be a Class Component

class Directory extends React.Component {

    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 1,
                    linkUrl: 'shop/womens'                   
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 2,
                    linkUrl: 'shop/mens'  
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 3,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'shoes',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 4,
                    linkUrl: 'shop/sneakers'   
                },
                {
			        title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 5,
                    linkUrl: 'shop/hats'
                }
            ]
        }
    }


    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(section => (

                        <MenuItem key={section.id} 
                                    imageUrl={section.imageUrl} 
                                    title={section.title} 
                                        size={section.size}
                                    />
                    )
                )}
            </div>
        )
    }
}

export default Directory;