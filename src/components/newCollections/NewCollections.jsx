import new_collections from "../assets/new_collections";
import Items from "../Items/Items";

const NewCollections = () => {
  return (
    <div className="container-fluid">
      <h1 className="py-5 fw-bold text-center">NEW COLLECTIONS</h1>

      <div className="container-fluid d-flex justify-content-center gap-5 align-items-center flex-wrap">
        {new_collections.map((data) => (
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
    </div>
  );
};

export default NewCollections;
