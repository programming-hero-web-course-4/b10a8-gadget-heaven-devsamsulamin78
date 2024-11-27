/* eslint-disable react/prop-types */
const Heading = ({ title, subtitle }) => {
  return (
    <div className="text-center text-white space-y-10 mx-auto ">
      <h1 className="text-5xl font-bold ">{title}</h1>
      <p>{subtitle}</p>
      <button className="btn rounded-full px-10 font-bold text-purple-500">
        Shop Now
      </button>
    </div>
  );
};

export default Heading;
