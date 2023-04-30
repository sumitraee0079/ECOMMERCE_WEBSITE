import { CartState } from "../context/Context";
import Filters from "./Filters";
import Products from "./Products";

const Store = () => {
  const { 
    state : { products } } = CartState()

  console.log(products)
    return (
    <div className='productContainer'>
      {products.map((product) => {
        return (
        <Products product={product} key={product.id}>
        </Products>
        )
      })}
    </div>
  );
};

export default Store;
