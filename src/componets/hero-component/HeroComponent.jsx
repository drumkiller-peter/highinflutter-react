import React from "react";
import heroImage from "../../assets/svg/heroImage.svg";
import BlogITems from "../blog-items/BlogITems";
import "./heroComponent.css";

const myContent = {
  headingText:
    "Understanding color theory: the color wheel and finding complementary colors",
  contentText:
    "Nulla Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
};

const HeroComponent = () => {
  return (
    <div className="hero-component">
      <img src={heroImage} alt="hero" className="hero-img" />
      <div className="hero-component-details padding-right-30">
        <BlogITems
          headingText={myContent.headingText}
          contentText={myContent.contentText}
          className="padding-right-30"
        />
      </div>
    </div>
  );
};

export default HeroComponent;
