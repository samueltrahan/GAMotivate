import React from "react";

const Post = (props) => {
  return (
    <>
      <h1>{props.cohort}</h1>
      <h1>{props.message}</h1>
    </>
  );
};

export default Post;
