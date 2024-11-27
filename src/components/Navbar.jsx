import { NavLink, useLocation } from "react-router-dom";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { GiSelfLove } from "react-icons/gi";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <section className={`${isHome ? "bg-purple-600 pr-4 text-white" : ""}`}>
      <div className="">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <NavLink to="/">Home</NavLink>

                {location.pathname === "/" && (
                  <NavLink to="/viewdetails"></NavLink>
                )}

                <NavLink to="statistics">Statistics</NavLink>
                <NavLink to="dashboard">Dashboard</NavLink>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Gadget Heaven</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-8">
              <NavLink to="/">Home</NavLink>

              <NavLink to="statistics">Statistics</NavLink>
              <NavLink to="dashboard">Dashboard</NavLink>
            </ul>
          </div>
          <div className="navbar-end gap-5 text-black">
          <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-heart"></i> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
