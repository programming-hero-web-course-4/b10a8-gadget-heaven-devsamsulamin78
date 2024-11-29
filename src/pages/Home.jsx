import { useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";
import Heading from "../components/Heading";
import Banner from "../components/Banner";

import { useTitle } from "./PageTottle";


const Home = () => {
  const categories = useLoaderData() || [];
  useTitle("home");
  return (

    <div>
      <div className="bg-purple-600 relative h-[580px] mb-[260px]  px-20 pt-10">
        {/* Heading */}
        <Heading
          title={"Upgrade Your Tech Accessorize with Gadget Heaven Accessories"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        ></Heading>
        {/* Banner  */}
        <Banner></Banner>
      </div>
      {/* Categories Tab Section  */}
      <Categories categories={categories}></Categories>
    </div>
  );
};

export default Home;
