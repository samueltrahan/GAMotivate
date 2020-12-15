import React, { useEffect, useState } from "react";
import * as postsAPI from "../../services/posts-api";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = postsAPI.getAll();
    setPosts({ postData });
  }, []);

  console.log(posts);

  return (
    <>
      <h1>Post Feed</h1>
    </>
  );
};

export default Posts;
