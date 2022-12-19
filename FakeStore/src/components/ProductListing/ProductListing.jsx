import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import ProductComponent from '../ProductComponent/ProductComponent';
import axios from "axios";
import { setProducts } from '../../redux/actions/productActions';

import { useEffect } from 'react';

function ProductListing() {
    const products=useSelector(state => state);
    const dispatch=useDispatch();
    // console.log(products);

    const fetchProducts = async () =>{
        const response=await axios.get('https://fakestoreapi.com/products')
        .catch((err)=>{
            console.log(err);
        });
        
    // console.log(response.data);

        dispatch(setProducts(response.data));
        
    }


    useEffect(()=>{

        fetchProducts();

    },[])


  return (
    <div  >
 
       <ProductComponent />
    </div>
  )
}

export default ProductListing