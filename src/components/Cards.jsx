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
    <div className="mx-auto bg-base-100 h-[440px] border shadow-xl">
      <figure className="px-8 mt-8">
        <img
          className="rounded-xl object-cover w-80 h-56"
          src={product_image}
          alt="products"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{product_title}</h2>
        <p>Price: {price}$</p>
        <div className="card-actions">
          <button
            onClick={handleCardDetail}
            className="btn btn-outline font-semibold btn-primary rounded-3xl "
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
