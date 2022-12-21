import React from "react";
import "./authorDetails.css";

const AuthorDetails = () => {
  return (
    <div className="author-details">
      <img
        src="https://www.thenews.com.pk/assets/uploads/updates/2022-08-10/981083_9826729_11_updates.jpg"
        alt="user"
      />
      <div className="name-and-designation">
        <p>Leslie Alexander</p>
        <small>UI Designer</small>
      </div>
    </div>
  );
};

export default AuthorDetails;
