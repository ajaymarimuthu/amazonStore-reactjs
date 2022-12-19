import React,{useEffect} from 'react'

import axios from "axios";
import {useParams} from "react-router-dom"


function ProductDetails() {
  const {productId}=useParams();
  console.log(productId);
  return (
    <div>
         
    </div>
  )
}

export default ProductDetails