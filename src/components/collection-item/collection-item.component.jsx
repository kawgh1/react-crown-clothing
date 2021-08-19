import React from 'react'

import './collection-item.styles.scss'

const CollectionItem = (props) =>  (

    <div className='collection-item'>
        <div className='image' 
                style={{backgroundImage: `url(${props.imageUrl})`}} />

        <hr
            style={{
                color: "gray",
                width: "95%"
            }}
        />

        <div className='collection-footer'>
            <span className='name'>{props.name}

                    <hr
                    style={{
                        color: "LightGray",
                        marginLeft: "0px",
                        width: "95%"
                    }}
                />
            
            </span>
            <span className='price'>${props.price}</span>
        </div>
    </div>
);

export default CollectionItem;