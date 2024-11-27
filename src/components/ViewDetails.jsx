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
        <div className=" bg-[#ffffff] absolute top-[210px] right-[80px] l-[80px] w-[800px] h-[350px]  bg-opacity-75 rounded-xl border-2 p-6">
          <div className=" rounded-xl  ">
            <div className=" flex flex-row gap-12  ">
              <div>
                <img
                  src={singleProduct.product_image}/>
              </div>
              <div>
                <h1 className="">
                  {singleProduct.product_title}
                </h1>
                <p className="">
                  Price: ${singleProduct.price}
                </p>
                <p>{singleProduct.availability}</p>
                <p className=" ">
                  {singleProduct.description}
                </p>
                <div>
                  <h3 className=" ">
                    Specification:
                  </h3>
                  <p >
                    {singleProduct.Specification}
                  </p>
                </div>

            <div className="flex flex-row gap-3">
            <div>
              <p className="text-xl font-semibold  text-slate-500">
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
