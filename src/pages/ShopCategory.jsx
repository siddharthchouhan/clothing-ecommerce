import all_products from "../components/assets/all_product";
import Items from "../components/Items/Items";
import { FaAngleDown } from "react-icons/fa6";

const ShopCategory = (props) => {
  return (
    <div className="container-fluid p-0">
      <img src={props.banner} className="img-fluid p-0" alt="" />

      <div className="container-fluid py-4">
        <div
          id="sorting"
          className="container px-5 pt-4 d-flex flex-wrap align-items-center justify-content-between"
        >
          <p className="px-3">
            <span className="fw-bold">Showing 1-12</span> out of 36 products
          </p>
          <div className="px-3 border border-1 border-dark rounded-5 ">
            sort by <FaAngleDown />
          </div>
        </div>
        <div className="container d-flex flex-wrap justify-content-center gap-4 my-5">
          {all_products.map((data) => {
            if (props.category === data.category) {
              return (
                <>
                  <>
                    <Items
                      id={data.id}
                      key={data.id}
                      image={data.image}
                      name={data.name}
                      new_price={data.new_price}
                      old_price={data.old_price}
                    />
                  </>
                </>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
