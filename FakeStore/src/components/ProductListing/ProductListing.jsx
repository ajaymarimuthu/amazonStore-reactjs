import React from 'react'
import {useSelector} from "react-redux"
import ProductComponent from '../ProductComponent/ProductComponent';
import axios from "axios";

import { useEffect } from 'react';

function ProductListing() {
    const products=useSelector(state => state);
    // console.log(products);

    const fetchProducts = async () =>{
        const response=await axios.get('https://fakestoreapi.com/products').catch((err)=>{
            console.log(err);
        });

        console.log(response.data);
        
    }


    useEffect(()=>{

        fetchProducts();

    },[])

  return (
    <div className='ui grid container'>
       <ProductComponent />
    </div>
  )
}

export default ProductListing