import data_product from "../assets/data";
import Items from "../Items/Items";

const RelatedProducts = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Related Products</h1>

      <div className="container-fluid d-flex gap-5 justify-content-center pt-4 relatedPr">
        {data_product.map((data) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
