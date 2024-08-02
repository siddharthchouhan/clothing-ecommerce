import { useContext } from "react";
import CartTotal from "../components/cart total/CartTotal";
import CartItem from "../components/cart/CartItem";
import PromoCodeCart from "../components/Promo code/PromoCodeCart";
import { ContextApi } from "../store/context";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { cartItem } = useContext(ContextApi);
  return (
    <>
      <div className="container-fluid">
        {cartItem.length === 0 ? (
          <>
            <div className="container-fluid my-5 d-flex flex-column align-items-center w-100 gap-2 justify-content-center">
              <span>Your Cart is Empty!</span>
              <Link to="/" className="btn btn-danger">
                Shop Now
              </Link>
            </div>
          </>
        ) : (
          <>
            <CartItem />
            <div className="container d-flex align-items-center gap-5 cartbottom">
              <CartTotal />
              <PromoCodeCart />
            </div>
          </>
        )}
      </div>

      <ToastContainer />
    </>
  );
};

export default Cart;
