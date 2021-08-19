import React from 'react'
import './collection-preview.styles.scss'

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = (props) => (

    <div className='collection-preview'>
        <h1 className='title'>{props.title.toUpperCase()}</h1>

        <hr
        style={{
            color: "red",
            width: "90%"
        }}
    />
        <div className='preview'>
        {
            props.items
                    .filter((item, idx) => idx < 4 ) // only show first 4 items in collection
                    .map((item) => (

                        <CollectionItem key={item.id} price={item.price} name={item.name} imageUrl={item.imageUrl}/>
               

            ))
        }



        </div>
    </div>
);

export default CollectionPreview;


// Initial

// const CollectionPreview = (props) => (

// <div className='collection-preview'>
//     <h1 className='title'>{props.title.toUpperCase()}</h1>
//     <div className='preview'>
//     {
//         props.items
//                 .filter((item, idx) => idx < 4 ) // only show first 4 items in collection
//                 .map((item) => (
//             <div key={item.id}> { item.name } </div>
           

//         ))
//     }



//     </div>
// </div>
// );