import { getCart, removeFromCart } from "../utils/Store";
// import { FaTrash } from "react-icons/fa";

const Dashboard = () => {
  const cart = getCart();

  return (
    <section className="mx-15 my-10">
      <div className="">
        <div>
          {cart.map((product, idx) => (
            <div
              key={idx}
              className="flex gap-8 mb-4 flex-row items-end lg:items-center p-8 bg-gray-100 rounded-xl justify-between"
            >
              <div className="flex flex-col lg:flex-row gap-5">
                <div className="w-full lg:w-36 h-full lg:h-28  rounded-xl">
                  <img
                    src={product.product_image}
                    className="w-full lg:w-36 h-full lg:h-28 object-cover rounded-xl"
                  ></img>
                </div>
                <div className=" flex items-start">
                  <div>
                    <h3 className="font-semibold text-lg  pb-3">
                      {product.product_title}
                    </h3>
                    <p className="text-gray-500 text-sm pb-3">
                      {product.description}
                    </p>
                    <p className="font-medium text-base text-gray-700">
                      Price:${product.price}
                    </p>
                  </div>
                </div>
              </div>
              <button onClick={() => removeFromCart(product.product_id)}>
                {/* <FaTrash className="text-red-500" /> */}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
