import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useContext, useState } from "react";
import { ContextApi } from "../../store/context";

const ProductDisplay = ({ product }) => {
  const [size, setSize] = useState("");
  const [sizeDisplay, setSizeDisplay] = useState("");
  const { handleAddToCart } = useContext(ContextApi);

  return (
    <>
      <div className="container d-flex gap-5 displayPrMain">
        <div className="left d-flex">
          <div className="mainImg">
            <img src={product.image} alt="" />
          </div>
        </div>
        <div className="right">
          <h1 className="">{product.name}</h1>
          <p>
            <FaStar className="text-danger" />
            <FaStar className="text-danger" />
            <FaStar className="text-danger" />
            <FaStar className="text-danger" />
            <CiStar className="text-danger" />
            (122)
          </p>
          <p>
            <span className="text-decoration-line-through fw-normal fs-4 text-secondary">
              ${product.old_price}
            </span>{" "}
            <span className="text-danger fs-4 fw-bold ps-3">
              ${product.new_price}
            </span>
          </p>
          <p className="fw-bold ">Select Size</p>
          <div className="size gap-2 d-flex mb-3">
            <div
              onClick={() => {
                setSize("small"), setSizeDisplay("small");
              }}
              className={`btn text-dark border-0 btn-secondary rounded-0 ${
                size === "small" && "sizeActive"
              }`}
              style={{ backgroundColor: "lightgray", fontSize: "13px" }}
            >
              S
            </div>
            <div
              onClick={() => {
                setSize("medium"), setSizeDisplay("medium");
              }}
              className={`btn text-dark border-0 btn-secondary rounded-0 ${
                size === "medium" && "sizeActive"
              }`}
              style={{ backgroundColor: "lightgray", fontSize: "13px" }}
            >
              M
            </div>
            <div
              onClick={() => {
                setSize("large"), setSizeDisplay("Large");
              }}
              className={`btn text-dark border-0 btn-secondary rounded-0 ${
                size === "large" && "sizeActive"
              }`}
              style={{ backgroundColor: "lightgray", fontSize: "13px" }}
            >
              L
            </div>
            <div
              onClick={() => {
                setSize("xtralarge"), setSizeDisplay("Extra Large");
              }}
              className={`btn text-dark border-0 btn-secondary rounded-0 ${
                size === "xtralarge" && "sizeActive"
              }`}
              style={{ backgroundColor: "lightgray", fontSize: "13px" }}
            >
              XL
            </div>
            <div
              onClick={() => {
                setSize("xxlarge"), setSizeDisplay("Extra Extra Large");
              }}
              className={`btn text-dark border-0 btn-secondary rounded-0 ${
                size === "xxlarge" && "sizeActive"
              }`}
              style={{ backgroundColor: "lightgray", fontSize: "13px" }}
            >
              XXL
            </div>
          </div>
          <p>
            <span className="fw-bold py-2 pe-2"> Selected Size: </span>
            {sizeDisplay}
            {sizeDisplay === "" && <span>Select Your Size!</span>}
          </p>
          <button onClick={() => handleAddToCart(product)} className="btn btn-danger">
            ADD TO CART
          </button>
          <p className="m-0 pt-3">
            <span className="fw-bold pe-1">Category: </span>
            {product.category}
          </p>
          <p className="mb-0">
            <span className="fw-bold pe-1">Tags: </span>Moder, Latest
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
