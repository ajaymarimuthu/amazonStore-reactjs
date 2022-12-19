import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useSelector } from "react-redux";
import "./ProductComponent.css"
import { Link } from "react-router-dom"


function ProductComponent() {

  const products = useSelector(state => state.allProducts.products);
  // const{id,title}=products[0];

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (


     
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
  })

  // console.log(products);

  return (
    <div className='productcomponent'>
      {renderList}

    </div>
  )
}

export default ProductComponent