const Breadcrumb = ({ product }) => {
  return (
    <div className="m-4 d-flex flex-wrap gap-2">
      <div href="#" className="text-dark text-decoration-none">
        Shop /
      </div>
      <div href="#" className="text-dark text-decoration-none">
        Products /
      </div>
      <div href="#" className="text-dark text-decoration-none">
        {product.category} /
      </div>
      <div href="#" className="text-dark text-decoration-none">
        {product.name}
      </div>
    </div>
  );
};

export default Breadcrumb;
