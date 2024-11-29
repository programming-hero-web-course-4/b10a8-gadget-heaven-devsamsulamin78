import { getCart, removeFromCart } from "../utils/Store";


import { useTitle } from "./PageTottle";


const Dashboard = () => {
  const cart = getCart();
  useTitle("Dashboard");
  return (
    <section className="mx-15 mt-7  mb-7">

  
<div className=" bg-purple-600 p-5 mb-4">
     <h2 className="text-center text-white font-bold mb-3"> Dashboard</h2>
     <p className="text-center text-white">Explore the latest gadgets that will take your experience to the next level. <br />From smart devices to the coolest accessories, we have it all!</p>


     <div className="flex gap-3 items-center justify-center mt-5">
          <button className="btn">Cart</button>
          <button className="btn">Wishlist</button>
     </div>
</div>

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
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
