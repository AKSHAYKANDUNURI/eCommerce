import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/breadcrums/Breadcrum';
import ProductDisplay from '../components/productdisplay/ProductDisplay';
import DescriptionBox from '../components/descriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {productId} =useParams();
    const product =all_product.find((e)=> e.id === Number(productId));
    const category = product.category;
    const id =product.id;
    return(
        <div>
            <Breadcrum  product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox/>
            <RelatedProducts category={category} id={id} />
        </div>
    );
};

export default Product;
