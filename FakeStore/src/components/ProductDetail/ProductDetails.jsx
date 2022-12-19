import React, { useEffect } from 'react'

import axios from "axios";
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct,removeSelectedProduct } from '../../redux/actions/productActions';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
 
import { Link } from "react-router-dom"


function ProductDetails() {
  const product = useSelector(state => state.product);
  const {id, image, title, price, category } = product;

  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).
      catch((err) => {
        console.log(err);
      });

    dispatch(selectedProduct(response.data))

  }

  useEffect(() => {

    if (productId && product !== "") {
      fetchProductDetail();
    }

    return () =>{
      dispatch(removeSelectedProduct())
    }



  }, [productId])

  return (

    <div>
  {
      Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      )

        :
        (
          <Card key={id} sx={{ maxWidth: 300 }} className="productcomponent-card">
            <CardActionArea >
              <CardMedia
                className='productcomponent-media'

                component="img"
                height="250"
                image={image}
                sx={{ maxWidth: 190 }}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {category}

                </Typography>
                <Typography variant="body2" color="text.secondary">

                  ${price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className='productcomponent-button'>
              <Button size="small" className='productcomponent-button-btn' >
                <Link to={`/product/${id}`}  >
                  Add to Cart
                </Link>
              </Button>
            </CardActions>

          </Card>
        )

    }
    </div>

    
  )
}

export default ProductDetails



 
// const ProductDetails = () => {
//   const { productId } = useParams();
//   let product = useSelector((state) => state.product);
//   const { image, title, price, category, description } = product;
//   const dispatch = useDispatch();
//   const fetchProductDetail = async (id) => {
//     const response = await axios
//       .get(`https://fakestoreapi.com/products/${id}`)
//       .catch((err) => {
//         console.log("Err: ", err);
//       });
//     dispatch(selectedProduct(response.data));
//   };

//   useEffect(() => {
//     if (productId && productId !== "") fetchProductDetail(productId);
  
//   }, [productId]);
//   return (
//     <div className="ui grid container">
//       {Object.keys(product).length === 0 ? (
//         <div>...Loading</div>
//       ) : (
//         <div className="ui placeholder segment">
//           <div className="ui two column stackable center aligned grid">
//             <div className="ui vertical divider">AND</div>
//             <div className="middle aligned row">
//               <div className="column lp">
//                 <img className="ui fluid image" src={image} />
//               </div>
//               <div className="column rp">
//                 <h1>{title}</h1>
//                 <h2>
//                   <a className="ui teal tag label">${price}</a>
//                 </h2>
//                 <h3 className="ui brown block header">{category}</h3>
//                 <p>{description}</p>
//                 <div className="ui vertical animated button" tabIndex="0">
//                   <div className="hidden content">
//                     <i className="shop icon"></i>
//                   </div>
//                   <div className="visible content">Add to Cart</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;
 