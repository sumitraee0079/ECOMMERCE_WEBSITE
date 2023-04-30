import { Card, Button } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";
import { Link } from 'react-router-dom'
import Store from './Store'

const Products = ({ product }) => {
  
  const {
    state: { cart },
    dispatch,
  } = CartState();


  return (
        <div className="products">

      <Card>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>$ {product.price.split(".")[0]}</span>
          </Card.Subtitle>
          
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                })
              }
              disabled={!product.inStock}
            >
              {!product.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
            <Link to={`/store/${product.id}`} className="btn btn-primary btn-sm">DETAILS &#8594;</Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Products;


