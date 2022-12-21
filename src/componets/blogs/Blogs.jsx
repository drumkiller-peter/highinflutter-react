import React from "react";
import img1 from "../../assets/svg/img-1.svg";
import img2 from "../../assets/svg/img-2.svg";
import img3 from "../../assets/svg/img-3.svg";
import img4 from "../../assets/svg/img-4.svg";
import img5 from "../../assets/svg/img-5.svg";
import img6 from "../../assets/svg/img-6.svg";
import BlogITems from "../blog-items/BlogITems";
import "./blogs.css";

const blogContent = [
  {
    blogImage: img1,
    headingText: "How to design a product that can grow itself 10x in year",
    contentText:
      "Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.",
  },
  {
    blogImage: img2,
    headingText:
      "Ut dolore ratione sapiente distinctio reiciendis exercitationem voluptatum voluptatem.",
    contentText:
      "Possimus amet quos quaerat voluptate dolor aperiam qui. Quod est esse impedit sequi saepe sint maiores.",
  },
  {
    blogImage: img3,

    headingText: "How to design a product that can grow itself 10x in year",
    contentText:
      "Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.",
  },
  {
    blogImage: img4,

    headingText: "How to design a product that can grow itself 10x in year",
    contentText:
      "Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.",
  },
  {
    blogImage: img5,

    headingText: "How to design Sed non beatae magni nihil voluptates.",
    contentText:
      "Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.",
  },
  {
    blogImage: img6,

    headingText: "How to design a product that can grow itself 10x in year",
    contentText:
      "Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.",
  },
  {
    blogImage: img1,

    headingText: "How to design a product that can grow itself 10x in year",
    contentText:
      "Assumenda magnam ipsum. Modi iste ex ex molestiae atque a animi in. Quia provident ut velit eum error. Ab optio odio sint pariatur aut consequatur eos. Natus ea ea perferendis rerum soluta enimMinus aut qui atque non omnis inventore.",
  },
];
const Blogs = () => {
  return (
    <div className="blogs">
      {blogContent.map((keys, index) => {
        return (
          <div className="blogs-item">
            <img
              src={keys.blogImage}
              alt=""
              className="blogs-image"
              key={index}
            />
            <BlogITems
              headingText={keys.headingText}
              contentText={keys.contentText}
              key={index}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
