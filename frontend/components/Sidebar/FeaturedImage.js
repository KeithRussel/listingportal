import React from "react";

const FeaturedImage = ({ image }) => {
  return (
    <div className="featured">
      <img src={image} />
    </div>
  );
};

FeaturedImage.defaultProps = {
  image: "https://via.placeholder.com/250",
};

export default FeaturedImage;
