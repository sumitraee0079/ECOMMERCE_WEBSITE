import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Store from "./components/Store";
import Cart from "./components/Cart";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import SingleProduct from './components/SingleProduct';
import Footer from "./components/Footer"
import PrivateRoute from "./components/PrivateRoute";
import Products from './components/Products'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Switch>
      <Route path="/home">
          <Home />
        </Route>
        <PrivateRoute path="/" exact>
          <Store />
        </PrivateRoute>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path='/products' element={<Products />} />
						<Route path='/store/:productId' element={<SingleProduct />} />
            <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Logout} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
