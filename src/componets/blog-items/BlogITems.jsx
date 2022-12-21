import React from "react";
import AuthorDetails from "../author-details/AuthorDetails";
import TagsAndDate from "../tags-and-date/TagsAndDate";
import "./blogItems.css";

const BlogITems = ({ headingText, contentText }) => {
  return (
    <div className="blog-item">
      <TagsAndDate />
      <h4 className="blog-heading">{headingText}</h4>
      <p className="blog-paragraph truncate">{contentText}</p>
      <AuthorDetails />
    </div>
  );
};

export default BlogITems;
