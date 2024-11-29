/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const Cards = ({ product }) => {
  const {
    product_id,
    product_title,
    product_image,
    // eslint-disable-next-line no-unused-vars
    category,
    price,
    // eslint-disable-next-line no-unused-vars
    description,
    // eslint-disable-next-line no-unused-vars
    Specification,
    // eslint-disable-next-line no-unused-vars
    availability,
    // eslint-disable-next-line no-unused-vars
    rating,
  } = product;

  const navigate = useNavigate();
  const handleCardDetail = () => {
    navigate(`/viewdetails/${product_id}`);
  };

  return (
    <div className="mx-auto  border bg-gray-100 p-3 rounded-lg">
      <figure className="">
        <img
          className="rounded-xl object-cover  w-[275px] h-[150px]"
          src={product_image}
          alt="products"
        />
      </figure>
      <div className="mt-3">
        <h2 className=" font-bold">{product_title}</h2>
        <p className="mt-3">Price: ${price}</p>
        <div className="card-actions">
          <button
            onClick={handleCardDetail}
            className="btn btn-outline font-semibold mt-3 w-full btn-primary  "
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
