import { createContext, useReducer, useState } from "react";
import { toast } from "react-toastify";

export const ContextApi = createContext();

const DataStore = ({ children }) => {
  const cartItemReducer = (currentCartItem, action) => {
    let newCartItem = currentCartItem;

    if (action.type === "ADD_TO_CART") {
      newCartItem = [...currentCartItem, action.payload];
    }

    if (action.type === "REMOVE_ITEMS") {
      newCartItem = currentCartItem.filter(
        (data) => data.id !== action.payload
      );
    }

    return newCartItem;
  };

  const [active, setActive] = useState("shop");

  const handleAddToCart = (product) => {
    if (cartItem.includes(product)) {
      toast.error("Item Already Exist!");
    } else {
      dispatchCartItem({
        type: "ADD_TO_CART",
        payload: product,
      });
      toast.success("Item added to cart!");
    }
    window.scrollTo(0, 0);
  };

  const handleToRemove = (items) => {
    dispatchCartItem({
      type: "REMOVE_ITEMS",
      payload: items.id,
    });
    toast.success("Item Removed!");
    window.scrollTo(0, 0);
  };

  const [cartItem, dispatchCartItem] = useReducer(cartItemReducer, []);

  return (
    <ContextApi.Provider
      value={{ active, setActive, handleAddToCart, cartItem, handleToRemove }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export default DataStore;
