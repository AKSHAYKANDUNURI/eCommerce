import React, { useContext } from 'react';
import './css/ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../components/assests/dropdown_icon.png'
import Item from '../components/Items/Item';
import Footer from '../components/Footer/Footer';

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);

    return (
        <div className='shop-Category'>
            <div className="shopcategory-indexsort">
                <img className='shopcategory-banner' src={props.banner} alt="" />
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {
                    all_product.map((item) => {
                        if(props.category === item.category)
                            {
                                return ( <Item
                                key={item.id} // Assuming item.id is unique
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price}
                                
                            />
                                );
                            }
                        
                        
                    })}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
            
            <Footer/>
             </div>
    );
};

export default ShopCategory;
