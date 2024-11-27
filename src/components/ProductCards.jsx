import { useLoaderData, useParams } from "react-router-dom";
import Cards from "./Cards";
import { useEffect, useState } from "react";

const ProductCards = () => {
  const productData = useLoaderData();
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredProductCategory = [...productData].filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setProducts(filteredProductCategory);
    } else {
      setProducts(productData.slice(0, 9));
    }
  }, [productData, category]);

  return (
    <div className=" gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Cards key={product.product_id} product={product} />
      ))}
    </div>
  );
};

export default ProductCards;
