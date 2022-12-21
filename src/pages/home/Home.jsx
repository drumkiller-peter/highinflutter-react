import React from "react";
import Blogs from "../../componets/blogs/Blogs";
import HeroComponent from "../../componets/hero-component/HeroComponent";

const Home = () => {
  return (
    <div className="home">
      <HeroComponent />
      <Blogs />
    </div>
  );
};

export default Home;
