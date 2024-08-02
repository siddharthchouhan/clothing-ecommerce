import data_product from "../assets/data";
import Items from "../Items/Items";

const Popular = () => {
  return (
    <>
      <div className="container-fluid py-5 text-center">
        <h1 className="fw-bold">POPULAR IN WOMEN</h1>
      </div>
      <div className="container-fluid d-flex justify-content-center gap-5 align-items-center flex-wrap">
        {data_product.map((data) => (
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
        ))}
      </div>
    </>
  );
};

export default Popular;
