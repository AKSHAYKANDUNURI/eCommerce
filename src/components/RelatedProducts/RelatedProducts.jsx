import React from 'react';
import './RelatedProducts.css'
import data_product from '../assests/data'
import Item  from '../Items/Item'
import all_product from '../assests/all_product';

const RelatedProducts = (props) => {
    return (
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {all_product.map((item,i)=>{
                    if(item.category===props.category && item.id !== props.id)
                    return <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

                })}
            </div>
        </div>
    );
};

export default RelatedProducts;
