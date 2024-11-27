import { NavLink, Outlet, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Categories = ({ categories = [] }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-20">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="flex gap-8">
        {/* All Products Tab */}
        <div className="w-[20%]">
          <div className="flex flex-col gap-5">
            <button onClick={() => navigate("/allproducts")} className="btn">
              All Products
            </button>
            {categories.map((category) => (
              <NavLink
                key={category.category}
                to={`/products/${category.category}`}
                className={({ isActive }) =>
                  `btn ${isActive ? "btn-primary" : ""}`
                }
              >
                {category.category}
              </NavLink>
            ))}
          </div>
        </div>
        {/* Dynamic Nested Component  */}
        <div className="w-[75%]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Categories;
