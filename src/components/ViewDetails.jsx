import { useLoaderData, useParams } from "react-router-dom";
// import { MdOutlineStarBorder } from "react-icons/md";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { GiSelfLove } from "react-icons/gi";
import { addToCart } from "../utils/Store";
const ViewDetails = () => {
  const loadProduct = useLoaderData();
  const { productId } = useParams();

  const singleProduct = loadProduct.find(
    (product) => product.product_id === productId
  );

  return (
    <div className="mb-[400px]">
      <div className="relative bg-purple-500  rounded-lg">
        <div className="text-center text-white pb-[300px]">
          <h1 className="text-4xl py-5 font-bold">Product Details</h1>
          <p className=" mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        {/* Details of Product  */}
        <div className=" absolute top-[200px] left-[130px] right-[220px] w-[1000px] h-[450px] bg-white  rounded-xl border-2">
          <div className=" rounded-xl  ">
            <div className=" flex flex-row gap-12  ">
              <div>
                <img
                  className="w-[380px] h-[380px] p-[20px]"
                  src={singleProduct.product_image}
                />
              </div>
              <div>
                <h1 className="text-[24px] font-bold">
                  {singleProduct.product_title}
                </h1>
                <p className="my-2 text-xl font-bold text-slate-500">
                  Price: ${singleProduct.price}
                </p>
                <p>{singleProduct.availability}</p>
                <p className="py-2 text-slate-500 ">
                  {singleProduct.description}
                </p>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-slate-500">
                    Specification:
                  </h3>
                  <p className="w-20 text-slate-500 ">
                    {singleProduct.Specification}
                  </p>
                </div>

            <div className="flex flex-row gap-3">
            <div>
              <p className="text-xl font-semibold mt-2 text-slate-500">
                  Ratting:
                </p>

              </div>


                <div className="flex items-center gap-2">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <p className="btn ">{singleProduct.rating}</p>
            </div>

  
                 
                </div>






















                <div className="flex items-center gap-3">
                  <button onClick={() => { addToCart(singleProduct);
                    }}
                    className="btn bg-purple-600 text-white rounded-full"
                  >
                    Add To Card <i className="fa-solid fa-cart-shopping"></i>
                  </button>
                  <i className="fa-regular fa-heart"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
