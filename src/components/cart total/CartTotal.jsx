import { useContext } from "react";
import { ContextApi } from "../../store/context";

const CartTotal = () => {
  const { cartItem } = useContext(ContextApi);
  return (
    <div className="container-fluid my-5 px-3">
        <h2 className="pb-2">Cart Amount</h2>
      <ul className="list-group border-0">
        <li className="list-group-item border-0 border-bottom py-3 d-flex justify-content-between align-items-center">
          <span>Subtotal</span>
          <span className="fw-bold">
            $
            {cartItem.reduce((amount, value) => {
              return amount + Number(value.new_price);
            }, 0)}
          </span>
        </li>
        <li className="list-group-item border-0 border-bottom py-3 d-flex justify-content-between align-items-center">
          <span>Shipping Fee</span>
          <span className="fw-bold">$10</span>
        </li>
        <li className="list-group-item border-0 border-bottom py-3 d-flex justify-content-between align-items-center">
          <span>Total</span>
          <span className="fw-bold">
            $
            {cartItem.reduce((amount, value) => {
              return amount + Number(value.new_price);
            }, 0 + 10)}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default CartTotal;
