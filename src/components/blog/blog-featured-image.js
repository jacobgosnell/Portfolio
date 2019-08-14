import React from 'react'

const BlogFeaturedImage = props => {
  if (!props.img) {
    return null;
  }

  return (
    <div className="img-feature-wrapper">
      <img src={props.img} />
    </div>
  );
};

export default BlogFeaturedImage;