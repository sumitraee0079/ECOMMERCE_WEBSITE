import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { CartState } from "../context/Context";
import "./styles.css";
import {NavLink} from 'react-router-dom';

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <Navbar bg="light" variant="dark" style={{ height: 80 }}>
      
      {/*<Container>
        <Navbar.Brand>
          <NavLink to="/home">Home</NavLink>
        </Navbar.Brand>
        <Navbar.Brand>
          <NavLink to="/about">About</NavLink>
        </Navbar.Brand>
        <Navbar.Brand>
          <NavLink to="/contact">Contact Us</NavLink>
        </Navbar.Brand>
        <Navbar.Brand>
          <NavLink to="/login">Login</NavLink>
        </Navbar.Brand>
        <Navbar.Brand>
          <NavLink to="/login">Logout</NavLink>
        </Navbar.Brand>*/}
        <nav className='nav nav-pills'>
            <NavLink to='home' 
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Home</NavLink>
            <NavLink to='about'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >About</NavLink>
            
            <NavLink to='store'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Store</NavLink>
            <NavLink to='contact'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Contact</NavLink>
            <NavLink to='login'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Login</NavLink>
            <Navbar.Brand>
          <Link to="/login">Logout</Link>
        </Navbar.Brand>
          </nav>
        {useLocation().pathname.split("/")[1] !== "cart"
        }
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>$ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go to Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      {/*</Container>*/}
    </Navbar>
  )
              }
export default Header;
