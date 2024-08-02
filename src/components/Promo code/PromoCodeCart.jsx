const PromoCodeCart = () => {
  return (
    <div className="container">
      <p>If you have any promocode, Enter it here</p>
      <div className="form-group d-flex">
        <input type="text" placeholder="Promo Code" className="form-control" />
        <button className="btn btn-dark btn-lg rounded-0">Submit</button>
      </div>
    </div>
  );
};

export default PromoCodeCart;
