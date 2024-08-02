import { useContext } from "react";
import { ContextApi } from "../../store/context";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

const CartItem = () => {
  const { cartItem, handleToRemove } = useContext(ContextApi);
  return (
    <div className="container mt-5">
      <table className="table">
        <thead className="carthead">
          <tr>
            <th scope="col">Products</th>
            <th scope="col" className="ps-5">
              title
            </th>
            <th scope="col">Prize</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItem.map((items) => {
            return (
              <>
                <tr className="cartbody">
                  <td style={{ width: "6%" }}>
                    <img src={items.image} style={{ width: "100%" }} alt="" />
                  </td>
                  <td className="ps-5">{items.name}</td>
                  <td>${items.new_price}</td>
                  <td style={{ width: "5%" }}>
                    <span className="fw-bold quantity">Quantity: </span><input type="number" className="w-75" required value={1} />
                  </td>
                  <td>${items.new_price}</td>
                  <td style={{ cursor: "pointer" }} title="Remove">
                    <MdOutlineRemoveCircleOutline
                      className="fs-3 removeicon"
                      onClick={() => handleToRemove(items)}
                    />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CartItem;
