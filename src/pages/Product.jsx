import { useParams } from "react-router-dom";
import all_product from "../components/assets/all_product";
import Breadcrumb from "../components/Breadcrumb.jsx/Breadcrumb";
import ProductDisplay from "../components/productDisplay/ProductDisplay";
import RelatedProducts from "../components/related product/RelatedProducts";
import { ToastContainer } from 'react-toastify';

const Product = () => {
  const { productId } = useParams();
  const product = all_product.find((item) => item.id === Number(productId));
  return (
    <div>
      <Breadcrumb product={product}></Breadcrumb>
      <ProductDisplay product={product}></ProductDisplay>
      <RelatedProducts />
      <ToastContainer />
    </div>
  );
};

export default Product;
