import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";

const AllProducts = () => {
  const allProducts = useLoaderData();
  return (
    <div className="mb-9">
      <h1 className="text-center my-10 text-3xl font-bold">
        Available Our All Products
      </h1>
      <hr />
      <div className="mt-5 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4">
        {allProducts.map((product) => (
          <Cards key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
