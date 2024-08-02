import { Link } from "react-router-dom";

const Items = (props) => {
  return (
    <div>
      <Link className="text-decoration-none" to={`/products/${props.id}`} onClick={window.scrollTo(0,0)}>
        <div
          className="card border-0 rounded-0"
          id="cards"
          style={{ width: "19rem" }}
        >
          <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title fs-6">{props.name}</h5>
            <p className="card-text">
              <span className="me-3 fs-5">${props.new_price}</span>{" "}
              <span className="text-decoration-line-through text-danger">
                ${props.old_price}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Items;
